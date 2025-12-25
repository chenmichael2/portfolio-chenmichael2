import type { Metadata } from "next";
import Image from "next/image";

import "./globals.css";
import { openSauce } from "./fonts";
import Header from "@/components/Header";
import Cursor from "../../public/icons/cursor/Cursor-border.svg";

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
      <body className={`overflow-x-hidden antialiased bg-gray-50 ${openSauce.className}`}>
          <Header />
          {children}
          <Image
            src={Cursor}
            alt="Cursor Icon"
            className="cursor fixed z-50 pointer-events-none"/>
      </body>
    </html>
  );
}
