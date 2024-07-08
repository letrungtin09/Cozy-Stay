"use client";
import AsNavFor from "@/components/coverCarousel";
import BestPlace from "@/components/bestPlaces";
import LayoutCustomer from "@/components/layoutCustomer";
import { BestPlaces } from "@/components/renderPlaces/BestPlaces";
import { FilterCategory } from "@/components/renderCategory/FilterCategory";
import { RenderPlaces } from "@/components/renderPlaces/RenderPlaces";
import { Cover } from "@/components/renderPlaces/Cover";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <LayoutCustomer>
        {/* <section className="cover slider">
          <div className="carousel_cv h-[100vh] mt-[66px] w-full overflow-hidden relative">
            <AsNavFor></AsNavFor>
          </div>
        </section>
        <section className="pt-[50px] pb-[20px] pl-[75px] pr-[75px]">
          <BestPlace />
        </section>
        <section className="filter mb-[30px]">
          <FillterCarousel />
        </section>
        </section> */}
        <Cover></Cover>
        <BestPlaces></BestPlaces>
        <FilterCategory></FilterCategory>
        <RenderPlaces></RenderPlaces>
      </LayoutCustomer>
    </>
  );
}
