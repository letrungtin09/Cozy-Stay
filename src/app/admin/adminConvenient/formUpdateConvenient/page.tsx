import FooterAdmin from "@/components/adminComponent/FooterAdmin";
import HeaderAdmin from "@/components/adminComponent/HeaderAdmin";
import SideBarAdmin from "@/components/adminComponent/SideBarAdmin";
import FormUpdateConvenient from "@/components/formAdmin/FormUpdateConvenient";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="main-admin">
        <div className="container-fluid">
          <div className="row">
            <SideBarAdmin />
            <div className="col-10 right-admin">
              <HeaderAdmin />

              <FormUpdateConvenient />

              <FooterAdmin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
