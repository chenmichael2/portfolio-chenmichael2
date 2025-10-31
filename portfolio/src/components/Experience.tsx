import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Experience() {

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => { // For larger screens, apply the initial animation
        gsap.fromTo("#experience", 
          {
            y: 0, 
            opacity: 0,
          }, { 
          scrollTrigger: {
            trigger: "#skills",
            start: "-60% 25%",
            end: "70% 25%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
            markers: true,
          },
          y: -100,
          opacity: 1,
        });
        gsap.fromTo("#skills",
          {
            opacity: 1
          },
          {
            scrollTrigger: {
              trigger:"#skills", 
              start: "80% 25%",
              end: "bottom 25%",
              scrub: 0.5,
              toggleActions: "play none none reverse",
            },
            opacity: 0
          }
        )
      },
      "(max-width: 769px)": () => { // For smaller screens, apply a different animation
        gsap.fromTo("#experience", 
          {
            y: 0, 
            opacity: 0,
          }, { 
          scrollTrigger: {
            trigger: "#skills",
            start: "50% 25%",
            end: "bottom 25%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
          y: -100,
          opacity: 1,
        });
        gsap.fromTo("#skills",
          {
            opacity: 1
          },
          {
            scrollTrigger: {
              trigger:"#skills", 
              start: "80% 25%",
              end: "bottom 25%",
              scrub: 0.5,
              toggleActions: "play none none reverse",
            },
            opacity: 0
          }
        )
      }
    });

    const [expButton, expButtonState] = useState("experience");
  }, []);

  return (
    <section id="experience" className="flex flex-col items-center justify-start w-full h-screen bg-transparent -mt-0
      sm:-mt-0
      md:-mt-0">
      <div className="flex flex-col justify-center items-center gap-3 mb-5">
        <h1 className="text-gray-700 text-4xl">Experience</h1>
        <div className="h-1 w-44 bg-gradient-to-r to-primary from-tertiary"></div>
      </div>
      <div id="expeButton" className="w-content border-1 flex flex-row justify-around p-1 gap-3 rounded-md bg-gradient-to-r to-primary from-tertiary">
        <button className="px-5 py-0.3 z-99 text-gray-50">Experience</button>
        <div id="buttonSlider" className="absolute w-30 h-6 -translate-x-15 rounded-sm bg-neutral-800/50 text-neutral-200 backdrop-blur-[2px] border-2 border-neutral-200/20 hover:bg-neutral-400/30"></div>
        <button className="px-5 py-0.3 z-99 text-gray-50">Education</button>
      </div>
      <div id="exp">
        <h2>This is the Experience</h2>
      </div>
      <div id="edu"><h2>This is the Education</h2></div>
      <div>Maybe career starts big with small education and they switch on a toggle</div>
      <div>Have gradient border</div>
    </section>
  );
}