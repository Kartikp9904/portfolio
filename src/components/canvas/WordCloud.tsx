"use client";

import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

const skills = [
    "React", "Next.js", "TypeScript", "Three.js", "Tailwind",
    "Node.js", "C++", "Python", "PHP", "Java",
    "Git", "Figma", "Supabase", "HTML", "CSS",
    "SQL", "Oracle", "Cloudinary", "Lovable"
];

function Word({ children, position, ...props }: { children: string; position: THREE.Vector3 }) {
    const color = new THREE.Color();
    const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, "material-toneMapped": false };
    const ref = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const over = (e: any) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

    useFrame(({ camera }) => {
        // Make text face the camera
        if (ref.current) {
            ref.current.quaternion.copy(camera.quaternion);
            // @ts-ignore
            ref.current.material.color.lerp(color.set(hovered ? "#3b82f6" : "white"), 0.1);
        }
    });

    return (
        <Text ref={ref} onPointerOver={over} onPointerOut={out} position={position} {...fontProps} {...props}>
            {children}
        </Text>
    );
}

export function WordCloud({ count = 4, radius = 20 }) {
    // Create a spherical distribution of words
    const words = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (skills.length + 1);
        const thetaSpan = (Math.PI * 2) / skills.length;

        for (let i = 0; i < skills.length; i++) {
            // Distribute points on a sphere
            // Using Fibonacci sphere algorithm for even distribution would be better, but simple spherical coords work for now
            const phi = Math.acos(-1 + (2 * i) / skills.length);
            const theta = Math.sqrt(skills.length * Math.PI) * phi;

            spherical.set(radius, phi, theta);

            temp.push([new THREE.Vector3().setFromSpherical(spherical), skills[i]]);
        }
        return temp;
    }, [count, radius]);

    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001;
            groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() / 2) * 0.1;
        }
    })

    return (
        <group ref={groupRef}>
            {words.map(([pos, word], index) => (
                // @ts-ignore
                <Word key={index} position={pos} children={word as string} />
            ))}
        </group>
    );
}
