"use client";

import PageTransition from "@/components/PageTransition";
import P5BattleNav from "@/components/P5BattleNav";
import P5StarChart from "@/components/P5StarChart";
import Skills from "@/components/Skills";
import P5SectionDivider from "@/components/P5SectionDivider";
import Footer from "@/components/Footer";

export default function SkillsPage() {
    return (
        <PageTransition>
            <P5BattleNav />
            <main className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12 pb-24">
                <P5StarChart />
                <P5SectionDivider variant="burst" />
                <Skills />
            </main>
            <Footer />
        </PageTransition>
    );
}
