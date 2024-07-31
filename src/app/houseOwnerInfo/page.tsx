"use client";
import LayoutCustomer from "@/components/layoutCustomer";
import {
  faBath,
  faBed,
  faChartArea,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <LayoutCustomer>
        <div className="houseOwnerInfo pt-[140px] px-[200px] pb-14 d-flex">
          <div className="houseOwnerInfo__personal w-[33%] h-fit px-[20px] py-[30px] rounded-[20px] border-[1px] border-solid border-[rgba(0,0,0,0.04)] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.2)] mr-[50px]">
            <div className="houseOwnerInfo__personal__top d-flex justify-between mb-[15px]">
              <div className="houseOwnerInfo__personal__avatar">
                <div className="d-flex justify-center">
                  <img
                    className="w-20 rounded-[50%] border-[1px]"
                    src="images/admin.jpg"
                    alt=""
                  />
                </div>
                <div className="text-center font-bold text-color-green-2">
                  Kateryna
                </div>
                <div className="text-center">Chủ nhà cho thuê</div>
              </div>
              <div className="houseOwnerInfo__personal__confirm">
                <div className="font-bold mb-[7px]">Thông tin đã xác minh</div>
                <div className="d-flex justify-center">
                  <div>
                    <div className="d-flex items-center">
                      <FontAwesomeIcon
                        className="text-color-green-2"
                        icon={faCheck}
                      />{" "}
                      <div className="ml-[10px] font-medium">Danh tính</div>
                    </div>
                    <div className="d-flex items-center my-[7px]">
                      <FontAwesomeIcon
                        className="text-color-green-2"
                        icon={faCheck}
                      />{" "}
                      <div className="ml-[10px] font-medium">Địa chỉ mail</div>
                    </div>
                    <div className="d-flex items-center">
                      <FontAwesomeIcon
                        className="text-color-green-2"
                        icon={faCheck}
                      />{" "}
                      <div className="ml-[10px] font-medium">Số điện thoại</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="houseOwnerInfo__personal__bottom">
              <div className="houseOwnerInfo__personal__des">
                <div className="font-bold mb-[5px]">Giới thiệu chủ nhà</div>
                <div className="text-justify">
                  Tôi thích đi du lịch và trải nghiệm cuộc sống ở những nơi tôi
                  đến. Tôi nói tiếng Việt và tiếng Anh.Chỗ ở của chúng tôi nằm ở
                  Quận Phú Nhuận. Cách sân bay Tân Sơn 5km.
                </div>
              </div>
            </div>
          </div>
          <div className="houseOwnerInfo__places w-[67%]">
            <div className="text-[20px] font-bold mb-[20px]">
              Mục cho thuê của Kateryna
            </div>
            <div className="d-flex justify-between flex-wrap gap-y-[30px]">
              <div className="places__item w-[31%]">
                <Link
                  href={{
                    pathname: "/detailPlace",
                    query: { id: "" },
                  }}
                >
                  <div className="places__slider">
                    <div className="places__list">
                      <div className="places__img">
                        <img
                          className="rounded-[10px] mb-[7px]"
                          src={`images/places/place1/image1.webp`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="places__detail">
                    <div className="places__top">
                      <div className="name-place font-bold text-color-green-2 mb-[5px]">
                        Phòng cho thuê quận Phú Nhuận sạch đẹp
                      </div>
                    </div>
                    <div className="places__center mb-[5px]">
                      <span className="star-place text-[14px] text-[#464646b3]">
                        <FontAwesomeIcon
                          className="text-[#222222b3]"
                          icon={faChartArea}
                        />{" "}
                        30m
                        <sup>2</sup>
                      </span>
                      <span className="area-place mx-[25px] text-[14px] text-[#464646b3]">
                        <FontAwesomeIcon
                          className="text-[#222222b3]"
                          icon={faBed}
                        />{" "}
                        2 phòng ngủ
                      </span>
                      <span className="bed-place text-[14px] text-[#464646b3]">
                        <FontAwesomeIcon
                          className="text-[#222222b3]"
                          icon={faBath}
                        />{" "}
                        2 phòng tắm
                      </span>
                    </div>
                    <div className="places__bottom">
                      <span>
                        <span className="price-place text-[18px] font-bold text-color-green-2">
                          1.500.000đ / tháng
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="places__item w-[31%]">
                <Link
                  href={{
                    pathname: "/detailPlace",
                    query: { id: "" },
                  }}
                >
                  <div className="places__slider">
                    <div className="places__list">
                      <div className="places__img">
                        <img
                          className="rounded-[10px] mb-[7px]"
                          src={`images/places/place1/image1.webp`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="places__detail">
                    <div className="places__top">
                      <div className="name-place font-bold text-color-green-2 mb-[5px]">
                        Phòng cho thuê quận Phú Nhuận sạch đẹp
                      </div>
                    </div>
                    <div className="places__center mb-[5px]">
                      <span className="star-place text-[14px] text-[#464646b3]">
                        <FontAwesomeIcon
                          className="text-[#222222b3]"
                          icon={faChartArea}
                        />{" "}
                        30m
                        <sup>2</sup>
                      </span>
                      <span className="area-place mx-[25px] text-[14px] text-[#464646b3]">
                        <FontAwesomeIcon
                          className="text-[#222222b3]"
                          icon={faBed}
                        />{" "}
                        2 phòng ngủ
                      </span>
                      <span className="bed-place text-[14px] text-[#464646b3]">
                        <FontAwesomeIcon
                          className="text-[#222222b3]"
                          icon={faBath}
                        />{" "}
                        2 phòng tắm
                      </span>
                    </div>
                    <div className="places__bottom">
                      <span>
                        <span className="price-place text-[18px] font-bold text-color-green-2">
                          1.500.000đ / tháng
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="places__item w-[31%]">
                <Link
                  href={{
                    pathname: "/detailPlace",
                    query: { id: "" },
                  }}
                >
                  <div className="places__slider">
                    <div className="places__list">
                      <div className="places__img">
                        <img
                          className="rounded-[10px] mb-[7px]"
                          src={`images/places/place1/image1.webp`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="places__detail">
                    <div className="places__top">
                      <div className="name-place font-bold text-color-green-2 mb-[5px]">
                        Phòng cho thuê quận Phú Nhuận sạch đẹp
                      </div>
                    </div>
                    <div className="places__center mb-[5px]">
                      <span className="star-place text-[14px] text-[#464646b3]">
                        <FontAwesomeIcon
                          className="text-[#222222b3]"
                          icon={faChartArea}
                        />{" "}
                        30m
                        <sup>2</sup>
                      </span>
                      <span className="area-place mx-[25px] text-[14px] text-[#464646b3]">
                        <FontAwesomeIcon
                          className="text-[#222222b3]"
                          icon={faBed}
                        />{" "}
                        2 phòng ngủ
                      </span>
                      <span className="bed-place text-[14px] text-[#464646b3]">
                        <FontAwesomeIcon
                          className="text-[#222222b3]"
                          icon={faBath}
                        />{" "}
                        2 phòng tắm
                      </span>
                    </div>
                    <div className="places__bottom">
                      <span>
                        <span className="price-place text-[18px] font-bold text-color-green-2">
                          1.500.000đ / tháng
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="places__item w-[31%]">
                <Link
                  href={{
                    pathname: "/detailPlace",
                    query: { id: "" },
                  }}
                >
                  <div className="places__slider">
                    <div className="places__list">
                      <div className="places__img">
                        <img
                          className="rounded-[10px] mb-[7px]"
                          src={`images/places/place1/image1.webp`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="places__detail">
                    <div className="places__top">
                      <div className="name-place font-bold text-color-green-2 mb-[5px]">
                        Phòng cho thuê quận Phú Nhuận sạch đẹp
                      </div>
                    </div>
                    <div className="places__center mb-[5px]">
                      <span className="star-place text-[14px] text-[#464646b3]">
                        <FontAwesomeIcon
                          className="text-[#222222b3]"
                          icon={faChartArea}
                        />{" "}
                        30m
                        <sup>2</sup>
                      </span>
                      <span className="area-place mx-[25px] text-[14px] text-[#464646b3]">
                        <FontAwesomeIcon
                          className="text-[#222222b3]"
                          icon={faBed}
                        />{" "}
                        2 phòng ngủ
                      </span>
                      <span className="bed-place text-[14px] text-[#464646b3]">
                        <FontAwesomeIcon
                          className="text-[#222222b3]"
                          icon={faBath}
                        />{" "}
                        2 phòng tắm
                      </span>
                    </div>
                    <div className="places__bottom">
                      <span>
                        <span className="price-place text-[18px] font-bold text-color-green-2">
                          1.500.000đ / tháng
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LayoutCustomer>
    </>
  );
}
