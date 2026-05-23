"use client";

import ScrollAnimation from "./ScrollAnimation";
import { Briefcase, MapPin, Calendar, Award, Terminal } from "lucide-react";

export default function Experience() {
    return (
        <section className="py-10 scroll-mt-24" id="experience">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white">
                        <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                        Experience
                    </h2>
                </ScrollAnimation>

                <div className="space-y-8">
                    {/* CoGrad Card - Slightly more prominent */}
                    <ScrollAnimation className="bg-surface border-2 border-gray-700/50 hover:border-purple-500/50 rounded-2xl p-6 md:p-8 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-bl-full -z-10 pointer-events-none"></div>
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-2xl font-bold text-white">CoGrad (IIT Delhi IHFC)</h3>
                                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                        <Award size={14} />
                                        Lead Role
                                    </span>
                                </div>
                                <p className="text-purple-400 font-medium text-lg flex items-center gap-2">
                                    <Briefcase size={18} /> AI Trainer (Lead)
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 text-sm text-gray-400">
                                <span className="flex items-center gap-2 md:justify-end">
                                    <Calendar size={16} /> Mar 30 – May 9, 2026
                                </span>
                                <span className="flex items-center gap-2 md:justify-end text-xs">
                                    (1 week break Apr 11–18)
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
                            <p>
                                <strong className="text-gray-300">Type:</strong> National government training program.<br/>
                                Lead trainer for 4 of 5 weeks (1 week as assistant). Taught Kendriya Vidyalaya (KV) STEM teachers in batches of 20–67 across India. Had full control of curriculum delivery with an assistant under me.
                            </p>
                            
                            <div>
                                <strong className="text-gray-300 block mb-2">Locations & Subjects:</strong>
                                <ul className="list-disc list-inside space-y-1.5 ml-2">
                                    <li><strong>Week 1:</strong> TGT Maths — SRM Sonepat</li>
                                    <li><strong>Week 2:</strong> PGT CS — MNIT Jaipur</li>
                                    <li><strong>Week 3:</strong> PGT Chem — Karunya University (Andhra/Hyderabad batch)</li>
                                    <li><strong>Week 4:</strong> PGT Chem — Karunya University (Mumbai/Goa batch)</li>
                                    <li><strong>Week 5:</strong> PGT CS — Karunya University (Bangalore/Chennai/Port Blair batch)</li>
                                </ul>
                            </div>

                            <div>
                                <strong className="text-gray-300 block mb-2">What I taught:</strong>
                                <p>
                                    AI/ML fundamentals, prompt engineering, Arduino, 3D printing/Tinkercad, subject-specific AI tools (Gamma, NotebookLM, Kahoot, OBS, Prezi, Wispr), and bulk automation workflows. PGT CS batches also received full ML theory (regression, KNN, clustering, neural nets) and built deployed web apps with ML models using Colab, Vercel, Render, and Google AI Studio.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* GJ Map Solutions Card */}
                    <ScrollAnimation className="bg-surface border border-gray-800 hover:border-gray-600 rounded-2xl p-6 md:p-8 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">GJ Map Solutions</h3>
                                <p className="text-blue-400 font-medium flex items-center gap-2">
                                    <Terminal size={18} /> Python Developer Intern
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 text-sm text-gray-400">
                                <span className="flex items-center gap-2 md:justify-end">
                                    <Calendar size={16} /> Feb 9 – Apr 9, 2026
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
                            <p>
                                <strong className="text-gray-300">Type:</strong> ML/Geospatial internship.<br/>
                                Was assigned 6 independent geospatial ML projects to research, design and build with full use of AI tools and agents. Submitted daily progress reports including bottlenecks.
                            </p>

                            <div>
                                <strong className="text-gray-300 block mb-2">Key Projects Built:</strong>
                                <ul className="list-disc list-inside space-y-1.5 ml-2">
                                    <li><strong>Road Detection:</strong> U-Net + ResNet-34 trained on Sentinel-2 imagery across 6 Indian cities (Delhi, Mumbai, Chennai, Kolkata, Goa, Port Blair).</li>
                                    <li><strong>Road Defect Detection:</strong> Faster R-CNN for surface defect detection.</li>
                                    <li><strong>Crop Delineation:</strong> Field boundary segmentation from satellite imagery.</li>
                                    <li><strong>Windmill Defect Detection:</strong> Faster R-CNN for structural anomaly detection on wind turbines.</li>
                                    <li><strong>OpenDroneMap Pipeline:</strong> End-to-end drone imagery processing.</li>
                                    <li><strong>Solar Farm Detection:</strong> Sentinel-2 segmentation for renewable energy mapping.</li>
                                </ul>
                            </div>

                            <div className="pt-2">
                                <strong className="text-gray-300 block mb-3">Tools & Stack:</strong>
                                <div className="flex flex-wrap gap-2">
                                    {["PyTorch", "YOLO", "U-Net", "Faster R-CNN", "Sentinel-2", "ArcGIS", "QGIS"].map((tool) => (
                                        <span key={tool} className="px-3 py-1.5 bg-gray-800/80 text-gray-300 rounded-md text-xs font-medium border border-gray-700/50">
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
