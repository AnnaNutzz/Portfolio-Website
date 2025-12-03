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
        <section className="py-20 border-t border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="text-2xl font-bold mb-12 flex items-center gap-4 text-white">
                        <GitCommit className="w-6 h-6 text-yellow-500" />
                        Version History
                    </h2>
                </ScrollAnimation>

                <div className="space-y-12 relative before:absolute before:left-2 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-800">
                    {logs.map((log) => (
                        <ScrollAnimation key={log.id}>
                            <div className="relative pl-8">
                                {/* Dot */}
                                <div className="absolute left-0 top-1.5 w-4 h-4 bg-gray-900 border-2 border-yellow-500 rounded-full z-10"></div>

                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
                                    <h3 className="text-xl font-bold text-white">{log.version}</h3>
                                    <span className="text-sm text-gray-500 flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {new Date(log.date).toLocaleDateString()}
                                    </span>
                                </div>

                                <ul className="space-y-2">
                                    {log.changes.map((change: string, i: number) => (
                                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                            <span className="text-yellow-500/50 mt-1.5">•</span>
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
