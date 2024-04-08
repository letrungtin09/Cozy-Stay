import FooterAdmin from "@/components/FooterAdmin";
import HeaderAdmin from "@/components/HeaderAdmin";
import SideBarAdmin from "@/components/SideBarAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/styleAdmin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
                  <h2>Quản lý chỗ cho thuê</h2>
                  <div className="admin-btnAdd">
                    <a className="btn--add" href="formAddPd.html">
                      <FontAwesomeIcon icon={faPlus} /> <div>Thêm mới</div>
                    </a>
                  </div>
                </div>
                <div className="content-adminBottom">
                  <table>
                    <thead>
                      <th>id</th>
                      <th>tên chỗ ở</th>
                      <th>địa chỉ</th>
                      <th>giá thuê</th>
                      <th>mức giảm giá</th>
                      <th>hình ảnh</th>
                      <th>chủ nhà</th>
                      <th>danh mục</th>
                      <th>loại phòng</th>
                      <th>loại đặt phòng</th>
                      <th>số lượng khách</th>
                      <th>phòng tắm</th>
                      <th>phòng ngủ</th>
                      <th>giường ngủ</th>
                      <th>mô tả</th>
                      <th>kinh độ</th>
                      <th>vĩ độ</th>
                      <th>trạng thái</th>
                      <th>phê duyệt</th>
                    </thead>
                    <tbody className="infoCate">
                      <tr>
                        <td>1</td>
                        <td>Căn hộ cho thuê tại Vũng Tàu, Việt Nam</td>
                        <td>13, Nguyễn An Ninh, Tp Vũng tàu, Vũng tàu</td>
                        <td>1.8000.000đ</td>
                        <td>20%</td>
                        <td>
                          <div className="slider">
                            <div className="list">
                              <div className="item">
                                {/* <img src="" alt="" /> */}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>Thế Duy</td>
                        <td>Căn hộ dịch vụ</td>
                        <td>Nhà nguyên căn</td>
                        <td>Tự động cho thuê</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>
                          -Căn hộ 1 phòng ngủ và 1 phòng khách - Có khu vực bếp
                          , ban công , dụng cụ làm bếp , gia vị cơ bản - trang
                          bị đầy đủ nội thất và tiện nghi: nước nóng , máy sấy ,
                          bàn ủi ,tủ quần áo , tivi internet , máy giặt , tủ
                          lạnh ..
                        </td>
                        <td>10.369997</td>
                        <td>107.079300</td>
                        <td>Chưa có người ở</td>
                        <td>Đã phê duyệt</td>
                      </tr>
                    </tbody>
                  </table>
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
