"use client";
import * as React from "react";
import LayoutHouseOwner from "@/components/layoutHouseOwner";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import UserCurrent from "@/lib/currentUser";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import RefundGenerate from "@/lib/refund";

export default function Home() {
  const id = UserCurrent.GetUserId();
  const apiPlaces = `${localUrl}/api/places?idUser=${id}`;
  const apiBill = `${localUrl}/api/bill`;
  const [dataPlaces, setDataPlaces] = useState<any[]>([]);
  const [dataBill, setDataBill] = useState<any[]>([]);
  const [dataBillById, setDataBillById] = useState<any>([]);
  const [dataEmail, setDataEmail] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiFunctions.getData(apiPlaces);
        const dataRes = res.places;
        const sortData = dataRes.sort(function (a: any, b: any) {
          return b.id - a.id;
        });
        setDataPlaces(sortData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiPlaces]);

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

  const updateMoneyPartner = async (moneyChange: number) => {
    const apiUser = `${localUrl}/api/user`;
    const dataUser = {
      id: id,
      moneyChange: moneyChange,
    };
    try {
      await ApiFunctions.putData(apiUser, dataUser);
    } catch (error) {
      console.log(error);
    }
  };

  const updateMoneyUser = async (moneyChange: number, idUser: any) => {
    const apiUser = `${localUrl}/api/user`;
    const dataUser = {
      id: idUser,
      moneyChange: moneyChange,
    };
    try {
      await ApiFunctions.putData(apiUser, dataUser);
    } catch (error) {
      console.log(error);
    }
  };

  const getBillById = async (id: any) => {
    const apiBill = `${localUrl}/api/bill?id=${id}`;
    try {
      const res = await ApiFunctions.getData(apiBill);
      setDataBillById(res.bill);
      return res.bill;
    } catch (error) {
      console.log(error);
    }
  };

  const getEmailUser = async (idUser: any) => {
    const apiUser = `${localUrl}/api/user?id=${idUser}`;
    try {
      const res = await ApiFunctions.getData(apiUser);
      setDataEmail(res.user[0].email);
      return res.user[0].email;
    } catch (error) {
      console.log(error);
    }
  };

  const confirmStatusBill = async (id: any) => {
    const idUserNow = UserCurrent.GetUserId();
    const apiBill = `${localUrl}/api/bill?id=${id}`;
    const statusBill = {
      status: 1,
    };
    try {
      const bill = await getBillById(id);
      const moneyChange = bill[0].total - bill[0].serviceFee;
      await updateMoneyPartner(moneyChange);
      const email = await getEmailUser(bill[0].idUser);
      RefundGenerate.handleSendEmailAccept(email, id);
      RefundGenerate.handleSendWallet(idUserNow, 1, moneyChange);
      await ApiFunctions.putData(apiBill, statusBill);
      alert("Xác nhận thành công !");
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const cancelBill = async (id: any) => {
    const apiBill = `${localUrl}/api/bill?id=${id}`;
    try {
      const bill = await getBillById(id);
      const moneyChange = bill[0].total;
      const idUser = bill[0].idUser;
      await updateMoneyUser(moneyChange, idUser);
      const email = await getEmailUser(bill[0].idUser);
      RefundGenerate.handleSendEmail(email, id);
      RefundGenerate.handleSendWallet(bill[0].idUser, 0, moneyChange);
      await ApiFunctions.deleteData(apiBill);
      alert("Hủy đơn thành công !");
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <LayoutHouseOwner>
        <section className="houserholder-container section-padding">
          <div className="content">
            <div className="col-1">
              <h1 className="title font-bold">Đơn đặt chỗ ở</h1>
            </div>
            <div className="col-2">
              <TabContext value={value}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Đơn yêu cầu đặt chỗ" value="1" />
                  <Tab label="Đơn đã xác nhận" value="2" />
                </TabList>
                <TabPanel value="1" className="px-0">
                  <table className="table table-list-house table-hover">
                    <thead>
                      <tr>
                        <th className="text-center" scope="col">
                          ID
                        </th>
                        <th className="text-center" scope="col">
                          ĐỊA CHỈ CHỖ Ở
                        </th>
                        <th className="text-center" scope="col">
                          NGÀY LẬP ĐƠN
                        </th>
                        <th className="text-center" scope="col">
                          NGÀY BẮT ĐẦU
                        </th>
                        <th className="text-center" scope="col">
                          NGÀY KẾT THÚC
                        </th>
                        <th className="text-center" scope="col">
                          SỐ THÁNG THUÊ
                        </th>
                        <th className="text-center" scope="col">
                          TỔNG TIỀN
                        </th>
                        <th className="text-center" scope="col">
                          TRẠNG THÁI
                        </th>
                        <th className="text-center" scope="col">
                          THAO TÁC
                        </th>
                      </tr>
                    </thead>
                    <tbody className="s">
                      {dataBill.map((bill) =>
                        dataPlaces.map((place) =>
                          bill.idPlace == place.id ? (
                            bill.status == 0 ? (
                              <>
                                <tr key={bill.id}>
                                  <td className="text-center">{bill.id}</td>
                                  <td className="text-center">
                                    {place.address}
                                  </td>
                                  <td className="text-center">
                                    {bill.dateOrder}
                                  </td>
                                  <td className="text-center">
                                    {bill.dateStart}
                                  </td>
                                  <td className="text-center">
                                    {bill.dateEnd}
                                  </td>
                                  <td className="text-center">
                                    {bill.rentalMonth}
                                  </td>
                                  <td className="text-center">
                                    {new Intl.NumberFormat("de-DE").format(
                                      bill.total
                                    )}
                                    đ
                                  </td>
                                  <td className="text-center font-bold ">
                                    <span className="text-orange-700">
                                      Chờ xác nhận
                                    </span>
                                  </td>
                                  <td className="text-center">
                                    <div className="flex">
                                      <button
                                        className="mr-[5px] bg-blue-600 px-3 py-2.5 text-color-white-0 rounded-lg font-bold"
                                        onClick={() =>
                                          confirmStatusBill(bill.id)
                                        }
                                      >
                                        Xác nhận
                                      </button>
                                      <button
                                        type="button"
                                        className=" bg-red-600 px-3 py-2 text-color-white-0 rounded-lg font-bold"
                                        onClick={() => cancelBill(bill.id)}
                                      >
                                        Hủy
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </>
                            ) : (
                              <></>
                            )
                          ) : (
                            <></>
                          )
                        )
                      )}
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel value="2">
                  <table className="table table-list-house table-hover">
                    <thead>
                      <tr>
                        <th className="text-center" scope="col">
                          ID
                        </th>
                        <th className="text-center" scope="col">
                          ĐỊA CHỈ
                        </th>
                        <th className="text-center" scope="col">
                          NGÀY LẬP ĐƠN
                        </th>
                        <th className="text-center" scope="col">
                          NGÀY BẮT ĐẦU
                        </th>
                        <th className="text-center" scope="col">
                          NGÀY KẾT THÚC
                        </th>
                        <th className="text-center" scope="col">
                          SỐ THÁNG THUÊ
                        </th>
                        <th className="text-center" scope="col">
                          TỔNG TIỀN
                        </th>
                        <th className="text-center" scope="col">
                          TRẠNG THÁI
                        </th>
                      </tr>
                    </thead>
                    <tbody className="s">
                      {dataBill.map((bill) =>
                        dataPlaces.map((place) =>
                          bill.idPlace == place.id ? (
                            bill.status == 1 ? (
                              <>
                                <tr key={bill.id}>
                                  <td className="text-center">{bill.id}</td>
                                  <td className="text-center">
                                    {place.address}
                                  </td>
                                  <td className="text-center">
                                    {bill.dateOrder}
                                  </td>
                                  <td className="text-center">
                                    {bill.dateStart}
                                  </td>
                                  <td className="text-center">
                                    {bill.dateEnd}
                                  </td>
                                  <td className="text-center">
                                    {bill.rentalMonth}
                                  </td>
                                  <td className="text-center">
                                    {new Intl.NumberFormat("de-DE").format(
                                      bill.total
                                    )}
                                    đ
                                  </td>
                                  <td className="text-center font-bold ">
                                    <span className="text-green-700">
                                      Đã xác nhận
                                    </span>
                                  </td>
                                </tr>
                              </>
                            ) : (
                              <></>
                            )
                          ) : (
                            <></>
                          )
                        )
                      )}
                    </tbody>
                  </table>
                </TabPanel>
              </TabContext>
            </div>
          </div>
        </section>
      </LayoutHouseOwner>
    </>
  );
}
