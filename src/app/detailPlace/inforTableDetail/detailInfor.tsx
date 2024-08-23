import React from "react";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
    faDoorOpen,
    faHouseChimneyWindow,
} from "@fortawesome/free-solid-svg-icons";
import TableInforCheck from "./tableInforCheck";
import TableInforWaitingAndSucces from "./tableInforWaitingAndSucces";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from '@/lib/currentUser';

const DetailInfor: React.FC = ({ dataPlace, dataJoinConvenient, dataConvenient, dataParner }: any) => {
    const [checkForLease, setCheckForLease] = useState<boolean>(false);
    const [billData, setBillData] = useState();
    const idUser: number = UserCurrent.GetUserId();

    useEffect(() => {
        if (idUser) {
            const fetchBillData = async () => {
                try {
                    const urlCheckForLease: string = `${localUrl}/api/bill?idPlace=${dataPlace.id}&idUser=${idUser}`;
                    const res = await ApiFunctions.getData(urlCheckForLease);
                    if (res.bill.length > 0) { setBillData(res.bill[0]); setCheckForLease(true) }
                } catch (error) {
                    console.error("Lỗi khi gọi API:", error);
                }
            };

            fetchBillData();
        }
    }, []);

    const PlaceKindRoom = (kind: any) => {
        let placeKindRoom: string = "";
        if (kind === 0) {
            placeKindRoom = "phòng";
        } else if (kind === 1) {
            placeKindRoom = "căn hộ";
        } else {
            placeKindRoom = "nhà";
        }

        return placeKindRoom;
    };


    return (
        <section className="detailInfo">
            <div className="row">
                <div className="col-7">
                    <div className="detailInfo__left">
                        <div className="detailInfo__head">
                            <div className="detailInfo__title">
                                Toàn bộ {PlaceKindRoom(dataPlace.kindRoom)} cho thuê tại
                                Việt Nam
                            </div>
                            <div className="detailInfo__quantity">
                                <span className="quantity-guest">
                                    {dataPlace.area}m<sup>2</sup>
                                </span>{" "}
                                ·{" "}
                                <span className="quantity-guest">
                                    {dataPlace.quantityPeople} khách
                                </span>{" "}
                                ·{" "}
                                <span className="quantity-bedRoom">
                                    {dataPlace.quantityBedRoom} phòng ngủ
                                </span>{" "}
                                ·{" "}
                                <span className="quantity-bathRoom">
                                    {dataPlace.quantityBath} phòng tắm
                                </span>
                            </div>
                        </div>
                        <div className="detailInfo__line"></div>
                        <div className="detailInfo__partner">
                            <div className="partner-avatar">
                                <Image
                                    src={`/images/${dataParner.user[0].avatar}`}
                                    alt="image"
                                    width={1000}
                                    height={1000}
                                    priority={true}
                                />
                            </div>
                            <div className="partner-info">
                                <div className="partner-name">
                                    Chủ nhà: {dataParner.user[0].userName}
                                </div>
                                <div className="partner-intro">
                                    Chủ nhà uy tín, dày dặn kinh nghiệm được đánh giá cao
                                </div>
                            </div>
                        </div>
                        <div className="detailInfo__line"></div>
                        <div className="detailInfo__status">
                            <div className="detailInfo__statusPlace">
                                <div className="status-icon">
                                    <FontAwesomeIcon icon={faDoorOpen} />
                                </div>
                                <div className="status-block">
                                    {
                                        (dataPlace.reservationKind = 0 ? (
                                            <>
                                                <div className="status-title">
                                                    Tự động xác nhận
                                                </div>
                                                <div className="status-text">
                                                    Tự động cho thuê mà không cần xác nhận từ chủ
                                                    nhà.
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="status-title">
                                                    Chờ chủ nhà xác nhận
                                                </div>
                                                <div className="status-text">
                                                    Bạn sẽ chờ xác nhận cho thuê từ chủ nhà.
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="detailInfo__statusPlace">
                                <div className="status-icon">
                                    <FontAwesomeIcon icon={faHouseChimneyWindow} />
                                </div>
                                <div className="status-block">
                                    <div className="status-title">
                                        Toàn bộ {PlaceKindRoom(dataPlace.kindRoom)}
                                    </div>
                                    <div className="status-text">
                                        Chủ nhà cho thuê toàn bộ{" "}
                                        {PlaceKindRoom(dataPlace.kindRoom)} với đầy đủ tiện
                                        nghi.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detailInfo__line"></div>
                        <div className="detailInfo__description">
                            {dataPlace.description}
                        </div>
                        <div className="detailInfo__line"></div>
                        <div className="detailInfo__services">
                            <div className="info-title">
                                <h3>Nơi này có những gì cho bạn</h3>
                            </div>
                            <div className="services-detail">
                                {dataJoinConvenient.map((join: any) =>
                                    dataConvenient.map((con: any) =>
                                        join.idConvenient == con.id ? (
                                            <div key={`${join.idConvenient}-${con.id}`} className="services-item">
                                                <div className="services-icon">
                                                    <Image
                                                        className="w-6"
                                                        src={`/images/iconSvg/iconConvenient/${con.icon}`}
                                                        alt="imagePlaces"
                                                        width={1000}
                                                        height={1000}
                                                        priority={true}
                                                    />
                                                </div>
                                                <div className="services-name">
                                                    {con.nameConvenient}
                                                </div>
                                            </div>
                                        ) : null
                                    )
                                )}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-5">
                    {checkForLease ? <TableInforWaitingAndSucces bill={billData} /> : <TableInforCheck dataPlace={dataPlace} />}
                </div>
            </div>
        </section>
    );
}
export default DetailInfor;