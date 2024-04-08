"use client"
import ApiFunctions from "@/lib/api";
import { errorElement } from "@/lib/common";
import { useRef, useEffect } from "react";
import Link from 'next/link'
export default function Register() {

    return (
        <>
            <div className="form-gadgets register bg-[#f7f7f7] pt-[100px] pb-[30px]">
                <div className="form-container register__form flex items-end justify-center">
                    <form className="form-user w-[390px] rounded-[5px] border-[1px] border-[#999] bg-[#ffffff] p-[20px] shadow-[0_0_5px_0_#e3e3e3]" action="">
                        <div className="register__content">
                            <label className="mb-[10px] font-bold inline-block" htmlFor="email">Email</label><br />
                            <input
                                className="mb-[10px] w-full p-[10px] rounded-[10px] border-[1px] border-[#999] text-[14px] transition duration-[0.3s]"
                                type="email"
                                name="email" /><br />
                            <label className="mb-[10px] font-bold inline-block" htmlFor="password">Mật khẩu</label><br />
                            <input
                                className="mb-[10px] w-full p-[10px] rounded-[10px] border-[1px] border-[#999] text-[14px] transition duration-[0.3s]"
                                type="password"
                                name="password" /><br />
                            <label className="mb-[10px] font-bold inline-block" htmlFor="confirmPassword">Xác nhận mật khẩu</label><br />
                            <input
                                className="mb-[10px] w-full p-[10px] rounded-[10px] border-[1px] border-[#999] text-[14px] transition duration-[0.3s]"
                                type="password"
                                name="confirmPassword" /><br />
                            <label className="mb-[10px] font-bold inline-block" htmlFor="fullName">Họ và tên</label><br />
                            <input
                                className="mb-[10px] w-full p-[10px] rounded-[10px] border-[1px] border-[#999] text-[14px] transition duration-[0.3s]"
                                type="text"
                                name="fullName" /><br />
                        </div>
                        <div className="register__btn">
                            <button className="btn--register w-full py-[7px] px-0 rounded-[50px] border-none bg-color-green-0 text-color-white-0 font-bold transition-all duration-[0.3s] hover:bg-color-green-2">Đăng ký</button>
                        </div>
                        <div className="register__rule text-center mt-[15px] px-[20px] pb-[10px] border-b-[1px] border-[#e3e3e3]">
                            <span>Bạn đồng ý với
                                <a
                                    className="no-underline text-[#4ccd99] font-bold transition duration-[0.3s] hover:text-color-green-2"
                                    href="#"> Điều khoản sử dụng
                                </a> và
                                <a className="no-underline text-[#4ccd99] font-bold transition duration-[0.3s] hover:text-color-green-2" href="#"> Chính sách bảo mật
                                </a> của chúng tôi
                            </span>
                        </div>
                        <div className="register__login mt-[10px] text-center">
                            <span>Đã có tài khoản ?
                                <Link
                                    className="no-underline text-[#4ccd99] font-bold transition duration-[0.3s] hover:text-color-green-2"
                                    href="/login"> Đăng nhập
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}