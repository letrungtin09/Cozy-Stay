import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.css";
import "@/app/globals.css";
import ProtectedPartner from "@/components/authorization/protectedPartner";

export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProtectedPartner>{children}</ProtectedPartner>;
}
