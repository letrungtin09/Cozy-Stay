import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";

export const ModalGhost = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <Dropdown.Menu>
            <div className="px-[10px] py-[20px] font-[500]">
                <Link href="/auth/login" className="text-[#47479a]">Đăng nhập</Link> / <Link href="/auth/register" className="text-[#248b2486]">Đăng ký</Link>
            </div>
        </Dropdown.Menu>
    );
};
