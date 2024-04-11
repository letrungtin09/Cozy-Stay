"use client";
import React from "react";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import { useEffect, useState } from "react";
import { response } from "express";
import { log } from "console";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCircleXmark,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const RenderAdminPlace = () => {
  const apiPartner = `${localUrl}/api/partner`;
  const apiPlaces = `${localUrl}/api/places`;
  const [dataPlace, setDataPlace] = useState<any[]>([]);
  const [dataPartner, setDataPartner] = useState<any[]>([]);

  useEffect(() => {
    // ApiFunctions.getData(apiPlaces).then((res) => {
    //   setDataPlace(res.places);
    // });
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
    // ApiFunctions.getData(apiPlaces).then((res) => {
    //   setDataPlace(res.places);
    // });
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiPartner);
        setDataPartner(res.partner);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiPartner]);

  const deletePlace = async (id: any) => {
    const apiPlaces2 = `${localUrl}/api/places?id=${id}`;
    try {
      const res = await ApiFunctions.deleteData(apiPlaces2).then(() => {
        alert("Xóa thành công !");
        location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content-admin">
      <div className="content-adminTop">
        <h2>Quản lý chỗ cho thuê</h2>
        <div className="admin-btnAdd">
          <Link className="btn--add" href="/admin/adminPlace/formAddPlace">
            <FontAwesomeIcon icon={faPlus} /> <div>Thêm mới</div>
          </Link>
        </div>
      </div>
      <div className="content-adminBottom">
        <table>
          <thead>
            <th>id</th>
            <th>tên chỗ ở</th>
            <th>địa chỉ</th>
            <th>giá thuê</th>
            <th>mức giảm giá</th>
            <th>hình ảnh</th>
            <th>chủ nhà</th>
            <th>danh mục</th>
            <th>loại phòng</th>
            <th>loại đặt phòng</th>
            <th>số lượng khách</th>
            <th>phòng tắm</th>
            <th>phòng ngủ</th>
            <th>giường ngủ</th>
            <th>mô tả</th>
            <th>kinh độ</th>
            <th>vĩ độ</th>
            <th>trạng thái</th>
            <th>phê duyệt</th>
            <th>thao tác</th>
          </thead>
          <tbody className="infoCate">
            {dataPlace.map((place) => (
              <tr key={place.id}>
                <td>{place.id}</td>
                <td>{place.title}</td>
                <td>{place.address}</td>
                <td>{place.price}đ</td>
                <td>{place.discount}%</td>
                <td>
                  <div className="slider">
                    <div className="list">
                      <img src={place.image} alt="" />
                      {/* <Image
                                  src={place.image}
                                  width={50}
                                  height={50}
                                  alt="Picture of the author"
                                /> */}
                    </div>
                  </div>
                </td>
                <td>
                  {dataPartner.map((partner) => (
                    <div key={partner.id}>
                      {partner.id == place.id
                        ? partner.userName
                        : partner.userName}
                    </div>
                  ))}
                </td>
                <td>{place.idCategory}</td>
                <td>{place.kindroom}</td>
                <td>
                  {place.reservationKind == 0 ? (
                    <div className="kind-auto">Tự động cho thuê</div>
                  ) : (
                    <div className="kind-confirm">Chờ xác nhận</div>
                  )}
                </td>
                <td>{place.quantityPeople} khách</td>
                <td>{place.quantityBath} phòng</td>
                <td>{place.quantityBedRoom} phòng</td>
                <td>{place.quantityBed} giường</td>
                <td className="place-des">{place.longDescription}</td>
                <td>{place.longitude}</td>
                <td>{place.latitude}</td>
                <td>
                  {place.status == 0 ? "Đang có người ở" : "Chưa có người ở"}
                </td>
                <td>
                  {place.approveStatus == 0 ? (
                    <div className="approveStatus-no">Chưa phê duyệt</div>
                  ) : (
                    <div className="approveStatus-yes">Đã phê duyệt</div>
                  )}
                </td>
                <td>
                  <div className="btn-action">
                    <Link
                      className="btn--operation btn--edit"
                      href={{
                        pathname: "/admin/adminPlace/formUpdatePlace",
                        query: { id: place.id },
                      }}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                      Sửa
                    </Link>
                    <button
                      className="btn--operation btn--delete"
                      onClick={() => deletePlace(place.id)}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} />
                      Xóa
                    </button>
                    {/* <a className="btn--operation btn--detail" href="#">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    Chi tiết
                  </a> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RenderAdminPlace;
