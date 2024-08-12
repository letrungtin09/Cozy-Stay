import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
    faHouse
} from "@fortawesome/free-solid-svg-icons";
const DetailImage: React.FC = ({ dataPlaceTitle, dataPlaceImg, onChangeOverLay }: any) => {
    let imageList = []
    if (dataPlaceImg) {
        imageList = JSON.parse(dataPlaceImg)
    }

    return (
        <>
            <section className="detailImg relative">
                <div className="detailImg__title">
                    <h1>
                        <FontAwesomeIcon icon={faHouse} /> {dataPlaceTitle}
                    </h1>
                </div>
                <div className="detailImg__imgs">
                    <div className="detailImg__imgs__left">
                        <Image
                            src={`/images/places/${imageList[0]}`}
                            alt="imagePlaces"
                            width={1000}
                            height={1000}
                            priority={true}
                        />
                    </div>
                    <div className="detailImg__imgs__right">
                        <div className="right-1">
                            <Image
                                src={`/images/places/${imageList[1]}`}
                                alt="imagePlaces"
                                width={1000}
                                height={1000}
                                priority={true}
                            />
                            <Image
                                src={`/images/places/${imageList[2]}`}
                                alt="imagePlaces"
                                width={1000}
                                height={1000}
                                priority={true}
                            />
                        </div>
                        <div className="right-2">
                            <Image
                                src={`/images/places/${imageList[3]}`}
                                alt="imagePlaces"
                                width={1000}
                                height={1000}
                                priority={true}
                            />
                            <Image
                                src={`/images/places/${imageList[4]}`}
                                alt="imagePlaces"
                                width={1000}
                                height={1000}
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
                <button
                    onClick={onChangeOverLay}
                    className="absolute top-[62px] right-3 bg-white opacity-[0.8] border hover:opacity-100 border-gray-300 px-3 py-1 text-black rounded shadow hover:bg-gray-100"
                >
                    Xem thêm
                </button>
            </section>
        </>
    );
}
export default DetailImage;