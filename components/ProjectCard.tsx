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
            whileHover={{ rotate: -0.5, y: -5 }}
            className="group flex flex-col h-full p5-card rounded-none overflow-hidden"
        >
            {/* Media Section */}
            <div className="relative h-48 w-full overflow-hidden bg-black/40">
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
                            <>
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Red diagonal overlay line */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none opacity-60">
                                    <div className="absolute top-0 right-0 w-24 h-[2px] bg-p5-red transform rotate-45 translate-y-6 -translate-x-2" />
                                </div>
                            </>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-p5-gray font-heading tracking-wider">
                                NO IMAGE
                            </div>
                        )}
                    </Link>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-2">
                    <Link href={`/projects/${project.id}`} className="block">
                        <h3 className="text-xl font-heading tracking-wider text-white group-hover:text-p5-red transition-colors uppercase">
                            {project.title}
                        </h3>
                    </Link>
                    <div className="flex gap-2">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-p5-gray hover:text-p5-red transition-colors"
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
                                className="text-p5-gray hover:text-p5-red transition-colors"
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
                        <span key={tag}
                            className="px-2 py-1 bg-p5-red/10 text-p5-red text-xs font-heading tracking-wider border border-p5-red/20"
                            style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}>
                            #{tag}
                        </span>
                    ))}
                    {project.tags && project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-p5-gray-dark/50 text-p5-gray text-xs font-heading tracking-wider">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>

                <div className="text-p5-gray text-sm line-clamp-3 mb-4 flex-1">
                    <ReactMarkdown components={{
                        p: ({ node, ...props }) => <p {...props} className="mb-2" />
                    }}>
                        {project.description}
                    </ReactMarkdown>
                </div>

                <Link
                    href={`/projects/${project.id}`}
                    className="mt-auto w-full py-2 bg-p5-red/10 hover:bg-p5-red text-center text-sm text-p5-red hover:text-white transition-all font-heading tracking-wider uppercase"
                    style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}
                >
                    VIEW DETAILS
                </Link>
            </div>
        </motion.div>
    );
}
