"use client";
import { useState, useEffect, useMemo } from "react";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ScrollAnimation from "./ScrollAnimation";

// Graffiti color & rotation combos for that vandalized wall look
const GRAFFITI_COLORS = 6;
const GRAFFITI_ROTATIONS = 6;

// Spray paint splatter decorations
function SpraySplatters() {
    const splatters = useMemo(() => {
        const colors = ["#ff2d6b", "#39ff14", "#00e5ff", "#ffea00", "#e040fb", "#ff6e40"];
        return Array.from({ length: 8 }, (_, i) => ({
            color: colors[i % colors.length],
            width: 40 + (i * 17) % 80,
            height: 30 + (i * 23) % 60,
            top: `${10 + (i * 31) % 70}%`,
            left: `${5 + (i * 37) % 85}%`,
        }));
    }, []);

    return (
        <>
            {splatters.map((s, i) => (
                <div
                    key={i}
                    className="graffiti-splatter"
                    style={{
                        background: s.color,
                        width: s.width,
                        height: s.height,
                        top: s.top,
                        left: s.left,
                    }}
                />
            ))}
        </>
    );
}

export default function Guestbook() {
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || !name.trim()) return;

        setLoading(true);
        try {
            await addDoc(collection(db, "guestbook"), {
                text: newMessage,
                name: name,
                createdAt: serverTimestamp(),
            });
            setNewMessage("");
            setName("");
        } catch (error) {
            console.error("Error adding document: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* The Wall */}
                <div className="graffiti-wall p-6 sm:p-10">
                    {/* Spray paint splatters */}
                    <SpraySplatters />

                    {/* Title - sprayed on the wall */}
                    <ScrollAnimation>
                        <h2 className="graffiti-title text-4xl sm:text-5xl font-bold mb-10 inline-block">
                            Sign the Wall
                        </h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                        {/* Form - spray your tag */}
                        <ScrollAnimation>
                            <form onSubmit={handleSubmit} className="graffiti-form p-6 space-y-4">
                                <div>
                                    <label htmlFor="name" className="block mb-1">
                                        your tag
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2"
                                        placeholder="spray your name..."
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-1">
                                        leave your mark
                                    </label>
                                    <textarea
                                        id="message"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        className="w-full px-4 py-2 h-32 resize-none"
                                        placeholder="scribble something..."
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="graffiti-btn w-full py-3 rounded-md text-lg disabled:opacity-50"
                                >
                                    {loading ? "Spraying..." : "🎨 Spray It"}
                                </button>
                            </form>
                        </ScrollAnimation>

                        {/* Messages - scribbles on the wall */}
                        <div className="graffiti-scroll max-h-[500px] overflow-y-auto pr-2 space-y-3">
                            {messages.length === 0 ? (
                                <p className="graffiti-empty p-4">
                                    🧱 This wall is clean... be the first to tag it!
                                </p>
                            ) : (
                                messages.map((msg, index) => {
                                    const colorClass = `graffiti-color-${(index % GRAFFITI_COLORS) + 1}`;
                                    const rotClass = `graffiti-rot-${(index % GRAFFITI_ROTATIONS) + 1}`;

                                    return (
                                        <ScrollAnimation key={msg.id}>
                                            <div className={`graffiti-msg ${colorClass} ${rotClass}`}>
                                                {/* The scribbled message */}
                                                <p className="graffiti-text mb-2">
                                                    &ldquo;{msg.text}&rdquo;
                                                </p>
                                                {/* Signature & date */}
                                                <div className="flex justify-between items-end gap-2">
                                                    <span className="graffiti-name text-sm">
                                                        — {msg.name}
                                                    </span>
                                                    <span className="graffiti-date">
                                                        {msg.createdAt?.toDate().toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
