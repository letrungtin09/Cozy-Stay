import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/formAdmin.css";
import "@/styles/styleAdmin.css";
import ProtectedAdmin from "@/components/authorization/protectedAdmin";


export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedAdmin>
      {children}
    </ProtectedAdmin>
  )
}