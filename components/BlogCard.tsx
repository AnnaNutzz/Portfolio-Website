"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogProps {
    id: string;
    title: string;
    content: string;
    codeSnippet: string;
    imageUrl: string;
    videoUrl?: string;
    date: string;
}

export default function BlogCard({ blog }: { blog: BlogProps }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group flex flex-col md:flex-row p5-card rounded-none overflow-hidden"
        >
            {/* Media Section */}
            <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <Link href={`/blogs/${blog.id}`} className="block w-full h-full">
                    {blog.imageUrl ? (
                        <>
                            <Image
                                src={blog.imageUrl}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Red tint overlay on hover */}
                            <div className="absolute inset-0 bg-p5-red/0 group-hover:bg-p5-red/10 transition-colors duration-300" />
                        </>
                    ) : (
                        <div className="w-full h-full bg-black/40 flex items-center justify-center text-p5-gray font-heading tracking-wider">
                            NO IMAGE
                        </div>
                    )}
                </Link>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col relative z-10">
                <div className="flex items-center gap-4 text-xs text-p5-gray mb-3">
                    <div className="flex items-center gap-1 bg-p5-red/10 text-p5-red px-2 py-1 font-heading tracking-wider">
                        <Calendar size={14} />
                        <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    {/* Placeholder for read time if available in future */}
                    <div className="flex items-center gap-1 font-heading tracking-wider">
                        <Clock size={14} />
                        <span>5 MIN READ</span>
                    </div>
                </div>

                <Link href={`/blogs/${blog.id}`} className="block mb-3">
                    <h3 className="text-xl font-heading tracking-wider text-white group-hover:text-p5-red transition-colors line-clamp-2 uppercase">
                        {blog.title}
                    </h3>
                </Link>

                <div className="text-p5-gray text-sm line-clamp-3 mb-4 flex-1 prose prose-invert max-w-none">
                    <ReactMarkdown components={{
                        p: ({ node, ...props }) => <p {...props} className="mb-0" />
                    }}>
                        {blog.content}
                    </ReactMarkdown>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-p5-gray-dark">
                    <Link
                        href={`/blogs/${blog.id}`}
                        className="flex items-center gap-2 text-sm font-heading tracking-wider text-p5-red hover:text-white transition-colors uppercase"
                    >
                        READ ARTICLE <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
