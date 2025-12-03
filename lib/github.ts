const GITHUB_TOKEN = process.env.github_token;

export async function getGithubContributions() {
    if (!GITHUB_TOKEN) {
        console.warn("GitHub token not found in environment variables");
        return [];
    }

    const query = `
    query {
      viewer {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
                date
                color
              }
            }
          }
        }
      }
    }
  `;

    try {
        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!response.ok) {
            console.error("GitHub API error:", response.statusText);
            return [];
        }

        const data = await response.json();
        const weeks = data?.data?.viewer?.contributionsCollection?.contributionCalendar?.weeks;

        // Flatten weeks to get last 84 days (12 weeks * 7 days)
        const days = weeks?.flatMap((week: any) => week.contributionDays) || [];
        return days.slice(-84); // Return last 84 days
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        return [];
    }
}
