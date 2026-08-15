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
            icon: <MapPin size={20} className="text-p5-red" />
        },
        {
            week: "Week 2",
            date: "5 Apr – 10 Apr 2026",
            subject: "PGT CS (Extended ML)",
            location: "MNIT Jaipur",
            role: "Assistant Trainer",
            icon: <Users size={20} className="text-p5-yellow" />
        },
        {
            week: "Week 3",
            date: "19 Apr – 24 Apr 2026",
            subject: "PGT Chem",
            location: "Karunya University (Andhra/Hyderabad)",
            role: "Lead Trainer",
            icon: <MapPin size={20} className="text-p5-red" />
        },
        {
            week: "Week 4",
            date: "26 Apr – 1 May 2026",
            subject: "PGT Chem",
            location: "Karunya University (Mumbai/Goa)",
            role: "Lead Trainer",
            icon: <MapPin size={20} className="text-p5-red" />
        },
        {
            week: "Week 5",
            date: "3 May – 9 May 2026",
            subject: "PGT CS (Extended ML)",
            location: "Karunya University (Bangalore/Chennai/Port Blair)",
            role: "Lead Trainer",
            icon: <MapPin size={20} className="text-p5-red" />
        },
        {
            week: "Week 6",
            date: "13 July - 17 July 2026",
            subject: "PGT Physics & CS",
            location: "IIT Delhi - Sonepat",
            role: "Lead Trainer",
            icon: <MapPin size={20} className="text-p5-red" />
        }
    ];

    return (
        <section className="py-10 scroll-mt-24" id="cograd">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="p5-section-heading mb-8">National AI Training Program (CoGrad)</h2>
                    <p className="text-p5-gray mb-12 max-w-3xl text-lg">
                        Lead AI Trainer for a nationwide initiative empowering Kendriya Vidyalaya (KV) STEM teachers.
                        Traveled across India to train batches of 20-67 teachers over 6 weeks on generative AI,
                        machine learning, and physical computing.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left side: Sprite & Curriculum */}
                    <div className="lg:col-span-1 space-y-8">
                        <ScrollAnimation className="p5-card rounded-none p-6">
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
                            <div className="text-center mt-6 relative z-10">
                                <h3 className="font-heading tracking-wider text-white text-lg">COGRAD & IHFC</h3>
                                <p className="text-p5-gray text-sm mt-1 font-heading tracking-wider">MAR 30 - MAY 9, 2026 +</p>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="p5-card rounded-none p-6 p5-left-accent">
                            <h3 className="font-heading tracking-wider text-white text-xl mb-4 flex items-center gap-2 relative z-10">
                                <BookOpen size={20} className="text-p5-red" />
                                TRAINING OVERVIEW
                            </h3>
                            <div className="space-y-4 text-sm text-p5-gray leading-relaxed relative z-10">
                                <p>
                                    Delivered comprehensive 5-day training modules to STEM educators, focusing on practical AI integration in the classroom.
                                </p>
                                <ul className="space-y-2 ml-1">
                                    {[
                                        { b: "Generative AI:", t: "Prompt engineering, AI agents, and productivity automation." },
                                        { b: "Interactive Tools:", t: "Subject-specific educational tools and digital content creation." },
                                        { b: "Physical Computing:", t: "Hands-on Arduino, 3D printing, and CAD modeling." },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-p5-red text-xs mt-1.5">▸</span>
                                            <span><strong className="text-white">{item.b}</strong> {item.t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6 pt-6 border-t border-p5-gray-dark relative z-10">
                                <h4 className="font-heading tracking-wider text-white mb-3 flex items-center gap-2 uppercase">
                                    <Award size={18} className="text-p5-yellow" />
                                    EXTENDED ML TRACK
                                </h4>
                                <p className="text-sm text-p5-gray leading-relaxed mb-3">
                                    Designed an advanced curriculum for PGT Computer Science educators focusing on Applied Machine Learning.
                                </p>
                                <ul className="space-y-2 text-sm text-p5-gray ml-1">
                                    {[
                                        "Foundational ML algorithms and neural networks.",
                                        "Modern AI coding assistants and full-stack deployment.",
                                        "End-to-end web app creation with integrated ML models.",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-p5-red text-xs mt-1.5">▸</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Right side: Timeline */}
                    <div className="lg:col-span-2 relative">
                        <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-p5-red/30 hidden sm:block"></div>
                        <div className="space-y-8">
                            {weeks.map((week, index) => (
                                <ScrollAnimation key={index} className="relative sm:pl-16">
                                    <div className="hidden sm:flex absolute left-0 top-2 w-14 h-14 bg-p5-surface border-2 border-p5-red items-center justify-center z-10 shadow-[0_0_10px_rgba(255,0,0,0.2)]">
                                        {week.icon}
                                    </div>
                                    <div className="p5-card rounded-none p-6 hover:border-p5-red transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 relative z-10">
                                            <div>
                                                <h3 className="text-xl font-heading tracking-wider text-white mb-1">{week.week} — {week.location}</h3>
                                                <p className="text-p5-red font-heading tracking-wider">{week.subject}</p>
                                            </div>
                                            <div className="flex flex-col sm:items-end gap-2">
                                                <span className="text-sm text-p5-gray flex items-center gap-1.5 font-heading tracking-wider">
                                                    <Calendar size={14} className="text-p5-red" />
                                                    {week.date}
                                                </span>
                                                <span className={`text-xs px-2.5 py-1 font-heading tracking-wider w-fit ${week.role === "Lead Trainer"
                                                    ? "bg-p5-red/10 text-p5-red border border-p5-red/30"
                                                    : "bg-p5-yellow/10 text-p5-yellow border border-p5-yellow/30"
                                                    }`}
                                                    style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}>
                                                    {week.role.toUpperCase()}
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
