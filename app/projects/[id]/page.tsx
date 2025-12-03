"use client";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { Github, ArrowLeft, ExternalLink } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function ProjectDetail() {
    const { id } = useParams();
    const router = useRouter();
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        const foundProject = projects.find(p => p.id === id);
        if (foundProject) {
            setProject(foundProject);
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

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Project not found.
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
                    Back to Projects
                </button>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{project.title}</h1>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags?.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-surface border border-white/5 text-gray-300 text-sm rounded-xl">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Media Gallery */}
                <div className="space-y-6 mb-10">
                    {/* Videos */}
                    {(project.videos && project.videos.length > 0) || project.videoUrl ? (
                        <div className="grid grid-cols-1 gap-6">
                            {project.videos?.map((video: string, index: number) => (
                                <div key={`video-${index}`} className="relative w-full h-[400px] bg-black/20 rounded-2xl overflow-hidden border border-white/5 shadow-lg">
                                    <video
                                        src={video}
                                        className="w-full h-full object-cover"
                                        controls
                                        muted
                                        loop
                                    />
                                </div>
                            ))}
                            {(!project.videos || project.videos.length === 0) && project.videoUrl && (
                                <div className="relative w-full h-[400px] bg-black/20 rounded-2xl overflow-hidden border border-white/5 shadow-lg">
                                    <video
                                        src={project.videoUrl}
                                        className="w-full h-full object-cover"
                                        controls
                                        muted
                                        loop
                                    />
                                </div>
                            )}
                        </div>
                    ) : null}

                    {/* Images */}
                    {(project.images && project.images.length > 0) || project.imageUrl ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.images?.map((img: string, index: number) => (
                                <div key={`img-${index}`} className="relative w-full h-[300px] bg-black/20 rounded-2xl overflow-hidden border border-white/5 shadow-lg transition-transform hover:scale-[1.02]">
                                    <Image
                                        src={img}
                                        alt={`${project.title} ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                            {(!project.images || project.images.length === 0) && project.imageUrl && (
                                <div className="relative w-full h-[400px] bg-black/20 rounded-2xl overflow-hidden border border-white/5 shadow-lg">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mb-10">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <ExternalLink size={20} />
                            View Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-surface hover:bg-surface-hover text-white font-medium py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Github size={20} />
                            View Code
                        </a>
                    )}
                </div>

                {/* Description / Content */}
                <div className="prose prose-invert max-w-none mb-12 prose-headings:text-white prose-a:text-primary prose-strong:text-white prose-code:text-pink-300 prose-pre:bg-black/30 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {(project.content || project.description || "").replace(/^[ \t]+/gm, (match: string) => {
                            return match.length >= 12 ? match.slice(12) : "";
                        })}
                    </ReactMarkdown>
                </div>

                {/* Code Snippet */}
                {project.codeSnippet && (
                    <div className="mb-12">
                        <h3 className="text-xl font-bold mb-4 text-white">Key Implementation</h3>
                        <div className="bg-[#1e1e20] rounded-xl p-6 border border-white/5 overflow-x-auto shadow-inner">
                            <pre className="text-sm text-pink-300 font-mono">
                                <code>{project.codeSnippet}</code>
                            </pre>
                        </div>
                    </div>
                )}
            </div>
        </PageTransition>
    );
}
