'use client';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Project from "@/components/Project";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lenis = useLenis((lenis) => {
    // called every scroll
  });
  const [canHover, setCanHover] = useState(false);
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

    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanHover(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange as EventListener);
    else mq.addListener(onChange as unknown as (e: MediaQueryListEvent) => void);

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (mq.removeEventListener) mq.removeEventListener('change', onChange as EventListener);
      else mq.removeListener(onChange as unknown as (e: MediaQueryListEvent) => void);
    };
  }, [cursorVisible, ]);

  return (
    <>
      <ReactLenis root />
      <Hero />
      <Skills />
      <Experience />
      <Project />
    </>
  );
}