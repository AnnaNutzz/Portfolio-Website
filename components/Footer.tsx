import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-border py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-gray-400 font-medium">Made by me 2025</p>
                    <p className="text-gray-600 text-sm mt-1">Built with Next.js, Tailwind, & Chaos</p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/AnnaNutzz" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/ahana-kaur-560408295/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:kaur.ahana02@gmail.com" className="text-gray-500 hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
