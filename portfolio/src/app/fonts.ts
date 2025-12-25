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
  display: "swap",
});

export const blackOpenSauce = localFont({
  src: [
    {
      path: "../../public/fonts/open-sauce.one-regular.ttf", 
      weight: '400',
      style: "normal"
    },
    {
      path: "../../public/fonts/open-sauce.sans-medium-italic.ttf", 
      weight: '500',
      style: "italic"
    },
    {
      path: "../../public/fonts/open-sauce.sans-black-italic.ttf", 
      weight: '900',
      style: "normal"
    },
  ],
  display: "swap",
});