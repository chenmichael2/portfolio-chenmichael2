'use client';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lenis = useLenis((lenis) => {
    // called every scroll
  })

  return (
    <>
      <ReactLenis root />
      <Hero />
      <Skills />
      <Experience />
    </>
  );
}