"use client";
import ProtectedCustomer from "@/components/authorization/protectedCustomer";
import LayoutCustomer from "@/components/layoutCustomer";
import UserCurrent from "@/lib/currentUser";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import { useEffect, useState } from "react";
import moment from 'moment';
import Link from "next/link";

export default function Home() {
  const idUserCurrent = UserCurrent.GetUserId();
  const apiWallet: string = `${localUrl}/api/wallet?id=${5}`;
  const apiUser: string = `${localUrl}/api/user?id=${idUserCurrent}`;
  const [dataUser, setDataUser] = useState<any[]>([]);
  const [dataWallet, setDataWallet] = useState<any[]>([]);

  useEffect(() => {
    ApiFunctions.getData(apiWallet).then((response) => {
      setDataWallet(response.wallet)
    });
    ApiFunctions.getData(apiUser).then((response) => {
      setDataUser(response.user)
    });
  }, []);

  const formatDate = (dateString: any) => {
    return moment(dateString).format('DD-MM-YYYY');
  };
  const formatTime = (dateString: any) => {
    return moment(dateString).format('HH:mm:ss');
  };
  const formatNumber = (number: number) => {
    return new Intl.NumberFormat('vi-VN').format(number);
  };
  if (dataUser.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <ProtectedCustomer>
      <LayoutCustomer>
        <div className="Wallet-container section-padding">
          <h1 className="title">Ví số dư của bạn</h1>
          <div className="content">
            <div className="info-wallet wallet-row">
              <p className="info-wallet-item line-bottom">
                <span className="title-info-wallet title-info-w-all">
                  Thông tin ví
                </span>
                <span className="total-money">{dataUser[0].totalMoney}đ</span>
              </p>
              <p className="info-wallet-item">
                <span className="title-info-wallet">Tên người dùng:</span>
                <span id="name-user">{dataUser[0].userName}</span>
              </p>
              <p className="info-wallet-item">
                <span className="title-info-wallet">Số điện thoại:</span>
                <span id="sdt-user">
                  {!dataUser[0].phoneNumber ? <Link href={'/updateAccount'} className="underline text-blue-600">Cập nhập số điện thoại</Link> : dataUser[0].phoneNumber}
                </span>
              </p>
              <p className="info-wallet-item">
                <span className="title-info-wallet">Email:</span>
                <span id="sdt-user">{dataUser[0].email}</span>
              </p>
              <p className="info-wallet-item line-bottom">
                <span className="title-info-wallet">Số dư ví:</span>
                <span className="total-money">{dataUser[0].totalMoney}đ</span>
              </p>
              <button
                type="button"
                className="btn btn-primary btn-recharge"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Nạp thêm +
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                // tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    {/* <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Nạp tiền vào ví
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div> */}
                    <div className="modal-body">
                      <form action="">
                        <p className="title-naptien">Nhập số tiền</p>
                        <input type="number" placeholder="Nhập số tiền..." />
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary thoat"
                        data-bs-dismiss="modal"
                      >
                        Thoát
                      </button>
                      <button type="button" className="btn btn-primary xacnhan">
                        Xác nhận nạp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <a href="#" className="btn-recharge">Nạp tiền +</a> */}
            </div>
            <div className="history-wallet wallet-row overflow-auto max-h-80">
              <p className="history-wallet-item">
                <span className="title-history-wallet title-info-w-all">
                  Lịch sử giao dịch
                </span>
              </p>
              <p className="history-wallet-item title-history-w-item">
                <span className="title-history-w">NGÀY GIAO DỊCH</span>
                <span className="title-history-w">LOẠI GIAO DỊCH</span>
                <span className="title-history-w">SỐ TIỀN (vnđ)</span>
              </p>
              {dataWallet.map((wallet: any) => (
                <p key={wallet.id} className={`history-wallet-item history-w-col ${wallet.transactionType === 1 ? 'bg-[#14be79]' : 'bg-red-600'}`}>
                  <div className="id-history-w group relative">{formatDate(wallet.date)}
                    <span className="absolute left-[100px]"> {formatTime(wallet.date)}</span>
                  </div>
                  <span className="tengiaodich-history-w">{wallet.transactionType === 1 ? 'nạp tiền' : 'Trừ tiền'}</span>
                  <span className="sotiengiaodich-history-w">{wallet.transactionType === 1 ? '+' : '-'}{formatNumber(wallet.changeMoney)}</span>
                </p>
              ))}
              {dataWallet && dataWallet.length <= 0 && (
                <p className="history-wallet-item history-w-col">* Tài khoản chưa phát sinh giao dịch</p>
              )}

            </div>
            {/* <div className="popup-nap-tien">
          <form action="">
            <p className="title-naptien">Nhập số tiền</p>
            <input type="number" placeholder="Nhập số tiền...">
            <button type="submit">Nạp ngay</button>
          </form>
        </div> */}
          </div>
        </div>
      </LayoutCustomer>
    </ProtectedCustomer>

  );
}
