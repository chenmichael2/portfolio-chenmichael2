import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Experience() {

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // "(min-width: 768px)": () => { // For larger screens, apply the initial animation
      //   gsap.fromTo("#about", 
      //     {
      //       y: 0, 
      //       opacity: 0 
      //     }, {
      //     scrollTrigger: {
      //       trigger: ".hero-section",
      //       start: "30% 20%",
      //       end: "bottom 20%",
      //       markers: true,
      //       scrub: 1, 
      //       toggleActions: "play none none reverse",
      //     },
      //     y: -150,
      //     opacity: 1,
      //   });
      // },
      "(max-width: 769px)": () => { // For smaller screens, apply a different animation
        gsap.fromTo("#experience", 
          {
            y: 0, 
            opacity: 0
          }, { 
          scrollTrigger: {
            trigger: "#skills",
            start: "80% 25%",
            end: "bottom 25%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
            markers: true
          },
          y: -80,
          opacity: 1,
        });
      }
    });

  }, []);

  return (
    <section id="experience" className="flex flex-col items-center justify-center w-full h-screen bg-gray-100 animate__animated animate__fadeIn -mt-0
      sm:-mt-0
      md:-mt-0">
      <div> This is the Experience</div>
      <div>Maybe career starts big with small education and they switch on a toggle</div>
      <div>Have gradient border</div>
    </section>
  );
}