"use client";

import { ChevronRight, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../cart/CartProvider";
import { catalogProducts, type CatalogProduct } from "../../lib/catalog";

type ProductDetailsProps = {
    product: CatalogProduct;
};

const money = (value: number) => `AED ${value.toFixed(2)}`;

export default function ProductDetails({ product }: ProductDetailsProps) {
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();
    const relatedProducts = catalogProducts
        .filter(
            (item) =>
                item.category === product.category &&
                item.slug !== product.slug,
        )
        .slice(0, 4);

    const addToCart = () => {
        addItem(
            {
                id: product.slug,
                name: product.name,
                price: product.priceValue,
                image: product.imageUrl,
            },
            quantity,
        );
    };

    return (
        <main className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 sm:py-12">
            <nav
                aria-label="Breadcrumb"
                className="mb-6 flex flex-wrap items-center gap-2 text-xs text-neutral-500 sm:mb-10 sm:text-sm"
            >
                <Link href="/" className="hover:text-[#064e3b]">
                    Home
                </Link>
                <ChevronRight size={14} aria-hidden="true" />
                <Link
                    href={`/collections?category=${encodeURIComponent(product.category)}`}
                    className="hover:text-[#064e3b]"
                >
                    {product.category}
                </Link>
                <ChevronRight size={14} aria-hidden="true" />
                <span
                    className="max-w-[55vw] truncate text-neutral-800"
                    aria-current="page"
                >
                    {product.name}
                </span>
            </nav>

            <section className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 sm:p-10">
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-full w-full object-contain"
                    />
                </div>

                <div className="flex flex-col items-start py-1 sm:py-4">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 font-cinzel text-[10px] font-bold uppercase tracking-[0.18em] text-[#064e3b]">
                        {product.category}
                    </span>
                    {product.brand && (
                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#064e3b]">
                            {product.brand}
                        </p>
                    )}
                    <h1 className="mt-2 font-luxury text-3xl font-extrabold leading-tight text-neutral-900 sm:text-4xl">
                        {product.name}
                    </h1>

                    <div className="mt-4 flex items-center gap-2 text-sm text-neutral-600">
                        <span
                            className="flex items-center gap-1 text-amber-500"
                            aria-label="Rated 4.9 out of 5"
                        >
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    size={14}
                                    className="fill-current"
                                    aria-hidden="true"
                                />
                            ))}
                        </span>
                        <span>4.9</span>
                        <span className="text-neutral-300">|</span>
                        <span>{product.rating} reviews</span>
                    </div>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600">
                        {product.description}
                    </p>
                    <div className="mt-6 flex items-baseline gap-3">
                        <span className="text-2xl font-extrabold text-[#064e3b]">
                            {money(product.priceValue)}
                        </span>
                        <span className="text-xs font-semibold text-emerald-700">
                            In stock
                        </span>
                    </div>

                    <div className="mt-7 flex w-full flex-wrap items-center gap-3">
                        <div className="flex h-12 items-center rounded-full border border-neutral-300 bg-white">
                            <button
                                type="button"
                                aria-label="Decrease quantity"
                                disabled={quantity <= 1}
                                onClick={() =>
                                    setQuantity((value) =>
                                        Math.max(1, value - 1),
                                    )
                                }
                                className="flex h-12 w-11 items-center justify-center rounded-l-full text-neutral-500 transition hover:text-[#064e3b] disabled:opacity-30"
                            >
                                <Minus size={15} />
                            </button>
                            <span className="min-w-8 text-center text-sm font-bold">
                                {quantity}
                            </span>
                            <button
                                type="button"
                                aria-label="Increase quantity"
                                onClick={() =>
                                    setQuantity((value) => value + 1)
                                }
                                className="flex h-12 w-11 items-center justify-center rounded-r-full text-neutral-500 transition hover:text-[#064e3b]"
                            >
                                <Plus size={15} />
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={addToCart}
                            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#064e3b] px-6 text-sm font-bold text-white transition hover:bg-[#022c22] sm:flex-none sm:min-w-[220px]"
                        >
                            <ShoppingCart size={17} aria-hidden="true" /> Add to
                            Cart
                        </button>
                    </div>

                    <div className="mt-8 grid w-full grid-cols-2 gap-y-4 border-y border-neutral-200 py-5 text-xs sm:text-sm">
                        <span className="text-neutral-500">Brand</span>
                        <span className="text-right font-semibold text-neutral-800">
                            {product.brand || "Vape Mart Selection"}
                        </span>
                        <span className="text-neutral-500">Category</span>
                        <span className="text-right font-semibold text-neutral-800">
                            {product.category}
                        </span>
                        <span className="text-neutral-500">Availability</span>
                        <span className="text-right font-semibold text-emerald-700">
                            In stock
                        </span>
                    </div>
                </div>
            </section>

            {relatedProducts.length > 0 && (
                <section className="mt-16 border-t border-neutral-200 pt-10 sm:mt-20">
                    <div className="mb-6 flex items-end justify-between gap-4">
                        <div>
                            <p className="font-cinzel text-[10px] font-bold uppercase tracking-[0.2em] text-[#064e3b]">
                                You may also like
                            </p>
                            <h2 className="mt-2 font-luxury text-2xl font-extrabold text-neutral-900 sm:text-3xl">
                                More in {product.category}
                            </h2>
                        </div>
                        <Link
                            href={`/collections?category=${encodeURIComponent(product.category)}`}
                            className="text-xs font-bold text-[#064e3b] hover:underline"
                        >
                            View collection
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                        {relatedProducts.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/products/${item.slug}`}
                                className="group rounded-xl border border-neutral-200 bg-white p-3 transition hover:border-emerald-800/40 sm:p-4"
                            >
                                <div className="mb-3 aspect-square rounded-lg bg-neutral-50 p-3">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        loading="lazy"
                                        className="h-full w-full object-contain transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <p className="line-clamp-2 text-xs font-semibold leading-5 text-neutral-800 group-hover:text-[#064e3b] sm:text-sm">
                                    {item.name}
                                </p>
                                <p className="mt-2 text-sm font-extrabold text-[#064e3b]">
                                    {money(item.priceValue)}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
