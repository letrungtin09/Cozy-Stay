import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
const BestPlace: React.FC = () => {
    const imageCover = [
        "/images/iconImage/img/bestPlace-SaiGon.jpg",
        "/images/iconImage/img/bestPlace-HaNoi.jpg",
        "/images/iconImage/img/bg-2.jpg",
        "/images/iconImage/img/bg-1.jpg"

    ];
    return (
        <>
            <div className="flex justify-between items-center mb-[20px]">
                <div className="bestPlace__text__title">
                    <h3 className="text-[28px] font-bold">Địa điểm dừng chân tiếp theo của bạn ở đâu ?</h3>
                    <p className="mb-0">Tìm chỗ ở mới của bạn tại 63 tỉnh thành của Việt Nam.</p>
                </div>
                <div className="bestPlace__text__btn">
                    <a href="#" className="inline-block w-[150px] py-[10px] px-0 text-center bg-btnColorGreen hover:bg-btnColorGreen-hover text-color-white-0 no-underline font-bold rounded-[10px] transition-all duration-300">Xem tất cả
                        <FontAwesomeIcon
                            icon={faCaretRight}
                            width={16}
                            height={16}
                            className="mr-[2px] inline-block mb-[-1px]"
                        />
                    </a>
                </div>
            </div>
            <div className="bestPlace__places">
                <div className="flex flex-wrap mt-0 justify-between">
                    <div className="flex-grow-0 flex-shrink-0 basis-auto w-[320px] group h-[420px] no-underline relative">
                        <div className="w-full h-full overflow-hidden rounded-[10px]">
                            <Image
                                className="img-center w-full h-full object-cover group-hover:scale-110 rounded-[10px] transition duration-500 object-[70%]"
                                src={imageCover[1]}
                                width={500}
                                height={500}
                                alt="best-Hanoi"
                            />
                        </div>
                        <div className="bestPlace__places__flex">
                            <div className="flex justify-center items-center absolute top-[83%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[230px] h-[70px] bg-btnColorGreen group-hover:bg-btnColorGreen-hover text-center text-color-white-0 rounded-[10px] transition duration-300">
                                <div>
                                    <div className="font-bold text-[18px]">Hà Nội</div>
                                    <div className="totalPlaces">53 địa điểm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 basis-auto w-[320px] group h-[420px] no-underline relative">
                        <div className="w-full h-full overflow-hidden rounded-[10px]">
                            <Image
                                className="img-center w-full h-full object-cover group-hover:scale-110 rounded-[10px] transition duration-500"
                                src={imageCover[0]}
                                width={500}
                                height={500}
                                alt="best-Hanoi"
                            />
                        </div>
                        <div className="bestPlace__places__flex">
                            <div className="flex justify-center items-center absolute top-[83%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[230px] h-[70px] bg-btnColorGreen group-hover:bg-btnColorGreen-hover text-center text-color-white-0 rounded-[10px] transition duration-300">
                                <div>
                                    <div className="font-bold text-[18px]">Sài Gòn</div>
                                    <div className="totalPlaces">53 địa điểm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 basis-auto w-[320px] group h-[420px] no-underline relative">
                        <div className="w-full h-full overflow-hidden rounded-[10px]">
                            <Image
                                className="img-center w-full h-full object-cover group-hover:scale-110 rounded-[10px] transition duration-500"
                                src={imageCover[2]}
                                width={500}
                                height={500}
                                alt="best-Hanoi"
                            />
                        </div>
                        <div className="bestPlace__places__flex">
                            <div className="flex justify-center items-center absolute top-[83%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[230px] h-[70px] bg-btnColorGreen group-hover:bg-btnColorGreen-hover text-center text-color-white-0 rounded-[10px] transition duration-300">
                                <div>
                                    <div className="font-bold text-[18px]">Đà Nẵng</div>
                                    <div className="totalPlaces">53 địa điểm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 basis-auto w-[320px] group h-[420px] no-underline relative">
                        <div className="w-full h-full overflow-hidden rounded-[10px]">
                            <Image
                                className="img-center w-full h-full object-cover group-hover:scale-110 rounded-[10px] transition duration-500"
                                src={imageCover[3]}
                                width={500}
                                height={500}
                                alt="best-Hanoi"
                            />
                        </div>
                        <div className="bestPlace__places__flex">
                            <div className="flex justify-center items-center absolute top-[83%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[230px] h-[70px] bg-btnColorGreen group-hover:bg-btnColorGreen-hover text-center text-color-white-0 rounded-[10px] transition duration-300">
                                <div>
                                    <div className="font-bold text-[18px]">Nha Trang</div>
                                    <div className="totalPlaces">53 địa điểm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BestPlace;