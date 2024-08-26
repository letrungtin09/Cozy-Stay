"use client";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import UserCurrent from "@/lib/currentUser";
import Image from "next/image";

export default function HeaderHouseOwner() {
  const id = UserCurrent.GetUserId();
  const avatar = UserCurrent.GetUserAvatar();
  const removeSession = () => {
    sessionStorage.removeItem("currentUser");
    window.location.href = "/auth/login";
  };
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
                src="/images/CozyStay.png"
                width={500}
                height={500}
                alt="logo"
              />
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
                    src={`/images/${avatar}`}
                    alt="avatarHouseOwner"
                    width={500}
                    height={500}
                    className="account-icon icon-header"
                  />
                  <Image
                    src="/images/icon-menu.png"
                    alt="menu"
                    width={500}
                    height={500}
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
                  <Dropdown.Item onClick={removeSession}>
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
