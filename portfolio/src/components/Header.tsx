import Image from "next/image";
import { poppins } from "../app/fonts";
import '@/app/globals.css'
import 'animate.css'

export default function Header() {
    const icon_list = [
        { name: "github", href: "https://github.com/chenmichael2" },
        { name: "linkedin", href: "https://www.linkedin.com/in/chenmichael2/"},
        { name: "email", href: "/"},
        { name: "resume", href: "/"},
    ];
    
    const nav_list = [
        { name: "About Me", href: "#about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full h-25 backdrop-blur-sm">
            <div className="flex items-center justify-between w-full h-full px-10">
                <div className="flex items-center p-3">
                    <a href="#" className="text-2xl font-bold text-foreground animate__bounceIn animate__animated">
                        <Image 
                            className="w-20 h-20 hover:scale-120 transition-all duration-300"
                            src="/logo.svg"
                            alt="Logo"
                            width={50}
                            height={50}
                            priority
                        />
                    </a>
                </div>
                <nav className={`${poppins.className} font-light flex w-125 justify-around animate__bounceIn animate__animated`}>
                    {nav_list.map((item) => (
                        <a key={item.name} href={item.href} className={`text-2xl scroll-smooth rounded-xl p-2 border-3 border-transparent hover:border-black hover:text-3xl hover:font-normal transition-text transition-border duration-150`}>{item.name}</a>
                    ))}
                </nav>
                <div className="flex">
                    {icon_list.map((icon) => (
                        <a key={icon.name} href={icon.href} target="_blank" className="flex items-center justify-center p-2 m-2 rounded-full transition-all duration-300">
                            <Image src={`/${icon.name}.svg`} width={20} height={20} alt={`${icon.name} Link`} />
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
    }