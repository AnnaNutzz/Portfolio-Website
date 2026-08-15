"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SPLASH_FRAMES = [
    "/splash-screen-1.png",
    "/splash-screen-2.png",
    "/splash-screen-3.png",
    "/splash-screen-4.png",
    "/splash-screen-5.png",
    "/splash-screen-6.png",
];

const FRAME_DURATION = 180; // ms per frame — fast zoom-in feel
const LOGO_HOLD = 1200; // ms to hold on the logo after frames
const FADE_DURATION = 600; // ms for final fade-out

interface P5SplashScreenProps {
    onComplete: () => void;
}

export default function P5SplashScreen({ onComplete }: P5SplashScreenProps) {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [phase, setPhase] = useState<"frames" | "logo" | "done">("frames");

    // Advance through frames
    useEffect(() => {
        if (phase !== "frames") return;

        if (currentFrame < SPLASH_FRAMES.length - 1) {
            const timer = setTimeout(() => {
                setCurrentFrame((prev) => prev + 1);
            }, FRAME_DURATION);
            return () => clearTimeout(timer);
        } else {
            // Last frame reached — show logo
            const timer = setTimeout(() => {
                setPhase("logo");
            }, FRAME_DURATION);
            return () => clearTimeout(timer);
        }
    }, [currentFrame, phase]);

    // Hold on logo, then fade out
    useEffect(() => {
        if (phase !== "logo") return;

        const timer = setTimeout(() => {
            setPhase("done");
        }, LOGO_HOLD);
        return () => clearTimeout(timer);
    }, [phase]);

    // After done phase animation completes, call onComplete
    useEffect(() => {
        if (phase !== "done") return;

        const timer = setTimeout(() => {
            onComplete();
        }, FADE_DURATION);
        return () => clearTimeout(timer);
    }, [phase, onComplete]);

    // Allow skip on click/tap
    const handleSkip = useCallback(() => {
        setPhase("done");
    }, []);

    return (
        <AnimatePresence>
            {phase !== "done" ? (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: FADE_DURATION / 1000 }}
                    className="fixed inset-0 z-[200] bg-black flex items-center justify-center cursor-pointer overflow-hidden"
                    onClick={handleSkip}
                >
                    {/* Frame animation */}
                    {phase === "frames" && (
                        <motion.div
                            key={`frame-${currentFrame}`}
                            initial={{ scale: 1.05, opacity: 0.8 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: FRAME_DURATION / 1000 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={SPLASH_FRAMES[currentFrame]}
                                alt={`Splash frame ${currentFrame + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    )}

                    {/* Logo reveal */}
                    {phase === "logo" && (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-[80vw] max-w-lg h-auto flex flex-col items-center"
                        >
                            <Image
                                src="/splash-screen-logo.png"
                                alt="Ahana Kaur Logo"
                                width={500}
                                height={400}
                                className="w-full h-auto"
                                priority
                            />
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="text-p5-gray text-sm font-heading tracking-[0.3em] mt-4 uppercase"
                            >
                                CLICK TO CONTINUE
                            </motion.p>
                        </motion.div>
                    )}

                    {/* Skip hint — bottom right */}
                    <div className="absolute bottom-6 right-8 text-p5-gray/40 text-xs font-heading tracking-wider">
                        CLICK TO SKIP
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}
