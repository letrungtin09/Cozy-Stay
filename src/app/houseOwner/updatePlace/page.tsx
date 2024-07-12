"use client";
import LayoutHouseOwner from "@/components/layoutHouseOwner";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams!.get("id");
  const apiCategory = `${localUrl}/api/category`;
  const apiUser = `${localUrl}/api/user`;
  const apiPlace = `${localUrl}/api/places?id=${id}`;
  const [dataPlace, setDataPlace] = useState<any>([]);
  const [dataCategory, setDataCategory] = useState<any[]>([]);
  const [dataUser, setDataUser] = useState<any[]>([]);

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
    const fetchDataUser = async () => {
      try {
        const res = await ApiFunctions.getData(apiUser);
        setDataUser(res.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataUser();
  }, [apiUser]);

  const renderKindRoom = (value: number) => {
    if (value == 0) {
      return (
        <>
          <option value="0" selected>
            Phòng
          </option>
          <option value="1">Căn hộ</option>
          <option value="2">Nhà</option>
        </>
      );
    } else if (value == 1) {
      return (
        <>
          <option value="0">Phòng</option>
          <option value="1" selected>
            Căn hộ
          </option>
          <option value="2">Nhà</option>
        </>
      );
    } else if (value == 2) {
      return (
        <>
          <option value="0">Phòng</option>
          <option value="1">Căn hộ</option>
          <option value="2" selected>
            Nhà
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
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    longitude: "",
    latitude: "",
    description: "",
    quantityBedRoom: 0,
    quantityBath: 0,
    area: 0,
    kindRoom: 0,
    title: "",
    approveStatus: 0,
    idUser: 0,
    idCategory: 0,
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
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      longitude: +values.longitude,
      latitude: +values.latitude,
      description: values.description,
      quantityBedRoom: +values.quantityBedRoom,
      quantityBath: +values.quantityBath,
      area: +values.area,
      kindRoom: +values.kindRoom,
      title: values.title,
      approveStatus: +values.approveStatus,
      idUser: +values.idUser,
      idCategory: +values.idCategory,
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
    <LayoutHouseOwner>
      <section className="formInsertEdit pt-32 pb-12 px-52">
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
              <label className="formInsertEdit__label">
                Giá tiền thuê 1 tháng
              </label>
              <br />
              <input
                className="formInsertEdit__input"
                type="text"
                name="price"
                value={values.price}
                onChange={handleChange}
              />
            </div>
            {/* <div className="formInsertEdit__item">
            <label className="formInsertEdit__label">Hình ảnh</label>
            <br />
            <input
              className="formInsertEdit__input"
              type="text"
              name="image"
              value={values.image}
              onChange={handleChange}
            />
          </div> */}
            <div className="formInsertEdit__item">
              <label className="formInsertEdit__label">Chủ nhà</label>
              <br />
              <select
                className="formInsertEdit__input"
                name="idPartner"
                onChange={handleChange}
              >
                <option value="0">Chọn chủ nhà</option>
                {dataUser.map((user) =>
                  user.id == values.idUser ? (
                    <>
                      <option key={user.id} value={values.idUser} selected>
                        {user.userName}
                      </option>
                    </>
                  ) : (
                    <>
                      <option key={user.id} value={values.idUser}>
                        {user.userName}
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
                {renderKindRoom(values.kindRoom)}
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
              <label className="formInsertEdit__label">
                Số lượng phòng tắm
              </label>
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
              <label className="formInsertEdit__label">
                Số lượng phòng ngủ
              </label>
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
              <label className="formInsertEdit__label">Diện tích</label>
              <br />
              <input
                className="formInsertEdit__input"
                type="text"
                name="area"
                value={values.area}
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
                value={values.description}
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
    </LayoutHouseOwner>
  );
}
