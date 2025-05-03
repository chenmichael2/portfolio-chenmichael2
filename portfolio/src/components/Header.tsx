import Logo from "@/assets/icon/Logo";

export default function Header() {

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full h-full px-4 bg-background bg-neutral-50">
        <div className="flex items-center p-3">
            <a href="/" className="text-2xl font-bold text-foreground">
                <Logo />
            </a>
            <div className="flex pl-2 text-xl ">
                <div className="">Michael</div>
                <div className="">Chen</div>
            </div>
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
        </header>
    );
    }