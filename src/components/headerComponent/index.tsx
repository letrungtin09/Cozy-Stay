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
import { useRef, useEffect, useState } from "react";
import { ModalPartner } from "./modalPartner";
import { ModalGhost } from "./modalGhost";
import UserCurrent from '@/lib/currentUser';

export default function HeaderComponent() {
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showGhostModal, setShowGhostModal] = useState(false);
  const [roleUser, setRoleUser] = useState();
  const currentUser = UserCurrent.CheckUser();

  useEffect(() => {

    if (currentUser === false) {
      setShowGhostModal(true);
    } else {
      setRoleUser(currentUser);
      setShowPartnerModal(true);
    }
  }, []);
  const closePartnerModal = () => {
    setShowPartnerModal(false);
  };

  const closeGhostModal = () => {
    setShowGhostModal(false);
  };
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
              <Image
                src="/images/CozyStay.png"
                alt="icon-logo"
                width={2000}
                height={2000}
                priority={true}
                className="logo-hd" />
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
            {roleUser !== 2 && roleUser !== 1 && (
              <div className="register-host btn-height btn-header">
                <FontAwesomeIcon icon={faHouseUser} />
                <p>Trở thành chủ nhà</p>
              </div>
            )}
            <div className="dropdown-header btn-height">
              <Dropdown>
                <Dropdown.Toggle>
                  <Image
                    src="/images/icon-user.png"
                    alt="icon-user"
                    width={2000}
                    height={2000}
                    priority={true}
                    className="account-icon icon-header" />
                  <Image
                    src="/images/icon-menu.png"
                    alt="icon-menu"
                    width={2000}
                    height={2000}
                    priority={true}
                    className="account-menu icon-header" />
                </Dropdown.Toggle>

                <ModalPartner isOpen={showPartnerModal} onClose={closePartnerModal} id={roleUser} />
                <ModalGhost isOpen={showGhostModal} onClose={closeGhostModal} />
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
