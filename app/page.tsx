"use client";
import { useState } from "react";
import { projects as localProjects } from "@/data/projects";
import { blogs as localBlogs } from "@/data/blogs";
import Hero from "@/components/Hero";
import CurrentFocus from "@/components/CurrentFocus";
import Hardware from "@/components/Hardware";
import Timeline from "@/components/Timeline";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Snippets from "@/components/Snippets";
import Experiments from "@/components/Experiments";
import MLChallenge from "@/components/MLChallenge";
import Guestbook from "@/components/Guestbook";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Changelog from "@/components/Changelog";
import PageTransition from "@/components/PageTransition";
import CoGrad from "@/components/CoGrad";

export default function Home() {
    const [projects] = useState<any[]>(localProjects);
    const [blogs] = useState<any[]>(localBlogs);
    const [loading] = useState(false);

    return (
        <PageTransition>
            <div className="space-y-16 pb-20">
                {/* Hero Section */}
                <Hero />

                {/* Current Focus Section */}
                <CurrentFocus />

                {/* Timeline Section */}
                <Timeline />

                {/* Experience Section */}
                <Experience />

                {/* Skills Section */}
                <Skills />

                {/* CoGrad Section */}
                <CoGrad />

                {/* Projects Section */}
                <section id="projects" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold text-white">Selected Projects</h2>
                        <div className="h-px bg-gray-700 flex-1"></div>
                    </div>

                    {loading ? (
                        <div className="text-center text-gray-500">Loading projects...</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    )}
                </section>

                {/* Stats Section */}
                <Stats />

                {/* ML Challenge Section */}
                <MLChallenge />

                {/* Hardware Section */}
                <Hardware />

                {/* Snippets Section */}
                <Snippets />

                {/* Experiments Section */}
                <Experiments />

                {/* Blogs Section */}
                <section id="blogs" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold text-white">Latest Thoughts</h2>
                        <div className="h-px bg-gray-700 flex-1"></div>
                    </div>

                    {loading ? (
                        <div className="text-center text-gray-500">Loading blogs...</div>
                    ) : (
                        <div className="space-y-8">
                            {blogs.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    )}
                </section>

                {/* Guestbook Section */}
                <Guestbook />

                {/* Changelog Section */}
                <Changelog />

                {/* Footer */}
                <Footer />
            </div>
        </PageTransition>
    );
}
