'use client';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    
  useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".picture",
          start: "0% 22%",
          end: "bottom 50%",
          markers: true,
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
    });
  
    tl.to(".picture", { y: 700, duration: 1 });
  }, []);
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}
