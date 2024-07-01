import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/arrowsCarousel.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next-arrow bg-blue-500 rounded-full p-2`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev-arrow bg-blue-500 rounded-full p-2`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    );
};
const FillterCarousel: React.FC = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 9,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <>
            <div className="line w-full h-[1px] bg-color-black-4 mb-[20px]"></div>
            <div className="filter__container section-padding px-[75px]">
                <div className="filter__slider">
                    <div className="filter__list">
                        <Slider {...settings}>
                            <div className="filter__item text-color-black-2">
                                <div className="mb-[8px] filter__icon flex justify-center">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        width={20}
                                        height={20}
                                        className="mr-[2px] inline-block mb-[-1px]"
                                    />
                                </div>
                                <div className="filter__text text-[16px] font-[500] text-center">Nhà ở Boutique
                                    <div className="w-full h-[1px] bg-color-green-0"></div>
                                </div>

                            </div>
                            <div className="filter__item text-color-black-2">
                                <div className="mb-[8px] filter__icon flex justify-center">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        width={20}
                                        height={20}
                                        className="mr-[2px] inline-block mb-[-1px]"
                                    />
                                </div>
                                <div className="filter__text text-[16px] font-[500] text-center">Nhà ở Boutique</div>
                            </div>
                            <div className="filter__item text-color-black-2">
                                <div className="mb-[8px] filter__icon flex justify-center">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        width={20}
                                        height={20}
                                        className="mr-[2px] inline-block mb-[-1px]"
                                    />
                                </div>
                                <div className="filter__text text-[16px] font-[500] text-center">Nhà ở Boutique</div>
                            </div>
                            <div className="filter__item text-color-black-2">
                                <div className="mb-[8px] filter__icon flex justify-center">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        width={20}
                                        height={20}
                                        className="mr-[2px] inline-block mb-[-1px]"
                                    />
                                </div>
                                <div className="filter__text text-[16px] font-[500] text-center">Nhà ở Boutique</div>
                            </div>
                            <div className="filter__item text-color-black-2">
                                <div className="mb-[8px] filter__icon flex justify-center">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        width={20}
                                        height={20}
                                        className="mr-[2px] inline-block mb-[-1px]"
                                    />
                                </div>
                                <div className="filter__text text-[16px] font-[500] text-center">Nhà ở Boutique</div>
                            </div>
                            <div className="filter__item text-color-black-2">
                                <div className="mb-[8px] filter__icon flex justify-center">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        width={20}
                                        height={20}
                                        className="mr-[2px] inline-block mb-[-1px]"
                                    />
                                </div>
                                <div className="filter__text text-[16px] font-[500] text-center">Nhà ở Boutique</div>
                            </div>
                            <div className="filter__item text-color-black-2">
                                <div className="mb-[8px] filter__icon flex justify-center">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        width={20}
                                        height={20}
                                        className="mr-[2px] inline-block mb-[-1px]"
                                    />
                                </div>
                                <div className="filter__text text-[16px] font-[500] text-center">Nhà ở Boutique</div>
                            </div>
                            <div className="filter__item text-color-black-2">
                                <div className="mb-[8px] filter__icon flex justify-center">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        width={20}
                                        height={20}
                                        className="mr-[2px] inline-block mb-[-1px]"
                                    />
                                </div>
                                <div className="filter__text text-[16px] font-[500] text-center">Nhà ở Boutique</div>
                            </div>
                            <div className="filter__item text-color-black-2">
                                <div className="mb-[8px] filter__icon flex justify-center">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        width={20}
                                        height={20}
                                        className="mr-[2px] inline-block mb-[-1px]"
                                    />
                                </div>
                                <div className="filter__text text-[16px] font-[500] text-center">Nhà ở Boutique</div>
                            </div>
                            <div className="filter__item text-color-black-2">
                                <div className="mb-[8px] filter__icon flex justify-center">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        width={20}
                                        height={20}
                                        className="mr-[2px] inline-block mb-[-1px]"
                                    />
                                </div>
                                <div className="filter__text text-[16px] font-[500] text-center">Nhà ở Boutique</div>
                            </div>
                            <div className="filter__item text-color-black-2">
                                <div className="mb-[8px] filter__icon flex justify-center">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        width={20}
                                        height={20}
                                        className="mr-[2px] inline-block mb-[-1px]"
                                    />
                                </div>
                                <div className="filter__text text-[16px] font-[500] text-center">Nhà ở Boutique</div>
                            </div>
                            <div className="filter__item text-color-black-2">
                                <div className="mb-[8px] filter__icon flex justify-center">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        width={20}
                                        height={20}
                                        className="mr-[2px] inline-block mb-[-1px]"
                                    />
                                </div>
                                <div className="filter__text text-[16px] font-[500] text-center">Nhà ở Boutique</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FillterCarousel;