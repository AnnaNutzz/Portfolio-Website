"use client";
import { useState } from "react";
import { mlProjects, phases } from "@/data/mlProjects";
import { ChevronDown, CheckCircle2, Circle, Loader2, ExternalLink } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const statusIcon = {
    done: <CheckCircle2 className="w-4 h-4 text-p5-red" />,
    "in-progress": <Loader2 className="w-4 h-4 text-p5-yellow animate-spin" />,
    planned: <Circle className="w-4 h-4 text-p5-gray-dark" />,
};

export default function MLChallenge() {
    const [openPhase, setOpenPhase] = useState<number | null>(null);

    const doneCount = mlProjects.filter(p => p.status === "done").length;
    const progress = Math.round((doneCount / 50) * 100);

    return (
        <section id="ml-challenge" className="py-20 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="p5-section-heading">50 Days × 50 AI Projects</h2>
                        <a
                            href="https://github.com/AnnaNutzz/50-Days-50-ML-AI-Projects"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-p5-gray hover:text-p5-red transition-colors font-heading tracking-wider uppercase"
                        >
                            VIEW REPO <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    {/* P5 Progress bar — Mementos style */}
                    <div className="mb-10">
                        <div className="flex justify-between text-sm text-p5-gray mb-2 font-heading tracking-wider">
                            <span>{doneCount}/50 COMPLETED</span>
                            <span className="text-p5-red font-bold">{progress}%</span>
                        </div>
                        <div className="h-3 bg-p5-gray-dark overflow-hidden"
                            style={{ clipPath: 'polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)' }}>
                            <div
                                className="h-full bg-gradient-to-r from-p5-red to-p5-crimson transition-all duration-700 relative"
                                style={{ width: `${progress}%` }}
                            >
                                {/* Animated stripes */}
                                <div className="absolute inset-0 animate-p5-stripe"
                                    style={{
                                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 12px)',
                                        backgroundSize: '30px 100%',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Phases */}
                <div className="space-y-4">
                    {phases.map((phase) => {
                        const phaseProjects = mlProjects.filter(p => p.phase === phase.id);
                        const phaseDone = phaseProjects.filter(p => p.status === "done").length;
                        const isOpen = openPhase === phase.id;

                        return (
                            <ScrollAnimation key={phase.id}>
                                <div className={`border p5-card rounded-none transition-colors ${isOpen ? 'border-p5-red' : 'border-p5-gray-dark hover:border-p5-red/50'}`}>
                                    <button
                                        onClick={() => setOpenPhase(isOpen ? null : phase.id)}
                                        className="w-full flex items-center justify-between p-5 text-left relative z-10"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm font-heading tracking-wider font-bold text-p5-red bg-p5-red/10 w-10 h-10 flex items-center justify-center border border-p5-red/30">
                                                P{phase.id}
                                            </span>
                                            <div>
                                                <h3 className="text-lg font-heading tracking-wider text-white uppercase">{phase.name}</h3>
                                                <p className="text-sm text-p5-gray font-heading tracking-wider">{phase.range} · {phaseDone}/10 DONE</p>
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-5 h-5 text-p5-red transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    {isOpen && (
                                        <div className="border-t border-p5-gray-dark px-5 pb-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                                                {phaseProjects.map((project) => (
                                                    <div
                                                        key={project.day}
                                                        className="flex items-start gap-3 p-3 bg-p5-black/50 border border-p5-gray-dark hover:border-p5-red/30 transition-colors"
                                                    >
                                                        <div className="mt-0.5">{statusIcon[project.status]}</div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-xs font-mono text-p5-red">D{String(project.day).padStart(2, "0")}</span>
                                                                <span className="text-sm font-medium text-white truncate">{project.title}</span>
                                                            </div>
                                                            <div className="flex flex-wrap gap-1 mt-1">
                                                                {project.tags.map(tag => (
                                                                    <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-p5-red/5 text-p5-gray border border-p5-gray-dark/50">
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </ScrollAnimation>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
