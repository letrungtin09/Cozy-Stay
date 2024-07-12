"use client";
import LayoutHouseOwner from "@/components/layoutHouseOwner";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <LayoutHouseOwner>
        <section className="houserholder-container section-padding">
          <div className="content">
            <div className="col-1">
              <h1 className="title">Nhà/Phòng cho thuê của bạn</h1>
              <Link className="btn-dk" href="/houseOwner/addPlace">
                Thêm mới
              </Link>
            </div>
            <div className="col-2">
              <table className="table table-list-house table-hover">
                <thead>
                  <tr>
                    <th className="text-center" scope="col">
                      STT
                    </th>
                    <th className="text-center" scope="col">
                      ẢNH ĐẠI DIỆN
                    </th>
                    <th className="text-center" scope="col">
                      TÊN PHÒNG/NHÀ
                    </th>
                    <th className="text-center" scope="col">
                      TRẠNG THÁI
                    </th>
                    <th className="text-center" scope="col">
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>
                <tbody className="s">
                  <tr>
                    <td className="text-center" scope="row">
                      1
                    </td>
                    <td className="img-place-holder">
                      <a href="#">
                        <img src="/img/img-places-5.webp" alt="" />
                      </a>
                    </td>
                    <td className="text-center">
                      <a href="#">Căn hộ dịch vụ cao cấp tại Điện Bàn</a>
                    </td>
                    <td className="d-flex justify-center">
                      <p className="con-trong"></p>
                      <span className="trang-thai">Còn trống</span>
                    </td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn-update bg-red-600 px-3 py-2 text-color-white-0 rounded-lg m-2"
                      >
                        Xóa
                      </button>
                      <Link
                        className="btn-update bg-sky-600 px-3 py-2.5 text-color-white-0 rounded-lg"
                        href="/houseOwner/updatePlace?id=1"
                      >
                        Sửa
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center" scope="row">
                      2
                    </td>
                    <td className="img-place-holder">
                      <a href="#">
                        <img src="/img/img-places-6.webp" alt="" />
                      </a>
                    </td>
                    <td className="text-center">
                      <a href="#">Căn hộ dịch vụ cao cấp tại Vũng Tàu</a>
                    </td>
                    <td className="d-flex justify-center">
                      <p className="yeu-cau-thuc-hien"></p>

                      <span className="trang-thai">Còn trống</span>
                    </td>
                    <td className="text-center">
                      <button type="button" className="btn btn-danger">
                        Xóa
                      </button>
                      <button type="button" className="btn btn-warning">
                        Sửa
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center" scope="row">
                      3
                    </td>
                    <td className="img-place-holder">
                      <a href="#">
                        <img src="/img/img-places-7.webp" alt="" />
                      </a>
                    </td>
                    <td className="text-center">
                      <a href="#">Căn hộ gia đình tại Phú Quốc</a>
                    </td>
                    <td className="d-flex justify-center">
                      <p className="dang-thuc-hien"></p>

                      <span className="trang-thai">Đang thực hiện</span>
                    </td>
                    <td className="text-center">
                      <button type="button" className="btn btn-danger">
                        Xóa
                      </button>
                      <button type="button" className="btn btn-warning">
                        Sửa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </LayoutHouseOwner>
    </>
  );
}
