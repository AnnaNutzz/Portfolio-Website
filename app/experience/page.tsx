"use client";

import PageTransition from "@/components/PageTransition";
import P5BattleNav from "@/components/P5BattleNav";
import Experience from "@/components/Experience";
import CoGrad from "@/components/CoGrad";
import P5SectionDivider from "@/components/P5SectionDivider";
import Footer from "@/components/Footer";

export default function ExperiencePage() {
    return (
        <PageTransition>
            <P5BattleNav />
            <main className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12 pb-24">
                <Experience />
                <P5SectionDivider variant="slash" />
                <CoGrad />
            </main>
            <Footer />
        </PageTransition>
    );
}
