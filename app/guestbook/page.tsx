"use client";

import PageTransition from "@/components/PageTransition";
import P5BattleNav from "@/components/P5BattleNav";
import CurrentFocus from "@/components/CurrentFocus";
import Guestbook from "@/components/Guestbook";
import P5SectionDivider from "@/components/P5SectionDivider";
import Footer from "@/components/Footer";

export default function GuestbookPage() {
    return (
        <PageTransition>
            <P5BattleNav />
            <main className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12 pb-24">
                <CurrentFocus />
                <P5SectionDivider variant="slash" />
                <Guestbook />
            </main>
            <Footer />
        </PageTransition>
    );
}
