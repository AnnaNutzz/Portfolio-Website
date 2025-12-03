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
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
                        <span className="w-8 h-1 bg-gray-600 rounded-full"></span>
                        Knowledge Base
                    </h2>
                </ScrollAnimation>

                {/* Category Filter */}
                <ScrollAnimation>
                    <div className="flex flex-wrap gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2
                                    ${activeCategory === cat.id
                                        ? "bg-white text-black"
                                        : "bg-surface text-gray-400 hover:text-white hover:bg-gray-800"}`}
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
                        <div className="col-span-full text-center text-gray-500">Loading chaos...</div>
                    ) : filteredSnippets.length > 0 ? (
                        filteredSnippets.map((snippet) => (
                            <ScrollAnimation key={snippet.id}>
                                <Link href={`/snippets/${snippet.id}`} className="block h-full">
                                    <div className="bg-surface p-6 rounded-xl border border-border h-full hover:border-gray-600 transition-colors group cursor-pointer">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`p-2 rounded-lg bg-opacity-10 
                                                ${snippet.category === 'graveyard' ? 'bg-red-500 text-red-500' :
                                                    snippet.category === 'betrayal' ? 'bg-orange-500 text-orange-500' :
                                                        snippet.category === 'learning' ? 'bg-blue-500 text-blue-500' :
                                                            'bg-gray-500 text-gray-500'}`}>
                                                {categories.find(c => c.id === snippet.category)?.icon ?
                                                    (() => {
                                                        const Icon = categories.find(c => c.id === snippet.category)?.icon!;
                                                        return <Icon className="w-5 h-5" />;
                                                    })() : <Terminal className="w-5 h-5" />
                                                }
                                            </div>
                                            <span className="text-xs text-gray-600 font-mono">
                                                {snippet.createdAt?.toDate ? snippet.createdAt.toDate().toLocaleDateString() : 'Just now'}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                                            {snippet.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-4 line-clamp-4">
                                            {snippet.content}
                                        </p>

                                        {snippet.tags && (
                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {snippet.tags.map((tag: string, i: number) => (
                                                    <span key={i} className="text-xs text-gray-500 bg-black/20 px-2 py-1 rounded">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Specific fields for different types */}
                                        {snippet.painLevel && (
                                            <div className="mt-4 flex items-center gap-2 text-xs text-red-400">
                                                <span>Pain Level:</span>
                                                <div className="flex gap-0.5">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < (snippet.painLevel / 2) ? 'bg-red-500' : 'bg-gray-800'}`}></div>
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
                            <p className="text-gray-500">No thoughts found in this category.</p>
                            <p className="text-gray-700 text-sm mt-2">Head empty, no thoughts.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
