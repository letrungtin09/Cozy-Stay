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
import UserCurrent from "@/lib/currentUser";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import { useRouter } from "next/navigation";

export default function HeaderComponent() {
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showGhostModal, setShowGhostModal] = useState(false);
  const [roleUser, setRoleUser] = useState();
  const currentUser = UserCurrent.CheckUser();
  const idUser = UserCurrent.GetUserId();
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    const fetchPartnerData = async () => {
      try {
        const apiPartner = `${localUrl}/api/user?id=${idUser}`;
        const resPartner = await ApiFunctions.getData(apiPartner);

        // Kiểm tra nếu có dữ liệu
        if (resPartner && resPartner.user && resPartner.user[0]) {
          setAvatar(resPartner.user[0].avatar);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchPartnerData();
  }, []);

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

  // search places
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const handleInputChange = (e: any) => {
    setKeyword(e.target.value);
  };
  const searchPlaces = () => {
    if (keyword != "") {
      router.push(`/searchPlace?keyword=${keyword}`);
    }
  };

  //lấy địa chỉ đang truy cập
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    getIpAddress();
  }, []);

  const getIpAddress = async () => {
    try {
      const res = await fetch("https://api.ipify.org");
      const data = await res.text();
      setIpAddress(data);
    } catch (err) {
      console.error(err);
    }
  };

  const searchAddressUser = async () => {
    try {
      const res = await fetch(
        `http://ip-api.com/json/${ipAddress}?fields=continent,country,regionName,city,district,lat,lon,query`
      );
      const data = await res.json();
      const address = data.regionName;
      router.push(`/searchPlace?keyword=${address}`);
    } catch (err) {
      console.error(err);
    }
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
                className="logo-hd"
              />
            </Link>
          </div>
          <div className="col col-2">
            <div className="searchInput w-[55%] h-[45%] relative">
              <input
                type="search"
                name="keywordSearch"
                className="w-[100%] pl-[15px] rounded-[20px] text-black border !border-[#000] h-[100%] focus:outline-none"
                placeholder="Tìm nhà ở..."
                value={keyword}
                onChange={handleInputChange}
              />
              <button
                className="absolute !top-0 !right-0 h-[100%] w-[50px] border-l !border-[#d3d3d3] rounded-r-[20px] duration-200 hover:bg-color-green-0 hover:rounded-r-[20px]"
                onClick={() => searchPlaces()}
              >
                <FontAwesomeIcon
                  className="text-[14px]"
                  icon={faMagnifyingGlass}
                />
              </button>
            </div>
            <div className="search-local h-[45%] btn-header !border-[#000]">
              <Link
                href={{
                  pathname: "/searchPlace",
                }}
                onClick={() => searchAddressUser()}
              >
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Địa điểm gần bạn</p>
              </Link>
            </div>
          </div>
          <div className="col col-3">
            {roleUser !== 2 && roleUser !== 1 && (
              <div className="register-host h-[45%] btn-header">
                <Link className="d-flex items-center" href={"/cozySetup"}>
                  <FontAwesomeIcon icon={faHouseUser} />
                  <p>Trở thành chủ nhà</p>
                </Link>
              </div>
            )}
            <div className="dropdown-header btn-height">
              <Dropdown>
                <Dropdown.Toggle>
                  {showPartnerModal ? (
                    <Image
                      src={`/images/${avatar}`}
                      alt="icon-user"
                      width={2000}
                      height={2000}
                      priority={true}
                      className="account-icon icon-header"
                    />
                  ) : (
                    <Image
                      src="/images/icon-user.png"
                      alt="icon-menu"
                      width={2000}
                      height={2000}
                      priority={true}
                      className="account-menu icon-header"
                    />
                  )}
                  <Image
                    src="/images/icon-menu.png"
                    alt="icon-menu"
                    width={2000}
                    height={2000}
                    priority={true}
                    className="account-menu icon-header"
                  />
                </Dropdown.Toggle>

                <ModalPartner
                  isOpen={showPartnerModal}
                  onClose={closePartnerModal}
                  id={roleUser}
                  idUser={idUser}
                />
                <ModalGhost isOpen={showGhostModal} onClose={closeGhostModal} />
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
