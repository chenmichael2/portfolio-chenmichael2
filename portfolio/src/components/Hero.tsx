'use client'
import { useEffect } from "react";
import { outfit } from "../app/fonts";

export default function Hero() {
  useEffect(() => {
    console.log(document.querySelector("header"));
  }, [])
  
  return (
    <section className="flex text-2xl w-full h-screen bg-background h-screen">
      <div className={`${outfit.className} flex items-center justify-center h-full flex-col pl-20`}>
        <div className={`${outfit.className}` }>Hello, my name is </div>
        <h1>Michael Chen</h1>
        <p>I am a software engineer</p>
      </div>

    </section>
  );
}