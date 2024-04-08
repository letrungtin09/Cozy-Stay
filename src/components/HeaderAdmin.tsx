import Image from "next/image";
import React from "react";
import avatar from "../../public/images/account/admin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HeaderAdmin = () => {
  return (
    <div className="header-admin">
      <div className="header-form">
        <form action="">
          <input
            type="text"
            name="search"
            placeholder="Tìm kiếm nội dung bất kỳ..."
          />
          <button className="header-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>

      <div className="header-account dropdown">
        <a
          className="user-admin dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Image
            src={avatar}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              <i className="fa fa-bell"></i> Thông báo
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="fa fa-cog"></i>Cài đặt
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="fa fa-sign-out-alt"></i>Đăng xuất
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderAdmin;
