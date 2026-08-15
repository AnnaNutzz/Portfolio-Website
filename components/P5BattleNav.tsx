"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import SpriteAnimation from "./SpriteAnimation";
import { Home } from "lucide-react";

const navItems = [
    { label: "PeRSoNA", route: "/persona", angle: -120 },
    { label: "SKiLL", route: "/skills", angle: -60 },
    { label: "EQUiP", route: "/projects-page", angle: 0 },
    { label: "CoNFiDaNT", route: "/experience", angle: 60 },
    { label: "STaTS", route: "/stats-page", angle: 120 },
    { label: "ITeM", route: "/knowledge", angle: 180 },
];

const RADIUS = 120; // px distance from center

export default function P5BattleNav() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigate = (route: string) => {
        setIsOpen(false);
        router.push(route);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Radial menu items */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 -z-10"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Home button — top of radial */}
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ delay: 0.05 }}
                            onClick={() => handleNavigate("/")}
                            className="absolute bg-p5-red text-white p-3 hover:bg-red-700 transition-colors shadow-lg z-10"
                            style={{
                                bottom: `${RADIUS + 40}px`,
                                right: "10px",
                                clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                            }}
                            title="Return to Menu"
                        >
                            <Home size={20} />
                        </motion.button>

                        {/* Radial items */}
                        {navItems.map((item, index) => {
                            const angleRad = (item.angle * Math.PI) / 180;
                            const x = Math.cos(angleRad) * RADIUS;
                            const y = Math.sin(angleRad) * RADIUS;
                            const isActive = pathname === item.route || pathname.startsWith(item.route + "/");

                            return (
                                <motion.button
                                    key={item.route}
                                    initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                                    animate={{ scale: 1, opacity: 1, x: -x, y: -y }}
                                    exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                                    transition={{
                                        delay: index * 0.04,
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                    onClick={() => handleNavigate(item.route)}
                                    className={`absolute bottom-0 right-0 whitespace-nowrap px-3 py-1.5 font-heading tracking-wider text-sm md:text-base transition-all shadow-lg ${
                                        isActive
                                            ? "bg-p5-red text-white"
                                            : "bg-p5-surface text-white border border-p5-red/50 hover:bg-p5-red hover:text-white"
                                    }`}
                                    style={{
                                        clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
                                    }}
                                >
                                    {item.label}
                                </motion.button>
                            );
                        })}
                    </>
                )}
            </AnimatePresence>

            {/* Center button — sprite with red ring */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-all shadow-lg ${
                    isOpen
                        ? "border-p5-red shadow-[0_0_20px_rgba(255,0,0,0.5)]"
                        : "border-p5-red/50 hover:border-p5-red hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                }`}
            >
                <div className="w-full h-full bg-p5-surface flex items-center justify-center">
                    <SpriteAnimation displaySize={60} className="scale-[1.2]" />
                </div>
                {/* Pulse ring when closed */}
                {!isOpen && (
                    <div className="absolute inset-0 rounded-full border border-p5-red/30 animate-ping" />
                )}
            </motion.button>
        </div>
    );
}
