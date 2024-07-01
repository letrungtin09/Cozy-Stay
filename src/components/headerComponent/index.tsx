"use client";
import {
  faArrowRightFromBracket,
  faHouseChimneyUser,
  faHouseUser,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import Link from "next/link";
export default function HeaderComponent() {
  return (
    <>
      <header>
        <div className="container-hd">
          <div className="col col-1">
            <Link
              href={{
                pathname: "/",
              }}
            >
              <img className="logo-hd" src="images/CozyStay.png" alt="" />
            </Link>
          </div>
          <div className="col col-2">
            <input
              type="search"
              name=""
              className="input-search-header btn-height"
              placeholder="Tìm nhà ở..."
            />
            <div className="search-local btn-height btn-header">
              <Link
                href={{
                  pathname: "/searchPlace",
                }}
              >
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Địa điểm gần bạn</p>
              </Link>
            </div>
          </div>
          <div className="col col-3">
            <div className="register-host btn-height btn-header">
              <FontAwesomeIcon icon={faHouseUser} />
              <p>Trở thành chủ nhà</p>
            </div>
            <div className="dropdown-header btn-height">
              <Dropdown>
                <Dropdown.Toggle>
                  <img
                    src="images/icon-user.png"
                    alt=""
                    className="account-icon icon-header"
                  />
                  <img
                    src="images/icon-menu.png"
                    alt=""
                    className="account-menu icon-header"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/wallet">Ví tiền của bạn</Dropdown.Item>
                  <Dropdown.Item href="/updateAccount">
                    Cập nhật tài khoản
                  </Dropdown.Item>
                  <Dropdown.Item href="/changePassword">
                    Đổi mật khẩu
                  </Dropdown.Item>
                  <Dropdown.Item href="/myPlace?id=1">
                    Phòng/nhà của bạn
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-5">
                    Chuyển sang chế độ chủ nhà
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-6">
                    Đăng xuất <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
