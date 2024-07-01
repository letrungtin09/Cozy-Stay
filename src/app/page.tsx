"use client"
import AsNavFor from "@/components/coverCarousel";
import BestPlace from "@/components/bestPlaces";
import LayoutCustomer from "@/components/layoutCustomer";
import FillterCarousel from "@/components/fillterCarousel";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <LayoutCustomer>
        <section className="cover slider">
          <div className="carousel_cv h-[100vh] mt-[66px] w-full overflow-hidden relative">
            <AsNavFor />
          </div>
        </section>
        <section className="pt-[50px] pb-[20px] pl-[75px] pr-[75px]">
          <BestPlace />
        </section>
        <section className="filter">
          <FillterCarousel />
        </section>
      </LayoutCustomer>
    </>
  );
}
