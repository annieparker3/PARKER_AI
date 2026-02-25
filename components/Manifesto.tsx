"use client";

import React from "react";
import { motion } from "framer-motion";

const manifestoItems = [
    {
        title: "Today",
        points: [
            "Building AI-native applications",
            "Designing scalable systems",
            "Deploying production-ready solutions",
        ],
    },
    {
        title: "Tomorrow",
        points: [
            "Autonomous AI workflows",
            "Adaptive SaaS intelligence",
            "Human-AI collaboration platforms",
        ],
    },
    {
        title: "The Future",
        points: [
            "AI-native infrastructure",
            "Cognitive software ecosystems",
            "Ethical scalable intelligence",
        ],
    },
];

export default function Manifesto() {
    return (
        <section id="manifesto" className="relative py-32 bg-navy/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
                        ENGINEERING <span className="text-gradient">INTELLIGENCE</span>.<br />
                        ENGINEERING THE <span className="text-muted-foreground/30 font-black">FUTURE</span>.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Vertical line for desktop */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-white/10" />
                    <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-white/10" />

                    {manifestoItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col gap-8 p-4"
                        >
                            <h3 className="text-3xl font-black uppercase tracking-widest text-white/30">
                                {item.title}
                            </h3>
                            <ul className="space-y-6">
                                {item.points.map((point) => (
                                    <li key={point} className="flex items-start gap-4 group">
                                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                                        <span className="text-xl font-medium tracking-tight text-foreground/80 group-hover:text-foreground transition-colors font-sans">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
