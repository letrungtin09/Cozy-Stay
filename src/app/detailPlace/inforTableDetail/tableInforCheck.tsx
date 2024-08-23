import * as React from 'react';
import { useState, useEffect, useRef } from "react";
import {
    faPlus,
    faMinus,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import DateRangePickerValue from "./dateRangePicker";
import { GenerateRandomCode } from '@/lib/generateCode';
import UserCurrent from '@/lib/currentUser';
import dayjs, { Dayjs } from 'dayjs';
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import Link from 'next/link';


export default function TableInforCheck({ dataPlace }: any) {
    const idUser: number = UserCurrent.GetUserId();
    const [monthNumberLease, setMonthNumberLease] = useState(1);
    const [dateStart, setDateStart] = useState<Dayjs | null>(null);
    const [dateEnd, setDateEnd] = useState<Dayjs | null>(null);
    const [errorMoney, setErrorMoney] = useState(false);
    const urlBill: string = `${localUrl}/api/bill`;

    const getDateStart = (data: Dayjs | null) => {
        setDateStart(data);
    }

    const getDateEnd = (data: Dayjs | null) => {
        setDateEnd(data);
    }

    const getTotalMoney = async () => {
        const urlUser: string = `${localUrl}/api/user?id=${idUser}`;
        try {
            if (idUser !== null && urlUser) { // Kiểm tra idUser và urlUser không phải null hoặc trống
                const res = await ApiFunctions.getData(urlUser);
                return res.user[0].totalMoney;
            } else {
                console.warn("ID User hoặc URL không có giá trị");
            }
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);

        }
    }
    const minusTotalMoney = async (moneyChange: number) => {
        const apiUserOrigin: string = `${localUrl}/api/user`;
        try {
            if (idUser !== null) {
                const dataUser = {
                    id: idUser,
                    moneyRental: moneyChange
                };
                ApiFunctions.putData(apiUserOrigin, dataUser);
            } else {
                console.warn("ID User hoặc URL không có giá trị");
            }
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);

        }
    }

    const handleSendWallet = (numberId: any, status: any, moneyNumber: any) => {
        const apiWallet: string = `${localUrl}/api/wallet`;
        try {
            if (idUser !== null) {
                const dataWallet: any = {
                    id: numberId,
                    status: status,
                    moneyNumber: moneyNumber
                }
                ApiFunctions.postData(apiWallet, dataWallet);
            } else {
                console.warn("ID User hoặc URL không có giá trị");
            }
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);

        }
    }

    const addForBill = async () => {
        if (!idUser) window.location.href = "/auth/login";
        const totalMoney = (dataPlace.price * monthNumberLease) + (dataPlace.price * monthNumberLease * 0.05);
        const serviceFeeMoney = dataPlace.price * monthNumberLease * 0.05;
        const userConfirmed = window.confirm(`Xác nhận thanh toán ${new Intl.NumberFormat("de-DE").format(totalMoney)} vnđ để sử dụng căn nhà này trong ${monthNumberLease} tháng ?`);
        if (userConfirmed) {
            if (!dateStart || !dateEnd) return;
            const randomCode = GenerateRandomCode();
            const userTotalMoney = await getTotalMoney();
            const dataBill: any = {
                dateStart: dateStart.format('YYYY-MM-DD'),
                dateEnd: dateEnd.format('YYYY-MM-DD'),
                rentalMonth: monthNumberLease,
                total: totalMoney,
                serviceFee: serviceFeeMoney,
                code: randomCode,
                idPlace: dataPlace.id,
                idUser: idUser
            };
            if (totalMoney > userTotalMoney) {
                setErrorMoney(true);
            } else {
                try {
                    const res = await ApiFunctions.postData(urlBill, dataBill);
                    if (res.thongbao) {
                        await handleSendWallet(idUser, 0, totalMoney);
                        await minusTotalMoney(totalMoney);
                        window.location.href = "/myPlace";
                    } else {
                        // Xử lý lỗi nếu phản hồi không thành công
                        console.error("Lỗi khi gửi dữ liệu hóa đơn:", res);
                    }
                } catch (error) {
                    console.error("Lỗi khi gọi API:", error);
                }
            }
        }

    }

    const subMonth = () => {
        if (monthNumberLease > 1) {
            setMonthNumberLease(prev => prev - 1)
        }
    }
    const plusMonth = () => {
        setMonthNumberLease(prev => prev + 1)
    }
    return (
        <div className="detailInfo__right">
            <div className="detailInfo__fixed">
                <div className="detailInfo__position">
                    <div className="detailInfo__order">
                        <div className="detailInfo__price">
                            <span className="price-place">
                                {new Intl.NumberFormat("de-DE").format(
                                    dataPlace.price
                                )}
                                đ
                            </span>{" "}
                            / tháng
                        </div>
                        <div className="timeOrder-numberMonth d-flex justify-between mb-[15px]">
                            <div className="timeOrder-date font-bold">
                                Số tháng thuê
                            </div>
                            <div className="timeOrder-number">
                                <span
                                    className="sub-month cursor-pointer"
                                    onClick={subMonth}
                                >
                                    <FontAwesomeIcon icon={faMinus} />
                                </span>
                                <span className="number-month mx-[30px]">{monthNumberLease}</span>
                                <span
                                    className="plus-month cursor-pointer"
                                    onClick={plusMonth}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                            </div>
                        </div>
                        <div className="detailInfo__time">

                            < DateRangePickerValue
                                dayForLease={monthNumberLease}
                                onDateStart={getDateStart}
                                onDateEnd={getDateEnd} />

                        </div>
                        <div className="detailInfo__quantityGuest d-flex justify-between mb-[20px]">
                            <div className="guest-title font-bold">
                                Số lượng khách tối đa
                            </div>
                            <div className="guest-number">
                                {dataPlace.quantityPeople} khách
                            </div>
                        </div>
                        <div className="detailInfo__btnOrder">
                            <button
                                className="btn-order"
                                onClick={addForBill}
                            >
                                Đặt chỗ
                            </button>
                        </div>
                        <div className="detailInfo__feePay mb-0">
                            <span className="pay-text">
                                {new Intl.NumberFormat("de-DE").format(
                                    dataPlace.price
                                )}
                                đ x {monthNumberLease} tháng
                            </span>
                            <span className="pay-money">{new Intl.NumberFormat("de-DE").format(
                                dataPlace.price * monthNumberLease)}đ</span>
                        </div>
                        <div className="detailInfo__feePay">
                            <span className="pay-text">
                                Phí dịch vụ CozyStay(5%)
                            </span>
                            <span className="pay-money">{new Intl.NumberFormat("de-DE").format(
                                dataPlace.price * monthNumberLease * 0.05)}đ</span>
                        </div>
                        <div className="detailInfo__line"></div>
                        <div className="detailInfo__total">
                            <span className="pay-total">Tổng tiền</span>
                            <span className="pay-totalMoney">{new Intl.NumberFormat("de-DE").format(
                                (dataPlace.price * monthNumberLease) + (dataPlace.price * monthNumberLease * 0.05))}đ</span>
                        </div>
                        {errorMoney && (<div className="t text-red-700">* Tài khoản không đủ mời nạp thêm</div>)}
                    </div>
                    <div className="detailInfo__warning">
                        <div className="warning-logo">
                            <Image
                                src={`/images/CS.png`}
                                alt="imagePlaces"
                                width={1000}
                                height={1000}
                                priority={true}
                            />
                        </div>
                        <div className="warning-text">
                            Để bảo vệ khoản thanh toán và quyền lợi của bạn,
                            tuyệt đối không chuyển tiền hoặc liên lạc bên ngoài
                            trang web CozyStay.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
