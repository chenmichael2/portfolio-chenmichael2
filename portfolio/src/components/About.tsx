import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // "(min-width: 768px)": () => { // For smaller screens, apply the initial animation
      //   gsap.fromTo(".hero-section", 
      //     {
      //       y: 0, 
      //       opacity: 1 
      //     }, {
      //     scrollTrigger: {
      //       trigger: ".hero-section",
      //       start: "30% 20%",
      //       end: "bottom 20%",
      //       scrub: 1, 
      //       toggleActions: "play none none reverse",
      //     },
      //     y: -50,
      //     opacity: 0,
      //   });
      // },
      "(max-width: 769px)": () => { // For larger screens, apply a different animation
        gsap.fromTo("#about", 
          {
            y: 0, 
            opacity: 0
          }, {
          scrollTrigger: {
            trigger: ".hero-section",
            start: "50% 25%",
            end: "bottom 25%",
            scrub: 0.5,
            markers: true,
            toggleActions: "play none none reverse",
          },
          y: -20,
          opacity: 1,
        });
      }
    });

  }, []);

  return (
    <section id="about" className="flex flex-col items-center justify-center w-full bg-gray-50 border-t-1 border-b-1 
      sm:-mt-0
      md:-mt-0">

        <div className="flex flex-col justify-center items-center gap-3 mb-5">
          <h1 className="text-gray-700 text-4xl">About me</h1>
          <div className="h-1 w-25 bg-gradient-to-r to-primary from-tertiary"></div>
        </div>
      
      <div>
        <h2>Skills</h2>
        <div className="flex ">
          <div>Languages: HTML, CSS, JavaScript, TypeScript, Python, SQL (PostgreSQL), JSON</div>
          <div>Technologies: Angular.js, React, Next.js, Material UI, jQuery, Express, Django</div>
          <div>Tools: Github, Node.js, Hubspot, Crownpeak CMS, Adobe Tag Manager, Adobe Analytics, SOAP, REST API, Figma</div>
        </div>
      </div>
    </section>
  );
}