import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/styleAdmin.css";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";
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
