"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 relative overflow-hidden">
            {/* Red diagonal stripes bg */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 20px, #FF0000 20px, #FF0000 21px)",
                }}
            />

            <div className="relative z-10 text-center">
                <h2 className="text-6xl md:text-8xl font-heading tracking-wider text-p5-red mb-4">
                    ERRoR
                </h2>
                <p className="text-xl font-heading tracking-wider text-white mb-2">
                    SOMETHING WENT WRONG!
                </p>
                <p className="text-p5-gray mb-8 max-w-md text-center mx-auto">
                    {error.message || "An unexpected error occurred."}
                </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="bg-p5-red text-white px-6 py-3 font-heading tracking-wider hover:bg-red-700 transition-colors"
                        style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
                    >
                        TRY AGAIN
                    </button>
                    <Link
                        href="/"
                        className="border border-p5-red text-p5-red px-6 py-3 font-heading tracking-wider hover:bg-p5-red hover:text-white transition-colors"
                        style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
                    >
                        RETURN TO HIDEOUT
                    </Link>
                </div>
            </div>
        </div>
    );
}
