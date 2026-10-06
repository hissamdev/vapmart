"use client";

import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const articles = [
    {
        tag: "Starter Guide",
        date: "Oct 24, 2026",
        author: "Alex Morgan",
        readTime: "5 min read",
        title: "The Ultimate Guide to Selecting Your First Vape Kit",
        description:
            "Starting your vaping journey can be overwhelming. Learn how to choose the perfect starter kit that suits your lifestyle.",
        image: "blog_1.png",
    },
    {
        tag: "Device Reviews",
        date: "Oct 18, 2026",
        author: "Elena Rostova",
        readTime: "4 min read",
        title: "Top 5 Disposable Vapes of 2026: Flavor & Longevity",
        description:
            "We put the newest disposable vapes to the test. Discover which devices offer the best flavor consistency and puff count.",
        image: "blog_2.png",
    },
    {
        tag: "E-Liquid Science",
        date: "Oct 12, 2026",
        author: "Dr. K. Vance",
        readTime: "6 min read",
        title: "Understanding E-Liquid Ratios: PG vs VG Explained",
        description:
            "Confused about Propylene Glycol and Vegetable Glycerin? We break down the differences and how they affect your vape.",
        image: "blog_3.png",
    },
    {
        tag: "Heated Tobacco",
        date: "Oct 05, 2026",
        author: "Tariq Al-Mansoor",
        readTime: "7 min read",
        title: "IQOS ILUMA vs Traditional Vaping: The Complete UAE Comparison",
        description:
            "An in-depth breakdown of TEREA smartcore induction sticks vs standard pod systems for adult smokers in Dubai and UAE.",
        image: "hero_slide_1.jpg",
    },
    {
        tag: "Insights",
        date: "Sep 28, 2026",
        author: "Sarah Jenkins",
        readTime: "5 min read",
        title: "Nicotine Salt vs Freebase: Which Delivers Better Satisfaction?",
        description:
            "Explore the smoother absorption and instant satisfaction of salt nic formulations compared to standard freebase nicotine blends.",
        image: "hero_slide_3.jpg",
    },
];

export default function BlogSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoRotate, setAutoRotate] = useState(false);

    useEffect(() => {
        if (!autoRotate) return;
        const timer = window.setInterval(() => {
            setActiveIndex((index) => (index + 1) % articles.length);
        }, 5000);
        return () => window.clearInterval(timer);
    }, [autoRotate]);

    const changeArticle = (direction: number) => {
        setActiveIndex(
            (index) => (index + direction + articles.length) % articles.length,
        );
    };

    return (
        <section className="relative mx-auto w-full max-w-[950px] scroll-mt-28 overflow-hidden px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
            <div className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
            <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/5 blur-3xl" />
            <header className="mb-8 flex flex-col gap-4 sm:mb-12 sm:gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="font-cinzel text-xs font-bold uppercase tracking-[0.24em] text-[#064e3b]">
                        Blog &amp; Guides · 3D Showcase
                    </p>
                    <h2 className="mt-2 font-luxury text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
                        Vape Culture &amp; Insights
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
                        Immerse yourself in expert masterclasses, flavor
                        science, and the latest vaping trends across UAE.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setAutoRotate((running) => !running)}
                        className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-bold text-neutral-600 shadow-sm transition hover:border-[#064e3b] hover:text-[#064e3b]"
                    >
                        {autoRotate ? <Pause size={13} /> : <Play size={13} />}
                        {autoRotate ? "Playing" : "Paused"}
                    </button>
                    <a
                        href="#blog"
                        className="rounded-full bg-[#064e3b] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#022c22]"
                    >
                        View All Articles
                    </a>
                </div>
            </header>

            <div className="relative my-2 flex h-[520px] w-full select-none items-center justify-center [perspective:1400px] sm:h-[560px] md:h-[580px]">
                {articles.map((article, index) => {
                    let offset = index - activeIndex;
                    if (offset > articles.length / 2) offset -= articles.length;
                    if (offset < -articles.length / 2)
                        offset += articles.length;
                    const distance = Math.abs(offset);
                    const scale =
                        distance === 0 ? 1 : distance === 1 ? 0.9 : 0.75;

                    return (
                        <article
                            key={article.title}
                            aria-hidden={distance > 2}
                            className={`absolute left-1/2 top-1/2 flex h-[470px] w-[86vw] max-w-[340px] -translate-x-1/2 -translate-y-1/2 transform-gpu flex-col overflow-hidden rounded-[28px] bg-white transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] [backface-visibility:hidden] sm:h-[510px] sm:max-w-[390px] sm:rounded-[32px] md:h-[530px] md:max-w-[430px] ${distance === 0 ? "border-2 border-emerald-500/70 shadow-[0_20px_50px_rgba(6,78,59,0.18)] ring-4 ring-emerald-500/15" : "border border-neutral-200/90 shadow-[0_10px_28px_rgba(0,0,0,0.06)]"}`}
                            style={{
                                zIndex:
                                    distance === 0
                                        ? 30
                                        : distance === 1
                                          ? 20
                                          : 0,
                                opacity:
                                    distance > 1
                                        ? 0
                                        : distance === 1
                                          ? 0.85
                                          : 1,
                                pointerEvents: distance > 1 ? "none" : "auto",
                                transform: `translateX(${offset * 70}%) translateY(${distance > 1 ? -80 : 0}px) rotateY(${offset * -15}deg) scale(${scale})`,
                            }}
                        >
                            <div className="relative h-[220px] shrink-0 overflow-hidden bg-neutral-100 sm:h-[240px]">
                                <img
                                    src={`https://vapmart.webestone.net/images/${article.image}`}
                                    alt={article.title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-amber-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#103d32]">
                                    {article.tag}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-gradient-to-b from-white to-[#fafcfb] p-5 sm:p-6">
                                <div>
                                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500">
                                        <span>{article.readTime}</span>
                                        <span>{article.date}</span>
                                        <span>By {article.author}</span>
                                    </div>
                                    <p className="mb-2 font-cinzel text-[10px] font-bold uppercase tracking-[0.18em] text-[#064e3b]">
                                        {index === 0
                                            ? "Featured Article"
                                            : "Recommended"}
                                    </p>
                                    <h3 className="mb-2 line-clamp-2 font-luxury text-base font-extrabold leading-snug text-neutral-900 sm:text-lg md:text-xl">
                                        {article.title}
                                    </h3>
                                    <p className="line-clamp-3 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                                        {article.description}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
                                    <span className="font-cinzel text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                                        Article{" "}
                                        {String(index + 1).padStart(2, "0")} /
                                        05
                                    </span>
                                    <a
                                        href="#blog"
                                        className="text-sm font-bold text-[#064e3b] hover:text-[#022c22]"
                                    >
                                        Read Full Guide{" "}
                                        <ArrowRight
                                            size={14}
                                            className="ml-1 inline"
                                        />
                                    </a>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
                <button
                    type="button"
                    aria-label="Previous article"
                    onClick={() => changeArticle(-1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#064e3b] shadow-sm transition hover:bg-[#064e3b] hover:text-white"
                >
                    <ArrowLeft size={17} />
                </button>
                {articles.map((article, index) => (
                    <button
                        key={article.title}
                        type="button"
                        aria-label={`Show article ${index + 1}`}
                        aria-current={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-[#064e3b]" : "w-2 bg-neutral-300 hover:bg-neutral-500"}`}
                    />
                ))}
                <button
                    type="button"
                    aria-label="Next article"
                    onClick={() => changeArticle(1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#064e3b] shadow-sm transition hover:bg-[#064e3b] hover:text-white"
                >
                    <ArrowRight size={17} />
                </button>
            </div>
        </section>
    );
}
