import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const languages = [
    {name: "HTML", icon: "/icons/technologies/Light/languages/html.svg"},
    {name: "CSS", icon: "/icons/technologies/Light/languages/css.svg"},
    {name: "JavaScript", icon: "/icons/technologies/Light/languages/javascript.svg"},
    {name: "TypeScript", icon: "/icons/technologies/Light/languages/typescript.svg"},
    {name: "Python", icon: "/icons/technologies/Light/languages/python.svg"},
    {name: "PostgreSQL", icon: "/icons/technologies/Light/languages/postgresql.svg"},
    {name: "JSON", icon: "/icons/technologies/Light/languages/json.svg"},
  ]; 
  // JavaScript, TypeScript, Python, SQL (PostgreSQL), JSON

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
          y: -80,
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
        <h1 className="text-gray-700 text-4xl">Skills</h1>
        <div className="h-1 w-25 bg-gradient-to-r to-primary from-tertiary"></div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center border-1 mb-5 py-5 overflow-x-scroll">
          <div className="flex items-center">
            {languages.map((lang, index) => (
              <Image key={index} src={lang.icon} alt={lang.name} width={1000} height={1000} className="mx-6 px-2 w-40" />                                                                                               
            ))}
            {/* <Image src={"/icons/technologies/Light/html.svg"} alt="HTML" width={50} height={50} /> */}
          </div>
        </div>
      </div>
    </section>
          // <div>Languages: HTML, CSS, JavaScript, TypeScript, Python, SQL (PostgreSQL), JSON</div>
          // <div>technologies: Angular.js, React, Next.js, Material UI, jQuery, Express, Django</div>
          // <div>Tools: Github, Node.js, Hubspot, Crownpeak CMS, Adobe Tag Manager, Adobe Analytics, SOAP, REST API, Figma</div>
  );
}