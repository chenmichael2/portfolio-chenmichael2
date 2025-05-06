import Image from "next/image";
import { outfit } from "../app/fonts";
import 'animate.css'

export default function Header() {

    return (
        <header className="sticky fixed z-50 w-full h-full bg-neutral-50">
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
                    <a href="#about" className={`text-2xl scroll-smooth hover:underline`}>
                    About Me
                    </a>
                    <a href="/projects" className={`text-2xl hover:underline`}>
                    Projects
                    </a>
                    <a href="/contact" className={`text-2xl hover:underline`}>
                    Contact
                    </a>
                </nav>
                <button className={`${outfit.className} text-2xl border-solid animate__bounceIn animate__animated`}>Contact Me</button>
        
            </div>
        </header>
    );
    }