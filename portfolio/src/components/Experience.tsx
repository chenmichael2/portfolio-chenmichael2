import { useEffect, useState } from "react";
import gsap from "gsap";
import ExpCard from "./items/expCard";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Experience() {
  const expHeightList = [59, 54, 46, 41, 31, 27];
  const eduHeightList = [38, 34, 33, 32, 20, 20];

  const [expHeight, setExpHeight] = useState<number>(expHeightList[2] ?? expHeightList[0]);
  const [eduHeight, setEduHeight] = useState<number>(eduHeightList[2] ?? eduHeightList[0]);
  const [expButton, setExpState] = useState(true);
  const [timeHeight, setLineHeight] = useState(expHeight);
  
  const handleClick = () => {
    setExpState(prev => {
      const next = !prev;
      // use resolved per-breakpoint heights (expHeight / eduHeight)
      setLineHeight(next ? expHeight : eduHeight);
      return next;
    });
  };

  const cardInfo = {
    "exp": [
      {
        title: "Mercury Insurance",
        logo: "/mercury-logo.jpg", 
        dates: "2024 - present",
        jobTitle: "Marketing Web Developer",
        top: 0.5,
        height: 10,
      },
      {
        title: "United States Marine Corps",
        logo: "/marine-red.jpg", 
        dates: "2018 - present",
        jobTitle: "Expeditionary Airfield Technician",
        top: [13.5, 13, 11.5, 10.5, 8, 7]
      },
      {
        title: "General Assembly",
        logo: "/generalassembly_logo.jpeg", 
        dates: "2021 - 2022",
        jobTitle: "Software Engineering Fellow",
        top: 0.5
      },
      {
        title: "PRN Ambulance",
        logo: "/prn_ambulance_inc_logo.jpeg", 
        dates: "2018",
        jobTitle: "Emergency Medical Technician",
        top: [14.5, 14, 11.5, 10.5, 8, 7]
      },

    ], 
    "edu": [
      {
        title: "Boston University",
        logo: "/bu_logo.jpeg", 
        dates: "2025 - 2027",
        jobTitle: "MS, Data Science",
        top: [0.5]
      },
      {
        title: "UC Irvine",
        logo: "/university_of_california_irvine_logo.jpeg", 
        dates: "2025 - 2027",
        jobTitle: "BS, Biological Sciences",
        top: [13, 10.5, 10.5, 10.5, 7, 7]
      },
      {
        title: "General Assembly",
        logo: "/generalassembly_logo.jpeg", 
        dates: "2025 - 2027",
        jobTitle: "Certificate, Software Engineering",
        top: [0.5]
      },
      
    ]
  }

  const dates: Array<any> = [
    // posExp / posEdu can be arrays of values per breakpoint [mobile, tablet, desktop]
    {posExp: [7, 7, 5.5, 5, 4, 4],  expYear: cardInfo.exp[0].dates, posEdu: [7, 5.5, 5, 5, 3.5, 3.5], eduYear: cardInfo.edu[0].dates, right: true}, 
    {posExp: [22, 20, 17.5, 16, 12, 10],  expYear: cardInfo.exp[1].dates, posEdu: [17, 16, 15.5, 15.5, 10, 10], eduYear: cardInfo.edu[1].dates, right: false}, 
    {posExp: [37, 32, 29.5, 27, 19.5, 17],  expYear: cardInfo.exp[2].dates, posEdu: [32, 28, 27, 26, 17, 16.5], eduYear: cardInfo.edu[2].dates, right: true},
    {posExp: [51.5, 44, 41, 37, 27, 23],  expYear: cardInfo.exp[3].dates, posEdu: null, eduYear: null, right: false},
  ]

  const [bpIndex, setBpIndex] = useState<number>(2);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const getIndex = (w: number) => {
      if (w < 434) return 0;
      if (w < 524) return 1
      if (w < 670) return 2;
      if (w < 770) return 3;
      if (w < 963) return 4;
      return 5; // desktop
    };

    const update = () => setBpIndex(getIndex(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const nextExp = expHeightList[bpIndex] ?? expHeightList[0];
    const nextEdu = eduHeightList[bpIndex] ?? eduHeightList[0];
    setExpHeight(nextExp);
    setEduHeight(nextEdu);
    setLineHeight(expButton ? nextExp : nextEdu);
  }, [bpIndex, expButton]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    ScrollTrigger.refresh();
  }, [bpIndex]);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => { 
        gsap.fromTo("#experience", 
          {
            y: 100, 
            opacity: 0,
          }, { 
          scrollTrigger: {
            trigger: "#skills",
            start: "-60% 25%",
            end: "70% 25%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
          y: 0,
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
            y: 100, 
            opacity: 0,
          }, { 
          scrollTrigger: {
            trigger: "#skills",
            start: "50% 25%",
            end: "bottom 25%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
          y: 0,
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 769px)": () => {
          gsap.utils.toArray('.exp-card').forEach((el) => {
            gsap.fromTo(el as Element,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                  trigger: el as Element,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                }
              }
            );
          });
        },
        "(max-width: 768px)": () => {
          gsap.utils.toArray('.exp-card').forEach((el) => {
            gsap.fromTo(el as Element,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.45,
                scrollTrigger: {
                  trigger: el as Element,
                  start: 'top 90%',
                  toggleActions: 'play none none reverse',
                }
              }
            );
          });
        }
      });
    }, "#experience");

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [expButton]);

  return (
    <section id="experience" style={{ height: `${timeHeight + 8 }rem` }} className="flex flex-col items-center justify-start w-full h-screen bg-transparent -mt-0 px-3 pb-5
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
      <div className="pt-7 w-full" style={{ height: `${timeHeight + 50}rem` }}>
        <div id="timeline" className="flex justify-center">
          <div className={`absolute z-40 w-2 rounded-xl bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all ease-in-out duration-300`}
          style={{ height: `${timeHeight}rem` }} />
          {dates.map((obj, index) => {
            const source = (!expButton) ? obj.posEdu : obj.posExp;
            const topVal = Array.isArray(source) ? (source[bpIndex] ?? source[0]) : source;
            return (
              <div key={index} className="z-50 absolute transition-all duration-300" style={{top: `${topVal}rem`, marginTop: '8rem'}} >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="5" className="backdrop-blur-xl" />
                  <circle cx="5" cy="5" r="3" fill="oklch(98.5% .002 247.839)"/>
                </svg>
                <p className={`absolute text-primary text-shadow text-center font-bold text-xl w-50 top-1/2 -translate-y-1/2 ${obj.right ? "" : "-translate-x-50"} animate-1 animate__animated ${expButton ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}>
                  {expButton ? obj.expYear : obj.eduYear}
                </p>
              </div>
            )
          })}
          <div id="exp" className={`animate__animated w-auto ${expButton ? "inline animate__fadeInLeft" : "hidden animate__fadeOutLeft"} transition-all duration-300`}>
            <div className="w-full px-5 grid grid-cols-2 gap-x-10">
              {Object.keys(cardInfo.exp).map(cardKey => {
                const info = (cardInfo.exp as any)[Number(cardKey)];
                if (!info) return null;
                // support `top` as a number or an array of numbers per breakpoint
                const topSource = info.top;
                const topVal = Array.isArray(topSource) ? (topSource[bpIndex] ?? topSource[0]) : topSource;
                return (
                  <ExpCard
                    id={`exp${cardKey}`}
                    key={cardKey}
                    title={info.title}
                    logo={info.logo}
                    dates={info.dates}
                    jobTitle={info.jobTitle}
                    top={topVal}
                  />
                );
              })}
            </div>
          </div>
          <div id="edu" className={`animate__animated ${expButton ? "hidden animate__fadeOutRight" : "inline animate__fadeInRight"} `}>
            <div className="w-full px-5 grid grid-cols-2 gap-x-10">
              {Object.keys(cardInfo.edu).map(cardKey => {
                const info = (cardInfo.edu as any)[Number(cardKey)];
                if (!info) return null;
                const topSource = info.top;
                const topVal = Array.isArray(topSource) ? (topSource[bpIndex] ?? topSource[0]) : topSource;
                return (
                  <ExpCard
                    id={`edu${cardKey}`}
                    key={cardKey}
                    title={info.title}
                    logo={info.logo}
                    jobTitle={info.jobTitle}
                    height={info.height}
                    top={topVal}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}