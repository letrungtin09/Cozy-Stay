
import HeaderComponent from "@/components/headerComponent";
import FooterComponent from "@/components/footerComponent";


export default function LayoutCustomer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </>
    );
}
