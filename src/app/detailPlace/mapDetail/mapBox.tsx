import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// Đặt token của bạn vào đây
mapboxgl.accessToken = 'pk.eyJ1IjoiZHV5dHVvbmcxODgiLCJhIjoiY20wNmdicmk5MDRmcTJrcHhrbGt2bTZ3dSJ9.ft62xrO9QQpPELR07j42hg';
interface MapProps {
    latitude: number;
    longitude: number;
    zoom?: number;
}
const MapBoxComponent: React.FC<MapProps> = ({ latitude, longitude, zoom = 12 }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            const map = new mapboxgl.Map({
                container: mapContainerRef.current, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // Map style
                center: [longitude, latitude], // Starting position [lng, lat]
                zoom: zoom, // Starting zoom
            });

            // Cleanup map on component unmount
            return () => map.remove();
        }
    }, [latitude, longitude, zoom]);
    return <div ref={mapContainerRef} style={{ width: '100%', height: '86vh' }} />;
};

export default MapBoxComponent;
