"use client";
import { useEffect, useState } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2, Hammer, Sparkles, Bug, Rocket } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function CurrentFocus() {
    const [focus, setFocus] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFocus = async () => {
            try {
                const q = query(collection(db, "current_focus"), orderBy("createdAt", "desc"), limit(1));
                const snapshot = await getDocs(q);
                if (!snapshot.empty) {
                    setFocus(snapshot.docs[0].data());
                }
            } catch (error) {
                console.error("Error fetching focus:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFocus();
    }, []);

    if (loading) return null;
    if (!focus) return null;

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "idea": return <Sparkles className="w-5 h-5 text-yellow-400" />;
            case "prototype": return <Hammer className="w-5 h-5 text-blue-400" />;
            case "debugging": return <Bug className="w-5 h-5 text-red-400" />;
            case "polishing": return <Sparkles className="w-5 h-5 text-purple-400" />;
            case "almost_done": return <Rocket className="w-5 h-5 text-green-400" />;
            default: return <Hammer className="w-5 h-5 text-gray-400" />;
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case "idea": return "Idea Phase";
            case "prototype": return "Prototyping";
            case "debugging": return "Debugging Hell";
            case "polishing": return "Polishing";
            case "almost_done": return "Almost Done";
            default: return status;
        }
    };

    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="bg-surface border border-border rounded-xl p-6 md:p-8 relative overflow-hidden">
                        {/* Background Pulse */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h2 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-2">
                                        What I'm Building Right Now
                                    </h2>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {focus.project}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        {getStatusIcon(focus.status)}
                                        <span>{getStatusText(focus.status)}</span>
                                    </div>
                                </div>

                                <div className="flex-1 max-w-md">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-400">Progress</span>
                                        <span className="text-white font-mono">{focus.progress}%</span>
                                    </div>
                                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-1000 ease-out"
                                            style={{ width: `${focus.progress}%` }}
                                        ></div>
                                    </div>
                                    {focus.eta && (
                                        <p className="text-xs text-gray-500 mt-2 text-right italic">
                                            ETA: {focus.eta}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
