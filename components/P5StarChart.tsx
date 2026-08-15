"use client";

import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

interface StatData {
    label: string;
    value: number; // 1-5
    level: string;
}

const stats: StatData[] = [
    { label: "MaChiNe LeaRNiNG", value: 5, level: "Lv. 5" },
    { label: "CoMPuTeR ViSioN", value: 4, level: "Lv. 4" },
    { label: "WeB DeVeLoPMeNT", value: 3, level: "Lv. 3" },
    { label: "DaTa SCieNCe", value: 4, level: "Lv. 4" },
    { label: "SySTeMS & DeVoPS", value: 3, level: "Lv. 3" },
];

const MAX_VALUE = 5;
const CENTER = 150;
const CHART_RADIUS = 120;
const LEVELS = [1, 2, 3, 4, 5];

function polarToCartesian(angle: number, radius: number): [number, number] {
    // Start from top (-90 deg) and go clockwise
    const rad = ((angle - 90) * Math.PI) / 180;
    return [CENTER + radius * Math.cos(rad), CENTER + radius * Math.sin(rad)];
}

function getPolygonPoints(values: number[]): string {
    const angleStep = 360 / values.length;
    return values
        .map((val, i) => {
            const r = (val / MAX_VALUE) * CHART_RADIUS;
            const [x, y] = polarToCartesian(i * angleStep, r);
            return `${x},${y}`;
        })
        .join(" ");
}

function getGridPolygon(level: number): string {
    const angleStep = 360 / stats.length;
    const r = (level / MAX_VALUE) * CHART_RADIUS;
    return stats
        .map((_, i) => {
            const [x, y] = polarToCartesian(i * angleStep, r);
            return `${x},${y}`;
        })
        .join(" ");
}

export default function P5StarChart() {
    const angleStep = 360 / stats.length;
    const dataPoints = getPolygonPoints(stats.map((s) => s.value));

    return (
        <section className="py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="p5-section-heading mb-8">Social Stats</h2>
                </ScrollAnimation>

                <ScrollAnimation>
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* SVG Chart */}
                        <div className="relative flex-shrink-0">
                            <svg
                                width={CENTER * 2}
                                height={CENTER * 2}
                                viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`}
                                className="drop-shadow-[0_0_30px_rgba(255,0,0,0.15)]"
                            >
                                {/* Grid levels — concentric pentagons */}
                                {LEVELS.map((level) => (
                                    <polygon
                                        key={`grid-${level}`}
                                        points={getGridPolygon(level)}
                                        fill="none"
                                        stroke={level === MAX_VALUE ? "#FF0000" : "#333"}
                                        strokeWidth={level === MAX_VALUE ? 1.5 : 0.5}
                                        opacity={0.5}
                                    />
                                ))}

                                {/* Axis lines — from center to each vertex */}
                                {stats.map((_, i) => {
                                    const [x, y] = polarToCartesian(i * angleStep, CHART_RADIUS);
                                    return (
                                        <line
                                            key={`axis-${i}`}
                                            x1={CENTER}
                                            y1={CENTER}
                                            x2={x}
                                            y2={y}
                                            stroke="#444"
                                            strokeWidth={0.5}
                                        />
                                    );
                                })}

                                {/* Data area — filled red polygon */}
                                <motion.polygon
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
                                    points={dataPoints}
                                    fill="rgba(255, 0, 0, 0.25)"
                                    stroke="#FF0000"
                                    strokeWidth={2}
                                />

                                {/* Data points — red dots at vertices */}
                                {stats.map((stat, i) => {
                                    const r = (stat.value / MAX_VALUE) * CHART_RADIUS;
                                    const [x, y] = polarToCartesian(i * angleStep, r);
                                    return (
                                        <motion.circle
                                            key={`dot-${i}`}
                                            initial={{ r: 0 }}
                                            whileInView={{ r: 5 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                                            cx={x}
                                            cy={y}
                                            fill="#FF0000"
                                            stroke="#fff"
                                            strokeWidth={2}
                                        />
                                    );
                                })}

                                {/* Center dot */}
                                <circle cx={CENTER} cy={CENTER} r={3} fill="#FF0000" opacity={0.5} />
                            </svg>

                            {/* Labels around the chart */}
                            {stats.map((stat, i) => {
                                const labelRadius = CHART_RADIUS + 35;
                                const [x, y] = polarToCartesian(i * angleStep, labelRadius);
                                const isLeft = x < CENTER;
                                const isTop = y < CENTER;

                                return (
                                    <div
                                        key={`label-${i}`}
                                        className="absolute font-heading tracking-wider text-xs md:text-sm"
                                        style={{
                                            left: `${x}px`,
                                            top: `${y}px`,
                                            transform: `translate(${isLeft ? "-100%" : "0%"}, ${isTop ? "-100%" : "0%"})`,
                                        }}
                                    >
                                        <span className="text-white block whitespace-nowrap">{stat.label}</span>
                                        <span className="text-p5-red text-xs">{stat.level}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Stat bars — side panel */}
                        <div className="flex-1 space-y-4 w-full max-w-sm">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-white font-heading tracking-wider text-sm">{stat.label}</span>
                                        <span className="text-p5-red font-heading tracking-wider text-sm">{stat.level}</span>
                                    </div>
                                    <div className="h-2 bg-p5-surface overflow-hidden"
                                        style={{ clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)" }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(stat.value / MAX_VALUE) * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-p5-red to-p5-crimson relative"
                                        >
                                            <div className="absolute inset-0 animate-p5-stripe"
                                                style={{
                                                    backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(255,255,255,0.1) 6px, rgba(255,255,255,0.1) 9px)",
                                                    backgroundSize: "20px 100%",
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                    {/* Star dots */}
                                    <div className="flex gap-1 mt-1">
                                        {Array.from({ length: MAX_VALUE }).map((_, j) => (
                                            <div
                                                key={j}
                                                className={`w-2 h-2 rotate-45 ${
                                                    j < stat.value ? "bg-p5-red" : "bg-p5-surface"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
