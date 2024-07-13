import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import * as React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faBath,
  faBed,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

export const RenderPlaces = () => {
  const apiPlaces = `${localUrl}/api/places`;
  const [dataPlace, setDataPlace] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiPlaces);
        setDataPlace(res.places);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiPlaces]);

  useEffect(() => { });

  return (
    <div className="places">
      <div className="places__container section-padding">
        <div className="row">
          {dataPlace.map((place) => (
            <div key={place.id} className="places__item col-3">
              <Link
                href={{
                  pathname: "/detailPlace",
                  query: { id: place.id },
                }}
              >
                <div className="places__slider">
                  <div className="places__list">
                    <div className="places__img img1">
                      <img src={`images/places/${place.image1}`} alt="" />
                    </div>
                    <div className="places__img img1">
                      <img src={`images/places/${place.image2}`} alt="" />
                    </div>
                    <div className="places__img img1">
                      <img src={`images/places/${place.image3}`} alt="" />
                    </div>
                    <div className="places__img img1">
                      <img src={`images/places/${place.image4}`} alt="" />
                    </div>
                    <div className="places__img img1">
                      <img src={`images/places/${place.image5}`} alt="" />
                    </div>
                  </div>

                  {/* <div className="places__favourite">
                <i className="fa-regular fa-heart"></i>
                <i id="heart-full" className="fa-solid fa-heart"></i>
              </div>

              <div className="places__liked">
                <span>Được khách yêu thích</span>
              </div> */}

                  {/* <div className="places__btnNextPrev">
                    <button
                      className="btn-prev"
                      id="prev"
                      onClick={() => prevImg()}
                    >
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <button
                      className="btn-next"
                      id="next"
                      onClick={() => nextImg()}
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                  </div> */}
                </div>
                <div className="places__detail">
                  <div className="places__top">
                    <span className="name-place">{place.title}</span>
                  </div>
                  <div className="places__center">
                    <span className="star-place">
                      <FontAwesomeIcon icon={faChartArea} /> {place.area}m
                      <sup>2</sup>
                    </span>
                    <span className="area-place">
                      <FontAwesomeIcon icon={faBed} /> {place.quantityBedRoom}{" "}
                      phòng ngủ
                    </span>
                    <span className="bed-place">
                      <FontAwesomeIcon icon={faBath} /> {place.quantityBath}{" "}
                      phòng tắm
                    </span>
                  </div>
                  <div className="places__bottom">
                    <span>
                      <span className="price-place">
                        {new Intl.NumberFormat("de-DE").format(place.price)}đ /
                        tháng
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
