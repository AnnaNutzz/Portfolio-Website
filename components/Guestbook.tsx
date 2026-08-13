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
        <section className="py-20" id="guestbook">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="p5-section-heading mb-12">Phan-Site Comments</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ScrollAnimation>
                        <form onSubmit={handleSubmit} className="space-y-4 p5-card rounded-none p-6 p5-corner-accents">
                            <div className="relative z-10">
                                <label htmlFor="name" className="block text-sm font-heading tracking-wider text-p5-red mb-1 uppercase">NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-p5-black border border-p5-gray-dark px-4 py-2 text-white focus:outline-none focus:border-p5-red transition-colors font-body"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div className="relative z-10">
                                <label htmlFor="message" className="block text-sm font-heading tracking-wider text-p5-red mb-1 uppercase">MESSAGE</label>
                                <textarea
                                    id="message"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    className="w-full bg-p5-black border border-p5-gray-dark px-4 py-2 text-white focus:outline-none focus:border-p5-red transition-colors h-32 resize-none font-body"
                                    placeholder="Leave a message..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-p5-red text-white font-heading tracking-wider py-3 hover:bg-red-700 transition-colors disabled:opacity-50 uppercase text-lg relative z-10"
                                style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}
                            >
                                {loading ? "SIGNING..." : "SIGN THE WALL"}
                            </button>
                        </form>
                    </ScrollAnimation>

                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 p5-scrollbar">
                        {messages.length === 0 ? (
                            <p className="text-p5-gray italic font-heading tracking-wider">Be the first to sign the wall!</p>
                        ) : (
                            messages.map((msg) => (
                                <ScrollAnimation key={msg.id}>
                                    <div className="bg-p5-surface p-4 border border-p5-gray-dark p5-left-accent pl-5 hover:border-p5-red/30 transition-colors">
                                        <p className="text-gray-300 mb-2">{msg.text}</p>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="font-heading tracking-wider text-white uppercase">{msg.name}</span>
                                            <span className="text-p5-red text-xs font-mono">
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
