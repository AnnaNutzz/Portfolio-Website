"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
    text: string;
    className?: string;
}

export default function TypingText({ text, className = "" }: TypingTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                setIsTyping(false);
                clearInterval(intervalId);
            }
        }, 100); // Adjust typing speed here (ms per character)

        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="inline-block w-[4px] h-[1em] bg-current ml-1 align-middle"
            />
        </span>
    );
}
