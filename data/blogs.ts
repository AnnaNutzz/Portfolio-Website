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
        title: "Why I Switched to Next.js",
        content: "Next.js provides a great developer experience with features like file-system routing, API routes, and static site generation. It has significantly improved my workflow and site performance.",
        codeSnippet: "export async function getStaticProps() {\n  // Fetch data from external API\n  const res = await fetch('https://.../data')\n  const data = await res.json()\n  return { props: { data } }\n}",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        date: new Date().toISOString()
    },
    {
        id: "2",
        title: "Understanding TypeScript Generics",
        content: "Generics allow you to create reusable components that work with a variety of types rather than a single one. This adds flexibility while maintaining type safety.",
        codeSnippet: "function identity<T>(arg: T): T {\n  return arg;\n}",
        imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000&auto=format&fit=crop",
        date: new Date().toISOString()
    }
];
