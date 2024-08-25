import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Feature, LineString, GeoJsonProperties } from 'geojson';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHV5dHVvbmcxODgiLCJhIjoiY20wNmdicmk5MDRmcTJrcHhrbGt2bTZ3dSJ9.ft62xrO9QQpPELR07j42hg';

interface MapProps {
    latitude: number;
    longitude: number;
    zoom?: number;
}

interface DirectionsResponse {
    routes: Array<{
        geometry: {
            coordinates: [number, number][];
        };
    }>;
}

interface Position {
    latitude: number | null;
    longitude: number | null;
}

const MapBoxComponentDetail: React.FC<MapProps> = ({ latitude, longitude, zoom = 12 }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<Position>({ latitude: null, longitude: null });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setPosition({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, []);
    useEffect(() => {
        if (mapContainerRef.current) {
            const map = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [longitude, latitude],
                zoom: zoom,
                interactive: true
            });

            const bounds: [number, number, number, number] = [
                102.1, 8.4,
                109.5, 23.4
            ];
            map.setMaxBounds(bounds);

            // Đảm bảo start không phải là null trước khi sử dụng
            if (position.latitude !== null && position.longitude !== null) {
                const start: [number, number] = [position.longitude, position.latitude];

                const getRoute = async (end: [number, number]) => {
                    try {
                        const query = await fetch(
                            `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
                            { method: 'GET' }
                        );
                        if (!query.ok) {
                            throw new Error('Network response was not ok');
                        }

                        const json: DirectionsResponse = await query.json();

                        // Kiểm tra nếu có routes và route đầu tiên tồn tại
                        if (!json.routes || json.routes.length === 0) {
                            console.error('No routes found in response');
                            return;
                        }

                        const data = json.routes[0];
                        const route = data.geometry.coordinates;

                        // Định nghĩa geojson với kiểu dữ liệu chính xác
                        const geojson: Feature<LineString, GeoJsonProperties> = {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'LineString',
                                coordinates: route
                            }
                        };

                        // Xóa layer cũ nếu tồn tại
                        if (map.getLayer('route')) {
                            map.removeLayer('route');
                            map.removeSource('route');
                        }

                        // Thêm layer đường đi mới
                        map.addLayer({
                            id: 'route',
                            type: 'line',
                            source: {
                                type: 'geojson',
                                data: geojson
                            },
                            layout: {
                                'line-join': 'round',
                                'line-cap': 'round'
                            },
                            paint: {
                                'line-color': '#3887be',
                                'line-width': 5,
                                'line-opacity': 0.75
                            }
                        });

                        // Xóa layer điểm cũ nếu tồn tại
                        if (map.getLayer('markers')) {
                            map.removeLayer('markers');
                            map.removeSource('markers');
                        }

                        // Thêm layer điểm mới
                        map.addLayer({
                            id: 'markers',
                            type: 'circle',
                            source: {
                                type: 'geojson',
                                data: {
                                    type: 'FeatureCollection',
                                    features: [
                                        {
                                            type: 'Feature',
                                            properties: {
                                                description: 'Start Point'
                                            },
                                            geometry: {
                                                type: 'Point',
                                                coordinates: start
                                            }
                                        },
                                        {
                                            type: 'Feature',
                                            properties: {
                                                description: 'End Point'
                                            },
                                            geometry: {
                                                type: 'Point',
                                                coordinates: end
                                            }
                                        }
                                    ]
                                }
                            },
                            paint: {
                                'circle-radius': 8,
                                'circle-color': [
                                    'match',
                                    ['get', 'description'],
                                    'Start Point', '#4087f6',
                                    'End Point', '#f84a4a',
                                    '#000000' // Default color
                                ]
                            }
                        });
                    } catch (error) {
                        console.error('Error fetching or processing route data:', error);
                    }
                };

                map.on('load', () => {
                    getRoute([longitude, latitude]);
                });
            }

            return () => map.remove();
        }
    }, [latitude, longitude, zoom, position]);

    return <div ref={mapContainerRef} style={{ width: '100%', height: '86vh' }} />;
};

export default MapBoxComponentDetail;
