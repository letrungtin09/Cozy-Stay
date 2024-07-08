import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowRight,
  faLanguage,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTiktok,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function FooterComponent() {
  return (
    <footer>
      <div className="line"></div>
      <div className="footer-top section-padding">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="single-footer-widget">
              <div className="footer-logo">
                <a href="index.html">
                  <img src="images/CozyStay.png" alt="" />
                </a>
              </div>
              <p>
                Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua.
                Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-footer-widget">
              <h2>Liên Hệ</h2>
              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <a
                    href="https://maps.app.goo.gl/teW311aW33z8Qynm7"
                    target="_blank"
                  >
                    {" "}
                    Khu Công viên phần mềm Quang Trung, P. Tân Chánh Hiệp, Q.12,
                    TP.HCM, Việt Nam
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:0123456789"> 0123456789</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:CozyStay@gmail.com">CozyStay@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className="single-footer-widget">
              <h2>Lựa Chọn</h2>
              <div className="row">
                <div className="col-md-7 col-xs-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} /> Bài viết
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} /> Cho thuê chỗ ở
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} /> Đặt phòng
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} /> Điều khoản và
                        điều kiện
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} /> Chính sách bảo
                        mật
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-offset-1 col-md-3 col-sm-6">
            <div className="single-footer-widget">
              <h2>Đăng ký</h2>
              <div className="footer-newsletter">
                <p>Đăng ký tư vấn ngay</p>
              </div>
              <div className="hm-foot-email">
                <div className="foot-email-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Email"
                  />
                </div>
                <div className="foot-email-subscribe">
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-copyright section-padding">
        <div className="row">
          <div className="col-sm-6">
            <p>&copy; 2024 CozyStay, Inc.</p>
            <ul>
              <li>Quyền riêng tư</li>
              <li>Điều khoản</li>
              <li>Sơ đồ web</li>
            </ul>
          </div>
          <div className="col-sm-6">
            <div className="footer-social">
              <a href="#">
                <FontAwesomeIcon icon={faLanguage} /> Tiếng Việt (VN)
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faDollarSign} /> USD
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
