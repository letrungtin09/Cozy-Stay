"use client";
import ProtectedCustomer from "@/components/authorization/protectedCustomer";
import LayoutCustomer from "@/components/layoutCustomer";
import UserCurrent from "@/lib/currentUser";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import { useEffect, useState, useRef } from "react";
import moment from 'moment';
import Link from "next/link";
import PaymemtWallet from "./modalPayment";

export default function Home() {
  const idUserCurrent = UserCurrent.GetUserId();
  const apiWallet: string = `${localUrl}/api/wallet?id=${idUserCurrent}`;
  const apiUser: string = `${localUrl}/api/user?id=${idUserCurrent}`;
  const apiWalletOrigin: string = `${localUrl}/api/wallet`;
  const apiUserOrigin: string = `${localUrl}/api/user`;
  const [dataUser, setDataUser] = useState<any[]>([]);
  const [dataWallet, setDataWallet] = useState<any[]>([]);
  const [statusCheckCode, setStatusCheckCode] = useState(false);
  const [checkPayed, setCheckPayed] = useState(false);
  const [moneyPlus, setMoneyPlus] = useState(0);
  const hasRunRef = useRef(false);

  const handleCodeChange = (status: boolean) => {
    if (checkPayed) {
      alert('Vui lòng thanh toán hoặc hủy đơn chưa thanh toán trước khi tạo đơn mới')
    } else {

      setStatusCheckCode(status);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('status') === 'CANCELLED') {
      const orderCode = params.get('orderCode');
      const idlink = params.get('id');
      if (orderCode && idlink) {
        const apiWalletDelete = `${localUrl}/api/wallet?id=${orderCode}&linkQrId=${idlink}`;

        // Gọi API để xóa dữ liệu
        ApiFunctions.deleteData(apiWalletDelete)
          .then(() => {
            // Thay đổi URL mà không làm mới trang
            window.history.replaceState({}, '', '/wallet');
          })
          .catch(error => {
            console.error('Error deleting wallet:', error);
          });
      } else {
        console.error('Missing orderCode or idlink');
      }
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get('status') === 'PAID') {
      const orderCode = params.get('orderCode');
      const idlink = params.get('id');

      if (orderCode && idlink) {
        const dataWallet = {
          id: orderCode,
          transactionType: 1,
          linkQrId: idlink
        };

        // Gọi API để cập nhật dữ liệu
        ApiFunctions.putData(apiWalletOrigin, dataWallet)
          .then(response => {
            const data = response.data;
            if (data > 0 && !hasRunRef.current) {
              hasRunRef.current = true;
              plusTotalMoney(data);
              window.history.replaceState({}, '', '/wallet');
            }
          })
          .catch(error => {
            console.error('Error updating data:', error);
          });
      } else {
        console.error('Missing orderCode or idlink');
      }
    }
  }, []);

  const plusTotalMoney = (moneyChange: number) => {
    const dataUser = {
      id: idUserCurrent,
      moneyChange: moneyChange
    };
    ApiFunctions.putData(apiUserOrigin, dataUser).then((response) => {
      if (response) {
        setMoneyPlus(moneyChange)
      }
    });
  }

  useEffect(() => {
    ApiFunctions.getData(apiWallet).then((response) => {
      if (response) {
        setDataWallet(response.wallet)
      } else {
        setDataWallet([])
      }
    });
    ApiFunctions.getData(apiUser).then((response) => {
      if (response) {
        setDataUser(response.user)
      } else {
        setDataWallet([])
      }
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
                <span className="total-money">{formatNumber(dataUser[0]?.totalMoney + moneyPlus)}đ</span>
              </p>
              <p className="info-wallet-item">
                <span className="title-info-wallet">Tên người dùng:</span>
                <span id="name-user">{dataUser[0]?.userName}</span>
              </p>
              <p className="info-wallet-item">
                <span className="title-info-wallet">Số điện thoại:</span>
                <span id="sdt-user">
                  {!dataUser[0]?.phoneNumber ? <Link href={'/updateAccount'} className="underline text-blue-600">Cập nhập số điện thoại</Link> : dataUser[0].phoneNumber}
                </span>
              </p>
              <p className="info-wallet-item">
                <span className="title-info-wallet">Email:</span>
                <span id="sdt-user">{dataUser[0]?.email}</span>
              </p>
              <p className="info-wallet-item line-bottom">
                <span className="title-info-wallet">Số dư ví:</span>
                <span className="total-money">{formatNumber(dataUser[0]?.totalMoney + moneyPlus)}đ</span>
              </p>
              <button
                type="button"
                className="btn btn-primary btn-recharge"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => { handleCodeChange(true) }}
              >
                Nạp thêm +
              </button>
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
              {dataWallet.map(({ id, transactionType, date, changeMoney, linkQr }) => {
                const isPending = transactionType === 2;
                const isDeposit = transactionType === 1;
                const bgColor = isPending ? 'bg-yellow-500' : isDeposit ? 'bg-[#14be79]' : 'bg-red-600';
                const transactionLabel = isPending ? 'Chưa thanh toán' : isDeposit ? 'Nạp tiền' : 'Trừ tiền';
                const amountPrefix = isDeposit ? '+' : '-';
                if (isPending && !checkPayed) {
                  setCheckPayed(true);
                }
                const Content = (
                  <p className={`history-wallet-item history-w-col ${bgColor}`}>
                    <span className="id-history-w group relative">
                      {formatDate(date)}
                      <span className="absolute left-[100px]"> {formatTime(date)}</span>
                    </span>
                    <span className="tengiaodich-history-w">{transactionLabel}</span>
                    <span className="sotiengiaodich-history-w">
                      {isPending ? formatNumber(changeMoney) : `${amountPrefix}${formatNumber(changeMoney)}`}
                    </span>
                  </p>
                );

                return isPending ? (
                  <Link key={id} className="" href={linkQr}>
                    {Content}
                  </Link>
                ) : (<div key={id}>{Content}</div>);
              })}

              {dataWallet && dataWallet.length <= 0 && (
                <p className="history-wallet-item history-w-col bg-[#14be79]">* Tài khoản chưa phát sinh giao dịch</p>
              )}

            </div>
          </div>
        </div>

        {statusCheckCode && <PaymemtWallet onCodeChange={handleCodeChange} />}
      </LayoutCustomer>
    </ProtectedCustomer>

  );
}
