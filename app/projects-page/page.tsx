"use client";

import { useState } from "react";
import { projects as localProjects } from "@/data/projects";
import PageTransition from "@/components/PageTransition";
import P5BattleNav from "@/components/P5BattleNav";
import ProjectCard from "@/components/ProjectCard";
import MLChallenge from "@/components/MLChallenge";
import P5SectionDivider from "@/components/P5SectionDivider";
import ScrollAnimation from "@/components/ScrollAnimation";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
    const [projects] = useState<any[]>(localProjects);

    return (
        <PageTransition>
            <P5BattleNav />
            <main className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12 pb-24">
                <ScrollAnimation>
                    <h2 className="p5-section-heading mb-8">Selected Projects</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <P5SectionDivider variant="burst" />
                <MLChallenge />
            </main>
            <Footer />
        </PageTransition>
    );
}
