import Image from "next/image";
import React from "react";
import logo from "../../public/images/CozyStay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableList,
  faHouseChimneyWindow,
  faReceipt,
  faUserTie,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";

const SideBarAdmin = () => {
  return (
    <div className="col-2 left-admin">
      <div className="logo-admin">
        <a href="adminCate.html" className="text-center d-flex justify-center">
          <Image
            src={logo}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </a>
      </div>
      <div className="title-admin">
        <FontAwesomeIcon icon={faUserGear} />
        <span>Trang quản trị</span>
      </div>
      <div className="navbar-admin">
        <ul>
          <li>
            <a className="cateAdmin" href="adminCate.html">
              <FontAwesomeIcon icon={faTableList} />
              <span>Danh mục chỗ ở</span>
            </a>
          </li>
          <li>
            <a className="cateAdmin" href="adminProduct.html">
              <FontAwesomeIcon icon={faHouseChimneyWindow} />
              <span>Chỗ cho thuê</span>
            </a>
          </li>
          <li>
            <a className="cateAdmin" href="">
              <FontAwesomeIcon icon={faReceipt} /> <span>Dịch vụ</span>
            </a>
          </li>
          <li>
            <a className="cateAdmin" href="">
              <FontAwesomeIcon icon={faUserTie} />
              <span>Tài khoản</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="btn-admin">
        <a className="btn--home" href="index.html">
          Quay lại trang chủ
        </a>
      </div>
    </div>
  );
};

export default SideBarAdmin;
