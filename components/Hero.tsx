import { Github, Linkedin } from "lucide-react";
import TypingText from "./TypingText";

export default function Hero() {
    return (
        <section className="py-8 md:py-12">
            <div className="space-y-6 max-w-3xl">
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        <TypingText text="Hi, I'm Ahana Kaur" />
                    </h1>

                    <p className="text-xl text-gray-300">
                        AI/ML Developer • Computer Vision Builder • Creative Technologist
                    </p>
                </div>

                <p className="text-lg text-gray-400 leading-relaxed">
                    I build practical AI systems, creative tools, and experimental products —
                    from real-time computer vision applications to geospatial deep learning
                    and educational AI platforms.
                </p>

                <div className="space-y-2 text-gray-300">
                    <p>
                        MCA student specializing in AI/ML at Bennett University
                        (CGPA 7.78, upward academic trend). My work focuses on
                        computer vision, applied machine learning, geospatial AI,
                        and product-oriented engineering.
                    </p>

                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
                        <li>
                            Built real-time vision systems, AI Tutor platforms,
                            assistive ML tools, and multiple independent desktop applications.
                        </li>

                        <li>
                            Worked on U-Net semantic segmentation for solar farm detection
                            using Sentinel-2 satellite imagery.
                        </li>

                        <li>
                            Trained and mentored Kendriya Vidyalaya STEM teachers
                            during a nationwide AI-focused CoGrad internship program.
                        </li>
                    </ul>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                        href="mailto:kaur.ahana02@gmail.com"
                        className="bg-surface hover:bg-surface-hover text-white px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg font-medium"
                    >
                        Let&apos;s collaborate
                    </a>

                    <a
                        href="https://github.com/AnnaNutzz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-3 bg-surface hover:bg-surface-hover text-gray-400 hover:text-white rounded-xl transition-all"
                    >
                        <Github size={20} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ahana-kaur-560408295/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-3 bg-surface hover:bg-surface-hover text-gray-400 hover:text-white rounded-xl transition-all"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>

                <div className="text-gray-400 text-base pt-6 border-t border-white/10 text-justify">
                    <p>
                        I enjoy building systems that sit between technology,
                        usability, and creativity. Beyond academics, I work on
                        independent ML projects, automation tools, desktop apps,
                        and experimental interfaces using Python, Flask, OpenCV,
                        TensorFlow, PyTorch, Kivy, and geospatial data workflows.
                        Outside tech, I enjoy sketching ideas, gaming, music,
                        and exploring creative design concepts.
                    </p>
                </div>
            </div>
        </section>
    );
}