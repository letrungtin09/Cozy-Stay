import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import * as React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faChartArea } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import CarouselRenderPlaces from "./carouselRenderPlaces";
import CarouselShowFullImg from "./carouselShowAllImg";

export const RenderPlaces = ({ cateId }: any) => {
  const [visibleItems, setVisibleItems] = useState(8);
  const [indexImgShow, setIndexImgShow] = useState(8);
  const [dataPlace, setDataPlace] = useState<any[]>([]);
  const [dataAllImgShow, setDataAllImgShow] = useState();
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const changeOverLAy = () => {
    setOverlayVisible((prev) => {
      const newStatus = !prev; // Đảo trạng thái
      document.body.classList.toggle("overflow-hidden", newStatus);
      return newStatus;
    });
  };

  const handleDataChange = (listImage: any, index: number) => {
    changeOverLAy();
    setDataAllImgShow(listImage);
    setIndexImgShow(index);
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Tăng số lượng mục cần hiển thị thêm
  };

  let apiPlaces = "";
  if (cateId) {
    apiPlaces = `${localUrl}/api/places?cateId=${cateId}`;
  } else {
    apiPlaces = `${localUrl}/api/places`;
  }

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

  useEffect(() => {
    setVisibleItems(8);
  }, [cateId]);

  return (
    <div className="places">
      <div className="places__container section-padding">
        <div className="flex flex-wrap mx-[-6px]">
          {dataPlace.slice(0, visibleItems).map((place) => {
            let imageArray = [];

            try {
              if (place.image) {
                imageArray = JSON.parse(place.image);
              }
            } catch (error) {
              console.error("JSON parsing error:", error);
            }

            return place.approveStatus == 1 ? (
              <>
                <div key={place.id} className="w-[25%] px-[6px]">
                  <div className="places__item">
                    <div className="places__slider">
                      <div className="places__list w-full">
                        <div className="places__img img1 h-full">
                          <CarouselRenderPlaces
                            imageAr={imageArray}
                            onChangeData={handleDataChange}
                          />
                        </div>
                      </div>
                    </div>
                    <Link
                      href={{
                        pathname: "/detailPlace",
                        query: { id: place.id },
                      }}
                    >
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
                            <FontAwesomeIcon icon={faBed} />{" "}
                            {place.quantityBedRoom} phòng ngủ
                          </span>
                          <span className="bed-place">
                            <FontAwesomeIcon icon={faBath} />{" "}
                            {place.quantityBath} phòng tắm
                          </span>
                        </div>
                        <div className="places__bottom">
                          <span>
                            <span className="price-place">
                              {new Intl.NumberFormat("de-DE").format(
                                place.price
                              )}
                              đ / tháng
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <></>
            );
          })}
          {visibleItems < dataPlace.length && (
            <div className="w-full flex justify-center ">
              <div className="fter:h-px flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="flex items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-1 h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Xem Thêm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {isOverlayVisible && (
        <CarouselShowFullImg
          onChangeOverLAy={changeOverLAy}
          dataLishImg={dataAllImgShow}
          indexImg={indexImgShow}
        />
      )}
    </div>
  );
};
