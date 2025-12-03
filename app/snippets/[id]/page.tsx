"use client";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Brain, Bug, Lightbulb, AlertTriangle, Terminal } from "lucide-react";
import ReactMarkdown from "react-markdown";

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
        <div className="min-h-screen bg-background text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Knowledge Base
                </button>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-opacity-10 
                            ${snippet.category === 'graveyard' ? 'bg-red-500 text-red-500' :
                                snippet.category === 'betrayal' ? 'bg-orange-500 text-orange-500' :
                                    snippet.category === 'learning' ? 'bg-blue-500 text-blue-500' :
                                        'bg-gray-500 text-gray-500'}`}>
                            <CategoryIcon className="w-6 h-6" />
                        </div>
                        <h1 className="text-3xl font-bold">{snippet.title}</h1>
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
                    <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-800">
                        {snippet.tags.map((tag: string, i: number) => (
                            <span key={i} className="text-sm text-gray-400 bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
