import { Geist, Geist_Mono, Outfit, Poppins } from "next/font/google";

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
    weight: ['400', '500', '600', '700'],
  });

  export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
  });