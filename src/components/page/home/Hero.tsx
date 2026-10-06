"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const carouselItems = [
    {
        tag: "Exclusive Offer up to 10% OFF",
        heading: "Buy Authentic Vape in Dubai",
        accent: "— Fast Delivery, Best Prices",
        description:
            "Shop premium disposable vapes, pod systems, and starter kits from top brands. Delivered anywhere in Dubai & UAE.",
        imageUrl: "https://vapmart.webestone.net/images/hero_slide_1.jpg",
    },
    {
        tag: "New Arrivals",
        heading: "New Arrivals: Premium Pods",
        accent: "Compact & Powerful",
        description:
            "Upgrade your vaping experience with the latest pod systems. Long battery life and intense flavor production.",
        imageUrl: "https://vapmart.webestone.net/images/hero_slide_2.jpg",
    },
    {
        tag: "Top Rated",
        heading: "Best E-Liquids of 2024",
        accent: "Taste the Difference",
        description:
            "Explore our new collection of premium e-liquids featuring exotic fruit blends and classic tobacco flavors.",
        imageUrl: "https://vapmart.webestone.net/images/hero_slide_3.jpg",
    },
    {
        tag: "Flash Sale",
        heading: "Mega Sale on Starter Kits",
        accent: "Begin Your Journey",
        description:
            "Perfect for beginners. Get everything you need to start vaping at an unbeatable price today.",
        imageUrl: "https://vapmart.webestone.net/images/hero_slide_4.jpg",
    },
];

export default function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);

    const showPrevious = () => {
        setActiveSlide(
            (current) =>
                (current - 1 + carouselItems.length) % carouselItems.length,
        );
    };

    const showNext = () => {
        setActiveSlide((current) => (current + 1) % carouselItems.length);
    };

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;

        const interval = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % carouselItems.length);
        }, 5000);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <section
            aria-label="Featured products"
            aria-roledescription="carousel"
            className="relative w-full min-h-[580px] sm:min-h-[640px] md:h-[650px] lg:h-[700px] overflow-hidden bg-gradient-to-br from-[#064e3b] via-[#022c22] to-[#064e3b] select-none"
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] rounded-full bg-emerald-500/20 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full bg-teal-500/20 blur-[120px]" />
            <div className="absolute bottom-[-1px] left-0 w-full z-30 text-white">
                <svg
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    className="h-10 w-full fill-current sm:h-16 md:h-24"
                    aria-hidden="true"
                >
                    <path d="M0,80 C180,30 280,30 430,72 C560,110 740,120 900,85 C1035,55 1230,40 1440,78 L1440,120 L0,120 Z" />
                </svg>
            </div>

            <button
                type="button"
                aria-label="Previous slide"
                onClick={showPrevious}
                className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white hover:text-[#064e3b] transition-colors shadow-lg cursor-pointer"
            >
                <ChevronLeft size={22} aria-hidden="true" />
            </button>

            <button
                type="button"
                aria-label="Next slide"
                onClick={showNext}
                className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white hover:text-[#064e3b] transition-colors shadow-lg cursor-pointer"
            >
                <ChevronRight size={22} aria-hidden="true" />
            </button>

            <div className="absolute inset-0 z-20">
                <div
                    className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{
                        width: `${carouselItems.length * 100}%`,
                        transform: `translateX(-${(activeSlide / carouselItems.length) * 100}%)`,
                    }}
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={`${item.heading}-${index}`}
                            className="w-full h-full flex items-center relative"
                            style={{ width: `${100 / carouselItems.length}%` }}
                        >
                            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 w-full flex flex-col md:flex-row items-center justify-between pb-16 md:pb-12">
                                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20 pt-4 md:pt-10">
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-emerald-400/15 to-amber-500/15 border border-amber-400/30 mb-3 sm:mb-6 shadow-sm backdrop-blur-md">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                        <span className="font-cinzel text-amber-300 font-bold text-[10px] sm:text-[11px] tracking-[0.25em] uppercase">
                                            {item.tag}
                                        </span>
                                    </div>

                                    <h1 className="font-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-white leading-[1.12] mb-3 sm:mb-6 tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
                                        {item.heading}
                                        <span className="block mt-1 sm:mt-2 font-luxury italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 drop-shadow-[0_2px_15px_rgba(245,158,11,0.3)]">
                                            {item.accent}
                                        </span>
                                    </h1>

                                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-emerald-50/85 leading-relaxed mb-6 sm:mb-10 max-w-sm sm:max-w-lg font-normal tracking-wide line-clamp-3 sm:line-clamp-none">
                                        {item.description}
                                    </p>

                                    <button className="group relative bg-white text-[#064e3b] px-7 py-3 sm:px-9 sm:py-4 rounded-full font-extrabold text-sm sm:text-base hover:bg-emerald-50 transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(52,211,153,0.35)] flex items-center gap-2.5 sm:gap-3 overflow-hidden cursor-pointer">
                                        <span className="relative z-10">
                                            Explore Collection
                                        </span>
                                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#064e3b] text-white flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:bg-[#022c22] transition-all">
                                            <ArrowRight
                                                size={14}
                                                className="group-hover:translate-x-0.5 transition-transform"
                                            />
                                        </div>
                                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent pointer-events-none" />
                                    </button>
                                </div>

                                <div className="w-full md:w-1/2 h-[220px] sm:h-[320px] md:h-[460px] lg:h-[560px] relative z-10 flex items-center justify-center mt-4 md:mt-0 px-2 sm:px-4">
                                    <div className="relative w-full max-w-[260px] sm:max-w-[360px] md:max-w-[480px] aspect-square rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-2 border-emerald-400/20 group/heroImg backdrop-blur-sm bg-black/20">
                                        <img
                                            src={item.imageUrl}
                                            alt={`${item.heading} ${item.accent}`}
                                            loading={
                                                index === 0 ? "eager" : "lazy"
                                            }
                                            className="absolute inset-0 h-full w-full object-cover transform group-hover/heroImg:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/60 via-transparent to-transparent pointer-events-none" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[24px] sm:rounded-[36px] pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2 sm:gap-3"
                aria-label="Choose slide"
            >
                {carouselItems.map((item, index) => (
                    <button
                        key={item.heading}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2 rounded-full transition-all duration-500 ease-out ${index === activeSlide ? "w-8 sm:w-10 bg-white" : "w-2 bg-white/40 hover:bg-white/80"}`}
                    />
                ))}
            </div>
        </section>
    );
}
