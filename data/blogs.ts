export interface Blog {
    id: string;
    title: string;
    content: string;
    codeSnippet: string;
    imageUrl: string;
    videoUrl?: string;
    date: string;
}

export const blogs: Blog[] = [
    {
        id: "4",
        title: "I Took UGC NET With One Month of Prep — Here's What Happened",
        content: "I decided to attempt UGC NET (Computer Science & Applications) with roughly a month of preparation. Not a carefully planned month — more like a chaotic, let-me-see-how-this-goes kind of month where I was simultaneously juggling college, projects, and three other competitive exams.\n\nThe result: 150/300, 80.44 percentile. Not Qualified.\n\nLet me be honest about what that means. 80th percentile sounds decent in isolation, but CS & Applications is one of the most competitive NET subjects — the cutoff for JRF typically sits around the 95th percentile, and even Assistant Professor eligibility hovers in the low 90s. So I wasn't in the 'almost made it' zone. I was in the 'showed up to a gunfight with a water pistol' zone.\n\nBut here's the thing — I don't regret it.\n\nThis was my first real competitive exam. Before this, exams meant college semester papers where you study the night before and scrape through. NET was a completely different beast. The syllabus is enormous — discrete math, compiler design, data structures, algorithms, OS, DBMS, networks, AI, software engineering — basically every CS course compressed into two papers.\n\nWhat I learned in that one month of half-prep:\n\n1. **Competitive exams reward consistency, not cramming.** One month of scattered effort doesn't dent a syllabus this wide. The people clearing this exam have been at it for 6+ months with daily routines.\n\n2. **My fundamentals are stronger than I thought.** Despite minimal prep, I hit 80th percentile. That means my CS foundation from actual project work and self-learning carried me further than I expected.\n\n3. **Paper 2 is where NET is won or lost.** Paper 1 (General Aptitude) is manageable with common sense. Paper 2 is where domain depth matters, and that's where I bled marks.\n\n4. **The exam format itself is learnable.** Now that I've sat through it once, the timing, the question patterns, the way they phrase tricky options — I know what to expect. Round two won't have the 'first time in the exam hall' anxiety tax.\n\nSo what's next? I'm going back. This time with real preparation — structured, daily, covering the full syllabus methodically. The goal isn't just to clear it. It's to clear it with JRF.\n\nThis post isn't a victory lap. It's a checkpoint save. When I clear it next time, I'll write Part 2. And that one will hit different.",
        codeSnippet: "// UGC NET Attempt v1.0\nconst attempt = {\n  prep_time: '~30 days (chaotic)',\n  score: '150/300',\n  percentile: 80.44,\n  result: 'Not Qualified',\n  regret: false,\n  next_attempt: 'loading...'\n};\n\nif (!attempt.result.includes('Qualified')) {\n  study_harder();\n  return attempt_again();\n}",
        imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
        date: "2026-09-06T00:00:00.000Z"
    },
    {
        id: "1",
        title: "Why My Brain Never Shuts Up",
        content: "I overthink everything. Not in the dramatic cinematic way, but in the quiet, analytical, INTP sense where my mind runs simulations of conversations, choices, alternate timelines, and completely unnecessary hypotheticals. I don’t do it because I want to—my mind just defaults to analysis mode. Over time, I’ve realized this isn’t a flaw; it’s my system’s baseline. The same looping thoughts that annoy me also help me solve problems faster, understand people deeper, and navigate life with unusual clarity. This is my calm chaos, and I’m finally learning to treat it as a feature, not a bug.",
        codeSnippet: "// Thought Process v1.0\nwhile(true) {\n  analyze(everything);\n  accidentally_overthink();\n  pretend_its_productive();\n}",
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop",
        date: "2026-02-15T00:00:00.000Z"
    },

    {
        id: "2",
        title: "The Art of Being Quiet but Observing Everything",
        content: "People think I’m quiet because I have nothing to say. Reality is the opposite. I’m quiet because I’m collecting data. Every tone shift, every micro-expression, every contradiction in what someone says—I notice all of it automatically. It’s not intentional; it’s just how my brain is wired. Being an observer means I understand people more deeply than they realize, and sometimes more deeply than they understand themselves. It’s a strange superpower: invisible, silent, and sometimes inconvenient. But it’s mine.",
        codeSnippet: "// Social Mode v2.1\nfunction interact() {\n  listen();\n  observe();\n  overanalyze();\n  speak_if_required();\n}",
        imageUrl: "https://images.unsplash.com/photo-1519871544760-ff4e659017b9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2026-02-15T00:00:00.000Z"
    },
    {
        id: "3",
        title: "Leading Without Needing the Title",
        content: "I’ve been a group leader for as long as I can remember — not because I chased the badge, but because I naturally step into structure when there isn’t any. If something feels disorganized, I don’t complain. I reorganize it. If tasks aren’t assigned, I assign them. If there’s confusion, I simplify it.\n\nLeadership, for me, isn’t loud. It isn’t about dominating conversations or forcing decisions. It’s about seeing the full system — who’s good at what, who needs support, who works best under pressure — and aligning everything so the machine runs smoothly.\n\nI don’t believe in random delegation. You don’t ask a fish to climb a tree, and you don’t ask someone who freezes under pressure to handle last-minute execution. People perform best when their strengths are respected. My job as a leader is to see those strengths clearly.\n\nWhen deadlines hit and panic rises, I don’t amplify it. I absorb it. I take the heavier load if needed. I encourage. I push. I make sure we cross the finish line. If credit is given, it’s shared. If something fails, I take responsibility first.\n\nLeadership isn’t about control — though I do like structure. It’s about ownership. It’s about accountability. It’s about making sure the work gets done, the team stays intact, and no one feels unnecessary.\n\nI don’t always need the title. But I do need things to work properly. And when they don’t, I fix them.",
        codeSnippet: "// Team Execution Protocol\nfunction lead(team) {\n  analyzeStrengths(team);\n  delegateStrategically(team);\n  alignGoals(team);\n  absorbPressureIfNeeded();\n  deliverResults();\n}",
        imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2080&auto=format&fit=crop&auto=format&ixlib=rb-4.1.0",
        date: "2026-02-15T00:00:00.000Z"
    }

];
