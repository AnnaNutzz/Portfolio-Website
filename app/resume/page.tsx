import Link from "next/link";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";

export default function Resume() {
    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-surface p-8 md:p-12 rounded-xl shadow-2xl border border-border">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 border-b border-gray-700 pb-8">
                    <div>
                        <h1 className="text-5xl font-bold text-white mb-4">Ahana Kaur</h1>
                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm md:text-base">
                            <a href="mailto:kaur.ahana02@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Mail className="w-4 h-4" /> kaur.ahana02@gmail.com
                            </a>
                            <span className="hidden md:inline">|</span>
                            <span className="flex items-center gap-2">
                                <Phone className="w-4 h-4" /> 9679550477
                            </span>
                            <span className="hidden md:inline">|</span>
                            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Linkedin className="w-4 h-4" /> https://www.linkedin.com/in/ahana-kaur-560408295/
                            </a>
                            <span className="hidden md:inline">|</span>
                            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Github className="w-4 h-4" /> https://github.com/AnnaNutzz
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="/resume.docx"
                            download
                            className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
                        >
                            <Download className="w-4 h-4" /> Download Resume
                        </a>
                        <Link
                            href="/"
                            className="bg-gray-800 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>

                <div className="space-y-12">
                    {/* Objective */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Objective</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Aspiring Machine Learning Engineer with hands-on experience in NLP, computer vision, and real-time emotion and gesture recognition systems. Seeking a Machine Learning Internship to contribute to data-driven model development, preprocessing pipelines, and research applications.
                        </p>
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">Education</h2>
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white">Bennett University (Greater Noida, India)</h3>
                                    <span className="text-gray-400 font-mono">2024 – 2026</span>
                                </div>
                                <p className="text-gray-300 font-medium">Master of Computer Applications (MCA)</p>
                                <p className="text-gray-400 text-sm mt-1">Relevant Coursework: Statistical Machine Learning, Deep Learning, NLP, Image & Video Processing</p>
                            </div>
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white">Presidency University (Bangalore, India)</h3>
                                    <span className="text-gray-400 font-mono">2021 – 2024</span>
                                </div>
                                <p className="text-gray-300 font-medium">Bachelor of Computer Applications (BCA)</p>
                                <p className="text-gray-400 text-sm mt-1">Relevant Coursework: Machine Learning, DSA, Programming in Python/C</p>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-2">Languages</h3>
                                <p className="text-gray-400">Python</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-2">ML Tools & Libraries</h3>
                                <p className="text-gray-400">PyTorch, TensorFlow, Hugging Face, OpenCV, NLTK, SymSpell</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-2">Concepts</h3>
                                <p className="text-gray-400">CNNs, Transformers, Data Preprocessing, Model Evaluation, POS Tagging</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-2">Frameworks</h3>
                                <p className="text-gray-400">ESPnet, Torchaudio, Flask, SQLite</p>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="text-lg font-semibold text-gray-200 mb-2">Other Tools</h3>
                                <p className="text-gray-400">Git, Google Colab, Discord API</p>
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">Projects</h2>
                        <div className="space-y-10">
                            <ProjectItem
                                title="AI Tutor / Educational Assistant"
                                tech="Python, Hugging Face Transformers, Flask"
                                points={[
                                    "Integrated BART-based summarization to generate revision content from PDFs/images.",
                                    "Tracks learning styles and exports DOCX study material with SQLite-backed user profiles."
                                ]}
                            />
                            <ProjectItem
                                title="Real-Time Emotion Detection"
                                tech="Python, TensorFlow, OpenCV"
                                points={[
                                    "Implemented a CNN-based model to classify facial emotions in real time using webcam input.",
                                    "Logs predictions every 5 seconds; applicable to mental health use cases."
                                ]}
                            />
                            <ProjectItem
                                title="ASL Gesture Recognition"
                                tech="Python, TensorFlow, MediaPipe"
                                points={[
                                    "Trained a CNN on static ASL gestures; used MediaPipe for hand detection and real-time classification.",
                                    "Displayed live sign output for accessibility-focused applications."
                                ]}
                            />
                            <ProjectItem
                                title="English to Hindi Neural Translator"
                                tech="Hugging Face Transformers, MarianMT, PyTorch"
                                points={[
                                    "Built a real-time English-to-Hindi translator using Helsinki-NLP’s MarianMT model.",
                                    "Implemented full tokenization, encoder-decoder pipeline, and output visualization."
                                ]}
                            />
                            <ProjectItem
                                title="End-to-End MLOps Pipeline"
                                tech="Jenkins, Docker, Python, FastAPI, Scikit-learn"
                                points={[
                                    "Engineered a complete CI/CD pipeline with Jenkins to automate the build, testing, and deployment of a machine learning API.",
                                    "Developed a Dockerized FastAPI application to serve a trained scikit-learn model, ensuring a consistent and reproducible production environment.",
                                    "Integrated pytest for automated API testing, which is triggered by every code change to maintain application quality and prevent regressions."
                                ]}
                            />
                            <ProjectItem
                                title="50 Days, 50 Projects – Self-Initiated Coding Challenge"
                                tech="20/50 Projects Completed | Python, Automation, GUI, AI/NLP"
                                points={[
                                    "Built 20+ mini-projects across domains including Python automation, GUI apps (Tkinter, Kivy), CLI tools, and AI/NLP applications.",
                                    "Tic Tac Toe (Minimax AI): Implemented adversarial search and heuristics for unbeatable AI opponent",
                                    "Text Normalizer (NLP): Designed a complete preprocessing pipeline (spell correction, POS tagging, lemmatization)",
                                    "Auto File Sorter: Built a real-time file system organizer using Python’s Watchdog module",
                                    "EN→HI Neural Translator: Integrated MarianMT (Hugging Face) for multilingual translation",
                                    "Excel Filter Tool: Created a Pandas-based research/project selector for academic use",
                                    "Practiced software design, modular coding, documentation, and UI/UX for solo and collaborative-ready projects",
                                    "GitHub repo includes fully functional code, README documentation, and problem statements"
                                ]}
                            />
                            <ProjectItem
                                title="AI-Powered Meeting Transcriptor and Summarizer"
                                tech="Whisper, Pyannote, Transformers, TorchAudio, ffmpeg"
                                points={[
                                    "Developed a command-line speech processing pipeline that performs transcription, speaker diarization, and summarization on meeting audio.",
                                    "Leveraged OpenAI Whisper for multilingual speech-to-text and Pyannote for precise speaker segmentation and timestamp alignment.",
                                    "Applied audio preprocessing techniques (denoising, silence removal, chunking) to enhance model accuracy and efficiency.",
                                    "Automated summary generation using Transformer-based models for concise, context-aware meeting notes."
                                ]}
                            />
                            <ProjectItem
                                title="NLP Text Processing Pipeline"
                                tech="Python, NLTK, SymSpell, WordNet, PDFPlumber"
                                points={[
                                    "Built a robust multilingual pipeline with spell correction, slang normalization, and lemmatization.",
                                    "Extended WordNet synsets to enhance text normalization for speech processing."
                                ]}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function ProjectItem({ title, tech, points }: { title: string, tech: string, points: string[] }) {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <span className="text-gray-400 text-sm font-mono mt-1 md:mt-0">{tech}</span>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                {points.map((point, index) => (
                    <li key={index} className="leading-relaxed">{point}</li>
                ))}
            </ul>
        </div>
    );
}
