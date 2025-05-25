'use client'
import { useState, useRef, useEffect } from "react";
import { useLenis } from "lenis/react";
import '@/app/globals.css'
import 'animate.css'
import { poppins } from "@/app/fonts";
import Image from "next/image";
import EmailIcon from "../../public/icons/email";
import GithubIcon from "../../public/icons/github";
import LinkedinIcon from "../../public/icons/linkedin";
import ResumeIcon from "../../public/icons/resume";
import BurgerIcon from "../../public/icons/burger";

export default function Header() {
    const lenis = useLenis();
    var icon_list = [
        { name: "github", href: "https://github.com/chenmichael2", color: "#555", import: GithubIcon},
        { name: "linkedin", href: "https://www.linkedin.com/in/chenmichael2/", color:"#66B2D6", import: LinkedinIcon},
        { name: "email", href: "/", color:"#fccf55", import: EmailIcon},
        { name: "resume", href: "/", color:"#dfc5fe", import: ResumeIcon},
    ];
    
    const nav_list = [
        { name: "About Me", href: "#about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    const [navIsOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    const scrollToTop = () => {
        lenis?.scrollTo("top", { duration: 1, force: true });
    }

    const handleNav = () => {
        console.log(window.innerWidth);
        if (window.innerWidth > 767) return;
        if (navIsOpen) {
            document.querySelector(".mobile-dropdown")?.classList.add("-translate-y-400");
            document.querySelector(".mobile-dropdown")?.classList.remove("translate-y-16");
            setIsOpen(false);
        }
        else {
            document.querySelector(".mobile-dropdown")?.classList.remove("-translate-y-400");
            document.querySelector(".mobile-dropdown")?.classList.add("translate-y-16");
            setIsOpen(true);
        }
    };

    return (
        <div>
            <header className="flex items-center justify-between fixed -top-2 z-50 w-full h-18 bg-gray-50">
                <button onClick={scrollToTop}>
                    <Image 
                        className="w-15 h-15 ml-5 hover:scale-120 transition-all duration-300 z-51"
                        src="/logo.svg"
                        alt="Logo"
                        width={10}
                        height={10}
                        priority
                    />
                </button>
                <nav className={`${poppins.className} hidden`}>
                    <ul className="flex flex-col items-end justify-end h-full">
                        <li>About Me</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <button onClick={handleNav} className="mr-5"><BurgerIcon/></button>
            </header>
                <nav className={`mobile-dropdown ${poppins.className} fixed w-full h-[calc(100vh-4rem)] bg-gray-50 z-20 top-0 -translate-y-400 transition-transform duration-300 ease-in-out`}>
                    <ul className="flex flex-col items-start justify-end h-full ml-5 pb-20">
                        {nav_list.map((item) => (
                            <li key={item.name} className="text-4xl p-6"><button>{item.name}</button></li>
                        ))}
                        <li className="flex flex-row">
                        {icon_list.map((icon) => (
                            <div key={icon.name} className="">{icon.import({ icon })}</div>
                        ))}
                        </li>
                    </ul>
                    
                </nav>
        </div>
        // <header className="sticky top-0 z-100 w-full h-20 backdrop-blur-xl">
        //     <div className="flex items-center justify-between w-full h-full px-10">
        //         <div className="">
        //             <a href="#" className="text-2xl animate__bounceIn animate__animated">
        //                 <Image 
        //                     className="w-25 h-25 hover:scale-120 transition-all duration-300"
        //                     src="/logo.svg"
        //                     alt="Logo"
        //                     width={10}
        //                     height={10}
        //                     priority
        //                 />
        //             </a>
        //         </div>
        //         <nav className={`${poppins.className} ml-20 font-light animate__bounceIn animate__animated`}>
        //             {nav_list.map((item) => (
        //                 <a key={item.name} href={item.href} className={`text-xl scroll-smooth rounded-xl p-2 mx-3 border-3 border-transparent hover:border-black hover:text-3xl hover:font-normal transition-text transition-border duration-150`}>{item.name}</a>
        //             ))}
        //         </nav>
        //         <div className="flex">
        //             {icon_list.map((icon) => (
        //                 <div key={icon.name}>
        //                     {icon.import({ icon })}
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </header>
    );
    }