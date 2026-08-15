import type { Metadata } from "next";
import "./globals.css";

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
            <body className="bg-background text-foreground min-h-screen font-body relative overflow-x-hidden">
                {/* P5 subtle diagonal stripe overlay */}
                <div className="fixed inset-0 p5-stripe-bg pointer-events-none z-0" />

                {/* Full-width content — no sidebar */}
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
