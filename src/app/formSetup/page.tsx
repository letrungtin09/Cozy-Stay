"use client";
import FooterComponent from "@/components/footerComponent";
import LayoutCustomer from "@/components/layoutCustomer";
import useHandleChange from "@/hooks/useHandleChange";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";
import { faHouseMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const idUser = UserCurrent.GetUserId();
  const apiUser = `${localUrl}/api/user?id=${idUser}`;
  const [dataUser, setDataUser] = useState<any>([]);

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

  const { values, handleChange, setValues } = useHandleChange({
    userName: "",
    avatar: "",
    email: "",
    phoneNumber: "",
    role: 1,
    address: "",
    info: "",
    dateRegister: "",
  });

  useEffect(() => {
    setValues(dataUser);
  }, [dataUser]);

  const router = useRouter();

  const updateUser = async (e: any) => {
    e.preventDefault();
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const userUpdate = {
      userName: values.userName,
      email: values.email,
      avatar: "user.jpg",
      phoneNumber: values.phoneNumber,
      role: 1,
      address: values.address,
      info: values.info,
      dateRegister: `${year}-${month}-${day}`,
    };

    console.log(userUpdate);

    try {
      const res = await ApiFunctions.putData(apiUser, userUpdate)
        .then(() => {
          alert("Đăng ký chủ nhà thành công !");
          sessionStorage.removeItem("currentUser");
          window.location.href = "/auth/login";
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
      <header>
        <div className="headerSetup__container section-padding">
          <div className="headerSetup__logo">
            <Link href="/">
              <img src="images/CozyStay.png" alt="" />
            </Link>
          </div>
          <div className="headerSetup__info">
            <div className="headerSetup__ques">
              <div className="headerSetup__text">
                Bạn sẵn sàng cho thuê nhà trên CozyStay chưa?
              </div>
            </div>
            {/* <div className="headerSetup__btn">
              <Link className="btn-partner py-2" href={`/formSetup?id=${idU}`}>
                <FontAwesomeIcon icon={faHouseMedical} /> Thiết lập ngay
              </Link>
            </div> */}
          </div>
        </div>
      </header>

      <div className="pt-24 pb-10 px-44">
        <section className="formInsertEdit">
          <div className="formInsertEdit__title">
            <h1>ĐĂNG KÝ THÔNG TIN CHỦ NHÀ</h1>
          </div>
          <div className="formInsertEdit__space"></div>
          <div className="formInsertEdit__content">
            <form onSubmit={updateUser}>
              <div className="formInsertEdit__item">
                <label className="formInsertEdit__label">Tên chủ nhà</label>
                <br />
                <input
                  className="formInsertEdit__input"
                  type="text"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                />
              </div>

              {/* <div className="formInsertEdit__item">
                <label className="formInsertEdit__label">Avatar</label>
                <br />
                <input
                  className="formInsertEdit__input"
                  type="text"
                  name="avatar"
                  value={values.avatar}
                  onChange={handleChange}
                />
              </div> */}
              <div className="formInsertEdit__item">
                <label className="formInsertEdit__label">Số điện thoại</label>
                <br />
                <input
                  className="formInsertEdit__input"
                  type="text"
                  name="phoneNumber"
                  value={values.phoneNumber}
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
                  Giới thiệu chủ nhà
                </label>
                <br />
                <textarea
                  className="formInsertEdit__input formInsertEdit__textarea"
                  name="info"
                  cols={100}
                  rows={5}
                  value={values.info}
                  onChange={handleChange}
                >
                  {values.info}
                </textarea>
              </div>

              <div className="formInsertEdit__item formInsertEdit__btn">
                <button name="btn-insert" className="btn-form" id="btnInsert">
                  Hoàn thành
                </button>
                <button type="reset" className="btn-form">
                  Nhập lại
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <FooterComponent></FooterComponent>
    </>
  );
}
