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
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
                        <span className="w-8 h-1 bg-orange-600 rounded-full"></span>
                        AI Experiments
                    </h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiments.map((exp) => (
                        <ScrollAnimation key={exp.id}>
                            <div className="bg-surface border border-border rounded-xl p-6 hover:border-orange-500/50 transition-colors group">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                                        {exp.title}
                                    </h3>
                                    <Beaker className="w-6 h-6 text-orange-500" />
                                </div>

                                <div className="text-gray-400 mb-6 italic prose prose-invert max-w-none text-sm">
                                    <ReactMarkdown>{exp.problem}</ReactMarkdown>
                                </div>

                                <div className="space-y-4 text-sm">
                                    <div className="flex items-center gap-3">
                                        <Brain className="w-4 h-4 text-purple-400" />
                                        <span className="text-gray-300">Model: {exp.model}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Database className="w-4 h-4 text-blue-400" />
                                        <span className="text-gray-300">Dataset: {exp.dataset}</span>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Result</h4>
                                    <div className="text-gray-300 prose prose-invert max-w-none text-sm">
                                        <ReactMarkdown>{exp.result}</ReactMarkdown>
                                    </div>
                                </div>

                                {exp.failures && (
                                    <div className="mt-4 flex gap-3 items-start">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                                        <div className="w-full">
                                            <span className="text-red-400 font-bold text-xs uppercase block mb-1">Failures: </span>
                                            <div className="text-gray-400 text-sm prose prose-invert max-w-none">
                                                <ReactMarkdown>{exp.failures}</ReactMarkdown>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {exp.next && (
                                    <div className="mt-4 pt-4 border-t border-gray-800 flex items-center gap-2 text-sm text-green-400">
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
