"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const flavors = [
    {
        name: "Strawberry Garden",
        image: "strawberry.jpg",
        tag: "SIGNATURE BLEND",
        family: "LUSH ORCHARD & BERRIES",
        description:
            "Sun-drenched California strawberries picked at peak ripeness, infused with delicate nectar sweetness and a subtle velvet finish.",
        notes: ["Sweet Strawberry", "Wild Berry Nectar", "Velvet Cream"],
        sweet: 5,
        ice: 1,
    },
    {
        name: "Watermelon Glacial Ice",
        image: "watermelon.jpg",
        tag: "GLOBAL BEST SELLER",
        family: "ARCTIC FRUIT & MENTHOL",
        description:
            "Crisp succulent red watermelon layered with crushed arctic glacier menthol for an exhilarating, refreshing finish.",
        notes: [
            "Sweet Watermelon Rind",
            "Succulent Red Melon",
            "Alpine Glacier Freeze",
        ],
        sweet: 4,
        ice: 5,
    },
    {
        name: "Cool Spearmint Frost",
        image: "mint.jpg",
        tag: "ARCTIC HIT",
        family: "ARCTIC FROST & MENTHOL",
        description:
            "Fresh garden spearmint leaves crushed over pure crystalline menthol, delivering crisp palate-cleansing coolness on every draw.",
        notes: [
            "Fresh Garden Spearmint",
            "Peppermint Essence",
            "Crystal Menthol Chill",
        ],
        sweet: 2,
        ice: 5,
    },
    {
        name: "Juicy Georgia Peach",
        image: "peach.png",
        tag: "POPULAR PICK",
        family: "LUSH ORCHARD & BERRIES",
        description:
            "Golden velvety Georgia peach nectar layered with delicate white blossom honey and a light, soothing vapor exhale.",
        notes: [
            "Golden Peach Skin",
            "Velvety Peach Nectar",
            "Wild Blossom Honey",
        ],
        sweet: 4,
        ice: 3,
    },
    {
        name: "Purple Concord Grape",
        image: "grape.png",
        tag: "TRENDING",
        family: "LUSH ORCHARD & BERRIES",
        description:
            "Deep vineyard Concord grapes bursting with natural tart sweetness, candied skin zest, and sparkling chilled vapor.",
        notes: [
            "Concord Grape Skin",
            "Purple Grape Jam",
            "Chilled Soda Finish",
        ],
        sweet: 4,
        ice: 4,
    },
    {
        name: "Blueberry Mountain Mist",
        image: "blueberry.png",
        tag: "TOP RATED",
        family: "ARCTIC FROST & MENTHOL",
        description:
            "Plump wild forest blueberries chilled with a touch of crushed mountain snow and tart citrus undertones.",
        notes: [
            "Fresh Wild Blueberries",
            "Tart Blackberry Juice",
            "Mountain Breeze Ice",
        ],
        sweet: 3,
        ice: 4,
    },
    {
        name: "Golden Hawaiian Pineapple",
        image: "pineapple.png",
        tag: "ISLAND EXOTIC",
        family: "TROPICAL & CITRUS",
        description:
            "Tangy sweet Maui golden pineapples dripping with sun-drenched island juice and cool coastal sea spray.",
        notes: [
            "Tangy Pineapple Crown",
            "Golden Island Core",
            "Chilled Coconut Mist",
        ],
        sweet: 4,
        ice: 4,
    },
];

export default function FlavorSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const activeFlavor = flavors[activeIndex];

    useEffect(() => {
        if (!autoRotate) return;
        const timer = window.setInterval(() => {
            setActiveIndex((index) => (index + 1) % flavors.length);
        }, 5000);
        return () => window.clearInterval(timer);
    }, [autoRotate]);

    const changeFlavor = (direction: number) => {
        setActiveIndex(
            (index) => (index + direction + flavors.length) % flavors.length,
        );
    };

    return (
        <section
            id="flavors"
            className="relative mx-auto my-16 w-full max-w-[1380px] select-none px-4 sm:px-6 md:my-24"
        >
            <header className="mb-6 flex flex-col items-center text-center sm:mb-10">
                <p className="font-cinzel text-[11px] font-bold uppercase tracking-[0.25em] text-[#064e3b] sm:text-xs">
                    Taste the Extraordinary · 12 Artisan Blends
                </p>
                <h2 className="mt-2 font-luxury text-3xl font-extrabold text-neutral-900 sm:text-4xl md:text-5xl">
                    Signature Flavours
                </h2>
                <p className="mt-3 max-w-2xl text-xs leading-relaxed text-neutral-500 sm:text-sm">
                    Rotate the artisan dial to explore hand-crafted tasting
                    notes, sensory sweetness, and cooling ice profiles.
                </p>
            </header>

            <div className="relative flex flex-col items-center overflow-hidden rounded-[36px] border-2 border-[#064e3b]/20 bg-gradient-to-b from-[#f8fbf9] via-white to-[#f2f8f5] p-5 shadow-[0_24px_70px_-15px_rgba(6,78,59,0.14)] sm:rounded-[48px] sm:p-10 md:p-12">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-emerald-500/10 via-amber-400/5 to-transparent" />
                <div className="z-20 mb-3 flex w-full items-center justify-end">
                    <button
                        type="button"
                        onClick={() => setAutoRotate((running) => !running)}
                        className="flex items-center gap-2 rounded-full border border-[#064e3b]/30 bg-white px-4 py-1.5 text-xs font-black text-[#064e3b] shadow-sm transition hover:bg-emerald-50"
                    >
                        {autoRotate ? <Pause size={13} /> : <Play size={13} />}
                        {autoRotate ? "AUTO-ROTATING" : "PAUSED"}
                    </button>
                </div>

                <div className="relative my-4 flex h-[280px] w-full max-w-[960px] items-center justify-center sm:h-[320px] md:h-[350px]">
                    <div className="absolute h-44 w-44 rounded-full border border-[#064e3b]/10 bg-white/60 shadow-[0_10px_40px_rgba(6,78,59,0.08)] sm:h-52 sm:w-52" />
                    {flavors.map((flavor, index) => {
                        const angle =
                            (index / flavors.length) * Math.PI * 2 -
                            Math.PI / 2;
                        const left = 50 + Math.cos(angle) * 39;
                        const top = 50 + Math.sin(angle) * 40;
                        const isActive = index === activeIndex;

                        return (
                            <button
                                key={flavor.name}
                                type="button"
                                aria-label={`Show ${flavor.name}`}
                                aria-pressed={isActive}
                                onClick={() => setActiveIndex(index)}
                                className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center transition-all duration-500 hover:scale-110 ${isActive ? "z-30 scale-110 opacity-100" : "opacity-75"}`}
                                style={{ left: `${left}%`, top: `${top}%` }}
                            >
                                <span
                                    className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 bg-white shadow-md sm:h-[72px] sm:w-[72px] ${isActive ? "border-[#d97706] ring-4 ring-amber-400/15" : "border-white"}`}
                                >
                                    <img
                                        src={`https://vapmart.webestone.net/images/flavors/${flavor.image}`}
                                        alt=""
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </span>
                                <span
                                    className={`mt-1 max-w-20 text-center text-[9px] font-bold leading-tight sm:max-w-28 sm:text-[10px] ${isActive ? "text-[#064e3b]" : "text-neutral-500"}`}
                                >
                                    {flavor.name}
                                </span>
                            </button>
                        );
                    })}
                    <div className="pointer-events-none absolute z-20 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-xl sm:h-24 sm:w-24">
                        <img
                            src={`https://vapmart.webestone.net/images/flavors/${activeFlavor.image}`}
                            alt={activeFlavor.name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <button
                        type="button"
                        aria-label="Previous flavor"
                        onClick={() => changeFlavor(-1)}
                        className="absolute left-0 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#064e3b]/30 bg-white text-[#064e3b] shadow-sm transition hover:bg-[#064e3b] hover:text-white sm:left-4"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        type="button"
                        aria-label="Next flavor"
                        onClick={() => changeFlavor(1)}
                        className="absolute right-0 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#064e3b]/30 bg-white text-[#064e3b] shadow-sm transition hover:bg-[#064e3b] hover:text-white sm:right-4"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                <article className="relative z-20 mt-3 flex w-full max-w-2xl flex-col items-center overflow-hidden rounded-3xl border-2 border-[#064e3b]/20 bg-white/95 p-6 text-center shadow-[0_20px_50px_-10px_rgba(6,78,59,0.12)] sm:p-8">
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#064e3b] via-[#d97706] to-[#064e3b]" />
                    <div className="mb-2 flex items-center gap-2 pt-1">
                        <span className="font-cinzel text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#064e3b]">
                            {activeFlavor.tag}
                        </span>
                        <span className="text-neutral-300">|</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                            {activeFlavor.family}
                        </span>
                    </div>
                    <h3 className="mb-2 font-luxury text-2xl font-extrabold leading-tight text-[#064e3b] sm:text-3xl md:text-4xl">
                        {activeFlavor.name}
                    </h3>
                    <p className="mb-4 max-w-lg text-xs leading-relaxed text-neutral-700 sm:text-sm">
                        {activeFlavor.description}
                    </p>
                    <div className="mb-4 grid w-full grid-cols-3 gap-2 rounded-2xl border border-emerald-200/80 bg-emerald-50/70 px-3 py-2.5 text-[10px] sm:text-xs">
                        {activeFlavor.notes.map((note, index) => (
                            <div key={note} className="flex flex-col gap-1">
                                <span className="font-bold uppercase tracking-wider text-[#064e3b]/60">
                                    {index === 0
                                        ? "Top Note"
                                        : index === 1
                                          ? "Heart Note"
                                          : "Base Finish"}
                                </span>
                                <span className="font-semibold text-[#064e3b]">
                                    {note}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full flex-wrap items-center justify-between gap-3">
                        <div className="flex gap-4 text-xs font-semibold text-neutral-600">
                            <span>Sweet: {activeFlavor.sweet}/5</span>
                            <span>Ice: {activeFlavor.ice}/5</span>
                            <span>12+ Blends</span>
                        </div>
                        <a
                            href="#shop"
                            className="inline-flex items-center gap-2 rounded-full bg-[#064e3b] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#022c22]"
                        >
                            Shop {activeFlavor.name}
                            <ChevronRight size={15} />
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}
