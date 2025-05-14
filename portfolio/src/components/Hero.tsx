'use client'
import Image from "next/image";
import { useEffect } from "react";
import { poppins } from "../app/fonts";

export default function Hero() {

  useEffect(() => {
    console.log(document.querySelector("header"));
  }, [])
  
  return (
    <section className="flex flex-col justify-evenly w-full h-[calc(100vh-100px)] bg-gray-50">
      <div className={`${poppins.className} flex items-center justify-evenly leading-none w-full`}>
        <div className="flex flex-col">
          <h1 className="font-extrabold pr-25 text-[8vw] text-primary">Michael</h1>
          <div className="flex items-end">
            <h1 className="font-extrabold text-[8vw] text-secondary">Chen</h1>
          </div>
          <div className="">
            <div className="flex flex-row items-center mb-4 text-black text-[1.5vw] font-medium">
              <Image 
                className="rotate-340"
                src="icons/pin.svg"
                width={40}
                height={40}
                alt="Pin"
              />
              <p>Torrance, CA</p>
              </div>
            <p className="text-3xl mt-9">Software Engineer</p>
          </div>
        </div>
        <div className="inline-block relative overflow-hidden w-125 h-125 border-2 rounded-full hover:scale-105 transition-all duration-300 ease-in-out">
          <img className="w-auto h-full origin-center transition-all duration-300 ease-in-out" src="/images/profile.jpeg" alt="Michael Chen Picture"/>
        </div>

      </div>
      <div>socials</div>
    </section>
  );
}