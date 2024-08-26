import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from 'moment';
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import MapBoxComponentDetail from "./mapBoxDetail";

const DetailMapMyPlace: React.FC = ({ dataPlace }: any) => {

    return (
        <section className="detailMap">
            <div className="info-title">
                <h3>Nơi bạn sẽ sống</h3>
            </div>
            <div className="detailMap__showMap">
                <MapBoxComponentDetail latitude={dataPlace?.latitude || 0} longitude={dataPlace?.longtitude || 0} />
            </div>
            <div className="detailMap__address">
                {dataPlace?.address}
            </div>
        </section>
    );
}
export default DetailMapMyPlace;
