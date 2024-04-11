"use client";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const FormUpdatePlace = () => {
  const searchParams = useSearchParams();
  const id = searchParams!.get("id");
  const apiCategory = `${localUrl}/api/category`;
  const apiPartner = `${localUrl}/api/partner`;
  const apiPlace = `${localUrl}/api/places?id=${id}`;
  const [dataPlace, setDataPlace] = useState<any>([]);
  const [dataCategory, setDataCategory] = useState<any[]>([]);
  const [dataPartner, setDataPartner] = useState<any[]>([]);

  useEffect(() => {
    const fetchDataPlace = async () => {
      try {
        const res = await ApiFunctions.getData(apiPlace);
        setDataPlace(res.places[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataPlace();
  }, [apiPlace]);

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

  useEffect(() => {
    const fetchDataPartner = async () => {
      try {
        const res = await ApiFunctions.getData(apiPartner);
        setDataPartner(res.partner);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataPartner();
  }, [apiPartner]);

  const renderKindRoom = (value: number) => {
    if (value == 0) {
      return (
        <>
          <option value="0" selected>
            Toàn bộ nhà
          </option>
          <option value="1">Một căn trong nhà</option>
          <option value="2">Phòng chung</option>
        </>
      );
    } else if (value == 1) {
      return (
        <>
          <option value="0">Toàn bộ nhà</option>
          <option value="1" selected>
            Một căn trong nhà
          </option>
          <option value="2">Phòng chung</option>
        </>
      );
    } else if (value == 2) {
      return (
        <>
          <option value="0">Toàn bộ nhà</option>
          <option value="1">Một căn trong nhà</option>
          <option value="2" selected>
            Phòng chung
          </option>
        </>
      );
    }
  };

  const renderReservationKind = (value: number) => {
    if (value == 0) {
      return (
        <>
          <option value="0" selected>
            Tự động cho thuê
          </option>
          <option value="1">Chờ xác nhận</option>
        </>
      );
    } else if (value == 1) {
      return (
        <>
          <option value="0">Tự động cho thuê</option>
          <option value="1" selected>
            Chờ xác nhận
          </option>
        </>
      );
    }
  };

  const renderStatus = (value: number) => {
    if (value == 0) {
      return (
        <>
          <option value="0" selected>
            Chưa có người ở
          </option>
          <option value="1">Đã có người ở</option>
        </>
      );
    } else if (value == 1) {
      return (
        <>
          <option value="0">Chưa có người ở</option>
          <option value="1" selected>
            Đã có người ở
          </option>
        </>
      );
    }
  };

  const renderApproveStatus = (value: number) => {
    if (value == 0) {
      return (
        <>
          <option value="0" selected>
            Chưa phê duyệt
          </option>
          <option value="1">Đã phê duyệt</option>
        </>
      );
    } else if (value == 1) {
      return (
        <>
          <option value="0">Chưa phê duyệt</option>
          <option value="1" selected>
            Đã phê duyệt
          </option>
        </>
      );
    }
  };

  const { values, handleChange, setValues } = useHandleChange({
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
    setValues(dataPlace);
  }, [dataPlace]);

  const router = useRouter();

  const updatePlace = async (e: any) => {
    e.preventDefault();
    const placeUpdate = {
      address: values.address,
      price: +values.price,
      quantityPeople: +values.quantityPeople,
      idPartner: +values.idPartner,
      idCategory: +values.idCategory,
      longitude: values.longitude,
      latitude: values.latitude,
      discount: +values.discount,
      status: +values.status,
      longDescription: values.longDescription,
      quantityBedRoom: +values.quantityBedRoom,
      quantityBath: +values.quantityBath,
      quantityBed: +values.quantityBed,
      title: values.title,
      reservationKind: +values.reservationKind,
      kindroom: +values.kindroom,
      image: values.image,
      approveStatus: +values.approveStatus,
    };
    console.log(placeUpdate);

    try {
      const res = await ApiFunctions.putData(apiPlace, placeUpdate)
        .then(() => {
          alert("Cập nhật thành công !");
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
        <h1>CẬP NHẬT CHỖ CHO THUÊ</h1>
      </div>
      <div className="formInsertEdit__space"></div>
      <div className="formInsertEdit__content">
        <form onSubmit={updatePlace}>
          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Mã số ID</label>
            <br />
            <input
              className="formInsertEdit__input input-readonly"
              type="text"
              name="id"
              value={dataPlace.id}
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
              value={values.title}
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
              value={values.address}
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
              value={values.price}
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
              value={values.discount}
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
              value={values.image}
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
              {dataPartner.map((partner) =>
                partner.id == values.idPartner ? (
                  <>
                    <option key={partner.id} value={values.idPartner} selected>
                      {partner.userName}
                    </option>
                  </>
                ) : (
                  <>
                    <option key={partner.id} value={values.idPartner}>
                      {partner.userName}
                    </option>
                  </>
                )
              )}
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
              {dataCategory.map((cate) =>
                cate.id == dataPlace.idCategory ? (
                  <>
                    <option key={cate.id} value={values.idCategory} selected>
                      {cate.nameCategory}
                    </option>
                  </>
                ) : (
                  <>
                    <option key={cate.id} value={values.idCategory}>
                      {cate.nameCategory}
                    </option>
                  </>
                )
              )}
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
              {}
              <option value="">Chọn loại cho thuê</option>
              {renderKindRoom(values.kindroom)}
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
              {renderReservationKind(values.reservationKind)}
            </select>
          </div>

          <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Số lượng khách</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="quantityPeople"
              value={values.quantityPeople}
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
              value={values.quantityBath}
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
              value={values.quantityBedRoom}
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
              value={values.quantityBed}
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
              value={values.longDescription}
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
              value={values.longitude}
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
              value={values.latitude}
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
              {renderStatus(values.status)}
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
              {renderApproveStatus(values.approveStatus)}
            </select>
          </div>

          <div className="formInsertEdit__item formInsertEdit__btn">
            <button name="btn-insert" className="btn-form" id="btnInsert">
              Cập nhật
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

export default FormUpdatePlace;
