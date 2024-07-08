"use client";
import LayoutCustomer from "@/components/layoutCustomer";
import ApiFunctions from "@/lib/api";
import localUrl from "@/lib/const";
import {
  faArrowRight,
  faCheck,
  faDoorOpen,
  faHouse,
  faHouseChimneyWindow,
  faMinus,
  faPlus,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams!.get("id");
  const apiPlace = `${localUrl}/api/places?id=${id}`;
  const [dataPlace, setDataPlace] = useState<any>([]);

  useEffect(() => {
    const fetchDataPlace = async () => {
      try {
        const res = await ApiFunctions.getData(apiPlace);
        setDataPlace(res.places[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataPlace();
  }, [apiPlace]);

  const PlaceKindRoom = (kind: any) => {
    let placeKindRoom: string = "";
    if (kind === 0) {
      placeKindRoom = "phòng";
    } else if (kind === 1) {
      placeKindRoom = "căn hộ";
    } else {
      placeKindRoom = "nhà";
    }

    return placeKindRoom;
  };

  return (
    <>
      <LayoutCustomer>
        <div className="detailContent">
          <section className="detailImg">
            <div className="detailImg__title">
              <h1>
                <FontAwesomeIcon icon={faHouse} /> Phòng/nhà của bạn
              </h1>
            </div>
            <div className="detailImg__imgs">
              <div className="detailImg__imgs__left">
                <img src={`images/places/${dataPlace.image1}`} alt="" />
              </div>
              <div className="detailImg__imgs__right">
                <div className="right-1">
                  <img src={`images/places/${dataPlace.image2}`} alt="" />
                  <img src={`images/places/${dataPlace.image3}`} alt="" />
                </div>
                <div className="right-2">
                  <img src={`images/places/${dataPlace.image4}`} alt="" />
                  <img src={`images/places/${dataPlace.image5}`} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="detailInfo">
            <div className="row">
              <div className="col-7">
                <div className="detailInfo__left">
                  <div className="detailInfo__head">
                    <div className="detailInfo__title">{dataPlace.title}</div>
                    <div className="detailInfo__quantity">
                      <span className="quantity-guest">
                        {dataPlace.area}m<sup>2</sup>
                      </span>{" "}
                      ·{" "}
                      <span className="quantity-guest">
                        {dataPlace.quantityPeople} khách
                      </span>{" "}
                      ·{" "}
                      <span className="quantity-bedRoom">
                        {dataPlace.quantityBedRoom} phòng ngủ
                      </span>{" "}
                      ·{" "}
                      <span className="quantity-bathRoom">
                        {dataPlace.quantityBath} phòng tắm
                      </span>
                    </div>
                  </div>
                  <div className="detailInfo__line"></div>
                  <div className="detailInfo__comment">
                    <div className="info-title">
                      <h3>Cảm nghĩ của bạn về nơi này</h3>
                    </div>
                    <div className="comment-show">
                      <div className="comment-avatar">
                        <img src="images/user.jpg" alt="" />
                      </div>
                      <div className="comment-content">
                        <div className="comment-text">
                          <div className="comment-name">Trung Tín</div>
                          Căn nhà rộng rãi, tất cả đều siêu sạch sẽ và được
                          trang bị rất phong cách. Chủ nhà luôn thân thiện và
                          chu đáo, đồng thời kín đáo. Tôi chắc chắn một ngày nào
                          đó chúng tôi sẽ trở lại!
                        </div>
                        <div className="comment-action">
                          <div className="comment-date">22/07/2024</div>
                          <div className="comment-btn">
                            <button className="btn-editCmt">Chỉnh sửa</button>
                            <button className="btn-deleteCmt">Xóa</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment-form">
                      <form>
                        <input type="text" placeholder="Viết bình luận..." />
                        <button>Gửi bình luận</button>
                      </form>
                    </div>
                  </div>
                  <div className="detailInfo__line"></div>
                  <div className="detailInfo__services">
                    <div className="info-title">
                      <h3>Nơi này có những gì cho bạn</h3>
                    </div>
                    <div className="services-detail">
                      <div className="services-item">
                        <div className="services-icon">
                          <FontAwesomeIcon icon={faWifi} />
                        </div>
                        <div className="services-name">Wifi</div>
                      </div>
                      <div className="services-item">
                        <div className="services-icon">
                          <FontAwesomeIcon icon={faWifi} />
                        </div>
                        <div className="services-name">Wifi</div>
                      </div>
                      <div className="services-item">
                        <div className="services-icon">
                          <FontAwesomeIcon icon={faWifi} />
                        </div>
                        <div className="services-name">Thang máy</div>
                      </div>
                      <div className="services-item">
                        <div className="services-icon">
                          <FontAwesomeIcon icon={faWifi} />
                        </div>
                        <div className="services-name">Bếp</div>
                      </div>
                      <div className="services-item">
                        <div className="services-icon">
                          <FontAwesomeIcon icon={faWifi} />
                        </div>
                        <div className="services-name">Máy giặt miễn phí</div>
                      </div>
                      <div className="services-item">
                        <div className="services-icon">
                          <FontAwesomeIcon icon={faWifi} />
                        </div>
                        <div className="services-name">Máy sấy miễn phí</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="detailInfo__right">
                  <div className="detailInfo__fixed">
                    <div className="detailInfo__position">
                      <div className="detailInfo__order">
                        <div className="detailInfo__price">
                          <span className="price-place">
                            {new Intl.NumberFormat("de-DE").format(
                              dataPlace.price
                            )}
                            đ
                          </span>{" "}
                          / tháng
                        </div>
                        <div className="detailInfo__time">
                          <div className="detailInfo__date date-start">
                            <div className="date-title">Nhận phòng</div>
                            <div className="date-time">08/06/2024</div>
                          </div>
                          <div className="detailInfo__date date-end">
                            <div className="date-title">Trả phòng</div>
                            <div className="date-time">08/07/2024</div>
                          </div>
                        </div>
                        <div className="detailInfo__quantityGuest">
                          <div className="guest-title">
                            Số lượng khách tối đa
                          </div>
                          <div className="guest-number">
                            {dataPlace.quantityPeople} khách
                          </div>
                        </div>
                        <div className="detailInfo__btnOrder">
                          <button className="btn-order">Hủy đặt phòng</button>
                        </div>
                        <div className="detailInfo__feePay mb-0">
                          <span className="pay-text">
                            {new Intl.NumberFormat("de-DE").format(
                              dataPlace.price
                            )}
                            đ x 1 tháng
                          </span>
                          <span className="pay-money">1.500.000đ</span>
                        </div>
                        <div className="detailInfo__feePay">
                          <span className="pay-text">Phí dịch vụ CozyStay</span>
                          <span className="pay-money">150.000đ</span>
                        </div>
                        <div className="detailInfo__line"></div>
                        <div className="detailInfo__total">
                          <span className="pay-total">Tổng tiền</span>
                          <span className="pay-totalMoney">1.650.000đ</span>
                        </div>
                      </div>
                      <div className="detailInfo__warning">
                        <div className="warning-logo">
                          <img src="images/CS.png" alt="" />
                        </div>
                        <div className="warning-text">
                          Để bảo vệ khoản thanh toán và quyền lợi của bạn, tuyệt
                          đối không chuyển tiền hoặc liên lạc bên ngoài trang
                          web CozyStay.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="detailInfo__line"></div>
          <section className="detailMap">
            <div className="info-title">
              <h3>Nơi bạn sẽ sống</h3>
            </div>
            <div className="detailMap__address">
              Địa chỉ: {dataPlace.address}
            </div>
            <div className="detailMap__showMap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.443980540085!2d106.62348867451811!3d10.853796757762948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a20d8555e69%3A0x743b1e9558fb89e0!2sQTSC%209%20Building!5e0!3m2!1svi!2s!4v1718375141696!5m2!1svi!2s"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </section>
          <div className="detailInfo__line"></div>
          <section className="detailPartner">
            <div className="info-title">
              <h3>Về chủ nhà</h3>
            </div>
            <div className="detailPartner__content">
              <div className="detailPartner__info">
                <div>
                  <div className="detailPartner__personal">
                    <div className="detailPartner__left">
                      <div className="detailPartner__avatar">
                        <img src="images/admin.jpg" alt="" />
                      </div>
                      <div className="detailPartner__name">Sarah Nguyen</div>
                      <div className="detailPartner__role">
                        Chủ nhà cho thuê
                      </div>
                    </div>
                    <div className="detailPartner__right">
                      <div>
                        <div className="detailPartner__confirm">
                          <span>Thông tin đã xác minh</span>
                        </div>
                        <div className="detailPartner__confirm">
                          <FontAwesomeIcon icon={faCheck} />{" "}
                          <span>Danh tính</span>
                        </div>
                        <div className="detailPartner__confirm">
                          <FontAwesomeIcon icon={faCheck} />{" "}
                          <span>Địa chỉ email</span>
                        </div>
                        <div className="detailPartner__confirm mb-0">
                          <FontAwesomeIcon icon={faCheck} />{" "}
                          <span>Số điện thoại</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detailPartner__intro">
                    <div className="detailPartner__introTitle">
                      Giới thiệu chủ nhà
                    </div>
                    <div className="detailPartner__introText">
                      Tôi thích đi du lịch và trải nghiệm cuộc sống ở những nơi
                      tôi đến. Tôi nói tiếng Việt và tiếng Anh.Chỗ ở của chúng
                      tôi nằm ở Quận Phú Nhuận. Cách sân bay Tân Sơn 5km.
                    </div>
                  </div>
                </div>
              </div>
              <div className="detailPartner__rulePlace">
                <div className="detailPartner__title">Nội quy cho thuê</div>
                <div className="detailPartner__allRule">
                  <div className="detailPartner__item">
                    <div className="detailPartner__icon">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className="detailPartner__rule">Tối đa 10 khách</div>
                  </div>
                  <div className="detailPartner__item">
                    <div className="detailPartner__icon">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className="detailPartner__rule">
                      Cho phép hút thuốc
                    </div>
                  </div>
                  <div className="detailPartner__item">
                    <div className="detailPartner__icon">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className="detailPartner__rule">
                      Cho phép chụp ảnh vì mục đích thương mại
                    </div>
                  </div>
                  <div className="detailPartner__item">
                    <div className="detailPartner__icon">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className="detailPartner__rule">
                      Không được tổ chức tiệc hoặc sự kiện
                    </div>
                  </div>
                  <div className="detailPartner__item">
                    <div className="detailPartner__icon">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className="detailPartner__rule">
                      Không được phép mang theo thú cưng
                    </div>
                  </div>
                </div>
                <div className="detailPartner__warning">
                  <div className="warning-logo">
                    <img src="images/CS.png" alt="" />
                  </div>
                  <div className="warning-text">
                    Để bảo vệ khoản thanh toán và quyền lợi của bạn, tuyệt đối
                    không chuyển tiền hoặc liên lạc bên ngoài trang web
                    CozyStay.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </LayoutCustomer>
    </>
  );
}
