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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { viVN } from "@mui/x-date-pickers/locales";
import "moment/locale/en-gb";
import DetailImage from "./detailImg";
import DetailShowAllImage from "./detailShowAllImg";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams!.get("id");
  const apiPlace = `${localUrl}/api/places?id=${id}`;
  const apiJoinConvenient = `${localUrl}/api/joinConvenient?idPlace=${id}`;
  const apiConvenient = `${localUrl}/api/convenient`;
  const apiJoinRules = `${localUrl}/api/joinRules?idPlace=${id}`;
  const apiRules = `${localUrl}/api/rules`;
  const [dataPlace, setDataPlace] = useState<any>([]);
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const changeOverLAy = () => {
    setOverlayVisible(prev => {
      const newStatus = !prev; // Đảo trạng thái
      document.body.classList.toggle('overflow-hidden', newStatus);
      return newStatus;
    });
  };

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

  useEffect(() => {
    const fetchDataJoinConvenient = async () => {
      try {
        const res = await ApiFunctions.getData(apiJoinConvenient);
        setDataJoinConvenient(res.joinConvenient);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataJoinConvenient();
  }, [apiJoinConvenient]);

  useEffect(() => {
    const fetchDataConvenient = async () => {
      try {
        const res = await ApiFunctions.getData(apiConvenient);
        setDataConvenient(res.convenient);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataConvenient();
  }, [apiConvenient]);

  useEffect(() => {
    const fetchDataJoinRules = async () => {
      try {
        const res = await ApiFunctions.getData(apiJoinRules);
        setDataJoinRules(res.joinRules);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataJoinRules();
  }, [apiJoinRules]);

  useEffect(() => {
    const fetchDataRules = async () => {
      try {
        const res = await ApiFunctions.getData(apiRules);
        setDataRules(res.rules);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataRules();
  }, [apiRules]);

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
        {isOverlayVisible && <DetailShowAllImage onChangeOverLay={changeOverLAy} lishImage={dataPlace.image} />}

        <div className="detailContent flex justify-center">
          <div className="w-[1120px]">

            <DetailImage dataPlaceTitle={dataPlace.title} dataPlaceImg={dataPlace.image} onChangeOverLay={changeOverLAy} />

            <section className="detailInfo">
              <div className="row">
                <div className="col-7">
                  <div className="detailInfo__left">
                    <div className="detailInfo__head">
                      <div className="detailInfo__title">
                        Toàn bộ {PlaceKindRoom(dataPlace.kindRoom)} cho thuê tại
                        Việt Nam
                      </div>
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
                    <div className="detailInfo__partner">
                      <div className="partner-avatar">
                        <img src="images/admin.jpg" alt="" />
                      </div>
                      <div className="partner-info">
                        <div className="partner-name">Chủ nhà: Sahra Nguyen</div>
                        <div className="partner-intro">
                          Chủ nhà uy tín, dày dặn kinh nghiệm được đánh giá cao
                        </div>
                      </div>
                    </div>
                    <div className="detailInfo__line"></div>
                    <div className="detailInfo__status">
                      <div className="detailInfo__statusPlace">
                        <div className="status-icon">
                          <FontAwesomeIcon icon={faDoorOpen} />
                        </div>
                        <div className="status-block">
                          {
                            (dataPlace.reservationKind = 0 ? (
                              <>
                                <div className="status-title">
                                  Tự động xác nhận
                                </div>
                                <div className="status-text">
                                  Tự động cho thuê mà không cần xác nhận từ chủ
                                  nhà.
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="status-title">
                                  Chờ chủ nhà xác nhận
                                </div>
                                <div className="status-text">
                                  Bạn sẽ chờ xác nhận cho thuê từ chủ nhà.
                                </div>
                              </>
                            ))
                          }
                        </div>
                      </div>
                      <div className="detailInfo__statusPlace">
                        <div className="status-icon">
                          <FontAwesomeIcon icon={faHouseChimneyWindow} />
                        </div>
                        <div className="status-block">
                          <div className="status-title">
                            Toàn bộ {PlaceKindRoom(dataPlace.kindRoom)}
                          </div>
                          <div className="status-text">
                            Chủ nhà cho thuê toàn bộ{" "}
                            {PlaceKindRoom(dataPlace.kindRoom)} với đầy đủ tiện
                            nghi.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="detailInfo__line"></div>
                    <div className="detailInfo__description">
                      {dataPlace.description}
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
                          <div className="timeOrder-numberMonth d-flex justify-between mb-[15px]">
                            <div className="timeOrder-date font-bold">
                              Số tháng thuê
                            </div>
                            <div className="timeOrder-number">
                              <span className="sub-month">
                                <FontAwesomeIcon icon={faMinus} />
                              </span>
                              <span className="number-month mx-[30px]">1</span>
                              <span className="plus-month">
                                <FontAwesomeIcon icon={faPlus} />
                              </span>
                            </div>
                          </div>
                          <div className="detailInfo__time">
                            <div className="detailInfo__date date-start d-flex justify-between items-center mb-[15px]">
                              <div className="date-title font-bold w-[35%]">
                                Ngày bắt đầu
                              </div>
                              <div className="date-time w-[50%]">
                                <LocalizationProvider
                                  dateAdapter={AdapterMoment}
                                  localeText={
                                    viVN.components.MuiLocalizationProvider
                                      .defaultProps.localeText
                                  }
                                  adapterLocale="en-gb"
                                >
                                  <DatePicker
                                    slotProps={{
                                      textField: {
                                        size: "small",
                                      },
                                    }}
                                  />
                                </LocalizationProvider>
                              </div>
                            </div>
                            <div className="detailInfo__date date-end d-flex justify-between mb-[15px]">
                              <div className="date-title font-bold">
                                Ngày kết thúc
                              </div>
                              <div className="date-time">08/07/2024</div>
                            </div>
                          </div>
                          <div className="detailInfo__quantityGuest d-flex justify-between mb-[20px]">
                            <div className="guest-title font-bold">
                              Số lượng khách tối đa
                            </div>
                            <div className="guest-number">
                              {dataPlace.quantityPeople} khách
                            </div>
                          </div>
                          <div className="detailInfo__btnOrder">
                            <button className="btn-order">Đặt chỗ</button>
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
            <section className="detailComment py-[30px]">
              <div className="info-title">
                <h3>Bình luận từ khách hàng</h3>
              </div>
              <div className="detailComment__allCmt">
                <div className="detailComment__item">
                  <div className="detailComment__user">
                    <div className="detailComment__avatar">
                      <img src="images/user.jpg" alt="" />
                    </div>
                    <div className="detailComment__intro">
                      <div className="detailComment__name">Lê Trung Tín</div>
                      <div className="detailComment__date">13/06/2024</div>
                    </div>
                  </div>
                  <div className="detailComment__content">
                    Nơi đây khá yên bình với một khu vườn trên tầng thượng rộng
                    lớn xinh đẹp và được trang bị một máy pha cà phê espresso mà
                    bạn có thể mang theo viên của riêng mình để uống cà phê.
                  </div>
                </div>
                <div className="detailComment__item">
                  <div className="detailComment__user">
                    <div className="detailComment__avatar">
                      <img src="images/user.jpg" alt="" />
                    </div>
                    <div className="detailComment__intro">
                      <div className="detailComment__name">Lê Trung Tín</div>
                      <div className="detailComment__date">13/06/2024</div>
                    </div>
                  </div>
                  <div className="detailComment__content">
                    Nơi đây khá yên bình với một khu vườn trên tầng thượng rộng
                    lớn xinh đẹp và được trang bị một máy pha cà phê espresso mà
                    bạn có thể mang theo viên của riêng mình để uống cà phê.
                  </div>
                </div>
                <div className="detailComment__item">
                  <div className="detailComment__user">
                    <div className="detailComment__avatar">
                      <img src="images/user.jpg" alt="" />
                    </div>
                    <div className="detailComment__intro">
                      <div className="detailComment__name">Lê Trung Tín</div>
                      <div className="detailComment__date">13/06/2024</div>
                    </div>
                  </div>
                  <div className="detailComment__content">
                    Nơi đây khá yên bình với một khu vườn trên tầng thượng rộng
                    lớn xinh đẹp và được trang bị một máy pha cà phê espresso mà
                    bạn có thể mang theo viên của riêng mình để uống cà phê.
                  </div>
                </div>
                <div className="detailComment__item">
                  <div className="detailComment__user">
                    <div className="detailComment__avatar">
                      <img src="images/user.jpg" alt="" />
                    </div>
                    <div className="detailComment__intro">
                      <div className="detailComment__name">Lê Trung Tín</div>
                      <div className="detailComment__date">13/06/2024</div>
                    </div>
                  </div>
                  <div className="detailComment__content">
                    Nơi đây khá yên bình với một khu vườn trên tầng thượng rộng
                    lớn xinh đẹp và được trang bị một máy pha cà phê espresso mà
                    bạn có thể mang theo viên của riêng mình để uống cà phê.
                  </div>
                </div>
              </div>
            </section>
            <div className="detailInfo__line"></div>
            <section className="detailMap">
              <div className="info-title">
                <h3>Nơi bạn sẽ sống</h3>
              </div>
              <div className="detailMap__showMap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.443980540085!2d106.62348867451811!3d10.853796757762948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a20d8555e69%3A0x743b1e9558fb89e0!2sQTSC%209%20Building!5e0!3m2!1svi!2s!4v1718375141696!5m2!1svi!2s"
                  width="100%"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="detailMap__address">
                Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam
              </div>
            </section>
            <div className="detailInfo__line"></div>
            <section className="detailPartner">
              <div className="info-title">
                <h3>Gặp gỡ chủ nhà</h3>
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
        </div>
      </LayoutCustomer>
    </>
  );
}
