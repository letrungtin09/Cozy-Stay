import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from 'moment';
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import {
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DetailPartner: React.FC = ({ dataJoinRules, dataRules, dataParner }: any) => {

    return (
        <section className="detailPartner">
            <div className="info-title">
                <h3>Gặp gỡ chủ nhà</h3>
            </div>
            <div className="detailPartner__content">
                <div className="detailPartner__info">
                    <div>
                        <div className="detailPartner__personal">
                            <div className="detailPartner__left">
                                <div className="detailPartner__avatar">
                                    <Image
                                        src={`/images/${dataParner.user[0].avatar}`}
                                        alt="avatar"
                                        width={500}
                                        height={500}
                                        priority={true}
                                    />
                                </div>
                                <div className="detailPartner__name">{dataParner.user[0].userName}</div>
                                <div className="detailPartner__role">
                                    Chủ nhà cho thuê
                                </div>
                            </div>
                            <div className="detailPartner__right">
                                <div>
                                    <div className="detailPartner__confirm">
                                        <span>Thông tin đã xác minh</span>
                                    </div>
                                    <div className="detailPartner__confirm">
                                        <FontAwesomeIcon icon={faCheck} />{" "}
                                        <span>Địa chỉ email</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detailPartner__intro">
                            <div className="detailPartner__introTitle">
                                Giới thiệu chủ nhà
                            </div>
                            <div className="detailPartner__introText">
                                {dataParner.user[0].info}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detailPartner__rulePlace">
                    <div className="detailPartner__title">Nội quy cho thuê</div>
                    <div className="detailPartner__allRule">
                        {dataJoinRules.map((join: any) => {
                            const matchedRule = dataRules.find((ru: any) => join.idRules === ru.id);

                            if (matchedRule) {
                                return (
                                    <div className="detailPartner__item" key={join.id}>
                                        <div className="detailPartner__icon">
                                            <Image
                                                className="w-6"
                                                src={`/images/iconSvg/iconRules/${matchedRule.icon}`}
                                                alt="icon"
                                                width={100}
                                                height={100}
                                                priority={true}
                                            />
                                        </div>
                                        <div className="detailPartner__rule">
                                            {matchedRule.nameRules}
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div className="detailPartner__warning">
                        <div className="warning-logo">
                            <Image
                                className="w-6"
                                src={`/images/CS.png`}
                                alt="avatar"
                                width={100}
                                height={100}
                                priority={true}
                            />
                        </div>
                        <div className="warning-text">
                            Để bảo vệ khoản thanh toán và quyền lợi của bạn, tuyệt đối
                            không chuyển tiền hoặc liên lạc bên ngoài trang web
                            CozyStay.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default DetailPartner;
