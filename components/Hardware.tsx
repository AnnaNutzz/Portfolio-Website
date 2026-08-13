import { Monitor, Cpu, Keyboard, Mouse } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function Hardware() {
    const gear = [
        {
            icon: <Cpu className="w-8 h-8 text-p5-red" />,
            name: "Laptop",
            model: "Dell G15 5510",
            desc: "Intel i5 10th Gen, GTX 1650"
        },
        {
            icon: <Monitor className="w-8 h-8 text-p5-red" />,
            name: "Monitor",
            model: "Primary Display",
            desc: "120Hz Refresh Rate"
        },
        {
            icon: <Keyboard className="w-8 h-8 text-p5-red" />,
            name: "Keyboard",
            model: "Primary Keyboard",
            desc: "Mechanical Feel Gaming Keyboard"
        },
        {
            icon: <Mouse className="w-8 h-8 text-p5-red" />,
            name: "Mouse",
            model: "Zebronics Transformers-M",
            desc: "High Precision Gaming Mouse"
        }
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="p5-section-heading mb-12">Equipment</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {gear.map((item, index) => (
                        <ScrollAnimation key={index}>
                            <div className="p5-card rounded-none p-6 p5-hover-glow p5-corner-accents">
                                <div className="mb-4 relative z-10">{item.icon}</div>
                                <h3 className="text-xl font-heading tracking-wider text-white mb-1 relative z-10 uppercase">{item.name}</h3>
                                <p className="text-gray-300 font-medium relative z-10">{item.model}</p>
                                <p className="text-p5-gray text-sm relative z-10">{item.desc}</p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
