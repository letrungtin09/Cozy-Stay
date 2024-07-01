"use client";
import LayoutCustomer from "@/components/layoutCustomer";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <LayoutCustomer>
        <div className="changePassword__container">
          <div className="changePassword__title">
            <h3>Đổi mật khẩu</h3>
          </div>
          <div className="changePassword__content">
            <form action="">
              <div className="changePassword__form">
                <div className="input-title">Email</div>
                <input type="email" placeholder="Email" />
                <div className="input-title">Mật khẩu hiện tại</div>
                <input type="password" placeholder="Mật khẩu hiện tại" />
                <div className="input-title">Mật khẩu mới</div>
                <input type="password" placeholder="Mật khẩu mới" />
                <div className="input-title">Nhập lại mật khẩu mới</div>
                <input type="password" placeholder="Nhập lại mật khẩu mới" />
              </div>
              <button>Đổi mật khẩu</button>
            </form>
          </div>
        </div>
      </LayoutCustomer>
    </>
  );
}
