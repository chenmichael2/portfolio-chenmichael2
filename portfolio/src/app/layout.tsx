import type { Metadata } from "next";
import Image from "next/image";

import "./globals.css";
import Header from "@/components/Header";
import Cursor from "../../public/icons/Cursor.svg";

export const metadata: Metadata = {
  title: "Michael Chen",
  description: "Michael Chen's Portfolio",
  icons: {
    icon: "/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden antialiased bg-gray-50`}>
          <Header />
          {children}
          <Image
            src={Cursor}
            alt="Cursor Icon"
            className="cursor fixed top-0 left-0 z-50 pointer-events-none"/>
      </body>
    </html>
  );
}
