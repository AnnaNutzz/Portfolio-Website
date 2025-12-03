import ScrollAnimation from "./ScrollAnimation";
import SpriteAnimation from "./SpriteAnimation";

export default function Timeline() {
    const events = [
        {
            year: "2026 (Expected)",
            title: "Graduation",
            desc: "Complete Bennett University 4th sem by June/July.",
            current: false
        },
        {
            year: "2025",
            title: "Bennett University (Current)",
            desc: "Postgraduate AI/ML (3rd Sem, CGPA 7.68). Specialization: Real-time emotion detection. Projects: AI Tutor, ASL Gesture Recognition, Fuzzy Logic Consultant.",
            current: true,
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
            title: "Presidency University",
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
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
                        <span className="w-8 h-1 bg-gray-600 rounded-full"></span>
                        My Journey
                    </h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12">
                    {/* Left Side Logos (Desktop) */}
                    <div className="hidden lg:flex flex-col justify-start items-end gap-32 pt-20">
                        <div className="relative">
                            <SpriteAnimation
                                src="/bennett_logo.png"
                                sheetWidth={960}
                                sheetHeight={1280}
                                cols={3}
                                rows={4}
                                totalFrames={11}
                                fps={7}
                                displaySize={150}
                                className="opacity-90 hover:opacity-100 transition-opacity rounded-2xl"
                            />
                            <p className="text-center text-xs text-gray-500 mt-2">Bennett University</p>
                        </div>
                        <div className="relative mt-20">
                            <SpriteAnimation
                                src="/presi_logo.png"
                                sheetWidth={960}
                                sheetHeight={960}
                                cols={3}
                                rows={3}
                                totalFrames={8}
                                fps={3}
                                displaySize={150}
                                className="opacity-90 hover:opacity-100 transition-opacity rounded-2xl"
                            />
                            <p className="text-center text-xs text-gray-500 mt-2">Presidency University</p>
                        </div>
                    </div>

                    {/* Timeline Line (Desktop) */}
                    <div className="hidden lg:block w-px bg-gray-700 relative"></div>

                    {/* Timeline Content */}
                    <div className="relative border-l border-gray-700 ml-3 md:ml-0 lg:border-none space-y-12 lg:space-y-16">
                        {events.map((event, index) => (
                            <ScrollAnimation key={index} className="mb-10 ml-8 lg:ml-0 relative">
                                {/* Mobile Dot */}
                                <span className={`lg:hidden absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-background ${event.current ? 'bg-white' : 'bg-gray-700'}`}></span>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                                    <span className={`text-sm font-medium px-2.5 py-0.5 rounded w-fit ${event.current ? 'bg-white text-black' : 'bg-gray-800 text-gray-300'}`}>
                                        {event.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                                </div>
                                <p className="text-gray-400 max-w-xl">
                                    {event.desc}
                                </p>

                                {/* Mobile Logos */}
                                {event.logo === "bennett" && (
                                    <div className="lg:hidden mt-4">
                                        <SpriteAnimation
                                            src="/bennett_logo.png"
                                            sheetWidth={960}
                                            sheetHeight={1280}
                                            cols={3}
                                            rows={4}
                                            totalFrames={11}
                                            fps={7}
                                            displaySize={120}
                                            className="rounded-2xl"
                                        />
                                    </div>
                                )}
                                {event.logo === "presi" && (
                                    <div className="lg:hidden mt-4">
                                        <SpriteAnimation
                                            src="/presi_logo.png"
                                            sheetWidth={960}
                                            sheetHeight={960}
                                            cols={3}
                                            rows={3}
                                            totalFrames={8}
                                            fps={3}
                                            displaySize={120}
                                            className="rounded-2xl"
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
