"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Server, Globe, Shield, Terminal, Zap, LucideProps } from "lucide-react";

interface CredentialItem {
    name: string;
    icon: React.ComponentType<LucideProps>;
}

const credentials: CredentialItem[] = [
    { name: "Clean Architecture", icon: CheckCircle2 },
    { name: "API-first Design", icon: Globe },
    { name: "Microservices", icon: Server },
    { name: "Serverless Deployment", icon: Zap },
    { name: "CI/CD Pipeline Discipline", icon: Shield },
    { name: "Performance Optimization", icon: Terminal },
];

export default function TechStack() {
    return (
        <section className="relative py-20 overflow-hidden border-y border-border bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {credentials.map((cred, i) => (
                        <motion.div
                            key={cred.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <span className="text-primary font-bold">
                                <cred.icon className="w-5 h-5" />
                            </span>
                            <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-foreground font-sans">
                                {cred.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
