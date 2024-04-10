import LayoutAdmin from "@/components/layoutAdmin";
import SideBarAdmin from "@/components/SideBarAdmin";
export default function LayoutAuth({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="main-admin">
            <div className="container-fluid">
                <div className="row">
                    <SideBarAdmin />
                    <div className="col-10 right-admin">
                        <LayoutAdmin>
                            {children}
                        </LayoutAdmin>
                    </div>
                </div>
            </div>
        </section >
    );
}
