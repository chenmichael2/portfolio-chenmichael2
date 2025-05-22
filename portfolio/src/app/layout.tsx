import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";

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
      
      <body className={`bg-gray-50 antialiased`}>
        {/* <SmoothScroll> */}
          <Header />
          {children}
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
