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

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".cursor") as HTMLElement;
      if (cursor) {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      }
      console.log(`Mouse position: X: ${e.pageX}, Y: ${e.pageY}`);

    });
  }, []);

  return (
    <>
      <ReactLenis root />
      <div className="custom-cursor"></div>
      <Hero />
      <Skills />
      <Experience />
    </>
  );
}