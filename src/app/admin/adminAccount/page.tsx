"use client";
import FooterAdmin from "@/components/adminComponent/FooterAdmin";
import HeaderAdmin from "@/components/adminComponent/HeaderAdmin";
import SideBarAdmin from "@/components/adminComponent/SideBarAdmin";

import RenderAdminAccount from "@/components/renderAdmin/RenderAdminAccount";

export default function Home() {
  return (
    <div>
      <section className="main-admin">
        <div className="container-fluid">
          <div className="row">
            <SideBarAdmin />
            <div className="col-10 right-admin">
              <HeaderAdmin />

              <RenderAdminAccount />

              <FooterAdmin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
