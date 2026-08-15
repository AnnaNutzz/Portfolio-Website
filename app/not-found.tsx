import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 relative overflow-hidden">
            {/* Red diagonal stripes bg */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 20px, #FF0000 20px, #FF0000 21px)",
                }}
            />

            <div className="relative z-10 text-center">
                <h2 className="text-8xl md:text-[10rem] font-heading tracking-wider text-p5-red mb-2 leading-none">
                    404
                </h2>
                <p className="text-2xl md:text-4xl font-heading tracking-wider text-white mb-4">
                    TaRGeT NoT FoUND
                </p>
                <p className="text-p5-gray mb-8">
                    The page you're looking for doesn't exist in this Palace.
                </p>
                <Link
                    href="/"
                    className="bg-p5-red text-white px-8 py-3 font-heading tracking-wider text-lg hover:bg-red-700 transition-colors inline-block"
                    style={{ clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)" }}
                >
                    RETURN TO HIDEOUT
                </Link>
                <p className="text-p5-gray/30 text-xs mt-8 italic font-heading tracking-wider">
                    "You'll never see it coming..."
                </p>
            </div>
        </div>
    );
}
