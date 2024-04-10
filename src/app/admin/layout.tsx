import LayoutAdmin from "@/components/layoutAdmin";
import SideBarAdmin from "@/components/adminComponent/SideBarAdmin";
export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
