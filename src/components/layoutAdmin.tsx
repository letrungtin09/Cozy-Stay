import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/styleAdmin.css";
import HeaderAdmin from "@/components/adminComponent/HeaderAdmin";
import FooterAdmin from "@/components/adminComponent/FooterAdmin";
export default function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderAdmin />
      {children}
      <FooterAdmin />
    </>
  );
}
