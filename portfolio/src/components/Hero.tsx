'use client'
import { useEffect } from "react";
import { outfit, inter } from "../app/fonts";

export default function Hero() {
  useEffect(() => {
    console.log(document.querySelector("header"));
  }, [])
  
  return (
    <section className="flex text-2xl w-full h-screen bg-background h-screen">
      <div className={`${outfit.className} flex items-center justify-center h-full w-full flex-col pl-20`}>
        <div className={`${outfit.className} font-extrabold` }>Michael
          <h1>Chen</h1>
          <p>Software Engineer</p>
        </div>
      </div>

    </section>
  );
}