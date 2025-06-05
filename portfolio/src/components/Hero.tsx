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

  return (
    <section className="pt-18 w-full h-[calc(100vh-2rem)] bg-gray-50">
      <div className={`${openSauce.className} text-5xl font-medium flex flex-col w-full p-6`}>
        <span className="self-start">Michael</span><span className="self-end">Chen</span>
      </div>
      <div className="w-100 h-100 bg-blue-500 overflow-hidden" style={{borderRadius: '73% 27% 78% 22% / 86% 63% 37% 14% '}}></div>
      <Image
        src="/images/full-profile-no-bg.png"
        alt="Hero Image"
        width={300}
        height={300}
        className="rounded-xl"
      />
    </section>
  );
}