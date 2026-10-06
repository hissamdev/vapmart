import Link from "next/link";

const categories = [
    {
        title: "Vape Kits",
        label: "Popular",
        eyebrow: "Best Sellers",
        image: "https://vapmart.webestone.net/images/cat_vape_kits.png",
        overlay:
            "bg-gradient-to-t from-blue-900/80 to-black/90 via-black/40 to-black/20",
    },
    {
        title: "Disposables",
        label: "Trending",
        eyebrow: "New Arrivals",
        image: "https://vapmart.webestone.net/images/cat_disposables.png",
        overlay:
            "bg-gradient-to-t from-emerald-900/80 to-black/90 via-black/40 to-black/20",
    },
    {
        title: "E-Liquids",
        label: "Hot",
        eyebrow: "Top Rated",
        image: "https://vapmart.webestone.net/images/vape_hero_sky.png",
        overlay:
            "bg-gradient-to-t from-amber-900/80 to-black/90 via-black/40 to-black/20",
    },
    {
        title: "Pod Systems",
        label: "Featured",
        eyebrow: "Compact & Sleek",
        image: "https://vapmart.webestone.net/images/prod_pod.png",
        overlay:
            "bg-gradient-to-t from-purple-900/80 to-black/90 via-black/40 to-black/20",
    },
    {
        title: "Nicotine Pouches",
        label: "New",
        eyebrow: "All Day Fresh",
        image: "https://vapmart.webestone.net/images/prod_disposable.png",
        overlay:
            "bg-gradient-to-t from-teal-900/80 to-black/90 via-black/40 to-black/20",
    },
    {
        title: "Accessories & Coils",
        label: "Supplies",
        eyebrow: "Essential Gear",
        image: "https://vapmart.webestone.net/images/product-2.png",
        overlay:
            "bg-gradient-to-t from-rose-900/80 to-black/90 via-black/40 to-black/20",
    },
];

const categoryHref = (title: string) => {
    const filter =
        title === "Disposables" ||
        title === "E-Liquids" ||
        title === "Pod Systems"
            ? title
            : undefined;
    return filter
        ? `/collections?category=${encodeURIComponent(filter)}`
        : "/collections";
};

export default function CategoryGrid() {
    return (
        <section
            id="categories"
            className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20"
        >
            <div className="flex flex-col items-center mb-10 sm:mb-16 text-center px-2">
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#064e3b] rounded-full" />
                    <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#064e3b] uppercase">
                        COLLECTION
                    </span>
                    <span className="w-6 h-[2px] bg-[#064e3b] rounded-full" />
                </div>
                <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mb-3 sm:mb-4 tracking-tight">
                    Shop by Category
                </h2>
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#064e3b]" />
                    <div className="w-2 h-2 rotate-45 bg-[#064e3b]" />
                    <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#064e3b]" />
                </div>
                <p className="text-neutral-500 max-w-2xl text-xs sm:text-[15px] leading-relaxed">
                    Discover our carefully curated collection of premium vaping
                    products designed for the ultimate experience.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 px-1 sm:px-0">
                {categories.map(
                    ({ title, label, eyebrow, image, overlay }, index) => (
                        <article
                            key={title}
                            className="group relative h-[210px] sm:h-[280px] md:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_35px_rgba(6,78,59,0.25)] transition-all duration-500 border border-neutral-200/60 flex flex-col justify-between p-3 sm:p-5"
                        >
                            <div className="absolute inset-0 bg-neutral-900">
                                <Link
                                    href={categoryHref(title)}
                                    aria-label={`Shop ${title}`}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={image}
                                        alt=""
                                        className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-95"
                                    />
                                    <div
                                        className={`absolute inset-0 ${overlay} transition-opacity duration-500`}
                                    />
                                </Link>
                            </div>

                            <div className="relative z-10 flex justify-between items-start w-full">
                                <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[8px] sm:text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">
                                    {label.toUpperCase()}
                                </span>
                                <span className="text-white/60 font-black text-lg sm:text-2xl">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="relative z-10 flex flex-col items-start transform transition-transform duration-300 group-hover:-translate-y-1">
                                <span className="font-cinzel text-amber-400 font-bold text-[8px] sm:text-[10px] tracking-[0.15em] mb-0.5 sm:mb-1 drop-shadow-md">
                                    {eyebrow}
                                </span>
                                <h3 className="font-luxury text-white text-sm sm:text-lg md:text-xl font-bold mb-2 drop-shadow-md line-clamp-1">
                                    <Link href={categoryHref(title)}>
                                        {title}
                                    </Link>
                                </h3>
                                <Link
                                    href={categoryHref(title)}
                                    className="bg-white/15 backdrop-blur-md border border-white/25 text-white px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full font-semibold text-[10px] sm:text-xs group-hover:bg-white group-hover:text-[#064e3b] transition-all flex items-center gap-1 shadow-sm"
                                >
                                    <span>Shop</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11"
                                        height="11"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-right group-hover:translate-x-0.5 transition-transform"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ),
                )}
            </div>
        </section>
    );
}
