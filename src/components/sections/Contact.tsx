"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-16 md:py-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                            Let&apos;s work <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                                together.
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-md">
                            Have a project in mind? Let&apos;s build something extraordinary. I&apos;m currently available for freelance projects.
                        </p>
                        <a
                            href="mailto:kartikp9904@gmail.com"
                            className="text-lg font-medium hover:text-white/70 transition-colors border-b border-white/20 pb-1"
                        >
                            kartikp9904@gmail.com
                        </a>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className=""
                    >
                        <div className="grid gap-6">
                            <a
                                href="mailto:kartikp9904@gmail.com"
                                className="group glass-card p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                        <Mail size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">Email</h3>
                                        <p className="text-sm text-muted-foreground">kartikp9904@gmail.com</p>
                                    </div>
                                </div>
                                <ArrowUpRight size={20} className="text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </a>

                            <a
                                href="https://linkedin.com/in/kartikp9904"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group glass-card p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-[#0077b5]/10 group-hover:bg-[#0077b5]/20 transition-colors">
                                        <Linkedin size={24} className="text-[#0077b5]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">LinkedIn</h3>
                                        <p className="text-sm text-muted-foreground">Professional Profile</p>
                                    </div>
                                </div>
                                <ArrowUpRight size={20} className="text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </a>

                            <a
                                href="https://github.com/Kartikp9904"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group glass-card p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                        <Github size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">GitHub</h3>
                                        <p className="text-sm text-muted-foreground">Code & Projects</p>
                                    </div>
                                </div>
                                <ArrowUpRight size={20} className="text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
