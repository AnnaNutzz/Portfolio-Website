"use client";

import PageTransition from "@/components/PageTransition";
import P5BattleNav from "@/components/P5BattleNav";
import Stats from "@/components/Stats";
import Hardware from "@/components/Hardware";
import P5SectionDivider from "@/components/P5SectionDivider";
import Footer from "@/components/Footer";

export default function StatsPage() {
    return (
        <PageTransition>
            <P5BattleNav />
            <main className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12 pb-24">
                <Stats />
                <P5SectionDivider variant="slash" />
                <Hardware />
            </main>
            <Footer />
        </PageTransition>
    );
}
