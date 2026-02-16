"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-black/50 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-white/80 transition-colors">
                    PORTFOLIO<span className="text-primary">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Social Icons (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="https://github.com/Kartikp9904" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="https://linkedin.com/in/kartikp9904" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="mailto:kartikp9904@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
                        <Mail size={20} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-6 animate-fade-in">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-white/80 hover:text-white"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex space-x-6 pt-4 border-t border-white/10">
                        <Link href="https://github.com/Kartikp9904" target="_blank" className="text-muted-foreground hover:text-white">
                            <Github size={24} />
                        </Link>
                        <Link href="https://linkedin.com/in/kartikp9904" target="_blank" className="text-muted-foreground hover:text-white">
                            <Linkedin size={24} />
                        </Link>
                        <Link href="mailto:kartikp9904@gmail.com" className="text-muted-foreground hover:text-white">
                            <Mail size={24} />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
