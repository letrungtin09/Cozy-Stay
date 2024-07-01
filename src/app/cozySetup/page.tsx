"use client";
import FooterComponent from "@/components/footerComponent";
import { faHouseMedical, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <header>
        <div className="headerSetup__container section-padding">
          <div className="headerSetup__logo">
            <a href="#">
              <img src="images/CozyStay.png" alt="" />
            </a>
          </div>
          <div className="headerSetup__info">
            <div className="headerSetup__ques">
              <div className="headerSetup__text">
                Bạn sẵn sàng cho thuê nhà trên CozyStay chưa?
              </div>
            </div>
            <div className="headerSetup__btn">
              <button className="btn-partner">
                <FontAwesomeIcon icon={faHouseMedical} /> Thiết lập ngay
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="cozySetup section-padding">
        <div className="cozySetup__first">
          <div className="cozySetup__info">
            <div>
              <div className="cozySetup__rental">
                Cho thuê nhà trên CozyStay.
              </div>
              <div className="cozySetup__price">
                Bạn có thể kiếm được
                <div className="price">10.000.000đ / tháng</div>
              </div>
              <div className="cozySetup__btn">
                <button className="btn-partner">
                  <FontAwesomeIcon icon={faHouseMedical} /> Thiết lập ngay
                </button>
              </div>
            </div>
          </div>
          <div className="cozySetup__img">
            <img src="images/cozySetup-1.jpeg" alt="" />
          </div>
        </div>
        <div className="cozySetup__second">
          <div className="cozySetup__title">
            Dễ dàng cho thuê nhà trên CozyStay với thiết lập của CozyStay
          </div>
          <div className="cozySetup__cover">
            <img src="images/cozySetup-2.webp" alt="" />
          </div>
          <div className="cozySetup__help">
            <div className="cozySetup__item">
              <div className="item-title">
                Báo cáo thu nhập rõ ràng, minh bạch
              </div>
              <div className="item-detail">
                Chúng tôi sẽ kết nối bạn với một Chủ nhà siêu cấp trong khu vực
                của bạn, người sẽ hướng dẫn bạn từ câu hỏi đầu tiên cho đến vị
                khách đầu tiên.
              </div>
            </div>
            <div className="cozySetup__item">
              <div className="item-title">
                Cung cấp các giải pháp về quản lý cho thuê
              </div>
              <div className="item-detail">
                Với lượt đặt phòng đầu tiên, bạn có thể lựa chọn chào đón một
                khách có kinh nghiệm, đã có ít nhất 3 kỳ ở và lịch sử hoạt động
                tốt trên CozyStay.
              </div>
            </div>
            <div className="cozySetup__item">
              <div className="item-title">Hỗ trợ đặc biệt từ CozyStay</div>
              <div className="item-detail">
                Chỉ cần nhấn nút là Chủ nhà mới có thể liên hệ với nhân viên Hỗ
                trợ cộng đồng được đào tạo đặc biệt, có thể trợ giúp về mọi vấn
                đề.
              </div>
            </div>
          </div>
        </div>
        <div className="cozySetup__third">
          <div className="cozySetup__left">
            <img src="images/cozySetup-3.webp" alt="" />
          </div>
          <div className="cozySetup__right">
            <div className="right-container">
              <div className="right-title">
                Cách siêu dễ dàng để cho thuê nhà trên CozyStay
              </div>
              <div className="right-subTitle">
                Cho thuê nhà trên CozyStay với chương trình bảo vệ toàn diện
              </div>
              <div className="right-text">
                CozyStay Setup giúp bạn dễ dàng đăng cho thuê chỗ ở của mình
                trên CozyStay hơn, với sự trợ giúp tận tình từ một Chủ nhà siêu
                cấp, từ câu hỏi đầu tiên cho đến vị khách đầu tiên.
              </div>
              <div className="right-btn">
                <button className="btn-partner">
                  <FontAwesomeIcon icon={faHouseMedical} /> Thiết lập ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent></FooterComponent>
    </>
  );
}
