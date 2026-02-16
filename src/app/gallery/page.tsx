import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 animate-fade-in">
                        Through My <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            Lens
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
                        Capturing the unnoticed, the beautiful, and the random. <br />
                        <span className="text-white/80 font-medium mt-2 block">Nature Lover & Random Clicker</span>
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <GalleryGrid />
                </div>
            </section>
        </div>
    );
}
