"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import * as THREE from "three";

export function FloatingShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle rotation
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;

            // Mouse interaction (lerping for smoothness)
            const { x, y } = state.mouse;
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x * 1.5, 0.1);
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y * 1.5, 0.1);
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={1}
            floatingRange={[-0.2, 0.2]}
        >
            <Sphere args={[1, 64, 64]} ref={meshRef} scale={hovered ? 1.2 : 1.0} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
                <MeshDistortMaterial
                    color={hovered ? "#3b82f6" : "#1e1e1e"} // Blue on hover, dark gray text otherwise
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}
