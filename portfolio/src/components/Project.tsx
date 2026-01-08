'use client';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import ProjCard from "./items/projCard";

export default function Project() {

    const projects = {
        image: "",
        title: "",
        description: "", 
        links: {
            "github": "",
        }
    };
  
    useEffect(() => {

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => { // For smaller screens, apply the initial animation
        gsap.fromTo("#project", 
          {
            y: 50, 
            opacity: 0 
          }, {
          scrollTrigger: {
            trigger: "#experience",
            start: "30% 20%",
            end: "70% 20%",
            scrub: 1, 
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
        });
      },
      "(max-width: 769px)": () => { // For larger screens, apply a different animation
        gsap.fromTo("#project", 
          {
            y: 0, 
            opacity: 0
          }, {
          scrollTrigger: {
            trigger: "#experience",
            start: "60% 25%",
            end: "bottom 25%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
          y: -10,
          opacity: 1,
        });
      }
    });

  }, []);

  return (
    <section id="project" className="w-full min-h-240 h-screen max-h-300 bg-transparent pt-15">
        <div className="flex flex-col justify-center items-center gap-3 mb-5">
            <h1 className="text-gray-700 text-4xl">Projects</h1>
            <div className="h-1 w-44 bg-gradient-to-r to-primary from-tertiary"></div>
        </div>
        <div className="flex justify-center gap-5">
            <ProjCard />
            <ProjCard />
        </div>
    </section>
  );
}