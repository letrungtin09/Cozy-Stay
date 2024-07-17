"use client";
import LayoutHouseOwner from "@/components/layoutHouseOwner";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const apiUser = `${localUrl}/api/user`;
  const apiPlace = `${localUrl}/api/places`;
  const [dataUser, setDataUser] = useState<any[]>([]);
  const [dataPlace, setDataPlace] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiUser);
        setDataUser(res.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiUser]);

  return (
    <>
      <LayoutHouseOwner>
        <section className="convenient-container pl-52 pr-52 pb-14">
          <div className="content">
            <div className="col-1">
              <div className="mr-14">
                <div className="title">
                  <h1 className="mb-4">Tiện nghi</h1>
                  <p className="text-gray-500">
                    Sau đây là những tiện nghi mà bạn đã thêm vào mục cho thuê
                    từ trước đến nay.
                  </p>
                </div>
                <div className="list-item-now">
                  <ul className="list-item-now-col-1">
                    <li>
                      <i className="fa-solid fa-kitchen-set"></i>
                      <p>Bếp</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-water-ladder"></i>
                      <p>Bể bơi</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-bath"></i>
                      <p>Bồn tắm nước nóng</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-gauge"></i>
                      <p>Máy giặt</p>
                    </li>
                  </ul>
                  <ul className="list-item-now-col-2">
                    <li>
                      <i className="fa-solid fa-square-parking"></i>
                      <p>Chỗ đỗ xe có thu phí trong khuôn viên</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-square-parking"></i>
                      <p>Chỗ đỗ xe miễn phí tại nơi ở</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-briefcase"></i>
                      <p>Không gian riêng để làm việc</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-dumbbell"></i>
                      <p>Thiết bị tập thể dục</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="ml-9">
                <div className="title">
                  <h1 className="mb-4">Thêm tiện nghi</h1>
                  <p className="text-gray-500">
                    Thêm các tiện nghi vào mục cho thuê
                  </p>
                </div>
                <div className="list-item-add">
                  <ul className="list-item-add-col">
                    <li>
                      <div className="name-item">
                        <i className="fa-solid fa-kitchen-set"></i>
                        <p>Bàn bi-da</p>
                      </div>
                      <div className="icon-add">
                        <i className="fa-solid fa-circle-plus"></i>
                      </div>
                    </li>
                    <li>
                      <div className="name-item">
                        <i className="fa-solid fa-kitchen-set"></i>
                        <p>Bàn bóng bàn</p>
                      </div>
                      <div className="icon-add">
                        <i className="fa-solid fa-circle-plus"></i>
                      </div>
                    </li>
                    <li>
                      <div className="name-item">
                        <i className="fa-solid fa-kitchen-set"></i>
                        <p>Bàn là</p>
                      </div>
                      <div className="icon-add">
                        <i className="fa-solid fa-circle-plus"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutHouseOwner>
    </>
  );
}
