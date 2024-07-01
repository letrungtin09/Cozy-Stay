import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

export const Cover = () => {
  return (
    <>
      <section className="cover slider">
        <div className="carousel_cv">
          <div className="list">
            <div className="item">
              <div className="overlay-cv"></div>
              <img src="images/bestPlace-HaNoi.jpg" />
              <div className="content">
                <div className="title">CĂN HỘ CAO CẤP</div>
                <div className="topic">
                  TẠI <span>HÀ NỘI</span>
                </div>
                <div className="des">
                  Chỗ của chúng tôi cung cấp hầu hết nhu cầu của bạn để có một
                  thời gian lưu trú thoải mái. Căn hộ của chúng tôi nằm ngay
                  trung tâm An Thượng. Tuy nhiên, là một con đường yên tĩnh và
                  bạn là trung tâm của mọi thứ.
                </div>
                <div className="buttons">
                  <button>Xem Thêm</button>
                  <button>Đặt Ngay</button>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="overlay-cv"></div>
              <img src="images/bg-2.jpg" />
              <div className="content">
                <div className="title">CĂN HỘ CAO CẤP</div>
                <div className="topic">
                  TẠI <span>NHA TRANG</span>
                </div>
                <div className="des">
                  Chỗ của chúng tôi cung cấp hầu hết nhu cầu của bạn để có một
                  thời gian lưu trú thoải mái. Căn hộ của chúng tôi nằm ngay
                  trung tâm An Thượng. Tuy nhiên, là một con đường yên tĩnh và
                  bạn là trung tâm của mọi thứ.
                </div>
                <div className="buttons">
                  <button>Xem Thêm</button>
                  <button>Đặt Ngay</button>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="overlay-cv"></div>
              <img src="images/bg-1.jpg" />
              <div className="content">
                <div className="title">CĂN HỘ CAO CẤP</div>
                <div className="topic">
                  TẠI <span>ĐÀ NẴNG</span>
                </div>
                <div className="des">
                  Chỗ của chúng tôi cung cấp hầu hết nhu cầu của bạn để có một
                  thời gian lưu trú thoải mái. Căn hộ của chúng tôi nằm ngay
                  trung tâm An Thượng. Tuy nhiên, là một con đường yên tĩnh và
                  bạn là trung tâm của mọi thứ.
                </div>
                <div className="buttons">
                  <button>Xem Thêm</button>
                  <button>Đặt Ngay</button>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="overlay-cv"></div>
              <img src="images/bestPlace-SaiGon.jpg" />
              <div className="content">
                <div className="title">CĂN HỘ CAO CẤP</div>
                <div className="topic">
                  TẠI <span>HỒ CHÍ MINH</span>
                </div>
                <div className="des">
                  Chỗ của chúng tôi cung cấp hầu hết nhu cầu của bạn để có một
                  thời gian lưu trú thoải mái. Căn hộ của chúng tôi nằm ngay
                  trung tâm An Thượng. Tuy nhiên, là một con đường yên tĩnh và
                  bạn là trung tâm của mọi thứ.
                </div>
                <div className="buttons">
                  <button>Xem Thêm</button>
                  <button>Đặt Ngay</button>
                </div>
              </div>
            </div>
          </div>

          <div className="thumbnail">
            <div className="item">
              <img src="images/bestPlace-SaiGon.jpg" />
              <div className="content">
                <div className="title">Hồ Chí Minh</div>
                <div className="description">
                  <span>15.000.000</span>VNĐ
                </div>
              </div>
            </div>
            <div className="item">
              <img src="images/bestPlace-HaNoi.jpg" />
              <div className="content">
                <div className="title">Hà Nội</div>
                <div className="description">
                  <span>15.000.000</span>VNĐ
                </div>
              </div>
            </div>
            <div className="item">
              <img src="images/bg-2.jpg" />
              <div className="content">
                <div className="title">Nha Trang</div>
                <div className="description">
                  <span>15.000.000</span>VNĐ
                </div>
              </div>
            </div>
            <div className="item">
              <img src="images/bg-1.jpg" />
              <div className="content">
                <div className="title">Đà Nẵng</div>
                <div className="description">
                  <span>15.000.000</span>VNĐ
                </div>
              </div>
            </div>
          </div>

          <div className="arrows">
            <button id="prev">
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button id="next">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          <div className="time"></div>
        </div>
      </section>
    </>
  );
};
