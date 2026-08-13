import ScrollAnimation from "./ScrollAnimation";
import SpriteAnimation from "./SpriteAnimation";

export default function Timeline() {
    const events = [
        {
            year: "2026 (Current)",
            title: "Post Graduation",
            desc: "Complete Bennett University 4th sem by June/July 2026 (3rd Sem CGPA 7.75)",
            current: true
        },
        {
            year: "2025",
            title: "Bennett University",
            desc: "Postgraduate AI/ML. Specialization: Real-time emotion detection. Projects: AI Tutor, ASL Gesture Recognition, Fuzzy Logic Consultant.",
            current: false,
            logo: "bennett"
        },
        {
            year: "2024",
            title: "Presidency University → Bennett University",
            desc: "Graduated Presidency (6.58 CGPA). Flash games app project. Started Bennett University 1st sem.",
            current: false,
            logo: "presi"
        },
        {
            year: "2023",
            title: "Presidency University - Graduation",
            desc: "4th & 5th Sem coursework.",
            current: false
        },
        {
            year: "2022",
            title: "Presidency University",
            desc: "2nd & 3rd Sem coursework.",
            current: false
        },
        {
            year: "2021",
            title: "Started Presidency University",
            desc: "Passed 12th (91.8%). Joined Presidency in October.",
            current: false
        },
        {
            year: "2020",
            title: "11th Grade / CBSE Change",
            desc: "Switched from Java (NetBeans) to Python.",
            current: false
        },
        {
            year: "2019",
            title: "First Code",
            desc: "Wrote first Java code in 11th grade and loved it.",
            current: false
        }
    ];

    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="p5-section-heading mb-12">My Journey</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12">
                    {/* Left Side Logos (Desktop) */}
                    <div className="hidden lg:flex flex-col justify-start items-end gap-32 pt-20">
                        <div className="relative">
                            <div className="border-2 border-p5-red rounded-2xl overflow-hidden p-1">
                                <SpriteAnimation
                                    src="/bennett_logo.png"
                                    sheetWidth={960}
                                    sheetHeight={1280}
                                    cols={3}
                                    rows={4}
                                    totalFrames={11}
                                    fps={7}
                                    displaySize={150}
                                    className="opacity-90 hover:opacity-100 transition-opacity rounded-xl"
                                />
                            </div>
                            <p className="text-center text-xs text-p5-gray mt-2 font-heading tracking-wider">BENNETT UNIVERSITY</p>
                        </div>
                        <div className="relative mt-20">
                            <div className="border-2 border-p5-red rounded-2xl overflow-hidden p-1">
                                <SpriteAnimation
                                    src="/presi_logo.png"
                                    sheetWidth={960}
                                    sheetHeight={960}
                                    cols={3}
                                    rows={3}
                                    totalFrames={8}
                                    fps={3}
                                    displaySize={150}
                                    className="opacity-90 hover:opacity-100 transition-opacity rounded-xl"
                                />
                            </div>
                            <p className="text-center text-xs text-p5-gray mt-2 font-heading tracking-wider">PRESIDENCY UNIVERSITY</p>
                        </div>
                    </div>

                    {/* Timeline Line (Desktop) — Bold red */}
                    <div className="hidden lg:block w-[2px] bg-p5-red/50 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-p5-red rotate-45" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-p5-red rotate-45" />
                    </div>

                    {/* Timeline Content */}
                    <div className="relative border-l-2 border-p5-red/30 ml-3 md:ml-0 lg:border-none space-y-12 lg:space-y-16">
                        {events.map((event, index) => (
                            <ScrollAnimation key={index} className="mb-10 ml-8 lg:ml-0 relative">
                                {/* Mobile Dot — Red */}
                                <span className={`lg:hidden absolute -left-[41px] flex h-6 w-6 items-center justify-center ring-4 ring-background ${event.current ? 'bg-p5-red rotate-45 animate-p5-glow' : 'bg-p5-gray-dark rotate-45'}`}></span>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                                    <span
                                        className={`text-sm font-heading tracking-wider px-3 py-1 w-fit uppercase ${event.current
                                            ? 'bg-p5-red text-white animate-p5-glow'
                                            : 'bg-p5-gray-dark text-gray-300'
                                            }`}
                                        style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                                    >
                                        {event.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                                </div>
                                <p className="text-p5-gray max-w-xl">
                                    {event.desc}
                                </p>

                                {/* Mobile Logos */}
                                {event.logo === "bennett" && (
                                    <div className="lg:hidden mt-4 border-2 border-p5-red rounded-xl overflow-hidden w-fit p-1">
                                        <SpriteAnimation
                                            src="/bennett_logo.png"
                                            sheetWidth={960}
                                            sheetHeight={1280}
                                            cols={3}
                                            rows={4}
                                            totalFrames={11}
                                            fps={7}
                                            displaySize={120}
                                            className="rounded-lg"
                                        />
                                    </div>
                                )}
                                {event.logo === "presi" && (
                                    <div className="lg:hidden mt-4 border-2 border-p5-red rounded-xl overflow-hidden w-fit p-1">
                                        <SpriteAnimation
                                            src="/presi_logo.png"
                                            sheetWidth={960}
                                            sheetHeight={960}
                                            cols={3}
                                            rows={3}
                                            totalFrames={8}
                                            fps={3}
                                            displaySize={120}
                                            className="rounded-lg"
                                        />
                                    </div>
                                )}
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
