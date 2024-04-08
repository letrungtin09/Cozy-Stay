import React from "react";
import Image from "next/image";
import logo from "../../public/images/CozyStay.png";

const FooterAdmin = () => {
  return (
    <div className="footer-admin">
      <div className="footer-logo">
        <Image
          src={logo}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="footer-copyright">
        <p className="footer-lttin">
          &copy; Copyright 2024 CozyStay. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterAdmin;
