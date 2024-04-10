import LayoutCustomer from "@/components/layoutCustomer";

export default function LayoutAuth({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LayoutCustomer>
            {children}
        </LayoutCustomer>
    );
}
