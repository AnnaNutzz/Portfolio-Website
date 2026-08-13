"use client";
import ScrollAnimation from "./ScrollAnimation";
import { Crown, Network, Flame, Scale, ShieldCheck, BadgeCheck } from "lucide-react";

export default function Skills() {
  const technicalSkills = {
    "Languages": {
      "Advanced": ["Python", "SQL (MySQL · SQLite)"],
      "Proficient": ["Java", "JavaScript", "HTML5 / CSS3"],
      "Exposure": ["C", "C++"]
    },

    "Machine Learning & AI": {
      "Proficient": [
        "PyTorch", "TensorFlow", "Keras", "Scikit-learn",
        "Model Evaluation & Validation", "Supervised & Unsupervised Learning"
      ],
      "Familiar": [
        "Hugging Face Transformers", "BART", "NLP (NLTK · spaCy)",
        "Prompt Engineering", "LLM Inference", "Whisper", "Pyannote"
      ]
    },

    "Computer Vision": {
      "Proficient": [
        "OpenCV", "CNNs", "Real-Time Video Processing",
        "Object Detection (YOLO)", "Segmentation (U-Net)", "Image Classification"
      ],
      "Familiar": ["MediaPipe", "Image Augmentation"]
    },

    "Data & Visualization": [
      "Pandas", "NumPy", "Matplotlib", "Seaborn",
      "Feature Engineering", "EDA", "Statistical Analysis",
      "Excel (Pivot Tables · Dashboards)"
    ],

    "Web & App Development": {
      "Proficient": ["Flask", "REST APIs"],
      "Familiar": ["React.js", "Node.js", "Kivy", "Tkinter", "Firebase"]
    },

    "Geospatial & Remote Sensing": [
      "Rasterio", "Shapely", "PyProj",
      "Sentinel-2 Satellite Imagery", "OSM Road Extraction",
      "Remote Sensing Data Analysis"
    ],

    "Tools & Platforms": {
      "Proficient": ["Git & GitHub", "Linux (Ubuntu · Mint)", "Google Colab", "VS Code"],
      "Deployment": ["Flask", "FastAPI", "Docker", "Jenkins", "CI/CD", "Render"],
      "Databases": ["MySQL", "SQLite", "Firebase"]
    }
  };

  const softSkills = [
    {
      icon: Crown,
      title: "Strategic Team Leadership",
      desc: "Naturally assumes leadership roles and coordinates teams through structured delegation and consensus-based decisions."
    },
    {
      icon: Network,
      title: "Systems Thinking",
      desc: "Thinks in end-to-end pipelines — from requirements and data to deployment and monitoring — not just isolated components."
    },
    {
      icon: Flame,
      title: "Adaptability",
      desc: "Rapidly shifts domains (ML → GIS → speech → web) and picks up new tools without losing delivery momentum."
    },
    {
      icon: Scale,
      title: "Validation Mindset",
      desc: "Treats AI-generated code and model outputs as hypotheses to be tested, not answers to be accepted."
    },
    {
      icon: ShieldCheck,
      title: "Accountability & Ownership",
      desc: "Takes full responsibility for deliverables, especially under pressure. Ships working systems, not just prototypes."
    },
    {
      icon: BadgeCheck,
      title: "Responsible AI Practice",
      desc: "Applies explainability, bias awareness, and governed outputs as design principles — not afterthoughts."
    }
  ];

  const renderTag = (skill: string, highlight: boolean = false, muted: boolean = false) => (
    <span
      key={skill}
      className={`px-3 py-1.5 text-sm font-heading tracking-wider transition-all duration-300 hover:scale-105 cursor-default uppercase ${
        highlight
          ? 'bg-p5-red/20 border border-p5-red/50 text-p5-red hover:bg-p5-red/30 hover:shadow-[0_0_10px_rgba(255,0,0,0.2)]'
          : muted
          ? 'bg-p5-gray-dark/30 border border-p5-gray-dark/30 text-p5-gray/50 hover:bg-p5-gray-dark/40'
          : 'bg-p5-surface border border-p5-gray-dark text-gray-300 hover:border-p5-red/50 hover:text-p5-red'
      }`}
      style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}
    >
      {skill}
    </span>
  );

  const renderTiered = (
    tiers: Record<string, string[]>,
    highlightKey?: string,
    mutedKey?: string
  ) => (
    <div className="space-y-3">
      {Object.entries(tiers).map(([tier, skills]) => (
        <div key={tier}>
          <p className="text-p5-gray text-xs mb-2 font-heading tracking-wider uppercase">{tier}:</p>
          <div className="flex flex-wrap gap-2">
            {skills.map(s => renderTag(s, tier === highlightKey, tier === mutedKey))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="p5-section-heading mb-12">Skills & Expertise</h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Technical Skills */}
          <ScrollAnimation>
            <div className="p5-card rounded-none p-6 h-full p5-corner-accents">
              <h3 className="text-2xl font-heading tracking-wider text-white mb-6 flex items-center gap-2 relative z-10">
                <span className="w-1 h-6 bg-p5-red"></span>
                TECHNICAL SKILLS
              </h3>

              <div className="space-y-6 relative z-10">
                {/* Languages */}
                <div>
                  <h4 className="text-p5-red font-heading tracking-wider mb-3 uppercase">Languages</h4>
                  {renderTiered(technicalSkills["Languages"] as Record<string, string[]>, "Advanced", "Exposure")}
                </div>

                {/* ML & AI */}
                <div>
                  <h4 className="text-p5-red font-heading tracking-wider mb-3 uppercase">Machine Learning & AI</h4>
                  {renderTiered(
                    technicalSkills["Machine Learning & AI"] as Record<string, string[]>,
                    "Proficient"
                  )}
                </div>

                {/* Computer Vision */}
                <div>
                  <h4 className="text-p5-red font-heading tracking-wider mb-3 uppercase">Computer Vision</h4>
                  {renderTiered(
                    technicalSkills["Computer Vision"] as Record<string, string[]>,
                    "Proficient"
                  )}
                </div>

                {/* Data */}
                <div>
                  <h4 className="text-p5-red font-heading tracking-wider mb-3 uppercase">Data & Visualization</h4>
                  <div className="flex flex-wrap gap-2">
                    {(technicalSkills["Data & Visualization"] as string[]).map(s => renderTag(s))}
                  </div>
                </div>

                {/* Web & App */}
                <div>
                  <h4 className="text-p5-red font-heading tracking-wider mb-3 uppercase">Web & App Development</h4>
                  {renderTiered(technicalSkills["Web & App Development"] as Record<string, string[]>)}
                </div>

                {/* Geospatial */}
                <div>
                  <h4 className="text-p5-red font-heading tracking-wider mb-3 uppercase">Geospatial & Remote Sensing</h4>
                  <div className="flex flex-wrap gap-2">
                    {(technicalSkills["Geospatial & Remote Sensing"] as string[]).map(s => renderTag(s))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-p5-red font-heading tracking-wider mb-3 uppercase">Tools & Platforms</h4>
                  {renderTiered(technicalSkills["Tools & Platforms"] as Record<string, string[]>)}
                </div>

              </div>
            </div>
          </ScrollAnimation>

          {/* Soft Skills */}
          <ScrollAnimation>
            <div className="p5-card rounded-none p-6 h-full p5-corner-accents">
              <h3 className="text-2xl font-heading tracking-wider text-white mb-6 flex items-center gap-2 relative z-10">
                <span className="w-1 h-6 bg-p5-red"></span>
                SOFT SKILLS
              </h3>

              <div className="space-y-4 relative z-10">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-p5-black/50 p-4 border border-p5-gray-dark flex items-start gap-4 transition-all duration-300 hover:border-p5-red/50 hover:translate-x-1 group"
                  >
                    <div className="w-10 h-10 bg-p5-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-p5-red/30 transition-colors">
                      <skill.icon className="w-5 h-5 text-p5-red" />
                    </div>
                    <div>
                      <h4 className="text-white font-heading tracking-wider group-hover:text-p5-red transition-colors uppercase">{skill.title}</h4>
                      <p className="text-p5-gray text-sm">{skill.desc}</p>
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