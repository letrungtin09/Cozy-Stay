import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.css";
export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
