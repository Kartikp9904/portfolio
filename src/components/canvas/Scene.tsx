"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import { Suspense } from "react";
import { FloatingShape } from "./FloatingShape";

export default function Scene() {
    return (
        <div className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                    <FloatingShape />
                    <Environment preset="city" />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
