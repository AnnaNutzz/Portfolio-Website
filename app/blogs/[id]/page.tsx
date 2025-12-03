"use client";
import { useEffect, useState } from "react";
import { blogs } from "@/data/blogs";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function BlogDetail() {
    const { id } = useParams();
    const router = useRouter();
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        const foundBlog = blogs.find(b => b.id === id);
        if (foundBlog) {
            setBlog(foundBlog);
        }
        setLoading(false);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Loading...
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Blog post not found.
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="py-8 md:py-12">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary mb-8 transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Thoughts
                </button>

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">{blog.title}</h1>
                    <div className="flex items-center gap-6 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>5 min read</span>
                        </div>
                    </div>
                </div>

                {/* Media Section */}
                <div className="relative w-full h-[300px] md:h-[500px] bg-black/20 rounded-2xl overflow-hidden mb-12 border border-white/5 shadow-lg">
                    {blog.videoUrl ? (
                        <video
                            src={blog.videoUrl}
                            className="w-full h-full object-cover"
                            controls
                            muted
                            loop
                        />
                    ) : (
                        <Image
                            src={blog.imageUrl}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none mb-12 prose-headings:text-white prose-a:text-primary prose-strong:text-white prose-code:text-pink-300 prose-pre:bg-black/30 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl">
                    <ReactMarkdown>{blog.content}</ReactMarkdown>
                </div>

                {/* Code Snippet */}
                {blog.codeSnippet && (
                    <div className="mb-12">
                        <div className="bg-[#1e1e20] rounded-xl p-6 border border-white/5 overflow-x-auto shadow-inner">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <pre className="text-sm text-pink-300 font-mono">
                                <code>{blog.codeSnippet}</code>
                            </pre>
                        </div>
                    </div>
                )}
            </div>
        </PageTransition>
    );
}
