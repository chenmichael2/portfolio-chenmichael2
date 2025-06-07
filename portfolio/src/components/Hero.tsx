'use client';
import Image from "next/image";
import { poppins, openSauce } from "../app/fonts";
import { useEffect, useState} from "react";

export default function Hero() {
  const tagData = [ 
    {
      title: "Software Engineer", 
      color: "#66B2D6",
    },
    {
      title: "Web Developer",
      color: "#fccf55",
    },
    {
      title: "Marine Reservist",
      color: "#dfc5fe",
    }
  ]
  const blobs = [
    {

    }
  ]

  return (
    <section className="pt-18 w-full h-[calc(100vh-2rem)] bg-gray-50">
      <div className="relative overflow-x-hidden w-full h-full">
        <div className={`${openSauce.className} absolute z-42 text-secondary text-5xl font-medium flex flex-col w-full p-6 text-center translate-y-85`}>
          <span className="flex justify-center align-center">Michael Chen</span>
        </div>
        {/* <div className="absolute w-100 h-100 bg-primary overflow-hidden left-1/2 -translate-x-1/2" style={{borderRadius: '73% 27% 78% 22% / 86% 63% 37% 14% '}}></div> */}
        <svg className="absolute w-100 h-100 overflow-hidden left-1/2 -translate-x-1/2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#2E72AC" d="M41.3,-51.1C55.2,-37.6,69.3,-26.1,74.9,-10.8C80.5,4.6,77.6,23.9,69.2,41.5C60.8,59,47,74.9,29.9,80.4C12.8,85.9,-7.4,80.9,-25.4,73C-43.4,65,-59.1,54.1,-68.6,39C-78.1,23.8,-81.3,4.5,-79.3,-15.2C-77.2,-34.8,-69.9,-54.7,-55.8,-68.2C-41.7,-81.7,-20.9,-88.8,-3.6,-84.6C13.7,-80.3,27.4,-64.7,41.3,-51.1Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute w-100 h-100 overflow-hidden left-1/2 -translate-x-1/2 translate-y-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#235784" d="M36.1,-54.1C48.8,-55.1,62.5,-49.6,64.1,-39.4C65.7,-29.3,55.3,-14.7,49.2,-3.5C43.2,7.7,41.6,15.4,41,27.3C40.4,39.3,40.9,55.5,34.2,66.4C27.6,77.4,13.8,83.1,-0.3,83.7C-14.4,84.3,-28.9,79.7,-40.2,71.4C-51.4,63.1,-59.6,51.1,-61.7,38.6C-63.8,26,-59.9,13,-56.6,1.9C-53.4,-9.3,-50.7,-18.5,-47.6,-29.2C-44.4,-39.8,-40.7,-51.9,-32.6,-53.6C-24.6,-55.2,-12.3,-46.5,-0.3,-46C11.7,-45.4,23.4,-53.1,36.1,-54.1Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute z-41 w-100 h-100 overflow-hidden left-1/2 -translate-x-1/2 translate-y-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#BCDBDF" d="M32,-33.1C47.3,-33,69.5,-31.4,76,-22.2C82.5,-12.9,73.3,3.9,66.1,20C58.8,36,53.5,51.2,42.8,54.2C32.2,57.2,16.1,48.1,1.3,46.4C-13.5,44.6,-27.1,50.3,-36,46.6C-44.8,43,-49.1,30.2,-57.2,16C-65.3,1.9,-77.3,-13.6,-72.9,-22.6C-68.5,-31.6,-47.6,-34.3,-32.8,-34.5C-17.9,-34.7,-8.9,-32.6,-0.3,-32.2C8.4,-31.8,16.7,-33.2,32,-33.1Z" transform="translate(100 100)" />
        </svg>
        <Image
          src="/images/full-profile-no-bg.png"
          alt="Hero Image"
          width={500} 
          height={500}
          className="absolute rounded-xl z-40 left-1/2 -translate-x-1/2"
        />
      </div>
    </section>
  );
}