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
import FloatingNav from "@/components/FloatingNav";
import P5SectionDivider from "@/components/P5SectionDivider";

export default function Home() {
    const [projects] = useState<any[]>(localProjects);
    const [blogs] = useState<any[]>(localBlogs);
    const [loading] = useState(false);

    return (
        <PageTransition>
            <FloatingNav />
            <div className="space-y-4 pb-20">
                {/* Hero Section */}
                <div id="hero" className="scroll-mt-24"><Hero /></div>

                <P5SectionDivider variant="slash" />

                {/* Current Focus Section */}
                <div id="focus" className="scroll-mt-24"><CurrentFocus /></div>

                <P5SectionDivider variant="line" />

                {/* Timeline Section */}
                <div id="timeline" className="scroll-mt-24"><Timeline /></div>

                <P5SectionDivider variant="burst" />

                {/* Experience Section */}
                <Experience />

                <P5SectionDivider variant="slash" />

                {/* Skills Section */}
                <div id="skills" className="scroll-mt-24"><Skills /></div>

                <P5SectionDivider variant="line" />

                {/* CoGrad Section */}
                <CoGrad />

                <P5SectionDivider variant="burst" />

                {/* Projects Section */}
                <section id="projects" className="scroll-mt-24">
                    <h2 className="p5-section-heading mb-8">Selected Projects</h2>

                    {loading ? (
                        <div className="text-center text-p5-gray font-heading tracking-wider">LOADING PROJECTS...</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    )}
                </section>

                <P5SectionDivider variant="slash" />

                {/* Stats Section */}
                <div id="stats" className="scroll-mt-24"><Stats /></div>

                <P5SectionDivider variant="line" />

                {/* ML Challenge Section */}
                <MLChallenge />

                <P5SectionDivider variant="burst" />

                {/* Hardware Section */}
                <div id="hardware" className="scroll-mt-24"><Hardware /></div>

                <P5SectionDivider variant="slash" />

                {/* Snippets Section */}
                <Snippets />

                <P5SectionDivider variant="line" />

                {/* Experiments Section */}
                <div id="experiments" className="scroll-mt-24"><Experiments /></div>

                <P5SectionDivider variant="burst" />

                {/* Blogs Section */}
                <section id="blogs" className="scroll-mt-24">
                    <h2 className="p5-section-heading mb-8">Latest Thoughts</h2>

                    {loading ? (
                        <div className="text-center text-p5-gray font-heading tracking-wider">LOADING BLOGS...</div>
                    ) : (
                        <div className="space-y-8">
                            {blogs.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    )}
                </section>

                <P5SectionDivider variant="slash" />

                {/* Guestbook Section */}
                <Guestbook />

                <P5SectionDivider variant="line" />

                {/* Changelog Section */}
                <Changelog />

                {/* Footer */}
                <Footer />
            </div>
        </PageTransition>
    );
}
