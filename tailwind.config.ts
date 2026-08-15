import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                foreground: "#FFFFFF",
                surface: "#1a1a1a",
                "surface-hover": "#2a0000",
                border: "#333333",
                primary: "#FF0000",
                "p5-red": "#FF0000",
                "p5-dark-red": "#8B0000",
                "p5-crimson": "#DC143C",
                "p5-yellow": "#FFD700",
                "p5-white": "#FFFFFF",
                "p5-black": "#0a0a0a",
                "p5-gray": "#888888",
                "p5-surface": "#1a1a1a",
                "p5-gray-dark": "#333333",
            },
            fontFamily: {
                heading: ['"Bebas Neue"', 'Impact', 'sans-serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                "p5-slash": "p5-slash 0.8s ease-in-out forwards",
                "p5-slide-left": "p5-slide-in-left 0.5s ease-out forwards",
                "p5-slide-right": "p5-slide-in-right 0.5s ease-out forwards",
                "p5-spin": "p5-spin-reveal 0.6s ease-out forwards",
                "p5-burst": "all-out-burst 0.5s ease-out forwards",
                "p5-flash": "p5-flash 0.3s ease-in-out",
                "p5-glow": "p5-glow 2s ease-in-out infinite",
                "p5-line": "p5-line-extend 0.8s ease-out forwards",
                "p5-menu": "p5-menu-slide 0.4s ease-out forwards",
                "p5-stripe": "p5-stripe-move 0.8s linear infinite",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
