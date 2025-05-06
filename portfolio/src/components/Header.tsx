import Image from "next/image";
import { outfit } from "../app/fonts";

export default function Header() {

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full h-full px-4 bg-background bg-neutral-50">
        <div className="flex items-center p-3">
            <a href="#" className="text-2xl font-bold text-foreground">
                <Image 
                    src="/logo.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                    priority
                />
            </a>
        </div>
        <nav className={`${outfit.className} flex w-125 justify-around font-normal`}>
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
        <a className={`${outfit.className} text-2xl`}>Contact Me</a>
        </header>
    );
    }