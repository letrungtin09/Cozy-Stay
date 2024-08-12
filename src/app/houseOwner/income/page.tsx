"use client";
import LayoutHouseOwner from "@/components/layoutHouseOwner";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Home() {
  return (
    <>
      <LayoutHouseOwner>
        <section className="houserholder-container section-padding">
          <div className="content">
            <div className="col-1">
              <h1 className="title font-bold">Thống kê thu nhập</h1>
            </div>
            <div className="col-2">
              <div className="flex justify-center">
                <LineChart
                  xAxis={[{ dataKey: "x", label: "Tháng" }]}
                  series={[
                    {
                      dataKey: "y",
                      area: true,
                      label: "Tổng thu nhập mỗi tháng",
                    },
                  ]}
                  dataset={[
                    { x: 0, y: 0 },
                    { x: 1, y: 20000000 },
                    { x: 2, y: 15000000 },
                    { x: 3, y: 17000000 },
                    { x: 4, y: 27000000 },
                    { x: 5, y: 12000000 },
                    { x: 6, y: 16000000 },
                    { x: 7, y: 37000000 },
                    { x: 8, y: 17000000 },
                    { x: 9, y: 10000000 },
                    { x: 10, y: 12000000 },
                    { x: 11, y: 19000000 },
                    { x: 12, y: 24000000 },
                  ]}
                  width={1300}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
      </LayoutHouseOwner>
    </>
  );
}
