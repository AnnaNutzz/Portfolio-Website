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

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
                        <span className="w-8 h-1 bg-gray-600 rounded-full"></span>
                        Activity & Stats
                    </h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* GitHub Streak */}
                    <ScrollAnimation>
                        <div className="bg-surface p-6 rounded-xl border border-border h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <Github className="w-6 h-6 text-white" />
                                <h3 className="text-xl font-bold text-white">GitHub Contributions</h3>
                            </div>

                            <div className="flex justify-center overflow-hidden">
                                <div className="grid grid-rows-7 grid-flow-col gap-1">
                                    {loading ? (
                                        Array.from({ length: 84 }).map((_, i) => (
                                            <div key={i} className="w-3 h-3 rounded-sm bg-gray-800 animate-pulse"></div>
                                        ))
                                    ) : githubData.length > 0 ? (
                                        githubData.map((day, i) => (
                                            <div
                                                key={i}
                                                className="w-3 h-3 rounded-sm"
                                                style={{ backgroundColor: day.color }}
                                                title={`${day.contributionCount} contributions on ${day.date}`}
                                            ></div>
                                        ))
                                    ) : (
                                        Array.from({ length: 84 }).map((_, i) => (
                                            <div key={i} className="w-3 h-3 rounded-sm bg-gray-800"></div>
                                        ))
                                    )}
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-4 text-center">Last 3 Months Activity</p>
                        </div>
                    </ScrollAnimation>

                    {/* Spotify Widget */}
                    <ScrollAnimation>
                        <div className="bg-surface p-6 rounded-xl border border-border h-full flex flex-col justify-between">
                            <div className="flex items-center gap-3 mb-6">
                                <Music className="w-6 h-6 text-white" />
                                <h3 className="text-xl font-bold text-white">Now Playing</h3>
                            </div>

                            {loading ? (
                                <div className="flex items-center gap-4 animate-pulse">
                                    <div className="w-16 h-16 bg-gray-800 rounded-md"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 w-32 bg-gray-800 rounded"></div>
                                        <div className="h-3 w-24 bg-gray-800 rounded"></div>
                                    </div>
                                </div>
                            ) : spotifyData?.missingToken ? (
                                <div className="text-center py-4">
                                    <p className="text-gray-400 text-sm">Spotify setup required</p>
                                    <p className="text-xs text-gray-600 mt-1">Add spotify_refresh_token to .env</p>
                                </div>
                            ) : spotifyData?.isPlaying ? (
                                <>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-gray-800 rounded-md overflow-hidden">
                                            {spotifyData.albumImageUrl && (
                                                <img src={spotifyData.albumImageUrl} alt={spotifyData.album} className="w-full h-full object-cover" />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <a href={spotifyData.songUrl} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline truncate block">
                                                {spotifyData.title}
                                            </a>
                                            <p className="text-gray-400 text-sm truncate">{spotifyData.artist}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex gap-1 items-end h-8 justify-center">
                                        <div className="w-1 bg-white h-3 animate-bounce"></div>
                                        <div className="w-1 bg-white h-6 animate-bounce delay-75"></div>
                                        <div className="w-1 bg-white h-4 animate-bounce delay-150"></div>
                                        <div className="w-1 bg-white h-7 animate-bounce delay-100"></div>
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gray-800 rounded-md flex items-center justify-center">
                                        <Music className="w-8 h-8 text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Not Playing</p>
                                        <p className="text-gray-400 text-sm">Spotify</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
