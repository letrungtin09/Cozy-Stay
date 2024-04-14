"use client";
import ApiFunctions from "@/lib/api";
import { errorElement } from "@/lib/common";
import { useRef, useEffect } from "react";
import Link from "next/link";
import LayoutCustomer from "@/components/layoutCustomer";
import localUrl from "@/lib/const";

export default function Register() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    if (document.querySelectorAll(".errorLogin"))
      document.querySelectorAll(".errorLogin").forEach((e) => e.remove());
    event.preventDefault();
    const apiUrl: string = `${localUrl}/api/register`;
    const userName = fullNameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const passWord = passwordRef.current?.value || "";
    const confirmPassword = confirmPasswordRef.current?.value || "";
    if (
      userName !== "" &&
      email !== "" &&
      passWord !== "" &&
      passWord === confirmPassword
    ) {
      const data: FormValuesRegister = {
        userName: userName,
        email: email,
        password: passWord,
      };
      ApiFunctions.postData(apiUrl, data).then((res) => {
        if (res.response) {
          if (res.response.status == 409) {
            errorElement(res.response.data.error, emailRef.current);
          }
        } else {
          window.location.href = "/auth/login";
        }
      });
    } else {
      if (passWord == "")
        errorElement("Nhập password của bạn", passwordRef.current);
      else if (passWord !== confirmPassword)
        errorElement(
          "Xác nhận lại mật khẩu không đúng",
          confirmPasswordRef.current
        );
      if (email == "") errorElement("Nhập email của bạn", emailRef.current);
      if (userName == "")
        errorElement("Nhập họ tên của bạn", fullNameRef.current);
    }
  };
  return (
    <>
      <div className="form-gadgets register bg-[#f7f7f7] pt-[100px] pb-[30px]">
        <div className="form-container register__form flex items-end justify-center">
          <form
            onSubmit={handleRegister}
            className="form-user w-[390px] rounded-[5px] border-[1px] border-[#999] bg-[#ffffff] p-[20px] shadow-[0_0_5px_0_#e3e3e3]"
            action=""
          >
            <div className="register__content">
              <label
                className="mb-[10px] font-bold inline-block"
                htmlFor="fullName"
              >
                Họ và tên
              </label>
              <br />
              <input
                className="mb-[10px] w-full p-[10px] rounded-[10px] border-[1px] border-[#999] text-[14px] transition duration-[0.3s]"
                type="text"
                ref={fullNameRef}
                name="fullName"
              />
              <br />
              <label
                className="mb-[10px] font-bold inline-block"
                htmlFor="email"
              >
                Email
              </label>
              <br />
              <input
                className="mb-[10px] w-full p-[10px] rounded-[10px] border-[1px] border-[#999] text-[14px] transition duration-[0.3s]"
                type="email"
                ref={emailRef}
                name="email"
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
                className="mb-[10px] w-full p-[10px] rounded-[10px] border-[1px] border-[#999] text-[14px] transition duration-[0.3s]"
                type="password"
                ref={passwordRef}
                name="password"
              />
              <br />
              <label
                className="mb-[10px] font-bold inline-block"
                htmlFor="confirmPassword"
              >
                Xác nhận mật khẩu
              </label>
              <br />
              <input
                className="mb-[10px] w-full p-[10px] rounded-[10px] border-[1px] border-[#999] text-[14px] transition duration-[0.3s]"
                type="password"
                ref={confirmPasswordRef}
                name="confirmPassword"
              />
              <br />
            </div>
            <div className="register__btn mt-[10px]">
              <button className="btn--register w-full py-[7px] px-0 rounded-[50px] border-none bg-color-green-0 text-color-white-0 font-bold transition-all duration-[0.3s] hover:bg-color-green-2">
                Đăng ký
              </button>
            </div>
            <div className="register__rule text-center mt-[15px] px-[20px] pb-[10px] border-b-[1px] border-[#e3e3e3]">
              <span>
                Bạn đồng ý với
                <Link
                  className="no-underline text-[#4ccd99] font-bold transition duration-[0.3s] hover:text-color-green-2"
                  href="#"
                >
                  {" "}
                  Điều khoản sử dụng
                </Link>{" "}
                và
                <Link
                  className="no-underline text-[#4ccd99] font-bold transition duration-[0.3s] hover:text-color-green-2"
                  href="#"
                >
                  {" "}
                  Chính sách bảo mật
                </Link>{" "}
                của chúng tôi
              </span>
            </div>
            <div className="register__login mt-[10px] text-center">
              <span>
                Đã có tài khoản ?
                <Link
                  className="no-underline text-[#4ccd99] font-bold transition duration-[0.3s] hover:text-color-green-2"
                  href="/auth/login"
                >
                  {" "}
                  Đăng nhập
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
