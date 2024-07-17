import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faHouseChimneyUser,
  faHouseUser,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
export const ModalPartner = ({ isOpen, onClose, id }) => {
  if (!isOpen) return null;
  const removeSession = () => {
    sessionStorage.removeItem("currentUser");
    window.location.href = "/";
  };
  const isLoggedIn: any = sessionStorage.getItem("currentUser");
  const userObject = JSON.parse(isLoggedIn);
  const idU = userObject.idUser;
  return (
    <Dropdown.Menu>
      <Dropdown.Item href="/wallet">Ví tiền của bạn</Dropdown.Item>
      <Dropdown.Item href="/updateAccount">Cập nhật tài khoản</Dropdown.Item>
      <Dropdown.Item href="/changePassword">Đổi mật khẩu</Dropdown.Item>
      <Dropdown.Item href="/myPlace?id=1">Phòng/nhà của bạn</Dropdown.Item>
      {id == 1 && (
        <Dropdown.Item href={`/houseOwner/managePlaces?idUser=${idU}`}>
          Chuyển sang chế độ chủ nhà
        </Dropdown.Item>
      )}
      <Dropdown.Item onClick={removeSession}>
        Đăng xuất <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </Dropdown.Item>
    </Dropdown.Menu>
  );
};
