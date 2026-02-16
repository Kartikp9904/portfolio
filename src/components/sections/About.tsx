"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Design",
        description: "Creating intuitive, aesthetic, and user-centric interfaces.",
        icon: "🎨"
    },
    {
        title: "Development",
        description: "Building scalable, performant, and secure web applications.",
        icon: "💻"
    },
    {
        title: "Strategy",
        description: "Aligning technical solutions with business goals.",
        icon: "🎯"
    },
    {
        title: "Optimization",
        description: "Enhancing speed, accessibility, and SEO for maximum reach.",
        icon: "🚀"
    }
];

const hobbies = [
    { name: "Photography", icon: "📷" },
    { name: "Gaming", icon: "🎮" },
    { name: "Reading", icon: "📚" },
    { name: "Traveling", icon: "✈️" }
];

export function About() {
    return (
        <section id="about" className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                        About <span className="text-muted-foreground">Me</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        I am a Computer Engineering student with practical experience in web development and content creation.
                        I focus on efficiency, execution, and building solutions that work, leveraging AI tools for faster development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300 group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 transform origin-left">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-6">Beyond Coding</h3>
                    <div className="flex flex-wrap gap-4">
                        {hobbies.map((hobby, index) => (
                            <motion.div
                                key={hobby.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card px-6 py-3 rounded-full flex items-center gap-3 border border-white/10 hover:bg-white/5 transition-colors"
                            >
                                <span className="text-xl">{hobby.icon}</span>
                                <span className="font-medium">{hobby.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
