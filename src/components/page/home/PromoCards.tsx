import { ArrowRight } from "lucide-react";
import Link from "next/link";

const promotions = [
    {
        tag: "Exclusive",
        title: "Vape Kits & Pod Systems",
        description:
            "High-performance vape kits designed for smooth flavor and long battery life.",
        action: "Shop Kits",
        image: "https://vapmart.webestone.net/images/cat_vape_kits.png",
        imageAlt: "Vape Kits",
        color: "green",
    },
    {
        tag: "New Arrival",
        title: "Premium Vape Collection",
        description:
            "Discover top-tier vape devices crafted for performance and style.",
        action: "Shop Premium",
        image: "https://vapmart.webestone.net/images/product-3.png",
        imageAlt: "Premium Vape",
        color: "amber",
    },
];

export default function PromoCards() {
    return (
        <section className="mx-auto mt-8 mb-8 grid max-w-[1400px] grid-cols-1 gap-6 px-4 sm:mt-12 sm:gap-8 sm:px-6 md:mt-16 md:grid-cols-2">
            {promotions.map((promotion) => {
                const isGreen = promotion.color === "green";

                return (
                    <article
                        key={promotion.title}
                        className={`group relative min-h-[250px] overflow-hidden rounded-[24px] border transition-all duration-500 hover:-translate-y-1 sm:h-[300px] sm:rounded-[32px] md:h-[320px] ${
                            isGreen
                                ? "border-emerald-800 bg-gradient-to-br from-[#064e3b] to-emerald-900 shadow-[0_20px_40px_-15px_rgba(6,78,59,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(6,78,59,0.4)]"
                                : "border-amber-600 bg-gradient-to-br from-[#d97706] to-amber-700 shadow-[0_20px_40px_-15px_rgba(217,119,6,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(217,119,6,0.4)]"
                        }`}
                    >
                        <div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay" />
                        <div className="relative z-10 flex h-full w-full flex-col justify-center p-6 pr-20 sm:w-2/3 sm:p-10 sm:pr-0 md:p-12">
                            <span
                                className={`mb-1.5 font-cinzel text-xs font-extrabold uppercase tracking-[0.25em] sm:mb-2 sm:text-sm ${
                                    isGreen
                                        ? "text-emerald-400"
                                        : "text-amber-200"
                                }`}
                            >
                                {promotion.tag}
                            </span>
                            <h2 className="mb-2.5 font-luxury text-2xl font-extrabold leading-tight text-white drop-shadow-md sm:mb-4 sm:text-3xl lg:text-4xl">
                                {promotion.title}
                            </h2>
                            <p
                                className={`mb-5 line-clamp-2 text-xs sm:mb-8 sm:text-sm ${
                                    isGreen
                                        ? "text-emerald-100/80"
                                        : "text-amber-100/80"
                                }`}
                            >
                                {promotion.description}
                            </p>
                            <Link
                                href={
                                    isGreen
                                        ? "/collections?category=Pod%20Systems"
                                        : "/collections?category=Disposables"
                                }
                                className={`group/button relative flex w-max items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 pr-4 text-xs font-bold shadow-lg transition-all duration-300 hover:pr-6 sm:px-6 sm:py-3 sm:text-sm ${
                                    isGreen
                                        ? "text-[#064e3b] hover:bg-emerald-50"
                                        : "text-[#d97706] hover:bg-amber-50"
                                }`}
                            >
                                <span className="relative z-10">
                                    {promotion.action}
                                </span>
                                <ArrowRight
                                    size={15}
                                    className="relative z-10 transition-transform duration-300 group-hover/button:translate-x-1"
                                    aria-hidden="true"
                                />
                                <span
                                    className={`pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent transition-transform duration-700 group-hover/button:translate-x-full ${
                                        isGreen
                                            ? "via-emerald-400/20"
                                            : "via-amber-400/20"
                                    }`}
                                />
                            </Link>
                        </div>
                        <img
                            src={promotion.image}
                            alt={promotion.imageAlt}
                            className={`absolute -right-4 h-auto w-44 object-contain opacity-50 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:scale-110 sm:w-56 sm:opacity-90 md:w-64 md:opacity-100 ${
                                isGreen
                                    ? "-bottom-4 sm:-bottom-8 group-hover:-rotate-6"
                                    : "bottom-0 group-hover:rotate-6"
                            }`}
                        />
                    </article>
                );
            })}
        </section>
    );
}
