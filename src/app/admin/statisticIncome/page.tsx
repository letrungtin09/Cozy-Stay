"use client";
import FooterAdmin from "@/components/adminComponent/FooterAdmin";
import HeaderAdmin from "@/components/adminComponent/HeaderAdmin";
import SideBarAdmin from "@/components/adminComponent/SideBarAdmin";
import { LineChart } from "@mui/x-charts";

export default function Home() {
  return (
    <div>
      <section className="main-admin">
        <div className="container-fluid">
          <div className="row">
            <SideBarAdmin />
            <div className="col-10 right-admin">
              <HeaderAdmin />

              <div className="content-admin">
                <div className="content-adminTop">
                  <h2>Thống kê doanh thu</h2>
                </div>
                <div className="content-adminBottom">
                  <div className="flex justify-center">
                    <LineChart
                      xAxis={[{ dataKey: "x", label: "Tháng" }]}
                      series={[
                        {
                          dataKey: "y",
                          area: true,
                          label: "Tổng doanh thu mỗi tháng",
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
                      width={1100}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <FooterAdmin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
