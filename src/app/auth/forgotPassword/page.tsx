"use client";

import ApiFunctions from "@/lib/api";
import { errorElement } from "@/lib/common";
import { useRef, useEffect } from "react";
import Link from "next/link";
import localUrl from "@/lib/const";

export default function ForgotPassword() {
  return (
    <>
      <div className="form-gadgets forgotPassword pt-[130px] pb-[50px]">
        <div className="form-container forgotPassword__form">
          <form className="form-user" action="">
            <div className="forgotPassword__content">
              <label htmlFor="email">Vui lòng nhập địa chỉ Email</label>
              <br />
              <input type="email" name="email" />
              <br />
            </div>
            <div className="forgotPassword__btn pt-[5px] pb-[10px]">
              <button className="btn--forgotPassword w-full py-[7px] px-0 rounded-[50px] border-none bg-color-green-0 text-color-white-0 font-bold transition-all duration-[0.3s] hover:bg-color-green-2">
                Lấy lại mật khẩu
              </button>
            </div>
            <div className="forgotPassword__login d-flex justify-center">
              <span>
                hoặc{" "}
                <Link
                  className="no-underline text-[#4ccd99] font-bold transition duration-[0.3s] hover:text-color-green-2"
                  href="/auth/login"
                >
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
