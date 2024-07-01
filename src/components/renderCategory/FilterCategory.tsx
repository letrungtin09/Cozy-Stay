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
import { useEffect, useState } from "react";

export const FilterCategory = () => {
  const apiCategory = `${localUrl}/api/category`;
  const [dataCategory, setDataCategory] = useState<any[]>([]);
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
  return (
    <div className="filter">
      <div className="line"></div>
      <div className="filter__container section-padding">
        <div className="filter__slider">
          <div className="filter__list">
            {/* <div className="filter__item">
              <div className="filter__icon">
                <img
                  src="https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg"
                  alt=""
                />
              </div>
              <div className="filter__text">Tất cả</div>
            </div> */}
            {dataCategory.map((cate) => (
              <div key={cate.id} className="filter__item">
                <Link
                  href={{
                    pathname: "/detailCategory",
                    query: { id: cate.id },
                  }}
                >
                  <div className="filter__icon">
                    <img src={cate.icon} alt="" />
                  </div>
                  <div className="filter__text">{cate.nameCategory}</div>
                </Link>
              </div>
            ))}
          </div>

          <div className="filter__btnNextPrev">
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
          </div>
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
