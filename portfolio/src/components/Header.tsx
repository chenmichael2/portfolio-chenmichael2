import Image from "next/image";
import { poppins } from "../app/fonts";
import '@/app/globals.css'
import 'animate.css'

export default function Header() {

    const icon_list = [
        { name: "github", href: "https://github.com/chenmichael2", color: "#555" },
        { name: "linkedin", href: "https://www.linkedin.com/in/chenmichael2/", color:"#0a66c2"},
        { name: "email", href: "/", color:"#e7a33e"},
        { name: "resume", href: "/", color:"#6c3baa"},
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
                        <a 
                            key={icon.name} 
                            href={icon.href} 
                            target="_blank" 
                            className={`flex items-center justify-center p-2 m-2 rounded-full transition-all duration-300`}
                        >
                            <Image 
                                className="hover:scale-120 transition-all duration-300"
                                src={`icons/${icon.name}.svg`} 
                                width={20} 
                                height={20} 
                                alt={`${icon.name} Link`} />
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
    }