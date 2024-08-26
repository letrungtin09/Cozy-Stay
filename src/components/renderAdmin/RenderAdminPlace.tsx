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
  const apiUser = `${localUrl}/api/user`;
  const apiPlaces = `${localUrl}/api/places`;
  const apiCategory = `${localUrl}/api/category`;
  const [dataPlace, setDataPlace] = useState<any[]>([]);
  const [dataUser, setDataUser] = useState<any[]>([]);
  const [dataCategory, setDataCategory] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiPlaces);
        const dataRes = res.places;
        const sortData = dataRes.sort(function (a: any, b: any) {
          return b.id - a.id;
        });
        setDataPlace(sortData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiPlaces]);

  const PlaceKindRoom = (kind: any) => {
    let placeKindRoom: string = "";
    if (kind === 0) {
      placeKindRoom = "phòng";
    } else if (kind === 1) {
      placeKindRoom = "căn hộ";
    } else {
      placeKindRoom = "nhà";
    }

    return placeKindRoom;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiUser);
        setDataUser(res.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiUser]);

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
            <th>hình ảnh</th>
            <th>chủ nhà</th>
            <th>danh mục</th>
            <th>loại phòng</th>
            <th>số lượng khách</th>
            <th>phòng tắm</th>
            <th>phòng ngủ</th>
            {/* <th>mô tả</th> */}
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
                <td>
                  <img src={`images/places/${place.image1}`} alt="" />
                  {/* <Image
                                  src={place.image}
                                  width={50}
                                  height={50}
                                  alt="Picture of the author"
                                /> */}
                </td>
                <td>
                  {dataUser.map((user) => (
                    <div key={user.id}>
                      {user.id == place.idUser ? user.userName : ""}
                    </div>
                  ))}
                </td>
                <td>
                  {dataCategory.map((cate) => (
                    <div key={cate.id}>
                      {cate.id == place.idCategory ? cate.nameCategory : ""}
                    </div>
                  ))}
                </td>
                <td>{PlaceKindRoom(place.kindRoom)}</td>
                <td>{place.quantityPeople} khách</td>
                <td>{place.quantityBath} phòng</td>
                <td>{place.quantityBedRoom} phòng</td>

                {/* <td className="place-des">{place.description}</td> */}
                <td>{place.longtitude}</td>
                <td>{place.latitude}</td>
                <td>
                  {place.status == 0 ? "Chưa có người ở" : "Đang có người ở"}
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
