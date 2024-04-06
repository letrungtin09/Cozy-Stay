import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function FooterComponent() {
    return (
        <footer className="bg-white-color text-16px text-color-footer-1 normal-case">
            <div className="line w-full h-1px bg-color-line-footer mb-20px"></div>
            <div className="footer-top section-padding px-75px">
                <div className="row flex">
                    <div className="flex-1 px-12px">
                        <div className="single-footer-widget mb-20px ">
                            <div className="footer-logo w-[180px] h-[67px] object-cover">
                                <a href="index.html">
                                    <Image
                                        src="/images/iconImage/img/CozyStay.png"
                                        alt="logo"
                                        width={100}
                                        height={100}
                                        priority={true}
                                        className="w-full h-full"
                                    />
                                </a>
                            </div>
                            <p className="text-14px text-black-color max-w-300px my-20px">
                                Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut enim ad minim veniam.
                            </p>

                        </div>
                    </div>
                    <div className="flex-1 px-12px">
                        <div className="single-footer-widget mb-20px">
                            <h2 className="text-22px text-black-color font-bold mb-20px relative pb-5px group">Liên Hệ
                                <div className="inl inline-block w-0 h-2px bg-black-color absolute left-0 bottom-0 transition-all duration-300 group-hover:w-75px"></div>
                            </h2>
                            <ul className="list-unstyled">
                                <li className="hover:translate-x-[10px] transition-transform duration-500 mb-[13px]">
                                    <FontAwesomeIcon
                                        icon="location-dot"
                                        width={16}
                                        height={16}
                                        className="mr-[2px] inline-block"
                                    />

                                    <a className="text-14px text-black-color font-normal no-underline" href="https://maps.app.goo.gl/teW311aW33z8Qynm7" target="_blank">Khu Công viên phần
                                        mềm Quang Trung, P. Tân Chánh Hiệp, Q.12, TP.HCM, Việt Nam
                                    </a>
                                </li>
                                <li className="hover:translate-x-[10px] transition-transform duration-500 mb-[13px]">
                                    <FontAwesomeIcon
                                        icon="phone"
                                        width={16}
                                        height={16}
                                        className="mr-[2px] inline-block"
                                    />
                                    <a className="text-14px text-black-color font-normal no-underline" href="tel:0123456789">0123456789</a>
                                </li>
                                <li className="hover:translate-x-[10px] transition-transform duration-500 mb-[13px]">
                                    <FontAwesomeIcon
                                        icon="envelope"
                                        width={16}
                                        height={16}
                                        className="mr-[2px] inline-block"
                                    />
                                    <a className="text-14px text-black-color font-normal no-underline" href="mailto:CozyStay@gmail.com">CozyStay@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="flex-1 px-12px">
                        <div className="single-footer-widget mb-20px">
                            <h2 className="text-22px text-black-color font-bold mb-20px relative pb-5px group">Lựa Chọn
                                <div className="inl inline-block w-0 h-2px bg-black-color absolute left-0 bottom-0 transition-all duration-300 group-hover:w-75px"></div>
                            </h2>
                            <div className="row">
                                <div className="col-md-7 col-xs-6">
                                    <ul className="list-unstyled">
                                        <li className="group hover:translate-x-[10px] transition-transform duration-500 mb-[13px]">
                                            <a className="text-14px text-black-color font-normal no-underline" href="#">
                                                <FontAwesomeIcon
                                                    icon="arrow-right"
                                                    width={12}
                                                    height={16}
                                                    className="mr-[2px] opacity-0 transition-all duration-300 inline-block group-hover:opacity-100"
                                                />Bài viết
                                            </a>
                                        </li>
                                        <li className="group hover:translate-x-[10px] transition-transform duration-500 mb-[13px]">
                                            <a className="text-14px text-black-color font-normal no-underline" href="#">
                                                <FontAwesomeIcon
                                                    icon="arrow-right"
                                                    width={12}
                                                    height={16}
                                                    className="mr-[2px] opacity-0 transition-all duration-300 inline-block group-hover:opacity-100"
                                                />Cho thuê chỗ ở
                                            </a>
                                        </li>
                                        <li className="group hover:translate-x-[10px] transition-transform duration-500 mb-[13px]">
                                            <a className="text-14px text-black-color font-normal no-underline" href="#">
                                                <FontAwesomeIcon
                                                    icon="arrow-right"
                                                    width={12}
                                                    height={16}
                                                    className="mr-[2px] opacity-0 transition-all duration-300 inline-block group-hover:opacity-100"
                                                />Đặt phòng
                                            </a>
                                        </li>
                                        <li className="group hover:translate-x-[10px] transition-transform duration-500 mb-[13px]">
                                            <a className="text-14px text-black-color font-normal no-underline" href="#">
                                                <FontAwesomeIcon
                                                    icon="arrow-right"
                                                    width={12}
                                                    height={16}
                                                    className="mr-[2px] opacity-0 transition-all duration-300 inline-block group-hover:opacity-100"
                                                />Điều khoản và điều kiện
                                            </a>
                                        </li>
                                        <li className="group hover:translate-x-[10px] transition-transform duration-500 mb-[13px]">
                                            <a className="text-14px text-black-color font-normal no-underline" href="#">
                                                <FontAwesomeIcon
                                                    icon="arrow-right"
                                                    width={12}
                                                    height={16}
                                                    className="mr-[2px] opacity-0 transition-all duration-300 inline-block group-hover:opacity-100"
                                                />Chính sách bảo mật
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-offset-1 flex-1 px-12px">
                        <div className="single-footer-widget mb-20px">
                            <h2 className="text-22px text-black-color font-bold mb-20px relative pb-5px group">Đăng ký
                                <div className="inl inline-block w-0 h-2px bg-black-color absolute left-0 bottom-0 transition-all duration-300 group-hover:w-75px"></div>
                            </h2>
                            <div className="footer-newsletter">
                                <p className="text-14px text-black-color mb-15px">
                                    Đăng ký tư vấn ngay
                                </p>
                            </div>
                            <div className="hm-foot-email relative">
                                <div className="foot-email-box">
                                    <input type="text" className="transition-all rounded-[4px] duration-150 text-[12px] text-[#666c81] font-[300] bg-white-color block py-[15px] px-[20px] outline-0 border-0 shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.4)] w-full" placeholder="Add Email" />
                                </div>
                                <div className="foot-email-subscribe absolute top-0 right-[14px] w-[50%] h-full bg-transparent text-[#666c81] text-[12px] flex items-center justify-end">
                                    <span>
                                        <FontAwesomeIcon
                                            icon="arrow-right"
                                            width={12}
                                            height={16}
                                            className=""
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line w-full h-1px bg-color-line-footer mb-20px"></div>
            <div className="footer-copyright section-padding px-[75px] mb-[16px]">
                <div className="flex">
                    <div className="flex-1">
                        <p className="in inline-block mr-[20px] text-[#a8a9bf] text-[14px] font-[400] capitalize">&copy; 2024 CozyStay, Inc.</p>
                        <ul className="in inline-block list-none p-0 m-0 ">
                            <li className="i inline-block ml-[10px] list-disc font-[300]">Quyền riêng tư</li>
                            <li className="i inline-block ml-[10px] list-disc font-[300]">Điều khoản</li>
                            <li className="i inline-block ml-[10px] list-disc font-[300]">Sơ đồ web</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <div className="footer-social flex justify-end">
                            <a className="text-[#333] no-underline mr-[15px]" href="#">
                                <FontAwesomeIcon
                                    icon="language"
                                    width={20}
                                    height={16}
                                    className="s inline-block font-[300] text-[14px] hover:opacity-[.7]"
                                />
                                Tiếng Việt (VN)</a>
                            <a className="text-[#333] no-underline mr-[15px]" href="#">
                                <FontAwesomeIcon
                                    icon="dollar-sign"
                                    width={14}
                                    height={16}
                                    className="inline-block font-[300] text-[14px] hover:opacity-[.7]"
                                />USD
                            </a>
                            <a className="text-[#333] no-underline mr-[15px]" href="#">
                                <FontAwesomeIcon icon={['fab', 'tiktok']}
                                    width={20}
                                    height={16}
                                    className="inline-block font-[300] text-[14px] hover:opacity-[.7]"
                                />
                            </a>
                            <a className="text-[#333] no-underline mr-[15px]" href="#">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']}
                                    width={20}
                                    height={16}
                                    className="inline-block font-[300] text-[14px] hover:opacity-[.7]"
                                />
                            </a>
                            <a className="text-[#333] no-underline mr-[15px]" href="#">
                                <FontAwesomeIcon icon={['fab', 'instagram']}
                                    width={20}
                                    height={16}
                                    className="inline-block font-[300] text-[14px] hover:opacity-[.7]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </footer >

    );
}