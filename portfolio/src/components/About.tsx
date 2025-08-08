import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const description = "A Software Engineer";

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
      <div className="">
        <div className="flex flex-col justify-center items-center gap-3 mb-5">
          <h1 className="text-gray-700 text-4xl">About me</h1>
          <div className="h-1 w-25 bg-gradient-to-r to-primary from-tertiary"></div>
        </div>
        <div className="flex flex-col items-around justify-around gap-10">
          <div className="flex flex-col items-center ">
            <div className="border-1 border-gray-300 w-max shadow-lg rounded-md ">
              <Image 
                width={200}
                height={200}
                src="/images/moose_me.jpeg"
                alt="Michael with his dog Moose"
                className="rounded-md w-50 h-auto object-cover"
              />
            </div>
            <div className="text-center mt-5 text-xl px-2">{description}</div>
          </div>
        </div>
      </div>
      
      
      <div>
        <h2>Skills</h2>
        <div className="flex ">
          <div>Front-end</div>
          <div>Back-end</div>
          <div>Tools</div>
          <div>Lanugages</div>
        </div>
      </div>
    </section>
  );
}