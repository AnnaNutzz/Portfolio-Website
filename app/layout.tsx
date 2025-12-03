import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
    title: "My Portfolio",
    description: "Showcase of my projects and blogs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className="bg-background text-foreground min-h-screen flex flex-col md:flex-row">
                <Sidebar />
                <main className="flex-1 min-w-0 transition-all duration-300">
                    <div className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
