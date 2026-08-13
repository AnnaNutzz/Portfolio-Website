"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Beaker, Brain, Database, AlertTriangle, ArrowRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import ReactMarkdown from "react-markdown";

export default function Experiments() {
    const [experiments, setExperiments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperiments = async () => {
            try {
                const q = query(collection(db, "experiments"), orderBy("createdAt", "desc"));
                const snapshot = await getDocs(q);
                setExperiments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error fetching experiments:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchExperiments();
    }, []);

    if (loading) return null;
    if (experiments.length === 0) return null;

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="p5-section-heading mb-12">AI Experiments</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiments.map((exp) => (
                        <ScrollAnimation key={exp.id}>
                            <div className="p5-card rounded-none p-6 hover:border-p5-red transition-colors group p5-corner-accents">
                                <div className="flex items-start justify-between mb-4 relative z-10">
                                    <h3 className="text-xl font-heading tracking-wider text-white group-hover:text-p5-red transition-colors uppercase">
                                        {exp.title}
                                    </h3>
                                    <Beaker className="w-6 h-6 text-p5-red" />
                                </div>

                                <div className="text-p5-gray mb-6 italic prose prose-invert max-w-none text-sm relative z-10">
                                    <ReactMarkdown>{exp.problem}</ReactMarkdown>
                                </div>

                                <div className="space-y-4 text-sm relative z-10">
                                    <div className="flex items-center gap-3">
                                        <Brain className="w-4 h-4 text-p5-red" />
                                        <span className="text-gray-300">Model: {exp.model}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Database className="w-4 h-4 text-p5-red" />
                                        <span className="text-gray-300">Dataset: {exp.dataset}</span>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-p5-black/80 border border-p5-red/20 relative z-10">
                                    <h4 className="text-xs font-heading tracking-[0.2em] text-p5-red mb-2 uppercase">Result</h4>
                                    <div className="text-gray-300 prose prose-invert max-w-none text-sm">
                                        <ReactMarkdown>{exp.result}</ReactMarkdown>
                                    </div>
                                </div>

                                {exp.failures && (
                                    <div className="mt-4 flex gap-3 items-start relative z-10">
                                        <AlertTriangle className="w-4 h-4 text-p5-red mt-1 shrink-0" />
                                        <div className="w-full">
                                            <span className="text-p5-red font-heading tracking-wider text-xs uppercase block mb-1">FAILURES: </span>
                                            <div className="text-p5-gray text-sm prose prose-invert max-w-none">
                                                <ReactMarkdown>{exp.failures}</ReactMarkdown>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {exp.next && (
                                    <div className="mt-4 pt-4 border-t border-p5-gray-dark flex items-center gap-2 text-sm text-p5-yellow relative z-10">
                                        <ArrowRight className="w-4 h-4 shrink-0" />
                                        <div className="prose prose-invert max-w-none">
                                            <ReactMarkdown>{`Next: ${exp.next}`}</ReactMarkdown>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
