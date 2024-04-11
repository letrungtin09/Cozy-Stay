"use client";
import FooterAdmin from "@/components/adminComponent/FooterAdmin";
import HeaderAdmin from "@/components/adminComponent/HeaderAdmin";
import SideBarAdmin from "@/components/adminComponent/SideBarAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/styleAdmin.css";
import RenderAdminService from "@/components/renderAdmin/RenderAdminService";

// import RenderAdminService from "@/components/renderAdmin/RenderAdminService";


export default function Home() {
  return (

    <div>
      <section className="main-admin">
        <div className="container-fluid">
          <div className="row">
            <SideBarAdmin />
            <div className="col-10 right-admin">
              <HeaderAdmin />

              <RenderAdminService/>

              <FooterAdmin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
