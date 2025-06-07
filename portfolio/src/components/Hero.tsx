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
      <div className={`${openSauce.className} text-5xl font-medium flex flex-col w-full p-6`}>
        <span className="self-start">Michael</span><span className="self-end">Chen</span>
      </div>
      <div className="relative overflow-x-hidden w-full h-full">
        <div className="absolute w-100 h-100 bg-primary overflow-hidden left-1/2 -translate-x-1/2" style={{borderRadius: '73% 27% 78% 22% / 86% 63% 37% 14% '}}></div>
        <Image
          src="/images/full-profile-no-bg.png"
          alt="Hero Image"
          width={400}
          height={400}
          className="absolute rounded-xl left-1/2 -translate-x-1/2"
        />
      </div>
    </section>
  );
}