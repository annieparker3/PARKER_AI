"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const MotionButton = motion(Button);

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <Badge variant="outline" className="gap-2 py-1 px-4 border-primary/20 bg-primary/5">
                            <Sparkles className="w-4 h-4 text-accent" />
                            Founding Engineer & Head of AI Systems
                        </Badge>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]"
                    >
                        DARKO ANITA <br />
                        <span className="text-gradient font-black">PARKER</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-2xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
                    >
                        Architecting <span className="text-foreground font-semibold">Intelligent Systems</span> for the Present and the <span className="text-primary font-semibold">Autonomous Future</span>.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <MotionButton
                            size="lg"
                            variant="brand"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group min-w-[200px]"
                        >
                            Explore My Work <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </MotionButton>
                        <MotionButton
                            size="lg"
                            variant="outline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group min-w-[200px]"
                        >
                            <Bot className="mr-2 w-5 h-5" />
                            View AI Projects
                        </MotionButton>
                    </motion.div>
                </motion.div>

                {/* Floating Decorative Elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 blur-[100px] rounded-full"
                />
            </div>
        </section>
    );
}
