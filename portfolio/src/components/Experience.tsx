import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Experience() {
  const [expButton, setExpState] = useState(true);
  const [timeHeight, setLineHeight] = useState(10);
  const [dotIndex, setDotIndex] = useState(0);
  
  const handleClick = () => {
    setExpState(exp => (exp === true ? false : true));
    setLineHeight(height => (height === 10 ? 20 : 10));
    setDotIndex(exp => (exp === 0 ? 1 : 0))
  }

  const dot: object = {
    "blue": [1, 1],
    "yellow": [5, 10],
    "red": [10, 20],
  };

  const cardInfo = {
    "exp": {
      1: {
        "title": "Mercury",
        "date": "2024-2025",
        "jobTitle": "Marketing Web Developer",
        "description": [
          "a is for apple", 
          "b is for basket"
        ],
      }

    }, 
    "edu": {}
  }

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

  }, []);

  return (
    <section id="experience" className="flex flex-col items-center justify-start w-full h-screen bg-transparent -mt-0 px-3
      sm:-mt-0
      md:-mt-0">
      <div className="flex flex-col justify-center items-center gap-3 mb-5">
        <h1 className="text-gray-700 text-4xl">Experience</h1>
        <div className="h-1 w-44 bg-gradient-to-r to-primary from-tertiary"></div>
      </div>
      <button id="expeButton" className="w-content border-1 flex flex-row justify-around p-1 gap-3 rounded-md bg-gradient-to-r to-primary from-tertiary" onClick={handleClick}>
        <div className="px-5 py-0.3 z-99 text-gray-50">Experience</div>
        <div id="buttonSlider" className={`absolute h-6 ${expButton ? "-translate-x-15.5 w-29" : "translate-x-16.5 w-27"} -translate-x-15 rounded-sm bg-neutral-800/50 text-neutral-200 backdrop-blur-[2px] border-2 border-neutral-200/20 hover:bg-neutral-400/30 transition-all duration-150`}></div>
        <div className="px-5 py-0.3 z-99 text-gray-50">Education</div>
      </button>
      <div className={`pt-7 h-${timeHeight} w-full`}>
        <div id="timeline" className="flex justify-center">
          <div className={`absolute z-40 w-2 rounded-xl bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all ease-in-out duration-300`}
          style={{ height: `${timeHeight}rem` }} />
          {Object.entries(dot).map(([key, value]) => (
            <svg key={key} className={`z-50 absolute transition-all duration-300`} style={{top: `${value[dotIndex]}rem`, marginTop: '8rem'}} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill={`${key ? key : "#0000FF"}`}/>
              <circle cx="5" cy="5" r="3" fill="oklch(98.5% .002 247.839)"/>
            </svg>
          ))}
          <div>
            Experience
          </div>
        </div>
        <div id="exp" className={`animate__animated w-auto ${expButton ? "inline animate__fadeInLeft" : "hidden animate__fadeOutLeft"} transition-all duration-300`}>
          <h2>This is the Experience</h2>
          <div className="w-full px-5 grid grid-cols-2 gap-10">
            <div className="border-1 p-2 px-4 max-w-sm">Left</div>
            <div className="border-1 p-2 px-4 max-w-sm">Right</div>
          </div>
        </div>
        <div id="edu" className={`animate__animated ${expButton ? "hidden animate__fadeOutRight" : "inline animate__fadeInRight"} `}>
          <h2>This is the Education</h2>
        </div>
      </div>
    </section>
  );
}