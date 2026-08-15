"use client";

import PageTransition from "@/components/PageTransition";
import P5BattleNav from "@/components/P5BattleNav";
import Hero from "@/components/Hero";
import CurrentFocus from "@/components/CurrentFocus";
import Timeline from "@/components/Timeline";
import P5SectionDivider from "@/components/P5SectionDivider";
import Footer from "@/components/Footer";

export default function PersonaPage() {
    return (
        <PageTransition>
            <P5BattleNav />
            <main className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12 pb-24">
                <Hero />
                <P5SectionDivider variant="slash" />
                <CurrentFocus />
                <P5SectionDivider variant="line" />
                <Timeline />
            </main>
            <Footer />
        </PageTransition>
    );
}
