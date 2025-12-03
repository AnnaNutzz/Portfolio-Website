"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectProps {
    id: string;
    title: string;
    description: string;
    codeSnippet: string;
    imageUrl: string;
    videoUrl?: string;
    demoUrl?: string;
    githubUrl?: string;
    tags?: string[];
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group flex flex-col h-full bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/5"
        >
            {/* Media Section */}
            <div className="relative h-48 w-full overflow-hidden bg-black/20">
                {project.videoUrl ? (
                    <video
                        src={project.videoUrl}
                        className="w-full h-full object-cover"
                        controls
                        muted
                        loop
                    />
                ) : (
                    <Link href={`/projects/${project.id}`} className="block w-full h-full">
                        {project.imageUrl ? (
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                                No Image
                            </div>
                        )}
                    </Link>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <Link href={`/projects/${project.id}`} className="block">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                    </Link>
                    <div className="flex gap-2">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                title="View Code"
                            >
                                <Github size={18} />
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                title="View Demo"
                            >
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md font-medium">
                            #{tag}
                        </span>
                    ))}
                    {project.tags && project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>

                <div className="text-gray-400 text-sm line-clamp-3 mb-4 flex-1">
                    <ReactMarkdown components={{
                        p: ({ node, ...props }) => <p {...props} className="mb-2" />
                    }}>
                        {project.description}
                    </ReactMarkdown>
                </div>

                <Link
                    href={`/projects/${project.id}`}
                    className="mt-auto w-full py-2 bg-white/5 hover:bg-white/10 text-center rounded-lg text-sm text-gray-300 transition-colors"
                >
                    View Details
                </Link>
            </div>
        </motion.div>
    );
}
