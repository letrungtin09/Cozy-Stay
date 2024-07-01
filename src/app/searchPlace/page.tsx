"use client";
import LayoutCustomer from "@/components/layoutCustomer";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <LayoutCustomer>
        <section className="SearchResults-container section-padding">
          <h1 className="title-SearchResults">
            Kết quả tìm kiếm của <span id="kq-search">vị trí gần bạn</span>
          </h1>
          <p className="sub-title-SearchResults">
            {" "}
            Có <span id="sl-search">5</span> chổ ở phù hợp{" "}
          </p>
          <section className="places">
            <div className="places__container section-padding">
              <div className="row">
                <div className="places__item col-3">
                  <div className="places__slider">
                    <div className="places__list">
                      <div className="places__img img1">
                        <img src="images/places/place1/image1.webp" alt="" />
                      </div>
                      <div className="places__img img1">
                        <img src="images/places/place1/image1.webp" alt="" />
                      </div>
                      <div className="places__img img1">
                        <img src="images/places/place1/image1.webp" alt="" />
                      </div>
                      <div className="places__img img1">
                        <img src="images/places/place1/image1.webp" alt="" />
                      </div>
                      <div className="places__img img1">
                        <img src="images/places/place5/image1.webp" alt="" />
                      </div>
                    </div>

                    {/* <div className="places__favourite">
                      <i className="fa-regular fa-heart"></i>
                      <i id="heart-full" className="fa-solid fa-heart"></i>
                    </div>

                    <div className="places__liked">
                      <span>Được khách yêu thích</span>
                    </div> */}

                    {/* <div className="places__btnNextPrev">
                            <button className="btn-prev" id="prev" onclick="prevImg('img1')"><i className="fa fa-angle-left"></i></button>
                            <button className="btn-next" id="next" onclick="nextImg('img1')"><i className="fa fa-angle-right"></i></button>
                        </div> */}
                  </div>
                  <div className="places__detail">
                    <div className="places__top">
                      <span className="name-place">
                        Villa ở An Bàng, Hội An
                      </span>
                      <span className="star-place">
                        <i className="fa fa-star"></i> <span>4.98</span>
                      </span>
                    </div>
                    <div className="places__center">
                      <span className="area-place">
                        <i className="fa fa-chart-area"></i> 200m<sup>2</sup>
                      </span>
                      <span className="bed-place">
                        <i className="fa fa-bed"></i> 3 phòng ngủ
                      </span>
                    </div>
                    <div className="places__bottom">
                      <span>
                        <span className="price-place">1.500.000đ /</span> ngày
                      </span>
                    </div>
                  </div>
                </div>
                <div className="places__item col-3">
                  <div className="places__slider">
                    <div className="places__list">
                      <div className="places__img">
                        <img src="images/places/place2/image1.webp" alt="" />
                      </div>
                    </div>

                    <div className="places__btnNextPrev"></div>
                  </div>
                  <div className="places__detail">
                    <div className="places__top">
                      <span className="name-place">
                        Villa ở An Bàng, Hội An
                      </span>
                      <span className="star-place">
                        <i className="fa fa-star"></i> <span>4.98</span>
                      </span>
                    </div>
                    <div className="places__center">
                      <span className="area-place">
                        <i className="fa fa-chart-area"></i> 200m<sup>2</sup>
                      </span>
                      <span className="bed-place">
                        <i className="fa fa-bed"></i> 3 phòng ngủ
                      </span>
                    </div>
                    <div className="places__bottom">
                      <span>
                        <span className="price-place">1.500.000đ /</span> ngày
                      </span>
                    </div>
                  </div>
                </div>
                <div className="places__item col-3">
                  <div className="places__slider">
                    <div className="places__list">
                      <div className="places__img">
                        <img src="images/places/place3/image1.webp" alt="" />
                      </div>
                    </div>

                    <div className="places__btnNextPrev"></div>
                  </div>
                  <div className="places__detail">
                    <div className="places__top">
                      <span className="name-place">
                        Villa ở An Bàng, Hội An
                      </span>
                      <span className="star-place">
                        <i className="fa fa-star"></i> <span>4.98</span>
                      </span>
                    </div>
                    <div className="places__center">
                      <span className="area-place">
                        <i className="fa fa-chart-area"></i> 200m<sup>2</sup>
                      </span>
                      <span className="bed-place">
                        <i className="fa fa-bed"></i> 3 phòng ngủ
                      </span>
                    </div>
                    <div className="places__bottom">
                      <span>
                        <span className="price-place">1.500.000đ /</span> ngày
                      </span>
                    </div>
                  </div>
                </div>
                <div className="places__item col-3">
                  <div className="places__slider">
                    <div className="places__list">
                      <div className="places__img">
                        <img src="images/places/place4/image1.webp" alt="" />
                      </div>
                    </div>

                    <div className="places__btnNextPrev"></div>
                  </div>
                  <div className="places__detail">
                    <div className="places__top">
                      <span className="name-place">
                        Villa ở An Bàng, Hội An
                      </span>
                      <span className="star-place">
                        <i className="fa fa-star"></i> <span>4.98</span>
                      </span>
                    </div>
                    <div className="places__center">
                      <span className="area-place">
                        <i className="fa fa-chart-area"></i> 200m<sup>2</sup>
                      </span>
                      <span className="bed-place">
                        <i className="fa fa-bed"></i> 3 phòng ngủ
                      </span>
                    </div>
                    <div className="places__bottom">
                      <span>
                        <span className="price-place">1.500.000đ /</span> ngày
                      </span>
                    </div>
                  </div>
                </div>
                <div className="places__item col-3">
                  <div className="places__slider">
                    <div className="places__list">
                      <div className="places__img">
                        <img src="images/places/place5/image1.webp" alt="" />
                      </div>
                    </div>

                    <div className="places__btnNextPrev"></div>
                  </div>
                  <div className="places__detail">
                    <div className="places__top">
                      <span className="name-place">
                        Villa ở An Bàng, Hội An
                      </span>
                      <span className="star-place">
                        <i className="fa fa-star"></i> <span>4.98</span>
                      </span>
                    </div>
                    <div className="places__center">
                      <span className="area-place">
                        <i className="fa fa-chart-area"></i> 200m<sup>2</sup>
                      </span>
                      <span className="bed-place">
                        <i className="fa fa-bed"></i> 3 phòng ngủ
                      </span>
                    </div>
                    <div className="places__bottom">
                      <span>
                        <span className="price-place">1.500.000đ /</span> ngày
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </LayoutCustomer>
    </>
  );
}
