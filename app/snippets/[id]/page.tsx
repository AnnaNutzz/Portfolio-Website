"use client";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Brain, Bug, Lightbulb, AlertTriangle, Terminal } from "lucide-react";
import ReactMarkdown from "react-markdown";
import P5BattleNav from "@/components/P5BattleNav";

export default function SnippetDetail() {
    const { id } = useParams();
    const router = useRouter();
    const [snippet, setSnippet] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchSnippet = async () => {
            try {
                const docRef = doc(db, "snippets", id as string);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setSnippet({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching snippet:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSnippet();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Loading...
            </div>
        );
    }

    if (!snippet) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Snippet not found.
            </div>
        );
    }

    const categories = [
        { id: "all", label: "All Chaos" },
        { id: "learning", label: "Learning", icon: Brain },
        { id: "graveyard", label: "Bug Graveyard", icon: Bug },
        { id: "betrayal", label: "Betrayals", icon: AlertTriangle },
        { id: "idea", label: "Ideas", icon: Lightbulb },
        { id: "workflow", label: "Workflows", icon: Terminal },
    ];

    const CategoryIcon = categories.find(c => c.id === snippet.category)?.icon || Terminal;

    return (
        <div className="min-h-screen bg-background text-white">
            <P5BattleNav />
            <div className="max-w-3xl mx-auto p-4 md:p-8 lg:p-12 py-20">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-p5-gray hover:text-p5-red mb-8 transition-colors font-heading tracking-wider"
                >
                    <ArrowLeft size={20} />
                    Back to Knowledge Base
                </button>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 
                            ${snippet.category === 'graveyard' ? 'bg-p5-red/20 text-p5-red' :
                                snippet.category === 'betrayal' ? 'bg-p5-yellow/20 text-p5-yellow' :
                                    snippet.category === 'learning' ? 'bg-p5-red/10 text-p5-red' :
                                        'bg-p5-gray-dark/50 text-p5-gray'}`}>
                            <CategoryIcon className="w-6 h-6" />
                        </div>
                        <h1 className="text-3xl font-heading tracking-wider uppercase">{snippet.title}</h1>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{snippet.createdAt?.toDate ? snippet.createdAt.toDate().toLocaleDateString() : 'Just now'}</span>
                        {snippet.painLevel && (
                            <div className="flex items-center gap-2 text-red-400">
                                <span>Pain Level:</span>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < (snippet.painLevel / 2) ? 'bg-red-500' : 'bg-gray-800'}`}></div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none mb-12">
                    <ReactMarkdown>{snippet.content}</ReactMarkdown>
                </div>

                {/* Tags */}
                {snippet.tags && (
                    <div className="flex flex-wrap gap-2 pt-8 border-t border-p5-red/20">
                        {snippet.tags.map((tag: string, i: number) => (
                            <span key={i} className="text-sm text-p5-red bg-p5-red/5 px-3 py-1 border border-p5-red/10 font-heading tracking-wider">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
