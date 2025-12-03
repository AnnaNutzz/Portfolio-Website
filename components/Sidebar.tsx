"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Folder, BookOpen, FileText, Settings, Menu, X, Github, Mail } from "lucide-react";
import SpriteAnimation from "./SpriteAnimation";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/#projects", icon: Folder },
    { name: "Blogs", href: "/#blogs", icon: BookOpen },
    { name: "Resume", href: "/resume", icon: FileText },
    { name: "Admin", href: "/admin", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="fixed top-4 right-4 z-50 p-2 bg-surface rounded-md md:hidden text-white hover:bg-surface-hover transition-colors"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Container */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-40 w-72 bg-[#1e1e20] text-gray-300 transform transition-transform duration-300 ease-in-out
                    md:translate-x-0 md:static md:h-screen md:sticky md:top-0
                    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <div className="h-full flex flex-col overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-surface scrollbar-track-transparent">
                    {/* Profile Section */}
                    <div className="flex flex-col items-center text-center mb-8">
                        <div className="relative w-48 h-48 mb-4 bg-surface/20 rounded-full overflow-hidden">
                            <SpriteAnimation displaySize={192} className="opacity-90 hover:opacity-100 transition-opacity" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Ahana Kaur</h1>
                        <p className="text-sm text-gray-400 mb-4">
                            Aspiring AI/ML Developer & Creative Coder
                        </p>
                        <div className="flex gap-4">
                            <a href="mailto:kaur.ahana02@gmail.com" className="p-2 bg-surface/50 rounded-full hover:bg-surface hover:text-white transition-colors">
                                <Mail size={18} />
                            </a>
                            {/* Add more socials here if needed */}
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                                        ${isActive
                                            ? "bg-surface text-white shadow-md"
                                            : "hover:bg-white/5 hover:text-white"
                                        }
                                    `}
                                >
                                    <item.icon size={20} />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-white/10 text-xs text-center text-gray-500">
                        <p>© {new Date().getFullYear()} Ahana Kaur</p>
                        <p className="mt-1">Built with Next.js & Fuwari</p>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
}
