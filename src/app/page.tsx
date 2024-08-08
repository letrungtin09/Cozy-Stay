"use client";
import AsNavFor from "@/components/coverCarousel";
import BestPlace from "@/components/bestPlaces";
import LayoutCustomer from "@/components/layoutCustomer";
import { FilterCategory } from "@/components/renderCategory/FilterCategory";
import { RenderPlaces } from "@/components/renderPlaces/RenderPlaces";
import ChatBot from "@/components/chatBot.tsx";
import { useEffect, useState, Component } from "react";

export default function Home() {
  const [dataCate, setDataCate] = useState();

  const handleDataCateChange = (newData: any) => {
    setDataCate(newData);
  };

  return (
    <>
      <LayoutCustomer>
        <section className="cover slider">
          <div className="carousel_cv h-[100vh] w-full overflow-hidden relative">
            <AsNavFor></AsNavFor>
          </div>
        </section>
        <section className="pt-[50px] pb-[20px] pl-[75px] pr-[75px]">
          <BestPlace />
        </section>
        <FilterCategory onDataChange={handleDataCateChange}></FilterCategory>
        <RenderPlaces cateId={dataCate}></RenderPlaces>
        <ChatBot />
      </LayoutCustomer>
    </>
  );
}
