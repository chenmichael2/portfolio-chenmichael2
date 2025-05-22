'use client';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lenis = useLenis((lenis) => {
    // called every scroll
  })
    
  // useEffect(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".picture",
  //         start: "top 22%",
  //         end: "+=700",
  //         markers: true,
  //         scrub: 1,
  //       },
  //   });
  
  //   tl.to(".picture", { y: 700, duration: 1 });
  // }, []);
  return (
    <>
      <ReactLenis root />
      <Hero />
      <About />
    </>
  );
}