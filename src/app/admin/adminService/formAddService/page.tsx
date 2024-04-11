"use client";
import FooterAdmin from "@/components/adminComponent/FooterAdmin";
import HeaderAdmin from "@/components/adminComponent/HeaderAdmin";
import SideBarAdmin from "@/components/adminComponent/SideBarAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/formAdmin.css";
import "@/styles/styleAdmin.css";
import FormAddService from "@/components/formAdmin/FormAddService";



export default function page() {
  return (
    <div>
      <section className="main-admin">
        <div className="container-fluid">
          <div className="row">
            <SideBarAdmin />
            <div className="col-10 right-admin">
              <HeaderAdmin />

              <FormAddService/>


              <FooterAdmin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}