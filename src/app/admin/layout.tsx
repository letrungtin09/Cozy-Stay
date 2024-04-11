import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/formAdmin.css";
import "@/styles/styleAdmin.css";
export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
