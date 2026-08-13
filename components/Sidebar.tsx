"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Folder, BookOpen, FileText, Settings, Menu, X, Github, Mail, Linkedin, Briefcase } from "lucide-react";
import SpriteAnimation from "./SpriteAnimation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Experience", href: "/#experience", icon: Briefcase },
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
            {/* Mobile Menu Button — Angular P5 style */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="fixed top-4 right-4 z-50 p-2 bg-p5-red text-white md:hidden hover:bg-red-700 transition-colors"
                style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Container */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-40 w-72 bg-p5-black text-white transform transition-transform duration-300 ease-in-out
                    md:translate-x-0 md:static md:h-screen md:sticky md:top-0
                    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
                    border-r-2 border-p5-red
                `}
            >
                <div className="h-full flex flex-col overflow-y-auto p-6 p5-scrollbar">
                    {/* Profile Section */}
                    <div className="flex flex-col items-center text-center mb-8">
                        <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden border-2 border-p5-red hover:animate-p5-glow transition-all group">
                            <SpriteAnimation displaySize={192} className="opacity-90 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h1 className="text-2xl font-heading tracking-wider text-white mb-1">AHANA KAUR</h1>
                        <p className="text-sm text-p5-gray mb-4">
                            AI/ML Developer & Creative Coder
                        </p>
                        <div className="flex gap-3">
                            <a href="mailto:kaur.ahana02@gmail.com" className="p-2 border border-p5-gray-dark hover:border-p5-red hover:text-p5-red text-p5-gray transition-all">
                                <Mail size={18} />
                            </a>
                            <a href="https://github.com/AnnaNutzz" target="_blank" rel="noopener noreferrer" className="p-2 border border-p5-gray-dark hover:border-p5-red hover:text-p5-red text-p5-gray transition-all">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/ahana-kaur-560408295/" target="_blank" rel="noopener noreferrer" className="p-2 border border-p5-gray-dark hover:border-p5-red hover:text-p5-red text-p5-gray transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Red divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-p5-red to-transparent mb-6" />

                    {/* Navigation — P5 Menu Style */}
                    <nav className="flex-1 space-y-1">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 transition-all duration-200 relative group
                                        hover:skew-x-[-2deg] hover:translate-x-1
                                        ${isActive
                                            ? "bg-p5-red text-white font-bold"
                                            : "text-p5-gray hover:text-white hover:bg-white/5"
                                        }
                                    `}
                                    style={isActive ? { clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' } : undefined}
                                >
                                    {/* Active red arrow indicator */}
                                    {isActive && (
                                        <span className="absolute -left-1 top-1/2 -translate-y-1/2 text-p5-red text-lg">▸</span>
                                    )}
                                    <item.icon size={20} />
                                    <span className="font-heading tracking-wider text-lg">{item.name.toUpperCase()}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-p5-gray-dark text-xs text-center text-p5-gray">
                        <p>© {new Date().getFullYear()} Ahana Kaur</p>
                        <p className="mt-1 text-p5-gray/50">You'll never see it coming.</p>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile — P5 dark overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-30 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
