"use client";
import LayoutCustomer from "@/components/layoutCustomer";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const id = UserCurrent.GetUserId();
  const apiUser = `${localUrl}/api/user?id=${id}`;
  const [dataUser, setDataUser] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiUser);
        setDataUser(res.user[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiUser]);

  const { values, handleChange, setValues } = useHandleChange({
    userName: "",
    avatar: "",
    phoneNumber: "",
    address: "",
    info: "",
  });

  useEffect(() => {
    setValues(dataUser);
  }, [dataUser]);

  const updateUser = async () => {
    const userUpdate = {
      userName: values.userName,
      avatar: "user.jpg",
      phoneNumber: values.phoneNumber,
      address: values.address,
      info: values.info,
    };

    try {
      await ApiFunctions.putData(apiUser, userUpdate)
        .then(() => {
          alert("Cập nhật tài khoản thành công !");
          location.reload();
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LayoutCustomer>
        <div className="updateAccount__container">
          <div className="updateAccount__title">
            <h3>Cập nhật tài khoản</h3>
          </div>
          <div className="updateAccount__content">
            <div className="updateAccount__avatar">
              <Image
                src="/images/user.jpg"
                width={500}
                height={500}
                alt="avatarUser"
              />
            </div>
            <form onSubmit={updateUser}>
              <div className="updateAccount__form">
                <div className="updateAccount__left">
                  <div className="input-title">Email</div>
                  <input
                    className="bg-gray-200"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    readOnly
                  />
                  <div className="input-title">Họ và tên</div>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Họ và tên"
                    onChange={handleChange}
                    value={values.userName}
                  />
                  <div className="input-title">Số điện thoại</div>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Số điện thoại"
                    onChange={handleChange}
                    value={values.phoneNumber}
                  />
                  <div className="input-title">Địa chỉ</div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Địa chỉ"
                    onChange={handleChange}
                    value={values.address}
                  />
                </div>
                <div className="updateAccount__right">
                  <div className="input-title">Ảnh đại diện</div>
                  <div>
                    <input type="file" />
                    {/* <input
                      type="hidden"
                      name="avatar"
                      onChange={handleChange}
                      value={values.avatar}
                    /> */}
                  </div>
                  <div className="input-title">Thông tin cá nhân</div>
                  <textarea
                    name="info"
                    value={values.info}
                    onChange={handleChange}
                  >
                    {values.info}
                  </textarea>
                </div>
              </div>
              <button>Cập nhập tài khoản</button>
            </form>
          </div>
        </div>
      </LayoutCustomer>
    </>
  );
}
