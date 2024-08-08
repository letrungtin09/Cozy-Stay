import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import {
  faAngleLeft,
  faAngleRight,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import * as React from "react";
import { useEffect, useState, Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "@/styles/arrowsCarousel.css";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow mr-[34px] !h-[100%]`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow ml-[34px] z-[1000] !h-[100%]`}
      onClick={onClick}
    />
  );
}
export const FilterCategory = ({ onDataChange }: any) => {
  const apiCategory = `${localUrl}/api/category`;
  const [dataCategory, setDataCategory] = useState<any[]>([]);
  const [currentId, setCurrentId] = useState<number | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiCategory);
        setDataCategory(res.cate);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiCategory]);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 9,
    slidesToScroll: 9,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const sendCateId = (id: number) => {
    onDataChange(id);

    if (currentId !== null) {
      const oldElement = document.querySelector(`.dataCate-${currentId}`);
      if (oldElement) {
        oldElement.classList.remove('!w-full');
      }
    }

    const newElement = document.querySelector(`.dataCate-${id}`);
    if (newElement) {
      newElement.classList.add('!w-full');
    }

    // Cập nhật currentId với id mới
    setCurrentId(id);
  }
  return (
    <div className="filter">
      <div className="line"></div>
      <div className="filter__container section-padding">
        <div className="filter__slider filter__list flex flex-col justify-center">
          <div className="slider-container">

            <Slider {...settings}>
              {dataCategory.map((cate) => (
                <div key={cate.id}>
                  <div className="group cursor-pointer" onClick={() => sendCateId(cate.id)}>
                    <div className="flex justify-center mb-[5px]">
                      <Image
                        src={cate.icon} // Đảm bảo cung cấp thuộc tính src
                        alt={`Icon for ${cate.nameCategory}`} // Cung cấp thuộc tính alt để cải thiện khả năng tiếp cận
                        width={100} // Kích thước của hình ảnh
                        height={100} // Kích thước của hình ảnh
                        priority={true} // Tùy chọn: nếu bạn muốn ưu tiên tải hình ảnh này
                        className="w-[20px] h-[20px]" // Áp dụng các lớp CSS với Tailwind
                      />
                    </div>
                    <div className="filter__text whitespace-nowrap text-[14px] z-[1000] text-[#222222b3] flex justify-center">
                      <span className="relative pb-[6px]">{cate.nameCategory}
                        <div className={`absolute bottom-[0] w-0 mt-[4px] h-[1px] bg-color-green-1 group-hover:w-full transition-all duration-500 ease-out dataCate-${cate.id}`}></div>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* <div className="filter__btnNextPrev">
            <div className="prev-container">
              <button id="prev-filter" className="btn-prev">
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
            </div>
            <div className="next-container">
              <button id="next-filter" className="btn-next">
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div> */}

        </div>
        <div className="filter__btnFilter">
          <button className="btn-filter">
            <Link
              href={{
                pathname: "/filterPlaces",
              }}
            >
              <FontAwesomeIcon icon={faFilter} /> Bộ lọc
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
