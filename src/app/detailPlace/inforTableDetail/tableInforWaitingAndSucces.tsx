import * as React from 'react';
import {

    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs, { Dayjs } from 'dayjs';

export default function TableInforWaitingAndSucces({ bill }: any) {
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
                        <div className="detailInfo__btnOrder">
                            {bill.status === 0 ? (
                                <button
                                    className="btn-order !bg-color-yellow-button"
                                    disabled
                                >
                                    Đang chờ xác nhận từ chủ nhà
                                </button>

                            ) : bill.status === 1 ? (
                                <button
                                    className="btn-order"
                                    onClick={() => { window.location.href = "/myPlace"; }}
                                >
                                    Xem chi tiết phòng/nhà của bạn <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            ) : null}
                        </div>
                        <div className="detailInfo__line"></div>
                        <div className="detailInfo__total">
                            <span className="pay-total">Tổng tiền</span>
                            <span className="pay-totalMoney">{new Intl.NumberFormat("de-DE").format(
                                bill.total)} đ</span>
                        </div>
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
