"use client";
import LayoutCustomer from "@/components/layoutCustomer";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <LayoutCustomer>
        <div className="updateAccount__container">
          <div className="updateAccount__title">
            <h3>Cập nhật tài khoản</h3>
          </div>
          <div className="updateAccount__content">
            <div className="updateAccount__avatar">
              <img src="images/user.jpg" alt="" className="" />
            </div>
            <form action="">
              <div className="updateAccount__form">
                <div className="updateAccount__left">
                  <div className="input-title">Email</div>
                  <input type="email" placeholder="Email" />
                  <div className="input-title">Họ và tên</div>
                  <input type="password" placeholder="Họ và tên" />
                  <div className="input-title">Số điện thoại</div>
                  <input type="password" placeholder="Số điện thoại" />
                  <div className="input-title">Địa chỉ</div>
                  <input type="password" placeholder="Địa chỉ" />
                </div>
                <div className="updateAccount__right">
                  <div className="input-title">Ảnh đại diện</div>
                  <div>
                    <input type="file" />
                  </div>
                  <div className="input-title">Thông tin cá nhân</div>
                  <textarea name="" id=""></textarea>
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
