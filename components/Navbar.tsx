"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Manifesto", href: "#manifesto" },
    { name: "Projects", href: "#projects" },
    { name: "Vision", href: "#vision" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-border py-4"
                    : "bg-transparent border-transparent py-6"
            )}
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 group cursor-pointer"
                        onClick={scrollToTop}
                        role="button"
                        aria-label="Back to top"
                    >
                        <div className="p-2 bg-primary rounded-lg group-hover:rotate-12 transition-transform duration-300">
                            <Cpu className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold tracking-tighter uppercase font-sans">
                            Parker<span className="text-primary">.AI</span>
                        </span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors relative group uppercase tracking-widest"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                        <div className="flex items-center gap-4 ml-4">
                            <Button asChild size="sm" variant="brand" className="px-6 rounded-full uppercase tracking-widest text-[10px] h-9 min-h-0">
                                <a href="mailto:anitadarkofirdaus@gmail.com">Contact</a>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
                            aria-expanded={isOpen}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-base font-bold text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all uppercase tracking-widest"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 px-3 flex flex-col gap-4">
                                <Button asChild variant="brand" className="w-full rounded-full uppercase tracking-widest text-xs h-12">
                                    <a href="mailto:anitadarkofirdaus@gmail.com">Get in Touch</a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
