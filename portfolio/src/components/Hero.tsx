'use client';
import Image from "next/image";
import { icon_list } from "@/app/lib/iconLib";
import { poppins, openSauce } from "../app/fonts";
import { useEffect, useState} from "react";
import { a, svg } from "motion/react-client";

export default function Hero() {
  const tagData = [ 
    {
      title: "Software Engineer", 
      color: "#66B2D6",
      icon: "desktopComputer.svg",
      alt: "Computer Icon"
    },
    {
      title: "Marketing Web Developer",
      color: "#fccf55",
      icon: "Necktie.svg",
      alt: "Necktie Icon"
    },
    {
      title: "Marine Reservist",
      color: "#dfc5fe",
      icon: "Military Helmet.svg",
      alt: "Military Helmet Icon"
    }
  ]

  useEffect(() => {
    console.log(document.querySelector(".profile-picture"));
  }, []);

  return (
    <section className=" w-full min-h-240 h-[calc(100vh-1rem)] max-h-300 bg-gray-50 mt-15">
      <div className="flex justify-center items-center flex-col relative overflow-hidden w-full h-full animate__animated animate__fadeInDown
      md:flex-row-reverse md:justify-between">
        <div className="flex flex-col h-140
        md:relative md:h-full md:w-full md:justify-center">
          <img
            src="/images/full-profile-no-bg.png"
            alt="Hero Image"
            className="profile-picture absolute rounded-xl w-70 z-10 left-1/2 -translate-x-1/2
            sm:w-80 sm:-translate-y-20
            md:relative md:w-70 md:h-auto md:translate-y-20"
          />
          <svg className="absolute z-5 w-200 overflow-hidden left-1/2 -translate-x-1/2 translate-y-3 
          sm:w-255 sm:-translate-y-60
          md:relative md:-translate-y-100 md:w-100 md:scale-150" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2E72AC" d="M41.3,-51.1C55.2,-37.6,69.3,-26.1,74.9,-10.8C80.5,4.6,77.6,23.9,69.2,41.5C60.8,59,47,74.9,29.9,80.4C12.8,85.9,-7.4,80.9,-25.4,73C-43.4,65,-59.1,54.1,-68.6,39C-78.1,23.8,-81.3,4.5,-79.3,-15.2C-77.2,-34.8,-69.9,-54.7,-55.8,-68.2C-41.7,-81.7,-20.9,-88.8,-3.6,-84.6C13.7,-80.3,27.4,-64.7,41.3,-51.1Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute z-6 w-200 overflow-hidden left-1/2 -translate-x-1/2 translate-y-10 
          sm:w-270 sm:-translate-y-50
          md:translate-y-0 md:w-100 md:rotate-45 md:scale-130" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#235784" d="M29.8,-49C35.4,-42.9,34.3,-29,42.6,-17.5C50.9,-6,68.7,3.2,74.2,15.3C79.7,27.4,73,42.4,60.1,45.6C47.2,48.7,28.2,40,13.3,43.6C-1.6,47.2,-12.4,63.1,-21.3,64.2C-30.1,65.4,-37,51.7,-49.7,40.9C-62.3,30.1,-80.6,22.2,-83,11.4C-85.3,0.6,-71.8,-13,-61.2,-24.5C-50.6,-36.1,-43,-45.6,-33.3,-49.8C-23.6,-54,-11.8,-52.8,0.2,-53.1C12.2,-53.3,24.3,-55,29.8,-49Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute z-12 w-150 overflow-hidden left-1/2 -translate-x-1/2 translate-y-85 
          sm:w-180 sm:translate-y-50 
          md:translate-y-5 md:w-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#BCDBDF" d="M38.4,-52.6C53.5,-50.1,72.1,-45.8,80.1,-34.7C88.2,-23.6,85.7,-5.8,81.5,10.6C77.4,27,71.6,42,61.9,54.2C52.2,66.3,38.6,75.6,25.2,74.3C11.8,73.1,-1.4,61.3,-13.2,53.8C-25,46.3,-35.5,43.1,-49.2,37.1C-62.9,31.2,-79.9,22.6,-83.4,10.8C-86.8,-0.9,-76.8,-15.7,-67,-27.9C-57.2,-40.1,-47.7,-49.7,-36.6,-54.1C-25.4,-58.4,-12.7,-57.4,-0.5,-56.6C11.7,-55.8,23.3,-55.1,38.4,-52.6Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className={`${openSauce.className} relative z-12 h-max w-full p-2 text-center -translate-y-8
        sm:-translate-y-25
        md:translate-y-auto md:max-w-[33%] md:text-left md:h-auto md:ml-10`}>
          <div className="text-secondary text-6xl font-bold animate__animated animate__fadeInDown
          md:text-7xl">Michael Chen</div>
          <div className="hero-tags flex w-full flex-wrap justify-center mt-2 animate__animated animate__fadeInDown animate__delay-300ms
          md:justify-start">
            {tagData.map((tag, index) => (
              <div className="flex justify-center items-center text-sm w-max font-light m-1 p-2 border-1 rounded-full border-gray-400 bg-gray-100 whitespace-nowrap" key={index}>
                <Image 
                  src={`/icons/${tag.icon}`}
                  alt={tag.alt}
                  width={16}
                  height={16}
                  className="mx-1"
                />
                <span>{tag.title}</span>
              </div>
            ))}
          </div>
          <div></div>
          {/* <ul className="w-max mx-auto z-12 flex flex-row mt-3 border-1 border-gray-300 rounded-full backdrop-blur-sm bg-gray-50/50 p-1
          md:justify-start md:mx-0">
            {icon_list.map((icon) => (
                <li key={icon.name} className="pr-2">{icon.import({ icon })}</li>
            ))}
          </ul> */}
        </div>
        
      </div>
    </section>
  );
}