'use client';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState } from "react";

import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lenis = useLenis((lenis) => {
    // called every scroll
  });

  const [cursorVisible, setCursorVisible] = useState(true);
  
  useEffect(() => {
    setCursorVisible(false);
    const cursor = document.querySelector('.cursor') as HTMLElement;
    if (cursor) cursor.style.opacity = cursorVisible ? '1' : '0';
    
    window.addEventListener('mousemove', (e) => {
      cursor.style.opacity = '1';
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
    const handleMouseEnter = () => {
      setCursorVisible(true);
      cursor.style.opacity = '1';
    }
    const handleMouseLeave = () => {
      setCursorVisible(false);
      cursor.style.opacity = '0';
    }

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorVisible]);

  return (
    <>
      <ReactLenis root />
      <Hero />
      <Skills />
      <Experience />
    </>
  );
}