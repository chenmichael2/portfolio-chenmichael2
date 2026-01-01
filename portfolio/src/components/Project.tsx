'use client';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Project() {
  
  useEffect(() => {

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => { // For smaller screens, apply the initial animation
        gsap.fromTo(".hero-section", 
          {
            y: 0, 
            opacity: 1 
          }, {
          scrollTrigger: {
            trigger: ".hero-section",
            start: "30% 20%",
            end: "bottom 20%",
            scrub: 1, 
            toggleActions: "play none none reverse",
          },
          y: -50,
          opacity: 0,
        });
      },
      "(max-width: 769px)": () => { // For larger screens, apply a different animation
        gsap.fromTo(".hero-section", 
          {
            y: 0, 
            opacity: 1
          }, {
          scrollTrigger: {
            trigger: ".hero-section",
            start: "50% 25%",
            end: "bottom 25%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
          y: -10,
          opacity: 0,
        });
      }
    });

  }, []);

  return (
    <section className="project-section w-full min-h-240 h-screen max-h-300 bg-transparent pt-15">
        <div></div>
    </section>
  );
}