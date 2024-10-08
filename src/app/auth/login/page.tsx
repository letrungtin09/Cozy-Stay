"use client";

import ApiFunctions from "@/lib/api";
import { errorElement } from "@/lib/common";
import { useRef, useEffect } from "react";
import Link from "next/link";
import localUrl from "@/lib/const";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rememberRef = useRef<HTMLInputElement>(null);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (document.querySelectorAll(".errorLogin"))
      document.querySelectorAll(".errorLogin").forEach((e) => e.remove());
    const apiUrl: string = `${localUrl}/api/login`;
    const email = emailRef.current?.value || "";
    const passWord = passwordRef.current?.value || "";
    if (email == "") {
      errorElement("Nhập email của bạn", emailRef.current);
    } else if (passWord == "") {
      errorElement("Nhập password của bạn", passwordRef.current);
    } else {
      const data: FormValuesLogin = {
        email: email,
        password: passWord,
        types: rememberRef.current?.checked,
      };
      ApiFunctions.postData(apiUrl, data).then((response) => {
        if (response.response) {
          if (response.response.status === 404) {
            errorElement(response.response.data.error, emailRef.current);
          } else if (response.response.status === 401) {
            errorElement(response.response.data.error, passwordRef.current);
          }
        } else if (response.status) {
          if (response.idUser && (response.role == 0 || response.role == 1)) {
            window.sessionStorage.setItem(
              "currentUser",
              JSON.stringify(response)
            );
            window.location.href = "/";
          } else if (response.idUser && response.role == 2) {
            window.sessionStorage.setItem(
              "currentUser",
              JSON.stringify(response)
            );
            window.location.href = "/admin/statisticIncome";
          }
        }
      });
    }
  };

  useEffect(() => {
    emailRef.current && emailRef.current.focus();
  }, []);

  return (
    <>
      <div className="form-gadgets login bg-[#f7f7f7] pt-[130px] pb-[50px]">
        <div className="form-container login__form flex items-end justify-center">
          <form
            onSubmit={handleLogin}
            className="form-user w-[390px] rounded-[5px] border-[1px] border-[#999] bg-[#ffffff] p-[20px] shadow-[0_0_5px_0_#e3e3e3]"
            action=""
          >
            <div className="login__content mb-[5px]">
              <label
                htmlFor="email"
                className="mb-[10px] font-bold inline-block"
              >
                Email
              </label>
              <br />
              <input
                ref={emailRef}
                type="email"
                className="mb-[15px] w-full p-[10px] rounded-[10px] border-[1px] border-[#999] text-[14px] transition duration-[0.3s]"
                name="email"
                placeholder="Email"
              />
              <br />
              <label
                className="mb-[10px] font-bold inline-block"
                htmlFor="password"
              >
                Mật khẩu
              </label>
              <br />
              <input
                ref={passwordRef}
                type="password"
                className="mb-[15px] w-full p-[10px] rounded-[10px] border-[1px] border-[#999] text-[14px] transition duration-[0.3s]"
                name="password"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="login__save mb-[10px] flex items-center">
              <input
                ref={rememberRef}
                className="w-[15px] h-[15px] mr-[10px] focus:shadow-none"
                type="checkbox"
                name="save"
              />
              <label className="font-[400]" htmlFor="save">
                Ghi nhớ tài khoản
              </label>
            </div>
            <div className="login__btn mb-[5px]">
              <button className="btn--login w-full py-[7px] px-0 rounded-[50px] border-none bg-color-green-0 text-color-white-0 font-bold transition-all duration-[0.3s] hover:bg-color-green-2">
                Đăng nhập
              </button>
            </div>
            <div className="login__forget py-[10px] px-0 text-center">
              <span>
                hoặc
                <Link
                  href="/auth/forgotPassword"
                  className="t no-underline text-[#4ccd99] font-bold transition duration-[0.3s] hover:text-color-green-2"
                >
                  {" "}
                  Quên mật khẩu
                </Link>
              </span>
            </div>
            <div className="login__register py-[10px] px-0 text-center">
              <span>
                {" "}
                Không có tài khoản ?
                <Link
                  className="no-underline text-[#4ccd99] font-bold transition duration-[0.3s] hover:text-color-green-2"
                  href="/auth/register"
                >
                  {" "}
                  Đăng ký
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
