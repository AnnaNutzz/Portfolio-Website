"use client";
import { useState } from "react";
import { mlProjects, phases } from "@/data/mlProjects";
import { ChevronDown, CheckCircle2, Circle, Loader2, ExternalLink } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const statusIcon = {
    done: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    "in-progress": <Loader2 className="w-4 h-4 text-yellow-400 animate-spin" />,
    planned: <Circle className="w-4 h-4 text-gray-600" />,
};

const phaseColors: Record<string, string> = {
    emerald: "border-emerald-500/30 hover:border-emerald-500/60",
    blue: "border-blue-500/30 hover:border-blue-500/60",
    purple: "border-purple-500/30 hover:border-purple-500/60",
    amber: "border-amber-500/30 hover:border-amber-500/60",
    rose: "border-rose-500/30 hover:border-rose-500/60",
};

const phaseAccents: Record<string, string> = {
    emerald: "text-emerald-400",
    blue: "text-blue-400",
    purple: "text-purple-400",
    amber: "text-amber-400",
    rose: "text-rose-400",
};

const phaseBg: Record<string, string> = {
    emerald: "bg-emerald-500/10",
    blue: "bg-blue-500/10",
    purple: "bg-purple-500/10",
    amber: "bg-amber-500/10",
    rose: "bg-rose-500/10",
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
                        <h2 className="text-3xl font-bold flex items-center gap-4 text-white">
                            <span className="w-8 h-1 bg-violet-600 rounded-full"></span>
                            50 Days × 50 AI Projects
                        </h2>
                        <a
                            href="https://github.com/AnnaNutzz/50-Days-50-ML-AI-Projects"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            View Repo <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-10">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                            <span>{doneCount}/50 completed</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="h-2 bg-surface rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-violet-600 to-purple-400 rounded-full transition-all duration-700"
                                style={{ width: `${progress}%` }}
                            />
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
                                <div className={`border rounded-xl bg-surface/50 transition-colors ${phaseColors[phase.color]}`}>
                                    <button
                                        onClick={() => setOpenPhase(isOpen ? null : phase.id)}
                                        className="w-full flex items-center justify-between p-5 text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className={`text-sm font-mono font-bold ${phaseAccents[phase.color]}`}>
                                                P{phase.id}
                                            </span>
                                            <div>
                                                <h3 className="text-lg font-bold text-white">{phase.name}</h3>
                                                <p className="text-sm text-gray-500">{phase.range} · {phaseDone}/10 done</p>
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    {isOpen && (
                                        <div className="border-t border-border px-5 pb-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                                                {phaseProjects.map((project) => (
                                                    <div
                                                        key={project.day}
                                                        className={`flex items-start gap-3 p-3 rounded-lg ${phaseBg[phase.color]} border border-transparent hover:border-border transition-colors`}
                                                    >
                                                        <div className="mt-0.5">{statusIcon[project.status]}</div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-xs font-mono text-gray-500">D{String(project.day).padStart(2, "0")}</span>
                                                                <span className="text-sm font-medium text-white truncate">{project.title}</span>
                                                            </div>
                                                            <div className="flex flex-wrap gap-1 mt-1">
                                                                {project.tags.map(tag => (
                                                                    <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-500">
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
