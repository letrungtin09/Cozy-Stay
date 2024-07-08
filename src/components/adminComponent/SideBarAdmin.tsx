import Image from "next/image";
import React from "react";
import logo from "../../../public/images/CozyStay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableList,
  faHouseChimneyWindow,
  faReceipt,
  faUserTie,
  faUserGear,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SideBarAdmin = () => {
  return (
    <div className="col-2 left-admin">
      <div className="logo-admin">
        <Link
          href="/admin/adminPlace"
          className="text-center d-flex justify-center"
        >
          <Image
            src={logo}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <div className="title-admin">
        <FontAwesomeIcon icon={faUserGear} />
        <span>Trang quản trị</span>
      </div>
      <div className="navbar-admin">
        <ul>
          <li>
            <Link className="cateAdmin" href="/admin/adminCategory">
              <FontAwesomeIcon icon={faTableList} />
              <span>Danh mục chỗ ở</span>
            </Link>
          </li>
          <li>
            <Link className="cateAdmin" href="/admin/adminPlace">
              <FontAwesomeIcon icon={faHouseChimneyWindow} />
              <span>Chỗ ở cho thuê</span>
            </Link>
          </li>
          <li>
            <Link className="cateAdmin" href="/admin/adminConvenient">
              <FontAwesomeIcon icon={faReceipt} /> <span>Tiện nghi</span>
            </Link>
          </li>
          <li>
            <Link className="cateAdmin" href="/admin/adminRules">
              <FontAwesomeIcon icon={faKey} />
              <span>Nội quy nhà</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="btn-admin">
        <Link className="btn--home" href="/">
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
};

export default SideBarAdmin;
