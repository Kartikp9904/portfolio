"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

interface SpiderWebChartProps {
    data: { label: string; value: number }[];
    width?: number;
    height?: number;
    color?: string;
}

export function SpiderWebChart({ data, width = 400, height = 400, color = "#3b82f6" }: SpiderWebChartProps) {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 40; // Padding for labels
    const levels = 5; // Number of concentric webs

    // Calculate vertices for the web
    const angleStep = (Math.PI * 2) / data.length;

    const getPoint = (value: number, index: number, max: number = 100) => {
        const angle = index * angleStep - Math.PI / 2; // Start from top
        const distance = (value / max) * radius;
        return {
            x: centerX + Math.cos(angle) * distance,
            y: centerY + Math.sin(angle) * distance,
        };
    };

    // Generate web levels
    const webPath = Array.from({ length: levels }).map((_, level) => {
        const levelRadius = (radius / levels) * (level + 1);
        return data.map((_, i) => {
            const angle = i * angleStep - Math.PI / 2;
            return `${centerX + Math.cos(angle) * levelRadius},${centerY + Math.sin(angle) * levelRadius}`;
        }).join(" ") + ` ${centerX + Math.cos(-Math.PI / 2) * levelRadius},${centerY + Math.sin(-Math.PI / 2) * levelRadius}`; // Close the loop
    });


    // Generate data polygon
    const dataPoints = data.map((d, i) => getPoint(d.value, i));
    const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(" ") + ` ${dataPoints[0].x},${dataPoints[0].y}`;

    // Interactive State
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="relative flex justify-center items-center w-full h-auto">
            <svg
                viewBox={`0 0 ${width} ${height}`}
                className="overflow-visible w-full h-auto max-w-[500px]"
            >
                {/* Web Background */}
                {webPath.map((path, i) => (
                    <motion.polygon
                        key={i}
                        points={path}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="1"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    />
                ))}

                {/* Axis Lines */}
                {data.map((_, i) => {
                    const endPoint = getPoint(100, i);
                    return (
                        <motion.line
                            key={`line-${i}`}
                            x1={centerX}
                            y1={centerY}
                            x2={endPoint.x}
                            y2={endPoint.y}
                            stroke="rgba(255, 255, 255, 0.1)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />
                    )
                })}

                {/* Data Polygon */}
                <motion.polygon
                    points={dataPath}
                    fill={`${color}33`} // 20% opacity
                    stroke={color}
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />

                {/* Data Points (Dots) */}
                {dataPoints.map((p, i) => (
                    <motion.circle
                        key={`dot-${i}`}
                        cx={p.x}
                        cy={p.y}
                        r={hoveredIndex === i ? 6 : 4}
                        fill={color}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1 + i * 0.05 }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
                    />
                ))}

                {/* Labels */}
                {data.map((d, i) => {
                    const point = getPoint(115, i); // Push labels out further
                    return (
                        <text
                            key={`label-${i}`}
                            x={point.x}
                            y={point.y}
                            fill={hoveredIndex === i ? "white" : "rgba(255, 255, 255, 0.6)"}
                            fontSize="12"
                            fontWeight={hoveredIndex === i ? "bold" : "normal"}
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            className="transition-colors duration-200 pointer-events-none uppercase tracking-wider"
                        >
                            {d.label}
                        </text>
                    )
                })}
            </svg>

            {/* Tooltip for value (optional, can be centered) */}
            {hoveredIndex !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-sm font-mono pointer-events-none"
                    style={{
                        left: dataPoints[hoveredIndex].x - 20,
                        top: dataPoints[hoveredIndex].y - 40
                    }}
                >
                    {data[hoveredIndex].value}%
                </motion.div>
            )}
        </div>
    );
}
