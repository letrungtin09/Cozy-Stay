"use client";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FormAddPlace = () => {
  const apiUser = `${localUrl}/api/user`;
  const apiCategory = `${localUrl}/api/category`;
  const apiPlace = `${localUrl}/api/places`;
  const [dataCategory, setDataCategory] = useState<any[]>([]);
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

  useEffect(() => {
    const fetchDataCate = async () => {
      try {
        const res = await ApiFunctions.getData(apiCategory);
        setDataCategory(res.cate);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataCate();
  }, [apiCategory]);

  const { values, handleChange } = useHandleChange({
    address: "",
    price: 0,
    quantityPeople: 0,
    image: "",
    latitude: "",
    longitude: "",
    status: 0,
    description: "",
    quantityBedRoom: 0,
    quantityBath: 0,
    area: 0,
    kindRoom: 0,
    title: "",
    reservationKind: 1,
    approveStatus: 1,
    statusCancel: 0,
    idUser: 0,
    idCategory: 0,
  });

  useEffect(() => {
    setDataPlace(values);
  }, [values]);

  const router = useRouter();

  const addDataPlace = async (e: any) => {
    e.preventDefault();
    const placeNew = {
      address: dataPlace.address,
      price: +dataPlace.price,
      quantityPeople: +dataPlace.quantityPeople,
      image: "place1/image1.webp",
      latitude: +dataPlace.latitude,
      longitude: +dataPlace.longitude,
      status: 0,
      description: dataPlace.description,
      quantityBedRoom: +dataPlace.quantityBedRoom,
      quantityBath: +dataPlace.quantityBath,
      area: +dataPlace.area,
      kindRoom: +dataPlace.kindRoom,
      title: dataPlace.title,
      reservationKind: 1,
      approveStatus: 1,
      statusCancel: 0,
      idUser: +dataPlace.idUser,
      idCategory: +dataPlace.idCategory,
    };
    try {
      const res = await ApiFunctions.postData(apiPlace, placeNew)
        .then(() => {
          alert("Thêm mới thành công !");
          router.push("/admin/adminPlace");
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="formInsertEdit">
      <div className="formInsertEdit__title">
        <h1>THÊM MỚI CHỖ CHO THUÊ</h1>
      </div>
      <div className="formInsertEdit__space"></div>
      <div className="formInsertEdit__content">
        <form onSubmit={addDataPlace}>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Mã số ID</label>
            <br />
            <input
              className="formInsertEdit__input input-readonly"
              type="text"
              name="id"
              value="Auto number"
              readOnly
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Tên chỗ cho thuê</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Địa chỉ</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="address"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">
              Giá tiền thuê 1 tháng
            </label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="price"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Hình ảnh</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="image"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Chủ nhà</label>
            <br />
            <select
              className="formInsertEdit__input"
              name="idUser"
              onChange={handleChange}
            >
              <option value="0">Chọn chủ nhà</option>
              {dataUser.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.userName}
                </option>
              ))}
            </select>
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Danh mục</label>
            <br />
            <select
              className="formInsertEdit__input"
              name="idCategory"
              onChange={handleChange}
            >
              <option value="0">Chọn danh mục</option>
              {dataCategory.map((cate) => (
                <option key={cate.id} value={cate.id}>
                  {cate.nameCategory}
                </option>
              ))}
            </select>
          </div>

          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Loại cho thuê</label>
            <br />
            <select
              className="formInsertEdit__input"
              name="kindRoom"
              onChange={handleChange}
            >
              <option value="">Chọn loại cho thuê</option>
              <option value="0">Phòng</option>
              <option value="1">Căn hộ</option>
              <option value="2">Nhà</option>
            </select>
          </div>

          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Số lượng khách</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="quantityPeople"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Số lượng phòng tắm</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="quantityBath"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Số lượng phòng ngủ</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="quantityBedRoom"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">
              Diện tích (m<sup>2</sup>)
            </label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="area"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Mô tả</label>
            <br />
            <textarea
              className="formInsertEdit__input formInsertEdit__textarea"
              name="description"
              cols={100}
              rows={5}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Kinh độ</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="longitude"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Vĩ độ</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="latitude"
              onChange={handleChange}
            />
          </div>

          <div className="formInsertEdit__item formInsertEdit__btn">
            <button name="btn-insert" className="btn-form" id="btnInsert">
              Thêm mới
            </button>
            <button type="reset" className="btn-form">
              Nhập lại
            </button>
            <Link href="/admin/adminPlace" className="btn-form">
              Danh sách
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormAddPlace;
