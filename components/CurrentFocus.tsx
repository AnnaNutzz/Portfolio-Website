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
            case "idea": return <Sparkles className="w-5 h-5 text-p5-yellow" />;
            case "prototype": return <Hammer className="w-5 h-5 text-p5-red" />;
            case "debugging": return <Bug className="w-5 h-5 text-red-500" />;
            case "polishing": return <Sparkles className="w-5 h-5 text-p5-yellow" />;
            case "almost_done": return <Rocket className="w-5 h-5 text-green-400" />;
            default: return <Hammer className="w-5 h-5 text-p5-gray" />;
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
                    <div className="p5-card rounded-none p-6 md:p-8 p5-corner-accents">
                        {/* Diagonal red stripe accent */}
                        <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden pointer-events-none">
                            <div className="absolute top-0 left-0 w-40 h-[3px] bg-p5-red transform -rotate-45 translate-y-8 -translate-x-4" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h2 className="text-sm font-heading tracking-[0.2em] text-p5-red mb-2 uppercase">
                                        ▸ CURRENT MISSION
                                    </h2>
                                    <h3 className="text-2xl md:text-3xl font-heading tracking-wider text-white mb-2">
                                        {focus.project}
                                    </h3>
                                    <div className="flex items-center gap-2 text-p5-gray">
                                        {getStatusIcon(focus.status)}
                                        <span className="font-heading tracking-wider uppercase">{getStatusText(focus.status)}</span>
                                    </div>
                                </div>

                                <div className="flex-1 max-w-md">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-p5-gray font-heading tracking-wider uppercase">Progress</span>
                                        <span className="text-white font-mono text-p5-red font-bold">{focus.progress}%</span>
                                    </div>
                                    {/* P5 HP bar style */}
                                    <div className="h-4 bg-p5-gray-dark overflow-hidden relative"
                                        style={{ clipPath: 'polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)' }}>
                                        <div
                                            className="h-full bg-gradient-to-r from-p5-red to-p5-yellow transition-all duration-1000 ease-out relative"
                                            style={{ width: `${focus.progress}%` }}
                                        >
                                            {/* Animated stripes */}
                                            <div className="absolute inset-0 animate-p5-stripe"
                                                style={{
                                                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 15px)',
                                                    backgroundSize: '30px 100%',
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {focus.eta && (
                                        <p className="text-xs text-p5-gray mt-2 text-right font-heading tracking-wider">
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
