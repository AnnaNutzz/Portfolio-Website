import TypingText from "./TypingText";

export default function Hero() {
    return (
        <section className="py-8 md:py-12">
            <div className="space-y-6 max-w-3xl">
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        <TypingText text="Hi, I am Ahana Kaur" />
                    </h1>
                    <p className="text-xl text-gray-300">
                        An aspiring AI/ML Developer & Creative Coder.
                    </p>
                </div>

                <p className="text-lg text-gray-400 leading-relaxed">
                    I build compact, usable ML systems and creative apps — from real-time vision prototypes to automation tools that actually help me get things done.
                </p>

                <div className="space-y-2 text-gray-300">
                    <p>Postgraduate AI/ML student at Bennett University (current CGPA 7.68). Focused on real-time computer vision (capstone), generative/assistive products, and independent ML systems engineering.</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
                        <li><strong>Capstone & coursework:</strong> delivered a real-time vision capstone and a full AI Tutor product in university subjects.</li>
                        <li><strong>Independent engineering:</strong> build, train and productionize ML systems on my own.</li>
                        <li><strong>Product-first maker:</strong> many small apps and Kivy/Tkinter projects that solve everyday problems.</li>
                    </ul>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                    <a
                        href="mailto:kaur.ahana02@gmail.com"
                        className="bg-surface hover:bg-surface-hover text-white px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg font-medium"
                    >
                        Let’s collaborate
                    </a>
                </div>

                <div className="text-gray-400 text-base pt-6 border-t border-white/10 text-justify">
                    <p>
                        I’m an AI/ML practitioner-in-training who prefers building working systems over theoretical-only work. At Bennett University I’ve completed a real-time vision capstone (specialization project) and an AI Tutor product as part of course work, while independently designing and shipping ML systems and numerous Kivy/Tkinter apps. I enjoy turning small ideas into practical tools — and when I’m not coding I write ideas, play video games, draw and listen to music.
                    </p>
                </div>
            </div>
        </section>
    );
}
