"use client";

import { useState } from "react";
import { blogs as localBlogs } from "@/data/blogs";
import PageTransition from "@/components/PageTransition";
import P5BattleNav from "@/components/P5BattleNav";
import BlogCard from "@/components/BlogCard";
import Changelog from "@/components/Changelog";
import P5SectionDivider from "@/components/P5SectionDivider";
import ScrollAnimation from "@/components/ScrollAnimation";
import Footer from "@/components/Footer";

export default function BlogsPage() {
    const [blogs] = useState<any[]>(localBlogs);

    return (
        <PageTransition>
            <P5BattleNav />
            <main className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12 pb-24">
                <ScrollAnimation>
                    <h2 className="p5-section-heading mb-8">Latest Thoughts</h2>
                </ScrollAnimation>

                <div className="space-y-8">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                <P5SectionDivider variant="line" />
                <Changelog />
            </main>
            <Footer />
        </PageTransition>
    );
}
