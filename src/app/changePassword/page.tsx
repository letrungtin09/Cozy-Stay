"use client";
import LayoutCustomer from "@/components/layoutCustomer";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";
import { useEffect, useState } from "react";

export default function Home() {
  const id = UserCurrent.GetUserId();
  const emailUser = UserCurrent.GetUserEmail();
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
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const updatePassword = async (e: any) => {
    e.preventDefault();
    if (
      values.password == dataUser.password &&
      values.newPassword == values.confirmPassword
    ) {
      const userUpdate = {
        password: values.newPassword,
      };
      try {
        await ApiFunctions.putData(apiUser, userUpdate)
          .then(() => {
            alert("Đổi mật khẩu thành công !");
            sessionStorage.removeItem("currentUser");
            window.location.href = "/auth/login";
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <LayoutCustomer>
        <div className="changePassword__container">
          <div className="changePassword__title">
            <h3>Đổi mật khẩu</h3>
          </div>
          <div className="changePassword__content">
            <form onSubmit={updatePassword}>
              <div className="changePassword__form">
                <div className="input-title">Email</div>
                <input
                  className="bg-gray-200"
                  type="email"
                  placeholder="Email"
                  value={emailUser}
                  readOnly
                />
                <div className="input-title">Mật khẩu hiện tại</div>
                <input
                  type="password"
                  name="password"
                  placeholder="Mật khẩu hiện tại"
                  onChange={handleChange}
                  value={values.password}
                />
                <div className="input-title">Mật khẩu mới</div>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Mật khẩu mới"
                  onChange={handleChange}
                  value={values.newPassword}
                />
                <div className="input-title">Nhập lại mật khẩu mới</div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Nhập lại mật khẩu mới"
                  onChange={handleChange}
                  value={values.confirmPassword}
                />
              </div>
              <button>Đổi mật khẩu</button>
            </form>
          </div>
        </div>
      </LayoutCustomer>
    </>
  );
}
