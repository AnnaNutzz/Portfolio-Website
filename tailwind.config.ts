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
                background: "#0d0d0f",
                foreground: "#999597",
                surface: "#341a23",
                "surface-hover": "#ab6b78",
                border: "#ab6b78",
                primary: "#c3828d",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
