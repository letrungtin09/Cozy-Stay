"use client";
import LayoutCustomer from "@/components/layoutCustomer";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import * as React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faChartArea } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CarouselRenderPlaces from "@/components/renderPlaces/carouselRenderPlaces";
import CarouselShowFullImg from "@/components/renderPlaces/carouselShowAllImg";
import { RenderPlaces } from "@/components/renderPlaces/RenderPlaces";

export default function Home() {
  return (
    <>
      <LayoutCustomer>
        <section className="SearchResults-container section-padding">
          <h1 className="title-SearchResults">
            Kết quả tìm kiếm của <span id="kq-search">vị trí gần bạn</span>
          </h1>
          <p className="sub-title-SearchResults pt-[5px] pb-[15px]">
            {" "}
            Có <span id="sl-search">10</span> chỗ ở phù hợp{" "}
          </p>
          <RenderPlaces></RenderPlaces>
        </section>
      </LayoutCustomer>
    </>
  );
}
