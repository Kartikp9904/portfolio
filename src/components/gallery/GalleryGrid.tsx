"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";
import { GalleryItem } from "./GalleryItem";



export function GalleryGrid() {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<any | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/gallery');
                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data) && data.length > 0) {
                        setImages(data);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch images", error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const downloadImage = async (imageUrl: string, imageName: string) => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = imageName || 'download';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading image:", error);
            window.open(imageUrl, '_blank');
        }
    };

    if (loading) {
        return <div className="text-white text-center py-20">Loading Gallery...</div>;
    }

    if (images.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-muted-foreground mb-4">No images found in your gallery.</p>
                <p className="text-sm text-white/50">
                    Make sure you have uploaded images to the <code>portfolio-gallery</code> folder in Cloudinary.
                </p>
            </div>
        );
    }

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {images.map((image, index) => (
                    <GalleryItem key={index} image={image} index={index} onSelect={setSelectedImage} />
                ))}
            </div>


            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Controls */}
                            <div className="absolute -top-12 right-0 flex gap-4 z-10">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        downloadImage(selectedImage.src, selectedImage.alt);
                                    }}
                                    className="text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm"
                                    title="Download"
                                >
                                    <Download size={24} />
                                </button>
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm"
                                    title="Close"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Image */}
                            <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    width={1200}
                                    height={900}
                                    className="w-full h-auto max-h-[85vh] object-contain bg-black/50"
                                    priority
                                />
                            </div>

                            {/* Caption */}
                            <div className="mt-4 text-center">
                                {/* <h3 className="text-2xl font-bold text-white">{selectedImage.caption}</h3> */}
                                {/* <p className="text-white/60">{selectedImage.alt}</p> */}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
