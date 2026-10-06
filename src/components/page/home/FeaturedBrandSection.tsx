import { ArrowRight, ShoppingCart } from "lucide-react";

const featuredProducts = [
    {
        name: "Al Fakher crown bar ultra 25000 puff 5mg in UAE",
        price: "Dhs. 45.00",
        previousPrice: "Dhs. 50.00",
        discount: "10% OFF",
    },
    {
        name: "Al Fakher 30mg Salt Nicotine E Liquid 30ml in UAE",
        price: "Dhs. 35.00",
        previousPrice: "Dhs. 45.00",
        discount: "22% OFF",
    },
    {
        name: "Al Fakher Crown Bar E Hose X 60000 puff 6mg vape",
        price: "Dhs. 55.00",
        previousPrice: "",
        discount: "15% OFF",
    },
    {
        name: "Elf bar Ice King Pro 40k Puffs 50mg Disposable",
        price: "Dhs. 48.00",
        previousPrice: "Dhs. 50.00",
        discount: "4% OFF",
    },
    {
        name: "Elf bar Raya D3 25k Puffs Disposable Vape 50mg",
        price: "Dhs. 45.00",
        previousPrice: "Dhs. 50.00",
        discount: "10% OFF",
    },
    {
        name: "Waka Blade 50000 puffs 50mg Nicotine Adjustable",
        price: "Dhs. 50.00",
        previousPrice: "Dhs. 55.00",
        discount: "9% OFF",
    },
];

export default function FeaturedBrandSection() {
    return (
        <section className="featured-brand-section w-full px-5 py-10 sm:my-16 md:my-0 md:px-[60px] md:py-[60px]">
            <div className="flex flex-col overflow-hidden rounded-[20px] border border-emerald-500/15 bg-gradient-to-br from-[#022c22] to-[#064e3b] p-5 md:flex-row">
                <div className="flex shrink-0 flex-col items-center justify-center rounded-[20px] bg-white px-7 py-10 text-center md:w-[350px] md:px-[30px] md:py-[60px]">
                    <span className="mb-5 font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#064e3b]">
                        Featured
                    </span>
                    <img
                        src="https://vapmart.webestone.net/vape-mart-text-logo.png"
                        alt="Vape Mart"
                        className="mb-7 h-auto w-40 object-contain"
                    />
                    <h2 className="mb-6 font-luxury text-2xl font-bold text-[#064e3b] sm:text-3xl">
                        Your Vibe. Your Flavor.
                    </h2>
                    <a
                        href="#shop"
                        className="inline-flex items-center gap-2 rounded-full bg-[#064e3b] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#022c22]"
                    >
                        Explore
                        <ArrowRight size={16} aria-hidden="true" />
                    </a>
                </div>

                <div className="grid min-w-0 flex-1 gap-3 p-4 sm:p-6">
                    {featuredProducts.map((product) => (
                        <article
                            key={product.name}
                            className="flex min-h-[112px] items-center gap-3 rounded-2xl border border-neutral-100 bg-white p-3 shadow-[0_4px_18px_rgba(0,0,0,0.05)] sm:gap-4 sm:p-4"
                        >
                            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-neutral-50 sm:h-24 sm:w-24">
                                <img
                                    src="https://vapmart.webestone.net/images/cat_disposables.png"
                                    alt=""
                                    className="h-full w-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="text-[10px] font-extrabold uppercase tracking-wide text-rose-600">
                                    {product.discount}
                                </span>
                                <h3 className="mt-1 line-clamp-2 text-xs font-bold leading-5 text-neutral-800 sm:text-sm">
                                    {product.name}
                                </h3>
                                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                                    <span className="text-sm font-extrabold text-[#064e3b]">
                                        {product.price}
                                    </span>
                                    {product.previousPrice && (
                                        <span className="text-xs text-neutral-400 line-through">
                                            {product.previousPrice}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button
                                type="button"
                                aria-label={`Add ${product.name} to cart`}
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#064e3b] text-white transition hover:bg-[#022c22]"
                            >
                                <ShoppingCart size={15} aria-hidden="true" />
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
