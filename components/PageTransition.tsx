"use client";

import { motion } from "framer-motion";

export default function PageTransition({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <>
            {/* P5 Red slash overlay */}
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                style={{ originX: 1, transformOrigin: "right" }}
                className="fixed inset-0 z-[100] bg-p5-red pointer-events-none"
            />
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                style={{ originX: 1, transformOrigin: "right" }}
                className="fixed inset-0 z-[99] bg-black pointer-events-none"
            />

            {/* Content with skew entry */}
            <motion.div
                initial={{ opacity: 0, skewY: 2, y: 30 }}
                animate={{ opacity: 1, skewY: 0, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className={className}
            >
                {children}
            </motion.div>
        </>
    );
}
