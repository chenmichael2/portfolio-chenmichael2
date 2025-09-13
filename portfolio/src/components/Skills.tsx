import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const languages = [
    {alt: "HTML", icon: `/icons/technologies/Light/html.svg`, name:"HTML"},
    {alt: "CSS", icon: "/icons/technologies/Light/css.svg", name:"CSS"},
    {alt: "JavaScript", icon: "/icons/technologies/Light/javascript.svg", name:"JavaScript"},
    {alt: "TypeScript", icon: "/icons/technologies/Light/typescript.svg", name:"TypeScript"},
    {alt: "Python", icon: "/icons/technologies/Light/python.svg", name:"Python"},
    {alt: "PostgreSQL", icon: "/icons/technologies/Light/postgresql.svg", name:"PostgreSQL"},
    {alt: "JSON", icon: "/icons/technologies/Light/json.svg", name:"JSON"},
    {alt: "Angular.js", icon: "/icons/technologies/Light/angular.svg", name:"Angular.js"},
    {alt: "React", icon: "/icons/technologies/Light/react.svg", name:"React"},
    {alt: "Next.js", icon: "/icons/technologies/Light/nextjs.svg", name:"Next.js"},
    {alt: "Material UI", icon: "/icons/technologies/Light/materialui.svg", name:"MaterialUI"},
    {alt: "jQuery", icon: "/icons/technologies/Light/jquery.svg", name:"jQuery"},
    {alt: "Express", icon: "/icons/technologies/Light/express.svg", name:"Express"},
    {alt: "Django", icon: "/icons/technologies/Light/django.svg", name:"Django"},
    {alt: "MongoDB", icon: "/icons/technologies/Light/mongodb.svg", name:"MongoDB"},
    {alt: "TailwindCSS", icon: "/icons/technologies/Light/tailwindcss.svg", name:"Tailwind"},
    {alt: "Node.js", icon: "/icons/technologies/Light/nodejs.svg", name:"Node.js"},
    {alt: "Github", icon: "/icons/technologies/Light/github.svg", name:"Github"},
    {alt: "Hubspot", icon: "/icons/technologies/Light/hubspot.svg", name:"Hubspot"},
    {alt: "Crownpeak", icon: "/icons/technologies/Light/crownpeak.svg", name:"Crownpeak"},
    {alt: "SOAP", icon: "/icons/technologies/Light/soapui.svg", name:"SOAP"},
    {alt: "REST API", icon: "/icons/technologies/Light/restapi.svg", name:"Rest API"},
    {alt: "Figma", icon: "/icons/technologies/Light/figma.svg", name:"Figma"},
    {alt: "Postman", icon: "/icons/technologies/Light/postman.svg", name:""},
    {alt: "Adobe Tag Manager", icon: "/icons/technologies/Light/adobe-experience-manager.svg", name:""},
    {alt: "Adobe Analytics", icon: "/icons/technologies/Light/adobe-analytics.svg", name:""},
  ];

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
            toggleActions: "play none none reverse",
          },
          y: -80,
          opacity: 1,
        });
      }
    });

  }, []);

  return (
    <section id="about" className="flex flex-col items-center justify-center w-full bg-gray-50
      sm:-mt-0
      md:-mt-0">
      <div className="flex flex-col justify-center items-center gap-3 mb-5">
        <h1 className="text-gray-700 text-4xl">Skills</h1>
        <div className="h-1 w-25 bg-gradient-to-r to-primary from-tertiary"></div>
      </div>
      <div>
        <div className="mb-5 py-5">
          <div className="grid grid-cols-4">
            {languages.map((lang, index) => (
              <div key={index} className="flex flex-col justify-center items-center m-4">
                <Image key={index} src={lang.icon} alt={`${lang.name} Icon`} width={0} height={0} className="h-[50px] w-auto" />
                <div className="border-1 px-2 mt-1 rounded-md backdrop-blur-3xl whitespace-nowrap">{lang.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}