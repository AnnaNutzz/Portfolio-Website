"use client";

import { useState, useCallback } from "react";
import P5SplashScreen from "@/components/P5SplashScreen";
import P5CommandMenu from "@/components/P5CommandMenu";

export default function Home() {
    const [showSplash, setShowSplash] = useState(true);

    const handleSplashComplete = useCallback(() => {
        setShowSplash(false);
    }, []);

    return (
        <>
            {showSplash ? (
                <P5SplashScreen onComplete={handleSplashComplete} />
            ) : (
                <P5CommandMenu />
            )}
        </>
    );
}
