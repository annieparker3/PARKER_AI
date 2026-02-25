"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Github, Linkedin, Twitter, Mail, ArrowUp, MessageCircle } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative pt-24 pb-12 overflow-hidden border-t border-border bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6 group cursor-pointer" onClick={scrollToTop}>
                            <div className="p-2 bg-gradient-brand rounded-lg">
                                <Cpu className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tighter uppercase font-sans">
                                Parker<span className="text-primary">.AI</span>
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-8 font-sans">
                            Building the operating systems of the future. Focused on scalable cognitive architectures and autonomous system engineering.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Github, href: "https://github.com/annieparker3" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/anita-firdaus-darko-14015838b" },
                                { Icon: MessageCircle, href: "https://wa.me/233539833806" },
                                { Icon: Mail, href: "mailto:anitadarkofirdaus@gmail.com" }
                            ].map(({ Icon, href }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="p-3 rounded-full bg-muted text-muted-foreground hover:text-primary transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-foreground font-black mb-6 uppercase tracking-widest text-xs">Navigation</h4>
                        <ul className="space-y-4">
                            {["About", "Manifesto", "Projects", "Vision"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-tighter">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-black mb-6 uppercase tracking-widest text-xs">Credentials</h4>
                        <ul className="space-y-4">
                            {["Clean Architecture", "API-first", "Microservices", "Serverless"].map((item) => (
                                <li key={item} className="text-muted-foreground text-sm font-medium">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground/30 text-[10px] uppercase tracking-widest font-black font-sans">
                        © 2026 DARKO ANITA FIRDAUS. ALL RIGHTS RESERVED.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-muted-foreground hover:text-primary transition-colors group font-sans"
                    >
                        Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>

            {/* Footer Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        </footer>
    );
}
