"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { GitCommit, Clock } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function Changelog() {
    const [logs, setLogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const q = query(collection(db, "changelog"), orderBy("createdAt", "desc"));
                const snapshot = await getDocs(q);
                setLogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error fetching changelog:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLogs();
    }, []);

    if (loading) return null;
    if (logs.length === 0) return null;

    return (
        <section className="py-20 border-t border-p5-red/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="text-2xl font-heading tracking-wider mb-12 flex items-center gap-4 text-white uppercase">
                        <GitCommit className="w-6 h-6 text-p5-red" />
                        Version History
                    </h2>
                </ScrollAnimation>

                <div className="space-y-12 relative before:absolute before:left-2 before:top-2 before:bottom-0 before:w-[2px] before:bg-p5-red/30">
                    {logs.map((log) => (
                        <ScrollAnimation key={log.id}>
                            <div className="relative pl-8">
                                {/* Red diamond dot */}
                                <div className="absolute left-0 top-1.5 w-4 h-4 bg-p5-black border-2 border-p5-red rotate-45 z-10"></div>

                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
                                    <h3 className="text-xl font-heading tracking-wider text-p5-red">{log.version}</h3>
                                    <span className="text-sm text-p5-yellow flex items-center gap-1 font-heading tracking-wider">
                                        <Clock className="w-3 h-3" />
                                        {new Date(log.date).toLocaleDateString()}
                                    </span>
                                </div>

                                <ul className="space-y-2">
                                    {log.changes.map((change: string, i: number) => (
                                        <li key={i} className="text-p5-gray text-sm flex items-start gap-2">
                                            <span className="text-p5-red mt-1">▸</span>
                                            {change}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
