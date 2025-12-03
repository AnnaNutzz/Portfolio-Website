import { Monitor, Cpu, Keyboard, Mouse } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function Hardware() {
    const gear = [
        {
            icon: <Cpu className="w-8 h-8 text-gray-400" />,
            name: "Laptop",
            model: "Dell G15 5510",
            desc: "Intel i5 10th Gen, GTX 1650"
        },
        {
            icon: <Monitor className="w-8 h-8 text-gray-400" />,
            name: "Monitor",
            model: "Primary Display",
            desc: "120Hz Refresh Rate"
        },
        {
            icon: <Keyboard className="w-8 h-8 text-gray-400" />,
            name: "Keyboard",
            model: "Primary Keyboard",
            desc: "Mechanical Feel Gaming Keyboard"
        },
        {
            icon: <Mouse className="w-8 h-8 text-gray-400" />,
            name: "Mouse",
            model: "Zebronics Transformers-M",
            desc: "High Precision Gaming Mouse"
        }
    ];

    return (
        <section className="py-20 bg-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
                        <span className="w-8 h-1 bg-gray-600 rounded-full"></span>
                        Hardware Setup
                    </h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {gear.map((item, index) => (
                        <ScrollAnimation key={index}>
                            <div className="bg-surface p-6 rounded-xl border border-border hover:border-gray-600 transition-colors">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                                <p className="text-gray-300 font-medium">{item.model}</p>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
