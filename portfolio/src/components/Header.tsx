'use client'
import { useState } from "react";
import Image from "next/image";
import { poppins } from "../app/fonts";
import '@/app/globals.css'
import 'animate.css'
import EmailIcon from "../../public/icons/email";
import GithubIcon from "../../public/icons/github";
import LinkedinIcon from "../../public/icons/linkedin";
import ResumeIcon from "../../public/icons/resume";
import { clear } from "console";

export default function Header() {

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
    ]

    return (
        <header className="sticky top-0 z-50 w-full h-20 backdrop-blur-xl">
            <div className="flex items-center justify-between w-full h-full px-10">
                <div className="">
                    <a href="#" className="text-2xl animate__bounceIn animate__animated">
                        <Image 
                            className="w-25 h-25 hover:scale-120 transition-all duration-300"
                            src="/logo.svg"
                            alt="Logo"
                            width={10}
                            height={10}
                            priority
                        />
                    </a>
                </div>
                <nav className={`${poppins.className} ml-20 font-light animate__bounceIn animate__animated`}>
                    {nav_list.map((item) => (
                        <a key={item.name} href={item.href} className={`text-xl scroll-smooth rounded-xl p-2 mx-3 border-3 border-transparent hover:border-black hover:text-3xl hover:font-normal transition-text transition-border duration-150`}>{item.name}</a>
                    ))}
                </nav>
                <div className="flex">
                    {icon_list.map((icon) => (
                        <div key={icon.name}>
                            {icon.import({ icon })}
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
    }