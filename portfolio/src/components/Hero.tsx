'use client'
import Image from "next/image";
import { useEffect } from "react";
import { poppins } from "../app/fonts";

export default function Hero() {

  useEffect(() => {
    console.log(document.querySelector("header"));
  }, [])
  
  return (
    <section className="w-full h-[calc(100vh-100px)] bg-gray-50">
      <div className={`${poppins.className} flex items-center justify-center leading-none w-full`}>
        <div className="profile-picture-container inline-block relative overflow-hidden w-120 h-120 rounded-full">
          <img className="profile-picture w-auto h-full transform scale-400 mx-8 my-110" src="/images/profile1.jpeg" alt="Michael Chen Picture"/>
        </div>
        <div>
          <h1 className="font-extrabold text-[150px] text-primary">Michael</h1>
          <h1 className="font-extrabold text-[150px] text-secondary">Chen</h1>
          <p>Software Engineer</p>
        </div>
      </div>
    </section>
  );
}