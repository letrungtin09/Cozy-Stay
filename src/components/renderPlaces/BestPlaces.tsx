import * as React from "react";

export const BestPlaces = () => {
  return (
    <div className="bestPlace section-padding">
      <div className="bestPlace__text">
        <div className="bestPlace__text__title">
          <h3>Địa điểm dừng chân tiếp theo của bạn ở đâu ?</h3>
          <p>Tìm chỗ ở mới của bạn tại 63 tỉnh thành của Việt Nam.</p>
        </div>
        <div className="bestPlace__text__btn">
          <a href="#" className="btn-showAll">
            Xem tất cả <i className="fa-solid fa-caret-right"></i>
          </a>
        </div>
      </div>
      <div className="bestPlace__places">
        <div className="row">
          <div className="bestPlace__places__item col-3">
            <div className="bestPlace__places__img">
              <img
                className="img-center"
                src="images/bestPlace-HaNoi.jpg"
                alt=""
              />
            </div>
            <div className="bestPlace__places__flex">
              <div className="bestPlace__places__text d-flex justify-content-center align-items-center">
                <div>
                  <div className="namePlace">Hà Nội</div>
                  <div className="totalPlaces">53 địa điểm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bestPlace__places__item col-3">
            <div className="bestPlace__places__img">
              <img src="images/bestPlace-SaiGon.jpg" alt="" />
            </div>
            <div className="bestPlace__places__flex">
              <div className="bestPlace__places__text d-flex justify-content-center align-items-center">
                <div>
                  <div className="namePlace">Sài Gòn</div>
                  <div className="totalPlaces">53 địa điểm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bestPlace__places__item col-3">
            <div className="bestPlace__places__img">
              <img
                className="img-center"
                src="images/bestPlace-DaNang.jpg"
                alt=""
              />
            </div>
            <div className="bestPlace__places__flex">
              <div className="bestPlace__places__text d-flex justify-content-center align-items-center">
                <div>
                  <div className="namePlace">Đà Nẵng</div>
                  <div className="totalPlaces">53 địa điểm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bestPlace__places__item col-3">
            <div className="bestPlace__places__img">
              <img src="images/bestPlace-NhaTrang.jpg" alt="" />
            </div>
            <div className="bestPlace__places__flex">
              <div className="bestPlace__places__text d-flex justify-content-center align-items-center">
                <div>
                  <div className="namePlace">Nha Trang</div>
                  <div className="totalPlaces">53 địa điểm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
