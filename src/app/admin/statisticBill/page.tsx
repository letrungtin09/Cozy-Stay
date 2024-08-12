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
                  <h2>Thống kê đơn đặt chỗ</h2>
                </div>
                <div className="content-adminBottom">
                  <div className="flex justify-center">
                    <LineChart
                      xAxis={[{ dataKey: "x", label: "Tháng" }]}
                      series={[
                        {
                          dataKey: "y",
                          area: true,
                          label: "Số đơn đặt chỗ trong tháng",
                        },
                      ]}
                      dataset={[
                        { x: 0, y: 10 },
                        { x: 1, y: 8 },
                        { x: 2, y: 21 },
                        { x: 3, y: 14 },
                        { x: 4, y: 9 },
                        { x: 5, y: 34 },
                        { x: 6, y: 17 },
                        { x: 7, y: 22 },
                        { x: 8, y: 12 },
                        { x: 9, y: 10 },
                        { x: 10, y: 8 },
                        { x: 11, y: 19 },
                        { x: 12, y: 24 },
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
