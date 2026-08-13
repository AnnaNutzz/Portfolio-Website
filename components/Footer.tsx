import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-p5-surface border-t-2 border-p5-red py-12 mt-20 relative overflow-hidden">
            {/* Diagonal red stripe */}
            <div className="absolute top-0 right-0 w-64 h-full overflow-hidden pointer-events-none opacity-10">
                <div className="absolute top-0 right-0 w-[500px] h-[3px] bg-p5-red transform -rotate-45 translate-y-32" />
                <div className="absolute top-0 right-0 w-[500px] h-[2px] bg-p5-red transform -rotate-45 translate-y-48" />
                <div className="absolute top-0 right-0 w-[500px] h-[1px] bg-p5-red transform -rotate-45 translate-y-64" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                <div className="text-center md:text-left">
                    <p className="text-white font-heading tracking-wider uppercase">MADE BY AHANA KAUR — 2025</p>
                    <p className="text-p5-gray text-sm mt-1">
                        Built with Next.js, Tailwind, <span className="text-p5-red">&</span> Chaos
                    </p>
                    <p className="text-p5-gray/30 text-xs mt-2 italic">
                        "The arcana is the means by which all is revealed."
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/AnnaNutzz" target="_blank" rel="noopener noreferrer"
                        className="text-p5-gray hover:text-p5-red transition-colors p-2 border border-p5-gray-dark hover:border-p5-red">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/ahana-kaur-560408295/" target="_blank" rel="noopener noreferrer"
                        className="text-p5-gray hover:text-p5-red transition-colors p-2 border border-p5-gray-dark hover:border-p5-red">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:kaur.ahana02@gmail.com"
                        className="text-p5-gray hover:text-p5-red transition-colors p-2 border border-p5-gray-dark hover:border-p5-red">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
