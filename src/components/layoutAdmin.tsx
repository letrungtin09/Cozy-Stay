import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/styleAdmin.css";
export default function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
