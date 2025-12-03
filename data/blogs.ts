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
    }


];
