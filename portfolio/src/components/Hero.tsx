'use client'
import { useEffect } from "react";
import { outfit } from "../app/fonts";

export default function Hero() {
  useEffect(() => {
    console.log(document.querySelector("header"));
  }, [])
  
  return (
    <section className="flex text-2xl w-full h-screen bg-background h-screen">
      <div className={`${outfit.className} flex items-center justify-center h-full w-full flex-col pl-20`}>
        <div className={`${outfit.className}` }>
          <h1 className="font-extrabold text-[200px]">Michael</h1>
          <h1>Chen</h1>
          <p>Software Engineer</p>
        </div>
      </div>

    </section>
  );
}