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
  // Detect whether the device supports hover & fine pointer
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const onChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    setCanHover(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange as EventListener);
    else mq.addListener(onChange as unknown as (e: MediaQueryListEvent) => void);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange as EventListener);
      else mq.removeListener(onChange as unknown as (e: MediaQueryListEvent) => void);
    };
  }, []);

  // Cursor event listeners: only attach when hover is available (non-touch)
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement | null;
    // Ensure cursor is hidden on touch devices
    if (!canHover) {
      if (cursor) {
        cursor.style.opacity = '0';
        cursor.style.display = 'none';
      }
      return;
    }

    if (!cursor) return;
    cursor.style.display = 'block';
    cursor.style.opacity = '0';

    let lastTouch = 0;

    const onMouseMove = (e: MouseEvent) => {
      // Ignore synthetic mouse events fired after touch
      if (Date.now() - lastTouch < 500) return;
      cursor.style.opacity = '1';
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const onMouseEnter = () => {
      setCursorVisible(true);
      cursor.style.opacity = '1';
    };
    const onMouseLeave = () => {
      setCursorVisible(false);
      cursor.style.opacity = '0';
    };

    const onTouchStart = () => {
      lastTouch = Date.now();
      // hide cursor on first touch
      cursor.style.opacity = '0';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('touchstart', onTouchStart, { passive: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('touchstart', onTouchStart);
    };
  }, [canHover]);

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