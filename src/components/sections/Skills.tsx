"use client";

import { motion } from "framer-motion";
import { SpiderWebChart } from "@/components/ui/SpiderWebChart";
import React from "react";

const skillCategories = [
    {
        title: "Languages",
        skills: ["C / C++", "Python", "PHP", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Web Technologies",
        skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Three.js", "Supabase"]
    },
    {
        title: "Tools & Software",
        skills: ["Git", "VS Code", "Figma", "Lovable", "Cloudinary", "Office"]
    }
];

// Data for the radar chart (aggregating top skills)
const chartData = [
    { label: "Frontend", value: 80 },
    { label: "Backend", value: 60 },
    { label: "UI/UX", value: 80 },
    { label: "AI Tools", value: 90 },
    { label: "DevOps", value: 75 },
    { label: "Core CS", value: 70 },
];

export function Skills() {
    return (
        <section id="skills" className="py-16 md:py-32 relative bg-black/40 backdrop-blur-sm overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

                    {/* Left Column: Text & Categories */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
                                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Arsenal</span>
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                I leverage a diverse stack of modern technologies to build efficient, scalable, and visually stunning digital solutions.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {skillCategories.map((category, index) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xl font-bold mb-4 text-white/90 border-l-4 border-primary pl-4">
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 hover:scale-105 transition-all cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Spiderweb Chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center items-center relative py-12 lg:py-0 px-4"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl -z-10" />

                        <SpiderWebChart
                            data={chartData}
                            width={500}
                            height={500}
                            color="#8b5cf6" // Violet glow
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
