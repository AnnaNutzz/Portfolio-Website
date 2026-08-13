import { Github, Linkedin } from "lucide-react";
import TypingText from "./TypingText";

export default function Hero() {
    return (
        <section className="py-8 md:py-12 relative">
            {/* Subtle diagonal stripe bg for hero area */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, #FF0000 20px, #FF0000 21px)',
                }}
            />

            <div className="relative z-10 space-y-6 max-w-3xl">
                <div className="space-y-3">
                    {/* P5 "Take Your Heart" calling card style name */}
                    <h1 className="text-4xl md:text-6xl font-heading tracking-wider text-white leading-tight">
                        <TypingText text="AHANA KAUR" />
                    </h1>
                    <p className="text-xl text-p5-red font-heading tracking-widest uppercase">
                        AI/ML Developer <span className="text-p5-yellow">&</span> Creative Coder
                    </p>
                </div>

                <p className="text-lg text-p5-gray leading-relaxed">
                    I build compact, usable ML systems and creative apps — from real-time vision prototypes to automation tools that actually help me get things done.
                </p>

                <div className="space-y-2 text-gray-300">
                    <p>Postgraduate AI/ML student at Bennett University (current CGPA 7.75). Focused on real-time computer vision (capstone), generative/assistive products, and independent ML systems engineering.</p>
                    <ul className="text-p5-gray space-y-1 ml-2">
                        <li className="flex items-start gap-2">
                            <span className="text-p5-red mt-1.5 text-xs">▸</span>
                            <span><strong className="text-white">Capstone & coursework:</strong> delivered a real-time vision capstone and a full AI Tutor product in university subjects.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-p5-red mt-1.5 text-xs">▸</span>
                            <span><strong className="text-white">Independent engineering:</strong> build, train and productionize ML systems on my own.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-p5-red mt-1.5 text-xs">▸</span>
                            <span><strong className="text-white">Product-first maker:</strong> many small apps and Kivy/Tkinter projects that solve everyday problems.</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                        href="mailto:kaur.ahana02@gmail.com"
                        className="bg-p5-red hover:bg-red-700 text-white px-6 py-3 font-heading tracking-wider text-lg transition-all shadow-md hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] p5-clip-button inline-block"
                    >
                        LET'S COLLABORATE
                    </a>
                    <a href="https://github.com/AnnaNutzz" target="_blank" rel="noopener noreferrer"
                        className="p-3 border border-p5-gray-dark text-p5-gray hover:text-p5-red hover:border-p5-red transition-all">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/ahana-kaur-560408295/" target="_blank" rel="noopener noreferrer"
                        className="p-3 border border-p5-gray-dark text-p5-gray hover:text-p5-red hover:border-p5-red transition-all">
                        <Linkedin size={20} />
                    </a>
                </div>

                <div className="text-p5-gray text-base pt-6 border-t border-p5-red/20 text-justify p5-left-accent pl-4">
                    <p>
                        I'm an AI/ML practitioner-in-training who prefers building working systems over theoretical-only work. At Bennett University I've completed a real-time vision capstone (specialization project) and an AI Tutor product as part of course work, while independently designing and shipping ML systems and numerous Kivy/Tkinter apps. I enjoy turning small ideas into practical tools — and when I'm not coding I write ideas, play video games, draw and listen to music.
                    </p>
                </div>
            </div>
        </section>
    );
}
