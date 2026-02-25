"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Layers, Database, Smartphone, Zap, Palette, Terminal, LucideProps } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface TechItem {
    name: string;
    icon: React.ComponentType<LucideProps>;
    level: string;
}

const techStack: TechItem[] = [
    { name: "Python", icon: Terminal, level: "Expert" },
    { name: "TypeScript", icon: Code2, level: "Expert" },
    { name: "Next.js", icon: Zap, level: "Expert" },
    { name: "Node.js", icon: Layers, level: "Advanced" },
    { name: "Tailwind", icon: Palette, level: "Expert" },
    { name: "Vite", icon: Zap, level: "Advanced" },
    { name: "AI/ML", icon: Cpu, level: "Architect" },
    { name: "Mobile", icon: Smartphone, level: "Expert" },
    { name: "FastAPI", icon: Database, level: "Advanced" },
];

export default function About() {
    return (
        <section id="about" className="relative py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">
                            Behind the Systems
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                            Lead Engineer. <br />
                            <span className="text-muted-foreground/40 font-black">Acting Executive.</span> <br />
                            AI Architect.
                        </h3>
                        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed font-sans max-w-xl">
                            <p>
                                I am the Lead Engineer and Head of AI Systems at <span className="text-foreground font-medium">INTELLIGENT SYSTEMS</span>, responsible for the technical backbone of our most innovative products.
                            </p>
                            <p>
                                As the acting executive lead when the CEO is offline, I bridge the gap between high-level business strategy and deep technical execution. My focus is on building <span className="text-foreground font-semibold italic">AI-first systems</span> that are scalable, ethical, and production-ready.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Tech Stack Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card variant="glass" className="h-full border-primary/5 hover:border-primary/20 hover:bg-primary/5 transition-all group cursor-default">
                                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                                        <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                            <tech.icon className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <h4 className="text-xs font-black tracking-tight text-foreground uppercase">{tech.name}</h4>
                                            <Badge variant="outline" className="text-[9px] py-0 px-2 font-mono border-primary/20 bg-primary/5 text-primary">
                                                {tech.level}
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
