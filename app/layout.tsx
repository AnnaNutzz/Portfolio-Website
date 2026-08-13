import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
    title: "Ahana Kaur | Portfolio",
    description: "AI/ML Developer & Creative Coder — Take Your Heart",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className="bg-background text-foreground min-h-screen flex flex-col md:flex-row font-body relative">
                {/* P5 subtle diagonal stripe overlay */}
                <div className="fixed inset-0 p5-stripe-bg pointer-events-none z-0" />

                <Sidebar />
                <main className="flex-1 min-w-0 transition-all duration-300 relative z-10">
                    <div className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
