"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Cpu, Sparkles, TrendingUp, LucideProps } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectItem {
    title: string;
    category: string;
    description: string;
    tech: string[];
    icon: React.ComponentType<LucideProps>;
    color: string;
}

const projects: ProjectItem[] = [
    {
        title: "INTELLI AI",
        category: "AI Ideation Engine",
        description: "A high-performance system designed to transform raw concepts into structured AI system architectures.",
        tech: ["Python", "FastAPI", "OpenAI", "Next.js"],
        icon: Cpu,
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "LEARN WITH ADVENTURE",
        category: "AI Storytelling Transformer",
        description: "Revolutionary educational platform using generative AI to create adaptive, immersive learning narratives.",
        tech: ["Stable Diffusion", "GPT-4", "TypeScript", "Tailwind"],
        icon: Sparkles,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "COGNITIVE WEAVER",
        category: "Content Synthesis Platform",
        description: "Multi-agent orchestration system for real-time content distillation and semantic linking.",
        tech: ["Node.js", "LangChain", "Pinecone", "Vite"],
        icon: Code,
        color: "from-royal-purple to-vibrant-pink"
    },
    {
        title: "BudgetUp",
        category: "Financial Intelligence Tracker",
        description: "Autonomous financial management system with predictive spending analysis and automated budgeting.",
        tech: ["Flutter", "Firebase", "TensorFlow Lite", "Python"],
        icon: TrendingUp,
        color: "from-emerald-500 to-blue-500"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">
                            Selected Innovations
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter">
                            BATTLE-TESTED <br />
                            <span className="text-muted-foreground/40 font-black">SYSTEMS.</span>
                        </h3>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground max-w-sm font-sans text-right"
                    >
                        A glimpse into the intelligent architectures I&apos;ve designed and deployed into production environments.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card variant="glass" className="relative group overflow-hidden border-primary/5 hover:border-primary/20 transition-all">
                                <CardContent className="p-8">
                                    {/* Background Glow */}
                                    <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

                                    <div className="relative z-10">
                                        <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${project.color} mb-6 shadow-lg text-white`}>
                                            <project.icon className="w-6 h-6" />
                                        </div>

                                        <h4 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-black mb-2">
                                            {project.category}
                                        </h4>
                                        <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors font-sans">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground font-sans mb-8 line-clamp-2">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tech.map((t) => (
                                                <Badge key={t} variant="outline" className="text-[9px] border-primary/10 bg-primary/5 text-primary">
                                                    {t}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <Button variant="link" size="sm" className="h-auto p-0 text-xs font-black uppercase tracking-widest gap-2">
                                                Architecture <ExternalLink size={14} />
                                            </Button>
                                            <Button variant="link" size="sm" className="h-auto p-0 text-xs font-black uppercase tracking-widest gap-2 text-muted-foreground hover:text-foreground">
                                                Source <Github size={14} />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-muted-foreground/20 font-black italic tracking-widest uppercase text-sm">
                        More innovations in development...
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
