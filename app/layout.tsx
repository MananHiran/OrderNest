import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OrderNest - Manufacturing ERP",
  description: "Complete manufacturing and inventory management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <div className="min-h-screen">
          <Sidebar />
          <main className="transition-all duration-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
