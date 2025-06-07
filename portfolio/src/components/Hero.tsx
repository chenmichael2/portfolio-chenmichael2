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
        <div className={`${openSauce.className} absolute z-1 text-tertiary text-5xl font-medium flex flex-col w-full p-6 text-center`}>
          <span className="flex justify-center align-center">Michael Chen</span>
        </div>
        {/* <div className="absolute w-100 h-100 bg-primary overflow-hidden left-1/2 -translate-x-1/2" style={{borderRadius: '73% 27% 78% 22% / 86% 63% 37% 14% '}}></div> */}
        <svg className="absolute w-100 h-100 overflow-hidden left-1/2 -translate-x-1/2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#2E72AC" d="M41.3,-51.1C55.2,-37.6,69.3,-26.1,74.9,-10.8C80.5,4.6,77.6,23.9,69.2,41.5C60.8,59,47,74.9,29.9,80.4C12.8,85.9,-7.4,80.9,-25.4,73C-43.4,65,-59.1,54.1,-68.6,39C-78.1,23.8,-81.3,4.5,-79.3,-15.2C-77.2,-34.8,-69.9,-54.7,-55.8,-68.2C-41.7,-81.7,-20.9,-88.8,-3.6,-84.6C13.7,-80.3,27.4,-64.7,41.3,-51.1Z" transform="translate(100 100)" />
        </svg>
        <Image
          src="/images/full-profile-no-bg.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="absolute rounded-xl left-1/2 -translate-x-1/2"
        />
      </div>
    </section>
  );
}