import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrderNest - Authentication",
  description: "Login or register to access OrderNest manufacturing ERP system",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}