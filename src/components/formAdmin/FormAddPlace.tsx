"use client";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FormAddPlace = () => {
  const apiPartner = `${localUrl}/api/partner`;
  const apiCategory = `${localUrl}/api/category`;
  const apiPlace = `${localUrl}/api/places`;
  const [dataCategory, setDataCategory] = useState<any[]>([]);
  const [dataPartner, setDataPartner] = useState<any[]>([]);
  const [dataPlace, setDataPlace] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiPartner);
        setDataPartner(res.partner);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiPartner]);

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
    idPartner: 0,
    idCategory: 0,
    longitude: "",
    latitude: "",
    discount: 0,
    status: 0,
    longDescription: "",
    quantityBedRoom: 0,
    quantityBath: 0,
    quantityBed: 0,
    title: "",
    reservationKind: 0,
    kindroom: 0,
    image: "",
    approveStatus: 0,
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
      idPartner: +dataPlace.idPartner,
      idCategory: +dataPlace.idCategory,
      longitude: dataPlace.longitude,
      latitude: dataPlace.latitude,
      discount: +dataPlace.discount,
      status: +dataPlace.status,
      longDescription: dataPlace.longDescription,
      quantityBedRoom: +dataPlace.quantityBedRoom,
      quantityBath: +dataPlace.quantityBath,
      quantityBed: +dataPlace.quantityBed,
      title: dataPlace.title,
      reservationKind: +dataPlace.reservationKind,
      kindroom: +dataPlace.kindroom,
      image: dataPlace.image,
      approveStatus: +dataPlace.approveStatus,
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
            <label className="formInsertEdit__label">Giá tiền cho 1 đêm</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="price"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Mức giảm giá</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="discount"
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
              name="idPartner"
              onChange={handleChange}
            >
              <option value="0">Chọn chủ nhà</option>
              {dataPartner.map((partner) => (
                <option key={partner.id} value={partner.id}>
                  {partner.userName}
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
              name="kindroom"
              onChange={handleChange}
            >
              <option value="">Chọn loại cho thuê</option>
              <option value="0">Toàn bộ nhà</option>
              <option value="1">Một căn trong nhà</option>
              <option value="2">Phòng chung</option>
            </select>
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Kiểu đặt phòng</label>
            <br />
            <select
              className="formInsertEdit__input"
              name="reservationKind"
              onChange={handleChange}
            >
              <option value="">Chọn kiểu đặt phòng</option>
              <option value="0">Tự động cho thuê</option>
              <option value="1">Chờ xác nhận</option>
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
            <label className="formInsertEdit__label">Số lượng giường ngủ</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="quantityBed"
              onChange={handleChange}
            />
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Mô tả</label>
            <br />
            <textarea
              className="formInsertEdit__input formInsertEdit__textarea"
              name="longDescription"
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
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Trạng thái</label>
            <br />
            <select
              className="formInsertEdit__input"
              name="status"
              onChange={handleChange}
            >
              <option value="">Thiết lập trạng thái</option>
              <option value="0">Chưa có người ở</option>
              <option value="1">Đã có người ở</option>
            </select>
          </div>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Phê duyệt</label>
            <br />
            <select
              className="formInsertEdit__input"
              name="approveStatus"
              onChange={handleChange}
            >
              <option value="">Yêu cầu kiểm duyệt</option>
              <option value="0">Chưa phê duyệt</option>
              <option value="1">Đã phê duyệt</option>
            </select>
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
