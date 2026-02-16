import { SceneIndex } from "@/components/canvas/SceneIndex";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-screen w-full">
        <SceneIndex />

        <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto px-6">

            {/* Left: Text Content */}
            <div className="text-center lg:text-left pointer-events-auto space-y-6">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 animate-fade-in">
                KARTIK <br /> PATEL.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
                Always smiling, loving life fully, and spreading happiness.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto pointer-events-auto animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden glass-card transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 z-10 mix-blend-overlay" />
                {/* Placeholder Image - Replace with your own */}
                <Image
                  src="/hero-image.png"
                  alt="Kartik Patel"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover scale-100 hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl -z-10" />
            </div>

          </div>
        </div>
      </div>

      <div className="relative z-10 bg-background">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
