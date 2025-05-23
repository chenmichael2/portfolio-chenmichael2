'use client'
import { useState, useRef, useEffect } from "react";
import { useLenis } from "lenis/react";
import '@/app/globals.css'
import 'animate.css'
import Image from "next/image";
import EmailIcon from "../../public/icons/email";
import GithubIcon from "../../public/icons/github";
import LinkedinIcon from "../../public/icons/linkedin";
import ResumeIcon from "../../public/icons/resume";
import BurgerIcon from "../../public/icons/burger";

export default function Header() {
    const lenis = useLenis();

    const scrollToTop = () => {
        lenis?.scrollTo("top", { duration: 1, force: true });
    }

    const [hovered, setHovered] = useState(false);

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

    return (
        <header className="border-1 border-red-800 flex items-center justify-between sticky top-0 z-100 w-full h-16 bg-gray-50">
            <button onClick={scrollToTop}>
                <Image 
                    className="w-15 h-15 ml-5 hover:scale-120 transition-all duration-300"
                    src="/logo.svg"
                    alt="Logo"
                    width={10}
                    height={10}
                    priority
                />
            </button>
            <div className="mr-5"><BurgerIcon/></div>
            
        </header>
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