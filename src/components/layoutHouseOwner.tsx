import HeaderHouseOwner from "./headerHouseOwner/HeaderHouseOwner";
import FooterComponent from "./footerComponent";

export default function LayoutHouseOwner({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderHouseOwner />
      {children}
      <FooterComponent />
    </>
  );
}
