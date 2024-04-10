import React from "react";
import FooterAdmin from "@/components/adminComponent/FooterAdmin";
import HeaderAdmin from "@/components/adminComponent/HeaderAdmin";
import SideBarAdmin from "@/components/adminComponent/SideBarAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/formAdmin.css";
import "@/styles/styleAdmin.css";
import FormAddPlace from "@/components/formAdmin/FormAddPlace";

const page = () => {
  return (
    <div>
      <section className="main-admin">
        <div className="container-fluid">
          <div className="row">
            <SideBarAdmin />
            <div className="col-10 right-admin">
              <HeaderAdmin />

              <FormAddPlace />

              <FooterAdmin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
