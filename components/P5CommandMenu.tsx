"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SpriteAnimation from "./SpriteAnimation";

const menuItems = [
    { label: "PeRSoNA", route: "/persona", desc: "About Me & Journey" },
    { label: "SKiLL", route: "/skills", desc: "Skills & Star Chart" },
    { label: "CoNFiDaNT", route: "/experience", desc: "Experience & Training" },
    { label: "EQUiP", route: "/projects-page", desc: "Projects & ML Challenge" },
    { label: "STaTS", route: "/stats-page", desc: "Activity & Equipment" },
    { label: "ITeM", route: "/knowledge", desc: "Knowledge & Experiments" },
    { label: "ReQUeST", route: "/blogs-page", desc: "Blog Posts & Updates" },
    { label: "GUaRD", route: "/guestbook", desc: "Guestbook & Focus" },
];

export default function P5CommandMenu() {
    const router = useRouter();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isExiting, setIsExiting] = useState(false);
    const [exitRoute, setExitRoute] = useState("");

    const handleNavigate = (route: string) => {
        setIsExiting(true);
        setExitRoute(route);
        // Delay navigation for exit animation
        setTimeout(() => {
            router.push(route);
        }, 500);
    };

    return (
        <div className="fixed inset-0 bg-black overflow-hidden select-none">
            {/* Animated red background — left side curtain */}
            <div className="absolute left-0 top-0 bottom-0 w-1/3 overflow-hidden">
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                    style={{
                        background: "repeating-linear-gradient(0deg, #FF0000 0px, #FF0000 40px, #8B0000 40px, #8B0000 80px)",
                    }}
                />
                {/* Diagonal cut on right edge */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-32 bg-black"
                    style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
                />
            </div>

            {/* Right side — B&W zigzag pattern */}
            <div className="absolute right-0 top-0 bottom-0 w-1/4 overflow-hidden opacity-20">
                <motion.div
                    animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            45deg,
                            #fff 0px, #fff 5px,
                            #000 5px, #000 10px
                        )`,
                        backgroundSize: "14px 14px",
                    }}
                />
            </div>

            {/* Character silhouette area — right-center */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 opacity-30 pointer-events-none hidden md:block">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Image
                        src="/splash-screen-logo.png"
                        alt="Logo"
                        width={400}
                        height={320}
                        className="opacity-50 grayscale contrast-200"
                    />
                </motion.div>
            </div>

            {/* Sprite — visible on the right side */}
            <div className="absolute right-[15%] top-[20%] hidden lg:block">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <SpriteAnimation displaySize={150} className="opacity-80" />
                </motion.div>
            </div>

            {/* Menu items — left-center stacked */}
            <div className="absolute left-[8%] md:left-[15%] top-1/2 -translate-y-1/2 flex flex-col gap-1 md:gap-2 z-20">
                {menuItems.map((item, index) => (
                    <motion.button
                        key={item.route}
                        initial={{ x: -200, opacity: 0 }}
                        animate={isExiting
                            ? { x: item.route === exitRoute ? 20 : -200, opacity: item.route === exitRoute ? 1 : 0 }
                            : { x: 0, opacity: 1 }
                        }
                        transition={{
                            duration: isExiting ? 0.3 : 0.5,
                            delay: isExiting ? 0 : index * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleNavigate(item.route)}
                        className="relative group text-left"
                    >
                        {/* Red highlight sweep on hover */}
                        <motion.div
                            className="absolute inset-0 bg-p5-red -z-10"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ transformOrigin: "left" }}
                        />

                        <span
                            className={`block text-3xl md:text-5xl lg:text-6xl font-heading tracking-wider transition-all duration-200 px-3 md:px-6 py-1 ${
                                hoveredIndex === index
                                    ? "text-white translate-x-2 -skew-x-2"
                                    : "text-white/90"
                            }`}
                            style={{
                                textShadow: hoveredIndex === index
                                    ? "2px 2px 0 rgba(0,0,0,0.8)"
                                    : "1px 1px 0 rgba(0,0,0,0.4)",
                            }}
                        >
                            {item.label}
                        </span>
                    </motion.button>
                ))}
            </div>

            {/* Bottom area — "COMMAND" label + description */}
            <div className="absolute bottom-6 md:bottom-10 left-[8%] md:left-[15%] right-[8%] flex items-end justify-between z-20">
                <div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-p5-gray text-xs md:text-sm font-heading tracking-[0.2em] mb-1"
                    >
                        SELECT A COMMAND
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading tracking-wider text-white/10"
                    >
                        CoMMaND
                    </motion.h2>
                </div>

                {/* Hovered item description */}
                <div className="text-right">
                    {hoveredIndex !== null && (
                        <motion.div
                            key={hoveredIndex}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <p className="text-p5-red text-sm md:text-base font-heading tracking-wider">
                                {menuItems[hoveredIndex].desc}
                            </p>
                        </motion.div>
                    )}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-p5-gray/40 text-xs font-heading tracking-wider mt-2"
                    >
                        ● CLOSE &nbsp;&nbsp; ✕ CONFIRM
                    </motion.p>
                </div>
            </div>

            {/* Exit transition overlay */}
            <AnimatePresence>
                {isExiting && (
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformOrigin: "left" }}
                        className="fixed inset-0 bg-p5-red z-50"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

