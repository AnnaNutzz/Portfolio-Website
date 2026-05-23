"use client";

import ScrollAnimation from "./ScrollAnimation";
import SpriteAnimation from "./SpriteAnimation";
import { Calendar, MapPin, Users, BookOpen, Award } from "lucide-react";

export default function CoGrad() {
    const weeks = [
        {
            week: "Week 1",
            date: "30 Mar – 4 Apr 2026",
            subject: "TGT Maths",
            location: "SRM Sonepat",
            role: "Lead Trainer",
            icon: <MapPin size={20} className="text-blue-400" />
        },
        {
            week: "Week 2",
            date: "5 Apr – 10 Apr 2026",
            subject: "PGT CS (Extended ML)",
            location: "MNIT Jaipur",
            role: "Assistant Trainer",
            icon: <Users size={20} className="text-purple-400" />
        },
        {
            week: "Week 3",
            date: "19 Apr – 24 Apr 2026",
            subject: "PGT Chem",
            location: "Karunya University (Andhra/Hyderabad)",
            role: "Lead Trainer",
            icon: <MapPin size={20} className="text-green-400" />
        },
        {
            week: "Week 4",
            date: "26 Apr – 1 May 2026",
            subject: "PGT Chem",
            location: "Karunya University (Mumbai/Goa)",
            role: "Lead Trainer",
            icon: <MapPin size={20} className="text-orange-400" />
        },
        {
            week: "Week 5",
            date: "3 May – 9 May 2026",
            subject: "PGT CS (Extended ML)",
            location: "Karunya University (Bangalore/Chennai/Port Blair)",
            role: "Lead Trainer",
            icon: <MapPin size={20} className="text-purple-400" />
        }
    ];

    return (
        <section className="py-10 scroll-mt-24" id="cograd">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white">
                        <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                        National AI Training Program (CoGrad)
                    </h2>
                    <p className="text-gray-400 mb-12 max-w-3xl text-lg">
                        Lead AI Trainer for a nationwide initiative empowering Kendriya Vidyalaya (KV) STEM teachers.
                        Traveled across India to train batches of 20-67 teachers over 5 weeks on generative AI,
                        machine learning, and physical computing.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left side: Sprite & Curriculum */}
                    <div className="lg:col-span-1 space-y-8">
                        <ScrollAnimation className="bg-surface border border-gray-800 rounded-2xl p-6">
                            {/* Note: User specified 4rows 1 col, but 1920x480 usually means 4 cols 1 row for 480x480 square frames. 
                                We set cols=4 rows=1. If it renders wrong, it can be adjusted. */}
                            <SpriteAnimation
                                src="/cograd_logo.png"
                                sheetWidth={1920}
                                sheetHeight={480}
                                cols={4}
                                rows={1}
                                totalFrames={4}
                                fps={4}
                                displaySize={200}
                                className="opacity-90 hover:opacity-100 transition-opacity mx-auto"
                            />
                            <div className="text-center mt-6">
                                <h3 className="font-bold text-white text-lg">CoGrad & IHFC</h3>
                                <p className="text-gray-400 text-sm mt-1">Mar 30 - May 9, 2026</p>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="bg-surface border border-gray-800 rounded-2xl p-6">
                            <h3 className="font-bold text-white text-xl mb-4 flex items-center gap-2">
                                <BookOpen size={20} className="text-gray-400" />
                                Training Overview
                            </h3>
                            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                                <p>
                                    Delivered comprehensive 5-day training modules to STEM educators, focusing on practical AI integration in the classroom.
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-1">
                                    <li><strong className="text-gray-300">Generative AI:</strong> Prompt engineering, AI agents, and productivity automation.</li>
                                    <li><strong className="text-gray-300">Interactive Tools:</strong> Subject-specific educational tools and digital content creation.</li>
                                    <li><strong className="text-gray-300">Physical Computing:</strong> Hands-on Arduino, 3D printing, and CAD modeling.</li>
                                </ul>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-800">
                                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                    <Award size={18} className="text-purple-400" />
                                    Extended ML Track
                                </h4>
                                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                                    Designed an advanced curriculum for PGT Computer Science educators focusing on Applied Machine Learning.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-1">
                                    <li>Foundational ML algorithms and neural networks.</li>
                                    <li>Modern AI coding assistants and full-stack deployment.</li>
                                    <li>End-to-end web app creation with integrated ML models.</li>
                                </ul>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Right side: Timeline */}
                    <div className="lg:col-span-2 relative">
                        <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gray-800 hidden sm:block"></div>
                        <div className="space-y-8">
                            {weeks.map((week, index) => (
                                <ScrollAnimation key={index} className="relative sm:pl-16">
                                    <div className="hidden sm:flex absolute left-0 top-2 w-14 h-14 bg-surface border border-gray-700 rounded-full items-center justify-center z-10 shadow-lg">
                                        {week.icon}
                                    </div>
                                    <div className="bg-surface border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-1">{week.week} — {week.location}</h3>
                                                <p className="text-blue-400 font-medium">{week.subject}</p>
                                            </div>
                                            <div className="flex flex-col sm:items-end gap-2">
                                                <span className="text-sm text-gray-400 flex items-center gap-1.5">
                                                    <Calendar size={14} />
                                                    {week.date}
                                                </span>
                                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium w-fit ${week.role === "Lead Trainer" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : "bg-orange-500/10 text-orange-400 border border-orange-500/20"}`}>
                                                    {week.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
