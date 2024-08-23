"use client";
import LayoutCustomer from "@/components/layoutCustomer";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";

import {
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "moment/locale/en-gb";
import DetailImage from "./imageDetail/detailImg";
import DetailShowAllImage from "./imageDetail/detailShowAllImg";
import DetailInfor from "./inforTableDetail/detailInfor";
import DetailComment from "./commentDetail";
import DetailMap from "./mapDetail";
import DetailPartner from "./partNerDetail";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams!.get("id");
  const apiPlace = `${localUrl}/api/places?id=${id}`;
  const apiJoinConvenient = `${localUrl}/api/joinConvenient?idPlace=${id}`;
  const apiConvenient = `${localUrl}/api/convenient`;
  const apiJoinRules = `${localUrl}/api/joinRules?idPlace=${id}`;
  const apiRules = `${localUrl}/api/rules`;
  const [dataPlace, setDataPlace] = useState<any>([]);
  const [dataJoinConvenient, setDataJoinConvenient] = useState<any[]>([]);
  const [dataConvenient, setDataConvenient] = useState<any[]>([]);
  const [dataJoinRules, setDataJoinRules] = useState<any[]>([]);
  const [dataRules, setDataRules] = useState<any[]>([]);
  const [dataParner, setDataParner] = useState();
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const changeOverLAy = () => {
    setOverlayVisible((prev) => {
      const newStatus = !prev; // Đảo trạng thái
      document.body.classList.toggle("overflow-hidden", newStatus);
      return newStatus;
    });
  };


  useEffect(() => {
    const fetchDataPlace = async () => {
      try {
        const resPlace = await ApiFunctions.getData(apiPlace);
        setDataPlace(resPlace.places[0]);

        if (resPlace.places[0].idUser) {
          const apiPartner = `${localUrl}/api/user?id=${resPlace.places[0].idUser}`;
          const resPartner = await ApiFunctions.getData(apiPartner);
          setDataParner(resPartner)
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataPlace();
  }, [apiPlace]);



  useEffect(() => {
    const fetchDataJoinConvenient = async () => {
      try {
        const res = await ApiFunctions.getData(apiJoinConvenient);
        setDataJoinConvenient(res.joinConvenient);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataJoinConvenient();
  }, [apiJoinConvenient]);

  useEffect(() => {
    const fetchDataConvenient = async () => {
      try {
        const res = await ApiFunctions.getData(apiConvenient);
        setDataConvenient(res.convenient);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataConvenient();
  }, [apiConvenient]);

  useEffect(() => {
    const fetchDataJoinRules = async () => {
      try {
        const res = await ApiFunctions.getData(apiJoinRules);
        setDataJoinRules(res.joinRules);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataJoinRules();
  }, [apiJoinRules]);

  useEffect(() => {
    const fetchDataRules = async () => {
      try {
        const res = await ApiFunctions.getData(apiRules);
        setDataRules(res.rules);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataRules();
  }, [apiRules]);
  return (
    <>
      <LayoutCustomer>
        {isOverlayVisible && (
          <DetailShowAllImage
            onChangeOverLay={changeOverLAy}
            lishImage={dataPlace.image}
          />
        )}

        <div className="detailContent flex justify-center">
          <div className="w-[1120px]">
            <DetailImage
              dataPlaceTitle={dataPlace.title}
              dataPlaceImg={dataPlace.image}
              onChangeOverLay={changeOverLAy}
            />

            {dataParner && <DetailInfor
              dataPlace={dataPlace}
              dataJoinConvenient={dataJoinConvenient}
              dataConvenient={dataConvenient}
              dataParner={dataParner}
            />}

            <div className="detailInfo__line"></div>

            <DetailComment idPlace={id} />

            <div className="detailInfo__line"></div>

            <DetailMap dataPlace={dataPlace} />

            <div className="detailInfo__line"></div>
            {dataParner && <DetailPartner
              dataJoinRules={dataJoinRules}
              dataRules={dataRules}
              dataParner={dataParner} />}
          </div>
        </div>
      </LayoutCustomer>
    </>
  );
}
