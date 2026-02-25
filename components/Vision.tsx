"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Network, Database, LucideProps } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

interface VisionItem {
    title: string;
    description: string;
    icon: React.ComponentType<LucideProps>;
}

const visions: VisionItem[] = [
    {
        title: "AI as Infrastructure",
        description: "Treating intelligence not as a feature, but as the foundational layer of modern software architecture.",
        icon: Database
    },
    {
        title: "Autonomous Systems",
        description: "Designing workflows that think, adapt, and execute with minimal human intervention.",
        icon: Zap
    },
    {
        title: "Ethical AI",
        description: "Building scalable intelligence with a core focus on safety, transparency, and alignment.",
        icon: ShieldCheck
    },
    {
        title: "Cognitive Architecture",
        description: "Developing interconnected software ecosystems that mimic complex neural processing.",
        icon: Network
    },
];

export default function Vision() {
    return (
        <section id="vision" className="relative py-24 bg-card/30 overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">
                        The North Star
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
                        MY VISION AS AN <br />
                        <span className="text-gradient">AI SYSTEMS ARCHITECT</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {visions.map((v, i) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card variant="glass" className="h-full border-primary/5 hover:border-primary/20 hover:bg-primary/5 transition-all group">
                                <CardContent className="p-8 flex flex-col gap-6">
                                    <div className="text-primary group-hover:scale-110 transition-transform duration-500">
                                        <v.icon className="w-10 h-10" />
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors font-sans">
                                            {v.title}
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed text-sm font-sans">
                                            {v.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
