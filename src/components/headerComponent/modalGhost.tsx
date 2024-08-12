import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";

export const ModalGhost = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <Dropdown.Menu>
      <div className="px-[20px] py-[20px] font-[500]">
        <div className="text-center bg-color-green-0 py-[5px] rounded-[10px] duration-300 hover:bg-color-green-2">
          <Link href="/auth/login" className="text-[#ffff]">
            Đăng nhập
          </Link>
        </div>
        <div className="text-center">hoặc</div>
        <div className="text-center bg-color-green-0 py-[5px] rounded-[10px] duration-300 hover:bg-color-green-2">
          <Link href="/auth/register" className="text-[#ffff]">
            Đăng ký
          </Link>
        </div>
      </div>
    </Dropdown.Menu>
  );
};
