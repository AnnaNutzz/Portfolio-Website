"use client";
import { motion } from "framer-motion";

interface P5SectionDividerProps {
    variant?: "slash" | "burst" | "line";
    className?: string;
}

export default function P5SectionDivider({ variant = "slash", className = "" }: P5SectionDividerProps) {
    if (variant === "burst") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative py-8 flex items-center justify-center ${className}`}
            >
                {/* Radial red lines */}
                <div className="relative w-full max-w-md h-px">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-p5-red to-transparent" />
                    {/* Center diamond */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-p5-red rotate-45 shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
                    {/* Outer lines */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-p5-red/50 to-transparent" />
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-p5-red/50 to-transparent" />
                    </div>
                </div>
            </motion.div>
        );
    }

    if (variant === "line") {
        return (
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`py-6 ${className}`}
                style={{ transformOrigin: "left" }}
            >
                <div className="h-px bg-gradient-to-r from-p5-red via-p5-red/50 to-transparent" />
            </motion.div>
        );
    }

    // Default: slash
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`relative py-8 overflow-hidden ${className}`}
        >
            <div
                className="w-full h-[3px] bg-p5-red"
                style={{
                    clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)",
                    boxShadow: "0 0 15px rgba(255, 0, 0, 0.4)"
                }}
            />
            {/* Small decorative marks */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-p5-red rotate-45" />
            <div className="absolute right-14 top-1/2 -translate-y-1/2 w-1 h-1 bg-p5-red rotate-45" />
        </motion.div>
    );
}
