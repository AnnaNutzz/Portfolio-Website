"use server";

import { getGithubContributions } from "@/lib/github";
import { getNowPlaying } from "@/lib/spotify";

export async function fetchStats() {
    const [githubData, spotifyData] = await Promise.all([
        getGithubContributions(),
        getNowPlaying()
    ]);
    return { githubData, spotifyData };
}
