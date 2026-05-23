import Link from "next/link";
import { Mail, Phone, Linkedin, Github, Download, FileText } from "lucide-react";

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
                            <a href="https://www.linkedin.com/in/ahana-kaur-560408295/" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Linkedin className="w-4 h-4" /> LinkedIn
                            </a>
                            <span className="hidden md:inline">|</span>
                            <a href="https://github.com/AnnaNutzz" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Github className="w-4 h-4" /> GitHub
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-4">
                            <a
                                href="/Resume-8-may.pdf"
                                download
                                className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
                            >
                                <Download className="w-4 h-4" /> Download PDF
                            </a>
                            <a
                                href="/Resume-8-may.docx"
                                download
                                className="flex items-center gap-2 bg-gray-700 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-600 transition-colors"
                            >
                                <FileText className="w-4 h-4" /> Download DOCX
                            </a>
                        </div>
                        <Link
                            href="/"
                            className="bg-gray-800 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors text-center"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>

                <div className="space-y-12">
                    {/* Professional Summary */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Professional Summary</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Python developer and ML engineer specializing in computer vision, geospatial AI, and deployable inference systems. Built end-to-end pipelines spanning satellite imagery analysis, semantic segmentation, NLP, and offline AI applications – from prototype through deployment. Comfortable operating across the full stack: data pipelines, model training, REST APIs, and real-world constraints. Fast learner who ships.
                        </p>
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">Education</h2>
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white">Bennett University (Greater Noida, India)</h3>
                                    <span className="text-gray-400 font-mono">Aug 2024 – June 2026</span>
                                </div>
                                <p className="text-gray-300 font-medium">Master of Computer Applications (MCA) – Currently 4th Semester</p>
                                <p className="text-gray-400 text-sm mt-1">Relevant Coursework: Statistical Machine Learning, Deep Learning, NLP, Soft Computing, Image & Video Processing</p>
                            </div>
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white">Presidency University (Bangalore, India)</h3>
                                    <span className="text-gray-400 font-mono">Oct 2021 – May 2024</span>
                                </div>
                                <p className="text-gray-300 font-medium">Bachelor of Computer Applications (BCA)</p>
                                <p className="text-gray-400 text-sm mt-1">Relevant Coursework: Machine Learning, Data Structures & Algorithms, Programming in Python/C</p>
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">Experience</h2>
                        <div className="space-y-10">
                            <div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-white">CoGrad (in partnership with IIT Delhi – IHFC)</h3>
                                    <span className="text-gray-400 text-sm font-mono mt-1 md:mt-0">Mar 2026 – May 2026</span>
                                </div>
                                <p className="text-purple-400 font-medium mb-3">AI Trainer Intern | India, On-site</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-1.5 leading-relaxed">
                                    <li>Delivered AI/ML training on the KVS-IHFC STEM Teacher Training Programme – a national upskilling initiative for Kendriya Vidyalaya teachers.</li>
                                    <li>Led end-to-end delivery of 4 training cohorts, covering AI/ML concepts, prompt engineering, and deployment tools (NotebookLM, Gamma, Prezi, agentic IDEs); handled on-ground technical troubleshooting.</li>
                                    <li>Coordinated participant groups, tracked attendance, and authored cohort completion reports across multiple venue deployments across India.</li>
                                </ul>
                            </div>
                            
                            <div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-white">GJ Map Solutions Pvt. Ltd.</h3>
                                    <span className="text-gray-400 text-sm font-mono mt-1 md:mt-0">Feb 2026 – Apr 2026</span>
                                </div>
                                <p className="text-purple-400 font-medium mb-3">Python Developer Intern – Geospatial AI & Computer Vision | Remote</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-1.5 leading-relaxed">
                                    <li>Analyzed Sentinel-2 satellite imagery for land-use/land-cover (LULC) classification; processed high-resolution aerial and drone imagery for geospatial mapping workflows.</li>
                                    <li>Built and trained CV models for road detection, tree segmentation, and ship detection in coastal imagery using YOLO and U-Net.</li>
                                    <li>Developed ML classification pipelines for terrain recognition from aerial imagery; handled dataset preprocessing, annotation, and feature extraction.</li>
                                    <li>Executed spatial analysis and visualization in ArcGIS and QGIS, including 360° imagery processing and mobile image geotagging workflows.</li>
                                    <li>Scripted geospatial ML tooling in Python (Rasterio, Shapely, PyProj, OpenCV, PyTorch) – from requirement analysis through prototype delivery.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-white">Tata Group (via Forage)</h3>
                                    <span className="text-gray-400 text-sm font-mono mt-1 md:mt-0">Dec 2025</span>
                                </div>
                                <p className="text-purple-400 font-medium mb-3">Data Analytics Job Simulation | Remote</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-1.5 leading-relaxed">
                                    <li>Applied GenAI-assisted EDA to assess data quality and surface customer risk indicators across a large dataset.</li>
                                    <li>Designed a no-code predictive delinquency risk framework and AI-driven collections strategy, incorporating ethical AI and regulatory compliance considerations.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">Technical Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-2">Core Languages</h3>
                                <p className="text-gray-400">Python, SQL (MySQL, SQLite)</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-2">Machine Learning & AI</h3>
                                <p className="text-gray-400">Scikit-learn, TensorFlow, Keras, PyTorch, Hugging Face Transformers, NLP (NLTK, spaCy), Whisper, Pyannote, LLM Inference, Prompt Engineering</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-2">Computer Vision</h3>
                                <p className="text-gray-400">OpenCV, CNNs, Object Detection (YOLO), Segmentation (U-Net), Real-Time Video Processing, MediaPipe, Image Augmentation</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-2">Geospatial & Remote Sensing</h3>
                                <p className="text-gray-400">Rasterio, Shapely, PyProj, ArcGIS, QGIS, Sentinel-2 Processing, LULC Classification, OSM Road Extraction, Drone Image Analysis</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-2">Data & Visualization</h3>
                                <p className="text-gray-400">Pandas, NumPy, Matplotlib, Seaborn, Feature Engineering, Statistical Analysis</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-2">Web & APIs</h3>
                                <p className="text-gray-400">Flask, FastAPI, REST API Development, Firebase, Kivy, Tkinter</p>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="text-lg font-semibold text-gray-200 mb-2">MLOps & Tools</h3>
                                <p className="text-gray-400">Git & GitHub, Docker, Jenkins, Linux, Google Colab, VS Code, Jupyter Notebook</p>
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">Selected Projects</h2>
                        <div className="space-y-10">
                            <ProjectItem
                                title="NoiseFloor – Intelligent Job Discovery System [Deployed]"
                                tech="Python, NLP, SQLite, Twilio, Flask, Render"
                                points={[
                                    "Architected and shipped a full-stack ML system reducing irrelevant job listings by 70–80% using semantic resume-JD matching and legitimacy scoring.",
                                    "Built rule-based risk detection for job scams and suspicious postings – providing explainable signals, not binary filters.",
                                    "Deployed to Render with event-driven webhooks and scheduled scraping for 24/7 autonomous operation; real-time WhatsApp alerts via Twilio with human-in-the-loop feedback capture.",
                                    "Persistent SQLite deduplication eliminated repeated daily alerts and prioritized newly posted roles."
                                ]}
                            />
                            <ProjectItem
                                title="Offline AI Meeting Transcription & Summarization System [In Progress]"
                                tech="Whisper, Pyannote, Transformers, PyTorch"
                                points={[
                                    "Built multilingual ASR pipeline achieving 90%+ transcription accuracy; reduced inference latency 35% via chunking, silence removal, and denoising.",
                                    "Integrated Pyannote speaker diarization for up to 6 speakers; generated abstractive summaries condensing 30–60 min meetings into 5–7 key insights. Runs fully offline, zero cloud cost."
                                ]}
                            />
                            <ProjectItem
                                title="End-to-End MLOps Pipeline for ML API Deployment"
                                tech="Jenkins, Docker, FastAPI, Scikit-learn"
                                points={[
                                    "Designed CI/CD pipelines in Jenkins automating model testing, validation, and deployment; Dockerized inference APIs with 100% reproducible builds.",
                                    "Deployed FastAPI prediction services handling concurrent real-time requests with structured JSON responses."
                                ]}
                            />
                            <ProjectItem
                                title="Real-Time Emotion Recognition System"
                                tech="TensorFlow, OpenCV, CNNs"
                                points={[
                                    "Trained CNN classifiers achieving ~70% validation accuracy across 7 emotion classes; real-time webcam inference at 15–20 FPS on consumer hardware.",
                                    "Logged emotion predictions at 5-second intervals for temporal behavior analysis and pattern tracking."
                                ]}
                            />
                            <ProjectItem
                                title="AI Tutor / Educational Assistant"
                                tech="BART, Hugging Face, Flask, SQLite"
                                points={[
                                    "Document ingestion pipelines (PDF/PPT/image) with BART-based abstractive summarization reducing content length by 60–70%; auto-generated personalized quizzes."
                                ]}
                            />
                            <ProjectItem
                                title="Neural Machine Translation (English-Hindi)"
                                tech="MarianMT, Hugging Face, PyTorch"
                                points={[
                                    "Transformer encoder-decoder translation with fluent sentence-level output and interactive source/output visualization interface."
                                ]}
                            />
                        </div>
                    </section>
                    
                    {/* Certifications & Interests */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">Certifications & Interests</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-4">Certifications</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Generative AI: Introduction and Applications – IBM</li>
                                    <li>Programming for Everybody (Python) – University of Michigan</li>
                                    <li>Computer Networking – Google</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-4">Areas of Interest</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Computer Vision systems, Geospatial AI & Remote Sensing, Real-time ML inference, Python automation, Multimodal AI, Responsible AI & evaluation, Edge / offline deployment, AI for accessibility.
                                </p>
                            </div>
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
