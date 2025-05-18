'use client';
import Image from "next/image";
import { poppins } from "../app/fonts";
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

  return (
    <section className="flex flex-col justify-evenly w-full h-[calc(100vh-100px)] bg-gray-50">
      <div className={`${poppins.className} flex items-center justify-evenly leading-none w-full`}>
        <div className="flex flex-col">
          <h1 className="font-extrabold pr-25 text-[8vw] text-primary animate__animated animate__slideInDown">Michael</h1>
          <div className="flex items-end">
            <h1 className="font-extrabold text-[8vw] text-secondary animate__animated animate__slideInDown">Chen</h1>
          </div>
          <div>
            <div className="flex flex-row items-center mb-4 text-black text-[1.5vw] font-medium animate__animated animate__slideInDown">
              <Image 
                className="rotate-340"
                src="icons/pin.svg"
                width={40}
                height={40}
                alt="Pin"
              />
              <p>Torrance, CA</p>
            </div>
            <div>
              {tagData.map((tag) => (
                <div key={tag.title} className={`inline-block px-4 py-2 mr-2 text-sm font-medium text-gray-700 rounded-full animate__animated animate__slideInDown`} style={{ backgroundColor: tag.color }}>
                  {tag.title}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative inline-block z-50 overflow-hidden w-100 h-100 border-1 border-neutral-300 shadow-2xl rounded-full hover:scale-105 transition-all duration-300 ease-in-out">
          <Image width={100000} height={100000} className="w-auto h-full origin-center transition-all duration-300 ease-in-out" src="/images/profile.jpeg" alt="Michael Chen Picture"/>
        </div>
      </div>
      <div>socials</div>
    </section>
  );
}