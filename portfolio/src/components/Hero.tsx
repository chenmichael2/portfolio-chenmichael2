'use client'
import { useEffect } from "react";
import { poppins } from "../app/fonts";

export default function Hero() {
  useEffect(() => {
    console.log(document.querySelector("header"));
  }, [])
  
  return (
    <section className="flex text-2xl w-full h-[calc(100vh-100px)] bg-background">
      <div className={`${poppins.className} flex items-center justify-center leading-none w-full flex-col pl-20`}>
        <div>
          <h1 className="font-extrabold text-[150px] text-primary">Michael</h1>
          <h1 className="font-extrabold text-[150px] text-secondary">Chen</h1>
          <p>Software Engineer</p>
        </div>
      </div>

    </section>
  );
}