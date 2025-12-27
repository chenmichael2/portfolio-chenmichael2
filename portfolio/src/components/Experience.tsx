import { useEffect, useState } from "react";
import gsap from "gsap";
import ExpCard from "./items/expCard";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Experience() {
  const expHeight = 60;
  const eduHeight = 60;

  const [expButton, setExpState] = useState(true);
  const [timeHeight, setLineHeight] = useState(expHeight);
  const [dotIndex, setDotIndex] = useState(0);
  
  const handleClick = () => {
    setExpState(exp => (exp === true ? false : true));
    setLineHeight(height => (height === expHeight ? eduHeight : expHeight));
    setDotIndex(exp => (exp === 0 ? 1 : 0));
  };

  const dates: Array<any> = [
    {posExp: 7,  expYear: 2024, posEdu: 1, eduYear: 2025, right: true}, 
    {posExp: 20,  expYear: 2017, posEdu: 10, eduYear: 2018, right: false}, 
    {posExp: 34,  expYear: 2015, posEdu: 20, eduYear: 2016, right: true},
    {posExp: 53,  expYear: 2018, posEdu: 20, eduYear: 2016, right: false},
  ]

  const cardInfo = {
    "exp": [
      {
        title: "Mercury Insurance",
        logo: "/mercury-logo.jpg", 
        dates: "2024-present",
        jobTitle: "Marketing Web Developer",
        top: 1
      },
      {
        title: "United States Marine Corps",
        logo: "/marine-red.jpg", 
        dates: "2018-2025",
        jobTitle: "Expeditionary Airfield Technician",
        top: 14.5
      },
      {
        title: "Software Engineering Fellow",
        logo: "/generalassembly_logo.jpeg", 
        dates: "2021-2022",
        jobTitle: "Emergency Medical Technician",
        top: 0.5
      },
      {
        title: "PRN Ambulance",
        logo: "/prn_ambulance_inc_logo.jpeg", 
        dates: "2018",
        jobTitle: "Emergency Medical Technician",
        top: 17
      },

    ], 
    "edu": []
  }

  cardInfo

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
    
    // Loop through cards
    gsap.utils.toArray('.exp-card').forEach((el, i) => {
      ScrollTrigger.matchMedia({
        "(max-width: 769px)": () => {
          gsap.fromTo(el as Element, {
          opacity: 0
        }, {
          scrollTrigger: {
            trigger: el as Element, 
            start: "-50% 80%", 
            end: "50% 75%",
            scrub: true,
            markers: true
          },
          opacity: 1,
        })
        }
      })
    });

  }, []);

  return (
    <section id="experience" className="flex flex-col items-center justify-start w-full h-content bg-transparent -mt-0 px-3 pb-5
      sm:-mt-0
      md:-mt-0">
      <div className="flex flex-col justify-center items-center gap-3 mb-5">
        <h1 className="text-gray-700 text-4xl">Experience</h1>
        <div className="h-1 w-44 bg-gradient-to-r to-primary from-tertiary"></div>
      </div>
      <button id="expeButton" className="w-content border-1 flex flex-row justify-around p-1 gap-3 rounded-md bg-gradient-to-r to-primary from-tertiary" onClick={handleClick}>
        <div className="px-5 py-0.3 z-99 text-gray-50">Experience</div>
        <div id="buttonSlider" className={`absolute h-6 ${expButton ? "-translate-x-16.5 w-28" : "translate-x-17 w-26"} -translate-x-15 rounded-sm bg-neutral-800/50 text-neutral-200 backdrop-blur-[2px] border-2 border-neutral-200/20 hover:bg-neutral-400/30 transition-all duration-150`}></div>
        <div className="px-5 py-0.3 z-99 text-gray-50">Education</div>
      </button>
      <div className={`pt-7 h-${timeHeight} w-full`}>
        <div id="timeline" className="flex justify-center">
          <div className={`absolute z-40 w-2 rounded-xl bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all ease-in-out duration-300`}
          style={{ height: `${timeHeight}rem` }} />
          {dates.map((obj, index) => (
            <div key={index} className="z-50 absolute transition-all duration-300" style={{top: `${dotIndex ? obj.posEdu : obj.posExp}rem`, marginTop: '8rem'}} >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" className="backdrop-blur-xl" />
                <circle cx="5" cy="5" r="3" fill="oklch(98.5% .002 247.839)"/>
              </svg>
              <div className={`absolute text-primary font-bold shadow-6xl text-3xl top-1/2 -translate-y-1/2 ${obj.right ? "translate-x-6" : "-translate-x-25"} animate-1 animate__animated ${expButton ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}>
                {expButton ? obj.expYear : obj.eduYear}
              </div>
            </div>
          ))}
          <div id="exp" className={`animate__animated w-auto ${expButton ? "inline animate__fadeInLeft" : "hidden animate__fadeOutLeft"} transition-all duration-300`}>
            <div className="w-full px-5 grid grid-cols-2 gap-x-10">
              {Object.keys(cardInfo.exp).map(cardKey => {
                const info = (cardInfo.exp as any)[Number(cardKey)];
                if (!info) return null;
                return (
                  <ExpCard
                    id={`exp${cardKey}`}
                    key={cardKey}
                    title={info.title}
                    logo={info.logo}
                    dates={info.dates}
                    jobTitle={info.jobTitle}
                    description={info.description}
                    top={info.top}
                  />
                );
              })}
            </div>
          </div>
          <div id="edu" className={`animate__animated ${expButton ? "hidden animate__fadeOutRight" : "inline animate__fadeInRight"} `}>
            <h2>This is the Education</h2>
          </div>
        </div>
      </div>
      <div className="h-50">Larger section</div>
    </section>
  );
}