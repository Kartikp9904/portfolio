"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function GalleryItem({ image, index, onSelect }: { image: any, index: number, onSelect: (img: any) => void }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group break-inside-avoid cursor-pointer mb-6"
            onClick={() => onSelect(image)}
        >
            <div className="relative overflow-hidden rounded-2xl bg-muted/20">
                {/* Skeleton Loader */}
                {!isLoaded && (
                    <div className="absolute inset-0 bg-white/5 animate-pulse z-0" style={{ paddingBottom: `${(image.height / image.width) * 100}%` }} />
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center p-4">
                        <p className="text-white font-medium text-lg">Click to View</p>
                    </div>
                </div>

                <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className={`w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-700 ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-xl'
                        }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoad={() => setIsLoaded(true)}
                />
            </div>
        </motion.div>
    );
}
