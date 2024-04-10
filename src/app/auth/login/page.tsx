"use client"

import ApiFunctions from "@/lib/api";
import { errorElement } from "@/lib/common";
import { useRef, useEffect } from "react";
import Link from 'next/link'

export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const rememberRef = useRef<HTMLInputElement>(null);

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (document.querySelectorAll('.errorLogin')) document.querySelectorAll('.errorLogin').forEach((e) => {
            e.remove();
        })
        const apiUrl: string = `${process.env.NEXT_PUBLIC_API_URL!}/api/login`;
        const email = emailRef.current?.value || '';
        const passWord = passwordRef.current?.value || '';
        if (email == '') {
            errorElement('Nhập email của bạn', emailRef.current);
        } else if (passWord == '') {
            errorElement('Nhập password của bạn', passwordRef.current);
        } else {
            const data: FormValuesLogin = {
                email: email,
                password: passWord,
                types: rememberRef.current?.checked
            }
            ApiFunctions.postData(apiUrl, data)
                .then(response => {
                    if (response.response) {
                        if (response.response.status === 404) {
                            errorElement(response.response.data.error, emailRef.current)
                        } else if (response.response.status === 401) {
                            errorElement(response.response.data.error, passwordRef.current)
                        }
                    } else if (response.status) {
                        if (response.idUser) {
                            window.sessionStorage.setItem('duytuong123', JSON.stringify(response));
                        }
                        window.location.href = '/';
                    }
                })

        }
    }

    useEffect(() => {
        emailRef.current && emailRef.current.focus();
    }, []);

    return (
        <>
            <div className="form-gadgets login bg-[#f7f7f7] pt-[100px] pb-[30px]">
                <div className="form-container login__form flex items-end justify-center">
                    <form onSubmit={handleLogin} className="form-user w-[390px] rounded-[5px] border-[1px] border-[#999] bg-[#ffffff] p-[20px] shadow-[0_0_5px_0_#e3e3e3]" action="">
                        <div className="login__content mb-[5px]">
                            <label htmlFor="email" className="mb-[10px] font-bold inline-block">Email</label><br />
                            <input
                                ref={emailRef}
                                type="email"
                                className="mb-[15px] w-full p-[10px] rounded-[10px] border-[1px] border-[#999] text-[14px] transition duration-[0.3s]"
                                name="email"
                                placeholder="Email" /><br />
                            <label className="mb-[10px] font-bold inline-block" htmlFor="password">Mật khẩu</label><br />
                            <input
                                ref={passwordRef}
                                type="password"
                                className="mb-[15px] w-full p-[10px] rounded-[10px] border-[1px] border-[#999] text-[14px] transition duration-[0.3s]"
                                name="password"
                                placeholder="Mật khẩu" />
                        </div>
                        <div className="login__save mb-[10px] flex items-center">
                            <input ref={rememberRef} className="w-[15px] h-[15px] mr-[10px] focus:shadow-none" type="checkbox" name="save" />
                            <label className="font-[400]" htmlFor="save">Ghi nhớ tài khoản</label>
                        </div>
                        <div className="login__btn mb-[5px]">
                            <button className="btn--login w-full py-[7px] px-0 rounded-[50px] border-none bg-color-green-0 text-color-white-0 font-bold transition-all duration-[0.3s] hover:bg-color-green-2">Đăng nhập</button>
                        </div>
                        <div className="login__forget py-[10px] px-0 border-[1px] border-color-gray-0 text-center">
                            <span>hoặc
                                <Link
                                    href="forgotPassword.html"
                                    className="t no-underline text-[#4ccd99] font-bold transition duration-[0.3s] hover:text-color-green-2"> Quên mật khẩu
                                </Link></span>
                        </div>
                        <div className="login__register py-[10px] px-0 text-center">
                            <span> Không có tài khoản ?
                                <Link
                                    className="no-underline text-[#4ccd99] font-bold transition duration-[0.3s] hover:text-color-green-2"
                                    href="/auth/register"> Đăng ký
                                </Link></span>
                        </div>
                        <div className="login__social">
                            <div className="login__facebook">
                                <Link
                                    href="#"
                                    className="border-[1px] border-[#3b5998] rounded-[50px] mt-[5px] mb-[10px] text-[#3b5998] transition duration-[0.3s] inline-block w-full text-center no-underline py-[7px] px-0 capitalize font-[500] hover:bg-color-blue-1 hover:text-color-white-0">Đăng nhập bằng Facebook
                                </Link>
                            </div>
                            <div className="login__google">
                                <Link
                                    href="#"
                                    className="inline-block w-full text-center no-underline py-[7px] px-0 capitalize font-[500] border-[1px] border-[#dd4c3b] rounded-[50px] text-[#dd4c3b] transition duration-[0.3s] hover:bg-color-red-0 hover:text-color-white-0">Đăng nhập bằng Google
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}