import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from 'moment';
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";

const DetailMap: React.FC = ({ dataPlace }: any) => {

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
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.443980540085!2d106.62348867451811!3d10.853796757762948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a20d8555e69%3A0x743b1e9558fb89e0!2sQTSC%209%20Building!5e0!3m2!1svi!2s!4v1718375141696!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    loading="lazy"
                ></iframe>
            </div>
            <div className="detailMap__address">
                {getAddress(dataPlace?.address)}
            </div>
        </section>
    );
}
export default DetailMap;
