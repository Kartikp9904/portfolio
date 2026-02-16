"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const education = [
    {
        school: "TAV COLLEGE – Montreal, QC",
        degree: "AEC in Internet Programming – LEADD Program",
        period: "Completed Jan 2026",
        description: "Specialized training in modern web development technologies and practices."
    },
    {
        school: "Government Polytechnic Himmatnagar",
        degree: "Diploma in Computer Engineering",
        period: "Completed Jul 2022",
        description: "Foundation in computer science principles. CGPA: 8.14"
    }
];

const certifications = [
    {
        title: "CS50: Introduction to Computer Science",
        provider: "Harvard University / edX",
        date: "June 2024",
        description: "Comprehensive introduction to the intellectual enterprises of computer science and the art of programming.",
        link: "https://courses.edx.org/certificates/b71f3b3aac254befbe7b5b8d86b83521"
    },
    {
        title: "Introduction to User Experience Design",
        provider: "Georgia Institute of Technology / Coursera",
        date: "January 2023",
        description: "Fundamentals of UX design and user-centric development.",
        link: "https://www.coursera.org/account/accomplishments/verify/3B9NHR3KMS8H"
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-16 md:py-32 relative">
            <div className="max-w-4xl mx-auto px-6">

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                        Education <span className="text-muted-foreground">& Certificates</span>
                    </h2>
                </motion.div>

                <div className="relative border-l border-white/20 ml-3 md:ml-6 space-y-12 mb-24">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-6 md:pl-12"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-2xl font-bold">{edu.degree}</h3>
                                <span className="text-sm text-muted-foreground font-mono bg-white/5 px-2 py-1 rounded">{edu.period}</span>
                            </div>
                            <div className="text-lg font-medium text-white/80 mb-2">{edu.school}</div>
                            <p className="text-muted-foreground leading-relaxed">
                                {edu.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Section (Simplified) */}
                <div className="grid md:grid-cols-2 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-xs text-primary font-mono uppercase tracking-wider mb-2 block">{cert.date}</span>
                            <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                            <div className="text-sm text-white/60 mb-3">{cert.provider}</div>
                            <p className="text-muted-foreground text-sm mb-4">
                                {cert.description}
                            </p>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                            >
                                <ExternalLink size={16} />
                                View Certificate
                            </a>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
