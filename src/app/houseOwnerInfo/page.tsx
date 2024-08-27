"use client";
import LayoutCustomer from "@/components/layoutCustomer";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import {
  faBath,
  faBed,
  faChartArea,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams!.get("id");
  const apiUser = `${localUrl}/api/user?id=${id}`;
  const apiPlace = `${localUrl}/api/places?idUser=${id}`;
  const [dataUser, setDataUser] = useState<any>([]);
  const [dataPlace, setDataPlace] = useState<any[]>([]);
  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const res = await ApiFunctions.getData(apiUser);
        setDataUser(res.user[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataUser();
  }, [apiUser]);

  useEffect(() => {
    const fetchDataPlace = async () => {
      try {
        const res = await ApiFunctions.getData(apiPlace);
        setDataPlace(res.places);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataPlace();
  }, [apiPlace]);
  return (
    <>
      <LayoutCustomer>
        <div className="houseOwnerInfo pt-[140px] px-[200px] pb-14 d-flex">
          <div className="houseOwnerInfo__personal w-[33%] h-fit px-[20px] py-[30px] rounded-[20px] border-[1px] border-solid border-[rgba(0,0,0,0.04)] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.2)] mr-[50px]">
            <div className="houseOwnerInfo__personal__top d-flex justify-between mb-[15px]">
              <div className="houseOwnerInfo__personal__avatar">
                <div className="d-flex justify-center">
                  <Image
                    className="w-[90px] h-[100px] rounded-[50%] border-[1px] object-cover"
                    src={`/images/${dataUser.avatar}`}
                    alt="avatarHouseOwner"
                    width={2000}
                    height={2000}
                  />
                </div>
                <div className="text-center font-bold text-color-green-2">
                  {dataUser.userName}
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
                <div className="text-justify">{dataUser.info}</div>
              </div>
            </div>
          </div>
          <div className="houseOwnerInfo__places w-[67%]">
            <div className="text-[20px] font-bold mb-[20px]">
              Mục cho thuê của{" "}
              <span className="text-color-green-2">{dataUser.userName}</span>
            </div>
            <div className="d-flex justify-between flex-wrap gap-y-[30px]">
              {dataPlace.map((place) => {
                let imageArray = [];

                try {
                  if (place.image) {
                    imageArray = JSON.parse(place.image);
                  }
                } catch (error) {
                  console.error("JSON parsing error:", error);
                }
                return (
                  <div className="places__item w-[31%]" key={place.id}>
                    <Link
                      href={{
                        pathname: "/detailPlace",
                        query: { id: place.id },
                      }}
                    >
                      <div className="places__slider">
                        <div className="places__list">
                          <div className="places__img">
                            <Image
                              className="rounded-[10px] mb-[7px] w-[100%] h-[170px] object-cover"
                              src={`/images/places/${imageArray[0]}`}
                              alt="imagePlaces"
                              width={2000}
                              height={2000}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="places__detail">
                        <div className="places__top">
                          <div className="name-place font-bold text-color-green-2 mb-[5px]">
                            {place.title}
                          </div>
                        </div>
                        <div className="places__center mb-[5px]">
                          <span className="star-place text-[14px] text-[#464646b3]">
                            <FontAwesomeIcon
                              className="text-[#222222b3]"
                              icon={faChartArea}
                            />{" "}
                            {place.area}m<sup>2</sup>
                          </span>
                          <span className="area-place mx-[25px] text-[14px] text-[#464646b3]">
                            <FontAwesomeIcon
                              className="text-[#222222b3]"
                              icon={faBed}
                            />{" "}
                            {place.quantityBedRoom} phòng ngủ
                          </span>
                          <span className="bed-place text-[14px] text-[#464646b3]">
                            <FontAwesomeIcon
                              className="text-[#222222b3]"
                              icon={faBath}
                            />{" "}
                            {place.quantityBath} phòng tắm
                          </span>
                        </div>
                        <div className="places__bottom">
                          <span>
                            <span className="price-place text-[18px] font-bold text-color-green-2">
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
                );
              })}
            </div>
          </div>
        </div>
      </LayoutCustomer>
    </>
  );
}
