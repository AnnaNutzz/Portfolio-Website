"use client";
import { useEffect, useState } from "react";

interface SpriteAnimationProps {
    src?: string;
    totalFrames?: number;
    cols?: number;
    rows?: number;
    sheetWidth?: number;
    sheetHeight?: number;
    fps?: number;
    displaySize?: number;
    className?: string;
}

export default function SpriteAnimation({
    src = "/me_sprite.png",
    totalFrames = 7,
    cols = 3,
    rows = 3,
    sheetWidth = 1920,
    sheetHeight = 1920,
    fps = 7, // ~142ms
    displaySize = 300,
    className = ""
}: SpriteAnimationProps) {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const intervalMs = 1000 / fps;
        const interval = setInterval(() => {
            setFrame((prev) => (prev + 1) % totalFrames);
        }, intervalMs);

        return () => clearInterval(interval);
    }, [fps, totalFrames]);

    const frameWidth = sheetWidth / cols;
    const frameHeight = sheetHeight / rows;

    const col = frame % cols;
    const row = Math.floor(frame / cols);

    const bgX = -(col * frameWidth);
    const bgY = -(row * frameHeight);

    // Scaling ratio
    const ratio = displaySize / frameWidth;
    const bgSizeX = sheetWidth * ratio;
    const bgSizeY = sheetHeight * ratio;

    return (
        <div
            className={`overflow-hidden mx-auto ${className}`}
            style={{
                width: displaySize,
                height: displaySize,
                backgroundImage: `url('${src}')`,
                backgroundPosition: `${bgX * ratio}px ${bgY * ratio}px`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${bgSizeX}px ${bgSizeY}px`
            }}
        />
    );
}
