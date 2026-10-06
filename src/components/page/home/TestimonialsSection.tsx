import { BadgeCheck, Star } from "lucide-react";

const testimonials = [
    {
        initials: "JD",
        name: "John Doe",
        type: "Verified Buyer",
        title: "Super fast delivery & 100% authentic",
        quote:
            "Best vape store in Dubai! Delivery arrived within hours, and the scratch-off authenticity code checked out directly on the manufacturer's site.",
    },
    {
        initials: "SM",
        name: "Sarah M.",
        type: "Verified Buyer",
        title: "Genuine products guaranteed",
        quote:
            "I've bought knock-offs from random stores before, but Vape Mart only delivers original factory-sealed products. Truly unmatched service.",
    },
    {
        initials: "AK",
        name: "Alex K.",
        type: "Verified Buyer",
        title: "Great flavor selection & support",
        quote:
            "Their premium collection is always in stock with fresh batches. Smooth checkout, great customer care, and unbeatable prices.",
    },
    {
        initials: "MN",
        name: "Mohammed Al-Nuaimi",
        type: "Verified Buyer",
        title: "Always fresh stock & fast WhatsApp response",
        quote:
            "Ordered TEREA and disposable kits multiple times. Delivery always on time and verified original seal. Customer service is 10/10.",
    },
    {
        initials: "ER",
        name: "Elena Rostova",
        type: "Verified Buyer",
        title: "Best disposable vape deals in UAE",
        quote:
            "Authentic devices with authentic QR codes. Super responsive team, discreet delivery, and prices are better than physical shops.",
    },
    {
        initials: "TF",
        name: "Tariq Farooq",
        type: "Verified Buyer",
        title: "Flawless experience every single order",
        quote:
            "Top quality pod devices and pods. Packaging is tamper-proof with cold ice packs. Recommended to all my friends!",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="relative mb-0 overflow-hidden border-t border-emerald-900 bg-[#064e3b] py-12 text-white sm:py-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
            <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/2 rounded-full bg-emerald-500 opacity-20 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-teal-600 opacity-20 blur-[130px]" />
            <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center px-4 sm:px-6">
                <div className="mb-8 flex max-w-2xl flex-col items-center px-2 text-center sm:mb-10">
                    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-emerald-300 shadow-sm backdrop-blur-md sm:mb-4 sm:px-4 sm:py-1.5">
                        100% Authorized &amp; Certified
                    </p>
                    <h2 className="mb-2.5 font-luxury text-2xl font-extrabold tracking-tight text-white drop-shadow-sm sm:mb-3 sm:text-3xl md:text-4xl lg:text-5xl">
                        Official Authorized Premium Retailer
                    </h2>
                    <p className="text-xs leading-relaxed text-emerald-100/80 sm:text-sm md:text-base">
                        Directly partnered with global leaders to ensure 100% genuine hardware, verifiable security codes, and tamper-proof packaging.
                    </p>
                </div>

                <div className="mb-8 flex w-full flex-col items-center justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row">
                    <div className="flex items-center gap-3.5 text-center sm:text-left">
                        <div className="flex -space-x-2.5" aria-hidden="true">
                            {testimonials.slice(0, 4).map(({ initials }) => (
                                <span
                                    key={initials}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#064e3b] bg-gradient-to-br from-emerald-400 to-teal-700 text-xs font-bold text-white shadow-sm"
                                >
                                    {initials}
                                </span>
                            ))}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white">Trusted by 20,000+ Customers</p>
                            <p className="text-xs text-emerald-100/70">Verified UAE &amp; GCC buyers</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-5 py-2.5 shadow-sm backdrop-blur-md">
                        <div className="flex gap-1" aria-label="Rated five out of five">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star key={index} size={15} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                            ))}
                        </div>
                        <span className="text-base font-black text-white">4.9 / 5</span>
                        <span className="text-xs text-emerald-200/70">(1,200+ reviews)</span>
                    </div>
                </div>

                <div className="mb-8 w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
                    <div className="reviews-marquee-track flex w-max animate-[reviewsMarquee_34s_linear_infinite] gap-5 hover:[animation-play-state:paused]">
                    {[...testimonials, ...testimonials].map(({ initials, name, type, title, quote }, index) => (
                        <article
                            key={`${name}-${index}`}
                            aria-hidden={index >= testimonials.length}
                            className="w-[300px] shrink-0 select-none rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.12] sm:w-[360px] sm:p-6 md:w-[390px] flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-3 flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-emerald-400 to-teal-600 text-sm font-bold text-white shadow-inner">
                                            {initials}
                                        </span>
                                        <div>
                                            <h4 className="text-sm font-bold text-white">{name}</h4>
                                            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                                                <BadgeCheck size={11} aria-hidden="true" />
                                                {type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-0.5" aria-label="Rated five out of five">
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <Star key={starIndex} size={12} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                                        ))}
                                    </div>
                                </div>
                                <h3 className="mb-1.5 text-sm font-semibold text-white/95">{title}</h3>
                                <p className="text-xs italic leading-relaxed text-emerald-100/75">&ldquo;{quote}&rdquo;</p>
                            </div>
                        </article>
                    ))}
                    </div>
                </div>

                <div className="flex w-full flex-wrap items-center justify-around gap-4 rounded-2xl border border-white/10 bg-black/25 px-6 py-4 text-xs font-semibold text-emerald-100/90 shadow-inner md:text-sm">
                    {[
                        "100% Secure Checkout",
                        "Fast UAE Express Delivery",
                        "30-Day Money Back",
                        "Original Brands Guaranteed",
                    ].map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                            <BadgeCheck size={16} className="text-emerald-300" aria-hidden="true" />
                            <span>{benefit}</span>
                        </div>
                    ))}
                    </div>
            </div>
        </section>
    );
}
