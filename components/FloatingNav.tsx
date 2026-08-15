"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const sections = [
    { id: "hero", label: "Home" },
    { id: "timeline", label: "Journey" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "cograd", label: "CoGrad" },
    { id: "projects", label: "Projects" },
    { id: "stats", label: "Stats" },
    { id: "ml-challenge", label: "MLChallenge" },
    { id: "hardware", label: "Hardware" },
    { id: "snippets", label: "Snippets" },
    { id: "experiments", label: "Experiments" },
    { id: "blogs", label: "Blogs" },
    { id: "guestbook", label: "Guestbook" },
];

export default function FloatingNav() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -60% 0px" }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-1.5 md:gap-2">
            {sections.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`group flex items-center justify-end transition-all duration-300 ease-in-out ${isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
                            }`}
                        aria-label={`Scroll to ${label}`}
                    >
                        <span
                            className={`mr-2 md:mr-3 transition-all duration-300 whitespace-nowrap font-heading tracking-wider ${isActive
                                    ? "text-p5-red text-sm md:text-base font-bold uppercase"
                                    : "text-p5-gray text-[10px] md:text-xs translate-x-2 group-hover:translate-x-0 uppercase"
                                }`}
                        >
                            {isActive && <span className="mr-1 text-p5-red">▶</span>}
                            {label}
                        </span>
                        <div
                            className={`transition-all duration-300 ${isActive
                                    ? "w-6 md:w-8 h-[3px] bg-p5-red shadow-[0_0_8px_rgba(255,0,0,0.8)]"
                                    : "w-2 md:w-3 h-px bg-p5-gray group-hover:w-4 md:group-hover:w-5 group-hover:bg-p5-red"
                                }`}
                        />
                    </button>
                );
            })}

            <button
                onClick={scrollToTop}
                className="mt-4 md:mt-6 p-1.5 md:p-2 bg-p5-red hover:bg-red-700 text-white transition-all shadow-lg flex items-center justify-center group"
                style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
                aria-label="Scroll to top"
            >
                <ChevronUp size={16} className="md:w-5 md:h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
    );
}
