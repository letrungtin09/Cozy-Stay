"use client";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import UserCurrent from "@/lib/currentUser";
import Image from "next/image";

export default function HeaderHouseOwner() {
  const id = UserCurrent.GetUserId();
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
              <Image
                className="logo-hd"
                src={"/images/CozyStay.png"}
                width={100}
                height={100}
                alt="" />
            </Link>
          </div>
          <div className="col col-2">
            <ul className="menu-holder">
              <li>
                <Link href={`/houseOwner/managePlaces?idUser=${id}`}>
                  Nhà/phòng cho thuê
                </Link>
              </li>
              <li>
                <Link href={`/houseOwner/manageBill`}>Đơn đặt chỗ</Link>
              </li>
              <li>
                <Link href={`/houseOwner/wallet`}>Ví tiền</Link>
              </li>
              <li>
                <Link href={`/houseOwner/income`}>Thu nhập</Link>
              </li>
            </ul>
          </div>
          <div className="col col-3">
            <div className="dropdown-header btn-height">
              <Dropdown>
                <Dropdown.Toggle>
                  <Image
                    src={"/images/icon-user.png"}
                    alt=""
                    className="account-icon icon-header"
                    width={100}
                    height={100}
                  />
                  <Image
                    src={"/images/icon-menu.png"}
                    width={100}
                    height={100}
                    alt=""
                    className="account-menu icon-header"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href={`/`}>
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
