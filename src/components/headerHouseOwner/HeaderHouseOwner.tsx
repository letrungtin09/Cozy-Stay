"use client";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function HeaderHouseOwner() {
  return (
    <>
      <header className="header-houserholder">
        <div className="container-hd">
          <div className="col col-1">
            <Link
              href={{
                pathname: "/houseOwner/managePlaces",
              }}
            >
              <img className="logo-hd" src="images/CozyStay.png" alt="" />
            </Link>
          </div>
          <div className="col col-2">
            <ul className="menu-holder">
              <li>
                <a href="#"> Nhà/Phòng cho thuê </a>
              </li>
              <li>
                <a href="#">Ví tiền</a>
              </li>
              <li>
                <a href="#">Thu nhập</a>
              </li>
            </ul>
          </div>
          <div className="col col-3">
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
                  <Dropdown.Item href="#/action-5">
                    Chuyển sang chế độ thuê
                  </Dropdown.Item>
                  <Dropdown.Item href="/updateAccount">
                    Cập nhật tài khoản
                  </Dropdown.Item>
                  <Dropdown.Item href="/changePassword">
                    Đổi mật khẩu
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
