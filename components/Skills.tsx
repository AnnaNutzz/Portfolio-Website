"use client";
import ScrollAnimation from "./ScrollAnimation";
import { Users, Zap, FolderKanban, Sparkles } from "lucide-react";

export default function Skills() {
  const technicalSkills = {
    "Languages": [
      "Python",
      "Java",
      "C++",
      "C",
      "JavaScript",
      "SQL"
    ],

    "Web & App Development": {
      "Backend": [
        "Flask",
        "REST APIs"
      ],
      "Frontend": [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "React.js (basic)"
      ],
      "Databases": [
        "MySQL"
      ]
    },

    "AI / ML & Computer Vision": [
      "Machine Learning",
      "Deep Learning",
      "CNNs",
      "Generative AI",
      "LLMs (OpenAI, Gemini)",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "MediaPipe",
      "Hugging Face (BART)",
      "Whisper (Speech-to-Text)",
      "Pyannote (Speaker Diarization)"
    ],

    "Data & Visualization": [
      "NumPy",
      "Pandas",
      "Matplotlib"
    ],

    "Frameworks & Tools": [
      "Git",
      "GitHub",
      "VS Code",
      "Jenkins",
      "Android Studio",
      "Kivy",
      "KivyMD",
      "Tkinter",
      "Nextcord (Discord Bots)"
    ],

    "APIs & Integrations": [
      "Twilio (SMS)",
      "WhatsApp Automation",
      "File Processing (PDF, PPTX, Images)"
    ]
  };

  const softSkills = [
    {
      icon: Users,
      title: "Independent Execution",
      desc: "End-to-end ownership of academic and personal projects"
    },
    {
      icon: Zap,
      title: "Problem Solving",
      desc: "Strong debugging and algorithmic thinking in Python"
    },
    {
      icon: FolderKanban,
      title: "Project Structuring",
      desc: "Breaking complex ideas into clear, buildable systems"
    },
    {
      icon: Sparkles,
      title: "Learning Agility",
      desc: "Quickly picking up new frameworks and AI tools"
    }
  ];


    const renderSkillTag = (skill: string, highlight: boolean = false) => (
        <span
            key={skill}
            className={`px-3 py-1.5 text-sm rounded-md border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default ${
                highlight 
                    ? 'bg-pink-500/20 border-pink-500/50 text-pink-300 hover:bg-pink-500/30' 
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-700/50'
            }`}
        >
            {skill}
        </span>
    );

    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
                        <span className="w-8 h-1 bg-gray-600 rounded-full"></span>
                        Skills & Expertise
                    </h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Technical Skills */}
                    <ScrollAnimation>
                        <div className="bg-surface p-6 rounded-xl border border-border h-full">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-pink-500 rounded-full"></span>
                                Technical Skills
                            </h3>

                            <div className="space-y-6">
                                {/* Languages */}
                                <div>
                                    <h4 className="text-pink-400 font-semibold mb-3">Languages</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {(technicalSkills["Languages"] as string[]).map((skill) => 
                                            renderSkillTag(skill)
                                        )}
                                    </div>
                                </div>

                                {/* Web & App Development */}
                                <div>
                                    <h4 className="text-pink-400 font-semibold mb-3">Web & App Development</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-gray-500 text-xs mb-2">Backend:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {(technicalSkills["Web & App Development"] as any)["Backend"].map((skill: string) => 
                                                    renderSkillTag(skill)
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs mb-2">Frontend:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {(technicalSkills["Web & App Development"] as any)["Frontend"].map((skill: string) => 
                                                    renderSkillTag(skill)
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs mb-2">Databases:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {(technicalSkills["Web & App Development"] as any)["Databases"].map((skill: string) => 
                                                    renderSkillTag(skill)
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* AI / ML & Computer Vision */}
                                <div>
                                    <h4 className="text-pink-400 font-semibold mb-3">AI / ML & Computer Vision</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {(technicalSkills["AI / ML & Computer Vision"] as string[]).map((skill) => 
                                            renderSkillTag(skill, true)
                                        )}
                                    </div>
                                </div>

                                {/* Data & Visualization */}
                                <div>
                                    <h4 className="text-pink-400 font-semibold mb-3">Data & Visualization</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {(technicalSkills["Data & Visualization"] as string[]).map((skill) => 
                                            renderSkillTag(skill)
                                        )}
                                    </div>
                                </div>

                                {/* Frameworks & Tools */}
                                <div>
                                    <h4 className="text-pink-400 font-semibold mb-3">Frameworks & Tools</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {(technicalSkills["Frameworks & Tools"] as string[]).map((skill) => 
                                            renderSkillTag(skill)
                                        )}
                                    </div>
                                </div>

                                {/* APIs & Integrations */}
                                <div>
                                    <h4 className="text-pink-400 font-semibold mb-3">APIs & Integrations</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {(technicalSkills["APIs & Integrations"] as string[]).map((skill) => 
                                            renderSkillTag(skill, true)
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Soft Skills */}
                    <ScrollAnimation>
                        <div className="bg-surface p-6 rounded-xl border border-border h-full">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-pink-500 rounded-full"></span>
                                Soft Skills
                            </h3>

                            <div className="space-y-4">
                                {softSkills.map((skill, index) => (
                                    <div 
                                        key={index}
                                        className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/30 flex items-start gap-4 transition-all duration-300 hover:bg-gray-800/50 hover:border-pink-500/30 hover:translate-x-1 group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/30 transition-colors">
                                            <skill.icon className="w-5 h-5 text-pink-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold group-hover:text-pink-300 transition-colors">{skill.title}</h4>
                                            <p className="text-gray-400 text-sm">{skill.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
