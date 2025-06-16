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

  return (
    <section className="pt-14 w-full min-h-215 h-[calc(100vh-2rem)] max-h-230 bg-gray-50">
      <div className="relative overflow-hidden w-full h-full
      md:flex md:flex-row-reverse md:justify-around">
        <div className="md:block md:h-full md:w-max md:justify-center md:items-center md:overflow-hidden">
          <img
            src="/images/full-profile-no-bg.png"
            alt="Hero Image"
            className="absolute rounded-xl h-150 z-10 left-1/2 -translate-x-1/2 top-5
            md:relative"
          />
          <svg className="absolute w-100 h-100 overflow-hidden left-1/2 -translate-x-1/2 top-10 scale-200
          sm:scale-300 
          md:scale-100 md:relative
          " viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2E72AC" d="M41.3,-51.1C55.2,-37.6,69.3,-26.1,74.9,-10.8C80.5,4.6,77.6,23.9,69.2,41.5C60.8,59,47,74.9,29.9,80.4C12.8,85.9,-7.4,80.9,-25.4,73C-43.4,65,-59.1,54.1,-68.6,39C-78.1,23.8,-81.3,4.5,-79.3,-15.2C-77.2,-34.8,-69.9,-54.7,-55.8,-68.2C-41.7,-81.7,-20.9,-88.8,-3.6,-84.6C13.7,-80.3,27.4,-64.7,41.3,-51.1Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute w-100 h-100 overflow-hidden left-1/2 -translate-x-1/2 top-45 scale-200
          sm:scale-270 sm:top-53
          md:scale-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#235784" d="M29.8,-49C35.4,-42.9,34.3,-29,42.6,-17.5C50.9,-6,68.7,3.2,74.2,15.3C79.7,27.4,73,42.4,60.1,45.6C47.2,48.7,28.2,40,13.3,43.6C-1.6,47.2,-12.4,63.1,-21.3,64.2C-30.1,65.4,-37,51.7,-49.7,40.9C-62.3,30.1,-80.6,22.2,-83,11.4C-85.3,0.6,-71.8,-13,-61.2,-24.5C-50.6,-36.1,-43,-45.6,-33.3,-49.8C-23.6,-54,-11.8,-52.8,0.2,-53.1C12.2,-53.3,24.3,-55,29.8,-49Z" transform="translate(100 100)" />
          </svg>
          {/* <svg className="absolute w-100 h-100 z-11 overflow-hidden left-1/2 -translate-x-1/2 top-90 scale-90 rotate-180
          md:scale-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#235784" d="M31.4,-39.4C45.7,-39.6,65.9,-39.5,71.6,-31.4C77.3,-23.4,68.4,-7.4,63.9,7.7C59.5,22.9,59.4,37.1,51.5,42.5C43.6,47.8,27.7,44.2,15.8,42.7C3.8,41.2,-4.3,41.8,-16.5,43.8C-28.6,45.9,-44.7,49.3,-57,44.3C-69.3,39.3,-77.7,25.8,-80.4,11.2C-83.1,-3.5,-80.2,-19.4,-69.7,-27.5C-59.3,-35.7,-41.4,-36.1,-28.5,-36.6C-15.6,-37.1,-7.8,-37.8,0.3,-38.3C8.5,-38.8,17,-39.3,31.4,-39.4Z" transform="translate(100 100)" />
          </svg> */}
          <svg className="absolute w-100 h-100 z-11 overflow-hidden left-1/2 -translate-x-1/2 top-100 scale-150
          sm:scale-170 sm:top-105
          md:scale-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#BCDBDF" d="M38.4,-52.6C53.5,-50.1,72.1,-45.8,80.1,-34.7C88.2,-23.6,85.7,-5.8,81.5,10.6C77.4,27,71.6,42,61.9,54.2C52.2,66.3,38.6,75.6,25.2,74.3C11.8,73.1,-1.4,61.3,-13.2,53.8C-25,46.3,-35.5,43.1,-49.2,37.1C-62.9,31.2,-79.9,22.6,-83.4,10.8C-86.8,-0.9,-76.8,-15.7,-67,-27.9C-57.2,-40.1,-47.7,-49.7,-36.6,-54.1C-25.4,-58.4,-12.7,-57.4,-0.5,-56.6C11.7,-55.8,23.3,-55.1,38.4,-52.6Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className={`${openSauce.className} relative top-120 z-12 h-full w-full text-center
        sm:top-130
        md:h-max md:w-1/2`}>
          <span className="text-secondary text-6xl font-bold">Michael Chen</span>
          <div className="flex w-full flex-wrap justify-center mt-2">
            {tagData.map((tag, index) => (
              <div className="flex justify-center align-center text-sm w-max font-light m-1 p-2 border-1 rounded-full border-gray-400 bg-gray-100 whitespace-nowrap" key={index}>
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
          <ul className="w-max mx-auto z-12 flex flex-row mt-3 border-1 border-gray-300 rounded-full backdrop-blur-sm bg-gray-50/50 p-1">
            {icon_list.map((icon) => (
                <li key={icon.name} className="pr-2">{icon.import({ icon })}</li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}