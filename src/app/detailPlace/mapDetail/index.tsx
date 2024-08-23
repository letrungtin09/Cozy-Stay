import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from 'moment';
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import MapBoxComponent from "./mapBox";

const DetailMap: React.FC = ({ dataPlace }: any) => {

    console.log(dataPlace?.latitude)
    const getAddress = (address: string) => {
        if (typeof address === 'string' && address.includes(", ")) {
            const parts = address.split(", ");
            return parts.slice(-3).join(", ");
        }
        return "Địa chỉ không hợp lệ";
    }
    return (
        <section className="detailMap">
            <div className="info-title">
                <h3>Nơi bạn sẽ sống</h3>
            </div>
            <div className="detailMap__showMap">
                <MapBoxComponent latitude={dataPlace?.latitude || 0} longitude={dataPlace?.longtitude || 0} />
            </div>
            <div className="detailMap__address">
                {getAddress(dataPlace?.address)}
            </div>
        </section>
    );
}
export default DetailMap;
