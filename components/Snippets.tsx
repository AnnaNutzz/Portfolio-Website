"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";
import { Brain, Bug, Lightbulb, AlertTriangle, Terminal } from "lucide-react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Snippets() {
    const [snippets, setSnippets] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        const fetchSnippets = async () => {
            try {
                const q = query(collection(db, "snippets"), orderBy("createdAt", "desc"));
                const snapshot = await getDocs(q);
                setSnippets(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error fetching snippets:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSnippets();
    }, []);

    const categories = [
        { id: "all", label: "All Chaos" },
        { id: "learning", label: "Learning", icon: Brain },
        { id: "graveyard", label: "Bug Graveyard", icon: Bug },
        { id: "betrayal", label: "Betrayals", icon: AlertTriangle },
        { id: "idea", label: "Ideas", icon: Lightbulb },
        { id: "workflow", label: "Workflows", icon: Terminal },
    ];

    const filteredSnippets = activeCategory === "all"
        ? snippets
        : snippets.filter(s => s.category === activeCategory);

    return (
        <section className="py-20" id="snippets">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="p5-section-heading mb-12">Knowledge Base</h2>
                </ScrollAnimation>

                {/* Category Filter — P5 angular pills */}
                <ScrollAnimation>
                    <div className="flex flex-wrap gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 text-sm font-heading tracking-wider transition-all flex items-center gap-2 uppercase
                                    ${activeCategory === cat.id
                                        ? "bg-p5-red text-white"
                                        : "bg-p5-surface text-p5-gray hover:text-white hover:border-p5-red border border-p5-gray-dark"}`}
                                style={activeCategory === cat.id ? { clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' } : undefined}
                            >
                                {cat.icon && <cat.icon className="w-4 h-4" />}
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </ScrollAnimation>

                {/* Snippets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading ? (
                        <div className="col-span-full text-center text-p5-gray font-heading tracking-wider uppercase">Loading chaos...</div>
                    ) : filteredSnippets.length > 0 ? (
                        filteredSnippets.map((snippet) => (
                            <ScrollAnimation key={snippet.id}>
                                <Link href={`/snippets/${snippet.id}`} className="block h-full">
                                    <div className="p5-card rounded-none p-6 h-full hover:border-p5-red transition-colors group cursor-pointer">
                                        <div className="flex items-start justify-between mb-4 relative z-10">
                                            <div className={`p-2 ${
                                                snippet.category === 'graveyard' ? 'bg-p5-red/20 text-p5-red' :
                                                    snippet.category === 'betrayal' ? 'bg-p5-yellow/20 text-p5-yellow' :
                                                        snippet.category === 'learning' ? 'bg-p5-red/10 text-p5-red' :
                                                            'bg-p5-gray-dark/50 text-p5-gray'}`}>
                                                {categories.find(c => c.id === snippet.category)?.icon ?
                                                    (() => {
                                                        const Icon = categories.find(c => c.id === snippet.category)?.icon!;
                                                        return <Icon className="w-5 h-5" />;
                                                    })() : <Terminal className="w-5 h-5" />
                                                }
                                            </div>
                                            <span className="text-xs text-p5-gray font-mono">
                                                {snippet.createdAt?.toDate ? snippet.createdAt.toDate().toLocaleDateString() : 'Just now'}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-heading tracking-wider text-white mb-2 group-hover:text-p5-red transition-colors uppercase relative z-10">
                                            {snippet.title}
                                        </h3>

                                        <p className="text-p5-gray text-sm mb-4 line-clamp-4 relative z-10">
                                            {snippet.content}
                                        </p>

                                        {snippet.tags && (
                                            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                                {snippet.tags.map((tag: string, i: number) => (
                                                    <span key={i} className="text-xs text-p5-red/70 bg-p5-red/5 px-2 py-1 border border-p5-red/10">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Specific fields for different types */}
                                        {snippet.painLevel && (
                                            <div className="mt-4 flex items-center gap-2 text-xs text-p5-red relative z-10">
                                                <span className="font-heading tracking-wider">PAIN LEVEL:</span>
                                                <div className="flex gap-0.5">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <div key={i} className={`w-2 h-2 ${i < (snippet.painLevel / 2) ? 'bg-p5-red' : 'bg-p5-gray-dark'}`}></div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </ScrollAnimation>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-p5-gray font-heading tracking-wider uppercase">No thoughts found in this category.</p>
                            <p className="text-p5-gray/50 text-sm mt-2 italic">Head empty, no thoughts.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
