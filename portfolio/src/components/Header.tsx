import Image from "next/image";
import { outfit } from "../app/fonts";
import 'animate.css'

export default function Header() {

    return (
        <header className="sticky fixed top-0 z-50 w-full h-25 bg-neutral-50">
            <div className="flex items-center justify-between w-full h-full px-10">
                <div className="flex items-center p-3">
                    <a href="#" className="text-2xl font-bold text-foreground animate__bounceIn animate__animated">
                        <Image 
                            src="/logo.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                            priority
                        />
                    </a>
                </div>
                <nav className={`${outfit.className} flex w-125 justify-around font-normal animate__bounceIn animate__animated`}>
                    <a href="#about" className={`text-2xl scroll-smooth rounded-xl p-2 border-2 border-transparent hover:border-black hover:text-3xl transition-text transition-border duration-300`}>
                    About Me
                    </a>
                    <a href="/projects" className={`text-2xl scroll-smooth rounded-xl p-2 border-2 border-transparent hover:border-black hover:text-3xl transition-text transition-border duration-300`}>
                    Projects
                    </a>
                    <a href="/contact" className={`text-2xl scroll-smooth rounded-xl p-2 border-2 border-transparent hover:border-black hover:text-3xl transition-text transition-border duration-300`}>
                    Contact
                    </a>
                </nav>
                <button className={`${outfit.className} text-2xl border-solid animate__bounceIn animate__animated`}>Contact Me</button>
        
            </div>
        </header>
    );
    }