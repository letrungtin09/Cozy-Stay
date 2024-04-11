import FooterAdmin from "@/components/adminComponent/FooterAdmin";
import HeaderAdmin from "@/components/adminComponent/HeaderAdmin";
import SideBarAdmin from "@/components/adminComponent/SideBarAdmin";
import React from "react";
import FormUpdatePlace from "@/components/formAdmin/FormUpdatePlace";

const page = () => {
  return (
    <div>
      <section className="main-admin">
        <div className="container-fluid">
          <div className="row">
            <SideBarAdmin />
            <div className="col-10 right-admin">
              <HeaderAdmin />

              <FormUpdatePlace />

              <FooterAdmin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
