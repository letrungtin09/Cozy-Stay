"use client";
import LayoutHouseOwner from "@/components/layoutHouseOwner";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
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
  const apiBill = `${localUrl}/api/bill?statics=""`;
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
    <>
      <LayoutHouseOwner>
        <section className="houserholder-container section-padding">
          <div className="content">
            <div className="col-1">
              <h1 className="title font-bold">Thống kê thu nhập</h1>
            </div>
            <div className="col-2">
              <div className="text-center mt-[0px] text-[18px] font-bold">
                Bảng thống kê thu nhập theo tháng
              </div>
              <div className="flex justify-center mt-[20px] mb-[50px]">
                <TableContainer component={Paper} className="w-[50%]">
                  <Table
                    sx={{ minWidth: 350 }}
                    aria-label="simple table"
                    className="border-collapse border border-gray-500"
                  >
                    <TableHead className="bg-color-green-0">
                      <TableRow>
                        <TableCell className="border-collapse border border-gray-500">
                          Tháng
                        </TableCell>
                        <TableCell
                          className="border-collapse border border-gray-500"
                          align="right"
                        >
                          Tổng tiền
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dataBill.map((bill) => (
                        <TableRow
                          key={bill.month}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            className="border-collapse border border-gray-500"
                            component="th"
                            scope="row"
                          >
                            {bill.month}
                          </TableCell>
                          <TableCell
                            className="border-collapse border border-gray-500"
                            align="right"
                          >
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
                      label: "Tổng thu nhập mỗi tháng",
                    },
                  ]}
                  dataset={getData()}
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
