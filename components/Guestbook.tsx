"use client";
import { useState, useEffect } from "react";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ScrollAnimation from "./ScrollAnimation";

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
        <section className="py-20 bg-surface/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
                        <span className="w-8 h-1 bg-gray-600 rounded-full"></span>
                        Sign the Wall
                    </h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ScrollAnimation>
                        <form onSubmit={handleSubmit} className="space-y-4 bg-surface p-6 rounded-xl border border-border">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-background border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    className="w-full bg-background border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-white transition-colors h-32 resize-none"
                                    placeholder="Leave a message..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black font-bold py-2 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50"
                            >
                                {loading ? "Signing..." : "Sign"}
                            </button>
                        </form>
                    </ScrollAnimation>

                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {messages.length === 0 ? (
                            <p className="text-gray-500 italic">Be the first to sign the wall!</p>
                        ) : (
                            messages.map((msg) => (
                                <ScrollAnimation key={msg.id}>
                                    <div className="bg-surface p-4 rounded-lg border border-border">
                                        <p className="text-gray-300 mb-2">{msg.text}</p>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="font-bold text-white">{msg.name}</span>
                                            <span className="text-gray-500">
                                                {msg.createdAt?.toDate().toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
