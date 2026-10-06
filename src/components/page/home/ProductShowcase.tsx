"use client";

import { Heart, ShoppingCart, Star } from "lucide-react";
import { useCart } from "../../cart/CartProvider";
import Link from "next/link";
import { productCollections as collections } from "../../../lib/catalog";

export default function ProductShowcase() {
    const { addItem } = useCart();

    return (
        <>
            {collections.map((collection) => (
                <section
                    key={collection.title}
                    id={
                        collection.title === "Best Selling" ? "shop" : undefined
                    }
                    className="best-selling-section relative mx-auto my-5 w-full max-w-[1440px] overflow-hidden px-3 py-7 transition-all duration-500 sm:px-6 sm:py-10 md:my-7 md:rounded-[36px] md:border md:border-emerald-700/60 md:bg-gradient-to-br md:from-[#064e3b] md:via-[#043e2e] md:to-[#022c22] md:p-10 md:pb-12 md:shadow-[0_24px_60px_-15px_rgba(6,78,59,0.34)] lg:my-9 lg:p-11 lg:pb-14"
                >
                    <div className="pointer-events-none absolute -left-24 -top-24 hidden h-80 w-80 rounded-full bg-emerald-400/15 blur-[90px] md:block" />
                    <div className="pointer-events-none absolute -bottom-24 -right-24 hidden h-80 w-80 rounded-full bg-amber-400/15 blur-[90px] md:block" />
                    <header className="section-header-bs relative z-10 mb-6 text-center sm:mb-9">
                        <div className="mb-2 flex items-center justify-center gap-2">
                            <span className="h-[2px] w-5 rounded-full bg-[#064e3b] md:bg-amber-400 sm:w-6" />
                            <span className="font-cinzel text-[11px] font-bold uppercase tracking-[0.24em] text-[#064e3b] md:text-amber-300 sm:text-xs">
                                {collection.eyebrow}
                            </span>
                            <span className="h-[2px] w-5 rounded-full bg-[#064e3b] md:bg-amber-400 sm:w-6" />
                        </div>
                        <h2 className="font-luxury text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl md:text-white lg:text-[46px]">
                            {collection.title}
                        </h2>
                        <div className="my-2 flex items-center justify-center gap-3 sm:my-3">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#064e3b] md:to-emerald-300 sm:w-16" />
                            <div className="h-2 w-2 rotate-45 bg-[#064e3b] md:bg-amber-400" />
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#064e3b] md:to-emerald-300 sm:w-16" />
                        </div>
                        <p className="mx-auto max-w-xl text-xs font-medium text-neutral-500 md:text-emerald-100/90 sm:text-sm">
                            {collection.description}
                        </p>
                    </header>

                    <div className="relative z-10 grid grid-cols-2 gap-3.5 md:grid-cols-4 md:gap-5 lg:gap-6 sm:gap-5">
                        {collection.products.map((product) => (
                            <article
                                key={product.name}
                                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(6,78,59,0.12)] sm:p-4 md:p-5"
                            >
                                <div className="z-10 mb-1 flex w-full items-center justify-between">
                                    <button
                                        type="button"
                                        aria-label={`Add ${product.name} to wishlist`}
                                        className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200/70 bg-neutral-50/80 text-neutral-400 transition-all hover:bg-white hover:text-red-500 sm:h-8 sm:w-8"
                                    >
                                        <Heart size={14} aria-hidden="true" />
                                    </button>
                                    {product.label && (
                                        <span className="rounded-full bg-red-600 px-2.5 py-0.5 text-[8.5px] font-black uppercase tracking-wider text-white sm:text-[9.5px]">
                                            {product.label}
                                        </span>
                                    )}
                                </div>
                                <div className="relative mx-auto my-0.5 flex aspect-square max-h-[235px] w-full items-center justify-center overflow-hidden p-2 sm:my-1 md:max-h-[255px]">
                                    <div className="relative h-full w-full transform transition-transform duration-500 ease-out group-hover:scale-105">
                                        <Link
                                            href={`/products/${product.slug}`}
                                            className="block h-full w-full"
                                            aria-label={`View ${product.name}`}
                                        >
                                            <img
                                                src={product.imageUrl}
                                                alt={product.name}
                                                className="h-full w-full object-contain"
                                                loading="lazy"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                {product.brand && (
                                    <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#064e3b] sm:text-[10px]">
                                        {product.brand}
                                    </p>
                                )}
                                <h3 className="mb-2 line-clamp-2 min-h-10 text-xs font-bold leading-5 text-neutral-800 sm:text-sm">
                                    <Link
                                        href={`/products/${product.slug}`}
                                        className="transition hover:text-[#064e3b]"
                                    >
                                        {product.name}
                                    </Link>
                                </h3>
                                <div className="mb-3 flex items-center gap-1 text-[10px] text-neutral-500 sm:text-xs">
                                    <Star
                                        size={12}
                                        className="fill-amber-400 text-amber-400"
                                        aria-hidden="true"
                                    />
                                    <span>({product.rating})</span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-sm font-extrabold text-[#064e3b] sm:text-base">
                                        {product.price}
                                    </span>
                                    <button
                                        type="button"
                                        aria-label={`Add ${product.name} to cart`}
                                        onClick={() =>
                                            addItem({
                                                id: product.slug,
                                                name: product.name,
                                                price: product.priceValue,
                                                image: product.imageUrl,
                                            })
                                        }
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#064e3b] text-white transition-colors hover:bg-[#022c22]"
                                    >
                                        <ShoppingCart
                                            size={15}
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
}
