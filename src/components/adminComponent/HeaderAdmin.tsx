import Image from "next/image";
import React from "react";
import avatar from "../../../public/images/account/admin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faGear,
  faMagnifyingGlass,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";

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
              <FontAwesomeIcon icon={faBell} /> Thông báo
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <FontAwesomeIcon icon={faGear} /> Cài đặt
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <FontAwesomeIcon icon={faRightFromBracket} /> Đăng xuất
            </a>
          </li>
        </ul>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    </div>
  );
};

export default HeaderAdmin;
