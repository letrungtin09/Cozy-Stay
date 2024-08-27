"use client";
import FooterAdmin from "@/components/adminComponent/FooterAdmin";
import HeaderAdmin from "@/components/adminComponent/HeaderAdmin";
import SideBarAdmin from "@/components/adminComponent/SideBarAdmin";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function Home() {
  const apiBill = `${localUrl}/api/bill?fee=""`;
  const [dataBill, setDataBill] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiBill);
        const dataRes = res.bill;
        setDataBill(dataRes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiBill]);

  const getData = () => {
    let data: any = [];
    dataBill.map((bill) => {
      data = [{ x: +bill.month, y: bill.total_amount }];
    });
    return data;
  };
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
                  <div className="text-center mb-[30px] mt-[20px] text-[18px] font-bold">
                    Bảng thống kê doanh thu theo tháng
                  </div>
                  <div className="flex justify-center mt-[20px] mb-[50px]">
                    <TableContainer component={Paper} className="w-[50%]">
                      <Table sx={{ minWidth: 350 }} aria-label="simple table">
                        <TableHead className="bg-color-green-0">
                          <TableRow>
                            <TableCell>Tháng</TableCell>
                            <TableCell align="right">Tổng tiền</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {dataBill.map((bill) => (
                            <TableRow
                              key={bill.month}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                className="bg-white"
                              >
                                {bill.month}
                              </TableCell>
                              <TableCell align="right">
                                {new Intl.NumberFormat("de-DE").format(
                                  bill.total_amount
                                )}
                                đ
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
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
                      dataset={getData()}
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
