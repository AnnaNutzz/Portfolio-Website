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
        id: "1",
        title: "Why My Brain Never Shuts Up",
        content: "I overthink everything. Not in the dramatic cinematic way, but in the quiet, analytical, INTP sense where my mind runs simulations of conversations, choices, alternate timelines, and completely unnecessary hypotheticals. I don’t do it because I want to—my mind just defaults to analysis mode. Over time, I’ve realized this isn’t a flaw; it’s my system’s baseline. The same looping thoughts that annoy me also help me solve problems faster, understand people deeper, and navigate life with unusual clarity. This is my calm chaos, and I’m finally learning to treat it as a feature, not a bug.",
        codeSnippet: "// Thought Process v1.0\nwhile(true) {\n  analyze(everything);\n  accidentally_overthink();\n  pretend_its_productive();\n}",
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop",
        date: new Date().toISOString()
    },

    {
        id: "2",
        title: "The Art of Being Quiet but Observing Everything",
        content: "People think I’m quiet because I have nothing to say. Reality is the opposite. I’m quiet because I’m collecting data. Every tone shift, every micro-expression, every contradiction in what someone says—I notice all of it automatically. It’s not intentional; it’s just how my brain is wired. Being an observer means I understand people more deeply than they realize, and sometimes more deeply than they understand themselves. It’s a strange superpower: invisible, silent, and sometimes inconvenient. But it’s mine.",
        codeSnippet: "// Social Mode v2.1\nfunction interact() {\n  listen();\n  observe();\n  overanalyze();\n  speak_if_required();\n}",
        imageUrl: "https://images.unsplash.com/photo-1519871544760-ff4e659017b9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: new Date().toISOString()
    },
    {
        id: "3",
        title: "Leading Without Needing the Title",
        content: "I’ve been a group leader for as long as I can remember — not because I chased the badge, but because I naturally step into structure when there isn’t any. If something feels disorganized, I don’t complain. I reorganize it. If tasks aren’t assigned, I assign them. If there’s confusion, I simplify it.\n\nLeadership, for me, isn’t loud. It isn’t about dominating conversations or forcing decisions. It’s about seeing the full system — who’s good at what, who needs support, who works best under pressure — and aligning everything so the machine runs smoothly.\n\nI don’t believe in random delegation. You don’t ask a fish to climb a tree, and you don’t ask someone who freezes under pressure to handle last-minute execution. People perform best when their strengths are respected. My job as a leader is to see those strengths clearly.\n\nWhen deadlines hit and panic rises, I don’t amplify it. I absorb it. I take the heavier load if needed. I encourage. I push. I make sure we cross the finish line. If credit is given, it’s shared. If something fails, I take responsibility first.\n\nLeadership isn’t about control — though I do like structure. It’s about ownership. It’s about accountability. It’s about making sure the work gets done, the team stays intact, and no one feels unnecessary.\n\nI don’t always need the title. But I do need things to work properly. And when they don’t, I fix them.",
        codeSnippet: "// Team Execution Protocol\nfunction lead(team) {\n  analyzeStrengths(team);\n  delegateStrategically(team);\n  alignGoals(team);\n  absorbPressureIfNeeded();\n  deliverResults();\n}",
        imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2080&auto=format&fit=crop&auto=format&ixlib=rb-4.1.0",
        date: new Date().toISOString()
    }

];
