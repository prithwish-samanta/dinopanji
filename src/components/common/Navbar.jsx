import {useState} from "react";
import {Link} from "react-router";
import {GithubIcon, Menu, X} from 'lucide-react';

import BrandIcon from "../icons/BrandIcon";
import {navLinks} from "../../navigation/navLinks";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <header>
            <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-lg">
                <div
                    className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="flex items-center gap-2">
                        <BrandIcon/>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-foreground">দিনপঞ্জী</span>
                            <span className="text-xs text-muted-foreground -mt-1">DinoPanji</span>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-6 md:flex">
                        {navLinks.map(link => (
                            <Link key={link.to} to={link.to}>
                <span className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/prithwish-samanta/dinopanji"
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-zinc-200/50"
                            aria-label="Toggle theme"
                        >
                            <GithubIcon size={20}/>
                        </a>

                        <button
                            onClick={toggleMobileMenu}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background md:hidden"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X size={20}/> : <Menu size={20}/>}
                        </button>
                    </div>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-x-0 top-16 z-50 origin-top animate-in fade-in-20 slide-in-from-top-4 md:hidden">
                    <div
                        className="container mx-auto grid gap-4 rounded-b-lg border-b border-x border-border bg-card p-4 shadow-lg">
                        {navLinks.map(link => (
                            <Link key={link.to} to={link.to} onClick={toggleMobileMenu}>
                <span className="block w-full p-2 text-lg font-medium text-foreground">
                  {link.label}
                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}