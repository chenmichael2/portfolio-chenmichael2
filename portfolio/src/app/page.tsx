'use client';
import { ReactLenis, useLenis } from "lenis/react";

import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {});
  return (
    <div>
      <ReactLenis root>
      <Hero />
      <About />
      </ReactLenis>
    </div>
  );
}
