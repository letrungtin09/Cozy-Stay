"use client";
import FooterAdmin from "@/components/adminComponent/FooterAdmin";
import HeaderAdmin from "@/components/adminComponent/HeaderAdmin";
import SideBarAdmin from "@/components/adminComponent/SideBarAdmin";



import RenderAdminCategory from "@/components/renderAdmin/RenderAdminCategory";

export default function Home() {
  return (
    <div>
      <section className="main-admin">
        <div className="container-fluid">
          <div className="row">
            <SideBarAdmin />
            <div className="col-10 right-admin">
              <HeaderAdmin />

              <RenderAdminCategory/>

              <FooterAdmin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
