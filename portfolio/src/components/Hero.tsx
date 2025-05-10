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
        <div className="flex flex-col">
          <h1 className="font-extrabold pr-25 text-[8vw] text-primary">Michael</h1>
          <div className="flex items-end">
            <h1 className="font-extrabold text-[8vw] text-secondary">Chen</h1>
            <span className="flex flex-row items-center mb-4 text-black text-[1.5vw] font-medium">
              <Image 
                className="rotate-340"
                src="/pin.svg"
                width={40}
                height={40}
                alt="Pin"
              />
              <p>Torrance, CA</p>
            </span>
          </div>
          <div className="">
            <p className="text-3xl mt-9">Software Engineer</p>
          </div>
        </div>
        <div className="profile-picture-container inline-block relative overflow-hidden w-110 h-110 rounded-full md:w-80 md:h-80 hover:scale-100">
          <img className="profile-picture w-auto h-full transform scale-400 mx-8 my-110 md:scale-300 md:mx-7 md:my-60" src="/images/profile1.jpeg" alt="Michael Chen Picture"/>
        </div>

      </div>
      <div>socials</div>
    </section>
  );
}