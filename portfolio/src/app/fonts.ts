import { Geist, Geist_Mono, Outfit, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
  });

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '800'],
});

export const openSauce = localFont({
  src: "../../public/fonts/open-sauce.one-regular.ttf",
  variable: "--font-open-sauce",
  weight: "400",
  display: "swap",
});