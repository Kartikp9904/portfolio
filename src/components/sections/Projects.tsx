"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Kadhaippoma",
        category: "React / Supabase / Lovable",
        description: "Synchronized music streaming prototype that allows multiple users to experience audio playback simultaneously. Built with AI assistance.",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
        link: "https://kadhaippomaa.lovable.app/"
    },
    {
        title: "UCanFrench",
        category: "React / Supabase / Cloudinary",
        description: "Educational platform for learning French through real-world stories. Features reading comprehension and cultural context.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
        link: "https://ucanfrench.com"
    },
    {
        title: "Translation App",
        category: "ReactJS / OpenAI API",
        description: "Interactive app for instant text translation and grammar checking with AI-powered corrections.",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop",
        link: "https://github.com/Kartikp9904/Translation-OpenAI.git"
    },
    {
        title: "Digital Tailor",
        category: "HTML / PHP / Oracle",
        description: "E-commerce platform for custom-tailored suits with customization options for fabric, cut, and style.",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
        link: "https://github.com/Kartikp9904/fashion_ware.git"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-16 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-24 flex flex-col md:flex-row justify-between items-end"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Selected <span className="text-muted-foreground">Work</span>
                    </h2>
                    <Link href="https://github.com/Kartikp9904" className="hidden md:flex items-center gap-2 text-lg hover:text-white/70 transition-colors mt-4 md:mt-0">
                        View GitHub <ArrowUpRight size={20} />
                    </Link>
                </motion.div>

                <div className="space-y-12 md:space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                        >
                            {/* Image Side */}
                            <div className={`aspect-[16/9] overflow-hidden rounded-2xl relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Side */}
                            <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                                <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">{project.category}</span>
                                <h3 className="text-2xl md:text-4xl font-bold mb-4">{project.title}</h3>
                                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                                <Link
                                    href={project.link}
                                    className={`inline-flex items-center gap-2 text-lg font-medium hover:text-white/70 transition-colors border-b border-white/20 pb-1 hover:border-white ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                                >
                                    View Project <ArrowUpRight size={20} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 md:hidden text-center">
                    <Link href="https://github.com/Kartikp9904" className="inline-flex items-center gap-2 text-lg hover:text-white/70 transition-colors">
                        View GitHub <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
