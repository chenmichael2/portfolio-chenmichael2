import Logo from "@/assets/icon/Logo";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export default function Header() {

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full h-full px-4 bg-background bg-neutral-50">
        <div className="flex items-center p-3">
            <a href="/" className="text-2xl font-bold text-foreground">
                <Logo />
            </a>
        </div>
        <nav className="flex space-x-4">
            <a href="/about" className="text-lg text-foreground hover:underline">
            About
            </a>
            <a href="/projects" className="text-lg text-foreground hover:underline">
            Projects
            </a>
            <a href="/contact" className="text-lg text-foreground hover:underline">
            Contact
            </a>
        </nav>
        <div>Contact Me</div>
        </header>
    );
    }