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
      <div className={`${poppins.className} flex items-center justify-around leading-none w-full`}>
        <div className="profile-picture-container inline-block relative overflow-hidden w-110 h-110 rounded-full">
          <img className="profile-picture w-auto h-full transform scale-400 mx-8 my-110" src="/images/profile1.jpeg" alt="Michael Chen Picture"/>
        </div>
        <div className="flex flex-col">
          <h1 className="font-extrabold pr-25 text-[100px] text-primary">Michael</h1>
          <h1 className="self-end font-extrabold text-[100px] text-secondary">Chen</h1>
          <p className="relative bottom-17">
            <span className="flex items-center text-2xl">
            <Image 
              className="rotate-340"
              src="/pin.svg"
              width={40}
              height={40}
              alt="Pin"
            />Torrance, CA
            </span>
            <p className="text-3xl mt-9">Software Engineer</p>
          </p>
          
        </div>
      </div>
      <div>socials</div>
    </section>
  );
}