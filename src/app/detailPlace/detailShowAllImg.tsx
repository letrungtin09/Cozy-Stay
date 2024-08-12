import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
    faXmark
} from "@fortawesome/free-solid-svg-icons";
const DetailShowAllImage: React.FC = ({ onChangeOverLay, lishImage }: any) => {
    let imageList = []
    if (lishImage) {
        imageList = JSON.parse(lishImage)
    }
    return (
        <div
            className="w-full h-full fixed top-0 bg-color-black-2/90 z-[100000]"

        >
            <div className="relative overflow-y-auto h-[100vh] px-[30px] py-[40px] pr-[40px]">
                <button className="absolute text-[34px] top-2 right-6 p-2 text-white rounded-full text-[16px] z-[10000000]" onClick={onChangeOverLay}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 relative">
                    {imageList.map((image: any, index: number) => (
                        <div key={index} className="relative group">
                            <Image
                                className="w-full h-[500px] rounded-lg object-cover transition-transform duration-300 transform group-hover:scale-110"
                                src={`/images/places/${image}`}
                                alt="imagePlaces"
                                width={1000}
                                height={1000}
                                priority={true}
                            />
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}
export default DetailShowAllImage;