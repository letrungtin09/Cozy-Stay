"use client";
import LayoutCustomer from "@/components/layoutCustomer";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <LayoutCustomer>
        <div className="Wallet-container section-padding">
          <h1 className="title">Ví số dư của bạn</h1>
          <div className="content">
            <div className="info-wallet wallet-row">
              <p className="info-wallet-item line-bottom">
                <span className="title-info-wallet title-info-w-all">
                  Thông tin ví
                </span>
                <span className="total-money">1.650.000đ</span>
              </p>
              <p className="info-wallet-item">
                <span className="title-info-wallet">Tên người dùng:</span>
                <span id="name-user">Hà Trung Hiếu</span>
              </p>
              <p className="info-wallet-item">
                <span className="title-info-wallet">Số điện thoại:</span>
                <span id="sdt-user">0363348624</span>
              </p>
              <p className="info-wallet-item">
                <span className="title-info-wallet">Email:</span>
                <span id="sdt-user">hatrunghieu8624@gmail.com</span>
              </p>
              <p className="info-wallet-item line-bottom">
                <span className="title-info-wallet">Số dư ví:</span>
                <span className="total-money">1.650.000đ</span>
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
            <div className="history-wallet wallet-row">
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
              <p className="history-wallet-item history-w-col">
                <span className="id-history-w">26/06/2024</span>
                <span className="tengiaodich-history-w">Nạp tiền</span>
                <span className="sotiengiaodich-history-w">+100.000</span>
              </p>
              <p className="history-wallet-item history-w-col">
                <span className="id-history-w">26/06/2024</span>
                <span className="tengiaodich-history-w">Nạp tiền</span>
                <span className="sotiengiaodich-history-w">+1.000.000</span>
              </p>
              <p className="history-wallet-item history-w-col">
                <span className="id-history-w">26/06/2024</span>
                <span className="tengiaodich-history-w">Thanh toán phòng</span>
                <span className="sotiengiaodich-history-w">-1.850.000</span>
              </p>
              <p className="history-wallet-item history-w-col">
                <span className="id-history-w">26/06/2024</span>
                <span className="tengiaodich-history-w">Nạp tiền</span>
                <span className="sotiengiaodich-history-w">+2.500.000</span>
              </p>
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
    </>
  );
}
