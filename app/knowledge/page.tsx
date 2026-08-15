"use client";

import PageTransition from "@/components/PageTransition";
import P5BattleNav from "@/components/P5BattleNav";
import Snippets from "@/components/Snippets";
import Experiments from "@/components/Experiments";
import P5SectionDivider from "@/components/P5SectionDivider";
import Footer from "@/components/Footer";

export default function KnowledgePage() {
    return (
        <PageTransition>
            <P5BattleNav />
            <main className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12 pb-24">
                <Snippets />
                <P5SectionDivider variant="burst" />
                <Experiments />
            </main>
            <Footer />
        </PageTransition>
    );
}
