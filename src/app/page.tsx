"use client"
import AsNavFor from "@/components/coverCarousel";
import LayoutCustomer from "@/components/layoutCustomer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <LayoutCustomer>
        <section className="cover slider">
          <div className="carousel_cv h-[100vh] mt-[66px] w-full overflow-hidden relative">

            <AsNavFor></AsNavFor>
          </div>
        </section>
      </LayoutCustomer>
    </>
  );
}
