'use client'
import { useState, useRef, useEffect } from "react";
import { useLenis } from "lenis/react";
import '@/app/globals.css'
import 'animate.css'
import { openSauce } from "@/app/fonts";
import Image from "next/image";
import { icon_list } from "@/app/lib/iconLib";
import BurgerIcon from "../../public/icons/burger";

export default function Header() {
    const lenis = useLenis();
    
    const nav_list = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
        { name: "Experience", href: "/experience" },
    ];

    const [navIsOpen, setIsOpen] = useState(false);
    // const [hovered, setHovered] = useState(false);

    const scrollToTop = () => {
        lenis?.scrollTo("top", { duration: 1, force: true });
    }

    const handleNav = () => {
        if (window.innerWidth > 767) return;
        if (navIsOpen) {
            document.querySelector(".mobile-dropdown")?.classList.add("-translate-y-400");
            document.querySelector(".mobile-dropdown")?.classList.remove("translate-y-16");
            document.querySelector("header")?.classList.add("bg-transparent");
            document.querySelector("header")?.classList.remove("bg-gray-50");
            setIsOpen(false);
        }
        else {
            document.querySelector(".mobile-dropdown")?.classList.remove("-translate-y-400");
            document.querySelector(".mobile-dropdown")?.classList.add("translate-y-16");
            document.querySelector("header")?.classList.remove("bg-transparent");
            document.querySelector("header")?.classList.add("bg-gray-50");
            setIsOpen(true);
        }
    };

    return (
        <div>
            <header className="flex items-center justify-between fixed px-5 -top-2 z-50 w-full h-18 backdrop-blur-3xl transition-all duration-100 ease-in
            md:mx-0 md:px-2 md:transition-none
            lg:px-15">
                <button onClick={scrollToTop}>
                    <Image 
                        className="w-16 h-16 mt-1 hover:scale-120 transition-all duration-300 z-51 animate__animated animate__fadeInDown
                        md:w-20 md:h-20 md:mt-3"
                        src="/logo.svg"
                        alt="Logo"
                        width={10}
                        height={10}
                        priority
                    />
                </button>
                <div className="hidden flex-row justify-center ml-3 mt-2 md:flex animate__animated animate__fadeInDown">
                    {icon_list.map((icon) => (
                        <div key={icon.name} className="pr-2">
                            {icon.import({ icon })}
                        </div>
                    ))}
                 </div>
                <button onClick={handleNav} className="md:hidden animate__animated animate__fadeInDown"><BurgerIcon/></button>
            </header>
            <nav className={`mobile-dropdown ${openSauce.className} fixed w-full h-[calc(100vh-4rem)] bg-gray-50 z-20 top-0 -translate-y-400 transition-transform duration-300 animate__animated animate__fadeInDown
            md:flex md:w-[calc(100vw-26rem)] md:translate-y-0 md:h-16 md:z-50 md:justify-center md:mx-52 md:bg-transparent md:transition-nonemd:duration-1`}>
                <ul className="flex flex-col items-start justify-end h-full ml-3 pb-20 
                md:flex-row md:items-center md:justify-center md:h-full md:m-0 md:p-0">
                    {nav_list.map((item) => (
                        <li key={item.name} className="text-4xl m-3 p-2 hover:outline-1 rounded-md transition-all duration:300
                        md:z-50 md:text-base md:p-2 md:hover:scale-120
                        lg:text-lg"><button>{item.name}</button></li>
                    ))}
                    <li className="flex flex-row justify-center ml-3 mt-2 md:hidden">
                    {icon_list.map((icon) => (
                        <div key={icon.name} className="pr-2">{icon.import({ icon })}</div>
                    ))}
                    </li>
                </ul>
            </nav>
        </div>
        );
    }