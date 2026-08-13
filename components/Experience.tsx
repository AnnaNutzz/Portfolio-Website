"use client";

import ScrollAnimation from "./ScrollAnimation";
import { Briefcase, MapPin, Calendar, Award, Terminal } from "lucide-react";

export default function Experience() {
    return (
        <section className="py-10 scroll-mt-24" id="experience">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="p5-section-heading mb-8">Experience</h2>
                </ScrollAnimation>

                <div className="space-y-8">
                    {/* CoGrad Card — P5 Confidant MAX Rank */}
                    <ScrollAnimation className="p5-card rounded-none p-6 md:p-8 p5-corner-accents">
                        {/* Rank indicator */}
                        <div className="absolute top-4 right-4 flex items-center gap-1 z-10">
                            <span className="text-p5-yellow text-lg">★</span>
                            <span className="font-heading tracking-wider text-p5-yellow text-sm">MAX</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-2xl font-heading tracking-wider text-white">COGRAD (IIT DELHI IHFC)</h3>
                                    <span className="px-3 py-1 bg-p5-red/20 text-p5-red border border-p5-red/40 text-xs font-heading tracking-wider uppercase flex items-center gap-1"
                                        style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}>
                                        <Award size={14} />
                                        LEAD ROLE
                                    </span>
                                </div>
                                <p className="text-p5-red font-heading tracking-wider text-lg flex items-center gap-2 uppercase">
                                    <Briefcase size={18} /> AI Trainer (Lead)
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 text-sm text-p5-gray">
                                <span className="flex items-center gap-2 md:justify-end font-heading tracking-wider">
                                    <Calendar size={16} className="text-p5-red" /> MAR 30 – MAY 9, 2026
                                </span>
                                <span className="flex items-center gap-2 md:justify-end text-xs">
                                    (1 week break Apr 11–18)
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6 text-p5-gray text-sm md:text-base leading-relaxed relative z-10">
                            <p>
                                <strong className="text-white">Type:</strong> National government training program.<br/>
                                Lead trainer for 4 of 5 weeks (1 week as assistant). Taught Kendriya Vidyalaya (KV) STEM teachers in batches of 20–67 across India. Had full control of curriculum delivery with an assistant under me.
                            </p>

                            <div>
                                <strong className="text-white block mb-2">Locations & Subjects:</strong>
                                <ul className="space-y-1.5 ml-2">
                                    {[
                                        { w: "Week 1:", t: "TGT Maths — SRM Sonepat" },
                                        { w: "Week 2:", t: "PGT CS — MNIT Jaipur" },
                                        { w: "Week 3:", t: "PGT Chem — Karunya University (Andhra/Hyderabad batch)" },
                                        { w: "Week 4:", t: "PGT Chem — Karunya University (Mumbai/Goa batch)" },
                                        { w: "Week 5:", t: "PGT CS — Karunya University (Bangalore/Chennai/Port Blair batch)" },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-p5-red text-xs mt-1.5">▸</span>
                                            <span><strong className="text-white">{item.w}</strong> {item.t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <strong className="text-white block mb-2">What I taught:</strong>
                                <p>
                                    AI/ML fundamentals, prompt engineering, Arduino, 3D printing/Tinkercad, subject-specific AI tools (Gamma, NotebookLM, Kahoot, OBS, Prezi, Wispr), and bulk automation workflows. PGT CS batches also received full ML theory (regression, KNN, clustering, neural nets) and built deployed web apps with ML models using Colab, Vercel, Render, and Google AI Studio.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* GJ Map Solutions Card — P5 Confidant card */}
                    <ScrollAnimation className="p5-card rounded-none p-6 md:p-8 p5-corner-accents">
                        {/* Rank indicator */}
                        <div className="absolute top-4 right-4 flex items-center gap-1 z-10">
                            <span className="font-heading tracking-wider text-p5-gray text-sm">RANK 5</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                            <div>
                                <h3 className="text-xl font-heading tracking-wider text-white mb-2">GJ MAP SOLUTIONS</h3>
                                <p className="text-p5-red font-heading tracking-wider flex items-center gap-2 uppercase">
                                    <Terminal size={18} /> Python Developer Intern
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 text-sm text-p5-gray">
                                <span className="flex items-center gap-2 md:justify-end font-heading tracking-wider">
                                    <Calendar size={16} className="text-p5-red" /> FEB 9 – APR 9, 2026
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6 text-p5-gray text-sm md:text-base leading-relaxed relative z-10">
                            <p>
                                <strong className="text-white">Type:</strong> ML/Geospatial internship.<br/>
                                Was assigned 6 independent geospatial ML projects to research, design and build with full use of AI tools and agents. Submitted daily progress reports including bottlenecks.
                            </p>

                            <div>
                                <strong className="text-white block mb-2">Key Projects Built:</strong>
                                <ul className="space-y-1.5 ml-2">
                                    {[
                                        { b: "Road Detection:", t: "U-Net + ResNet-34 trained on Sentinel-2 imagery across 6 Indian cities (Delhi, Mumbai, Chennai, Kolkata, Goa, Port Blair)." },
                                        { b: "Road Defect Detection:", t: "Faster R-CNN for surface defect detection." },
                                        { b: "Crop Delineation:", t: "Field boundary segmentation from satellite imagery." },
                                        { b: "Windmill Defect Detection:", t: "Faster R-CNN for structural anomaly detection on wind turbines." },
                                        { b: "OpenDroneMap Pipeline:", t: "End-to-end drone imagery processing." },
                                        { b: "Solar Farm Detection:", t: "Sentinel-2 segmentation for renewable energy mapping." },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-p5-red text-xs mt-1.5">▸</span>
                                            <span><strong className="text-white">{item.b}</strong> {item.t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-2">
                                <strong className="text-white block mb-3 font-heading tracking-wider text-sm uppercase">ABILITIES UNLOCKED:</strong>
                                <div className="flex flex-wrap gap-2">
                                    {["PyTorch", "YOLO", "U-Net", "Faster R-CNN", "Sentinel-2", "ArcGIS", "QGIS"].map((tool) => (
                                        <span key={tool}
                                            className="px-3 py-1.5 bg-p5-red/10 text-p5-red border border-p5-red/30 text-xs font-heading tracking-wider"
                                            style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}>
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
