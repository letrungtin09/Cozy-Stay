import * as React from 'react';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from 'dayjs';
import { useState, useEffect } from "react";

interface Bill {
    dateStart: string; // Hoặc Date nếu bạn đã sử dụng đối tượng Date trực tiếp
    dateEnd: string; // Hoặc Date nếu bạn đã sử dụng đối tượng Date trực tiếp
    rentalMonth: number;
}

interface TableInforMyPlaceProps {
    bill: Bill;
}

export default function TableInforMyPlace({ bill }: TableInforMyPlaceProps) {
    // Chuyển đổi dateEnd từ string sang đối tượng Date
    const targetDate = new Date(bill.dateEnd);
    const [daysLeft, setDaysLeft] = useState<number>(0);

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const timeDifference = targetDate.getTime() - now.getTime();

            if (timeDifference <= 0) {
                setDaysLeft(0);
                return;
            }

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            setDaysLeft(days);
        };

        updateCountdown(); // Cập nhật ngay lập tức
        const intervalId = setInterval(updateCountdown, 86400000); // Cập nhật mỗi ngày (24 giờ)

        return () => clearInterval(intervalId); // Dọn dẹp khi component bị hủy
    }, [targetDate]);

    return (
        <div className="detailInfo__right">
            <div className="detailInfo__fixed">
                <div className="detailInfo__position">
                    <div className="detailInfo__order">
                        <div className="timeOrder-numberMonth d-flex justify-between mb-[15px]">
                            <div className="timeOrder-date font-bold">
                                Số tháng thuê
                            </div>
                            <div className="timeOrder-number">
                                <span className="number-month mx-[30px]">{bill.rentalMonth}</span>
                            </div>
                        </div>
                        <div className="detailInfo__time">
                            <div className="detailInfo__date date-start d-flex justify-between items-center mb-[15px]">
                                <div className="date-title font-bold w-[35%]">
                                    Ngày bắt đầu
                                </div>
                                <div className="date-time">{dayjs(bill.dateStart).format('DD/MM/YYYY')}</div>
                            </div>
                            <div className="detailInfo__date date-end d-flex justify-between mb-[15px]">
                                <div className="date-title font-bold">
                                    Ngày kết thúc
                                </div>
                                <div className="date-time">{dayjs(bill.dateEnd).format('DD/MM/YYYY')}</div>
                            </div>
                        </div>
                        <div className="detailInfo__line"></div>
                        <h1 className="font-[600]">Thời gian còn lại:</h1><span className='text-[red] font-[500]'>{daysLeft} ngày</span>
                    </div>
                    <div className="detailInfo__warning">
                        <div className="warning-logo">
                            <img src="images/CS.png" alt="" />
                        </div>
                        <div className="warning-text">
                            Để bảo vệ khoản thanh toán và quyền lợi của bạn, tuyệt
                            đối không chuyển tiền hoặc liên lạc bên ngoài trang
                            web CozyStay.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
