"use client";
import { useEffect, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { Github, Music, Gamepad2 } from "lucide-react";
import { fetchStats } from "@/app/actions";

export default function Stats() {
    const [githubData, setGithubData] = useState<any[]>([]);
    const [spotifyData, setSpotifyData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStats = async () => {
            try {
                const { githubData, spotifyData } = await fetchStats();
                setGithubData(githubData);
                setSpotifyData(spotifyData);
            } catch (error) {
                console.error("Error loading stats:", error);
            } finally {
                setLoading(false);
            }
        };
        loadStats();
    }, []);

    // P5 red intensity palette for GitHub contributions
    const getP5Color = (color: string) => {
        if (!color || color === '#ebedf0' || color === '#161b22') return '#1a1a1a';
        // Map green intensity to red intensity
        if (color.includes('9be9a8') || color.includes('0e4429')) return '#3d0000';
        if (color.includes('40c463') || color.includes('006d32')) return '#6b0000';
        if (color.includes('30a14e') || color.includes('26a641')) return '#a00000';
        if (color.includes('216e39') || color.includes('39d353')) return '#FF0000';
        return color; // fallback
    };

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="p5-section-heading mb-12">Activity & Stats</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* GitHub Streak */}
                    <ScrollAnimation>
                        <div className="p5-card rounded-none p-6 h-full p5-corner-accents">
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <Github className="w-6 h-6 text-p5-red" />
                                <h3 className="text-xl font-heading tracking-wider text-white uppercase">GitHub Contributions</h3>
                            </div>

                            <div className="flex justify-center overflow-hidden relative z-10">
                                <div className="grid grid-rows-7 grid-flow-col gap-1">
                                    {loading ? (
                                        Array.from({ length: 84 }).map((_, i) => (
                                            <div key={i} className="w-3 h-3 bg-p5-surface animate-pulse"></div>
                                        ))
                                    ) : githubData.length > 0 ? (
                                        githubData.map((day, i) => (
                                            <div
                                                key={i}
                                                className="w-3 h-3 transition-colors hover:ring-1 hover:ring-p5-red"
                                                style={{ backgroundColor: getP5Color(day.color) }}
                                                title={`${day.contributionCount} contributions on ${day.date}`}
                                            ></div>
                                        ))
                                    ) : (
                                        Array.from({ length: 84 }).map((_, i) => (
                                            <div key={i} className="w-3 h-3 bg-p5-surface"></div>
                                        ))
                                    )}
                                </div>
                            </div>
                            <p className="text-xs text-p5-gray mt-4 text-center font-heading tracking-wider uppercase relative z-10">Last 3 Months Activity</p>
                        </div>
                    </ScrollAnimation>

                    {/* Spotify Widget */}
                    <ScrollAnimation>
                        <div className="p5-card rounded-none p-6 h-full flex flex-col justify-between p5-corner-accents">
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <Music className="w-6 h-6 text-p5-red" />
                                <h3 className="text-xl font-heading tracking-wider text-white uppercase">Now Playing</h3>
                            </div>

                            <div className="relative z-10">
                                {loading ? (
                                    <div className="flex items-center gap-4 animate-pulse">
                                        <div className="w-16 h-16 bg-p5-surface"></div>
                                        <div className="space-y-2">
                                            <div className="h-4 w-32 bg-p5-surface"></div>
                                            <div className="h-3 w-24 bg-p5-surface"></div>
                                        </div>
                                    </div>
                                ) : spotifyData?.missingToken ? (
                                    <div className="text-center py-4">
                                        <p className="text-p5-gray text-sm font-heading tracking-wider">SPOTIFY SETUP REQUIRED</p>
                                        <p className="text-xs text-p5-gray/50 mt-1">Add spotify_refresh_token to .env</p>
                                    </div>
                                ) : spotifyData?.isPlaying ? (
                                    <>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-p5-surface overflow-hidden border border-p5-red relative">
                                                {spotifyData.albumImageUrl && (
                                                    <img src={spotifyData.albumImageUrl} alt={spotifyData.album} className="w-full h-full object-cover" />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <a href={spotifyData.songUrl} target="_blank" rel="noopener noreferrer" className="text-white font-heading tracking-wider hover:text-p5-red truncate block uppercase">
                                                    {spotifyData.title}
                                                </a>
                                                <p className="text-p5-gray text-sm truncate">{spotifyData.artist}</p>
                                            </div>
                                        </div>
                                        {/* P5 red audio bars */}
                                        <div className="mt-6 flex gap-1 items-end h-8 justify-center">
                                            <div className="w-1 bg-p5-red h-3 animate-bounce"></div>
                                            <div className="w-1 bg-p5-red h-6 animate-bounce" style={{ animationDelay: '75ms' }}></div>
                                            <div className="w-1 bg-p5-red h-4 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                            <div className="w-1 bg-p5-red h-7 animate-bounce" style={{ animationDelay: '100ms' }}></div>
                                            <div className="w-1 bg-p5-crimson h-5 animate-bounce" style={{ animationDelay: '200ms' }}></div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-p5-surface flex items-center justify-center border border-p5-gray-dark">
                                            <Music className="w-8 h-8 text-p5-gray-dark" />
                                        </div>
                                        <div>
                                            <p className="text-white font-heading tracking-wider uppercase">Not Playing</p>
                                            <p className="text-p5-gray text-sm">Spotify</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
