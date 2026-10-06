"use client";

import { useDeferredValue, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { useCart } from "../cart/CartProvider";
import type { CatalogProduct } from "../../lib/catalog";

type CollectionBrowserProps = {
    products: CatalogProduct[];
    initialCategory?: string;
};

const money = (value: number) => `AED ${value.toFixed(2)}`;

export default function CollectionBrowser({ products, initialCategory = "All" }: CollectionBrowserProps) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState(initialCategory);
    const [brand, setBrand] = useState("All brands");
    const maxCatalogPrice = Math.ceil(Math.max(...products.map((product) => product.priceValue)) / 5) * 5;
    const [maxPrice, setMaxPrice] = useState(maxCatalogPrice);
    const [sort, setSort] = useState("featured");
    const [filtersOpen, setFiltersOpen] = useState(false);
    const deferredQuery = useDeferredValue(query.trim().toLowerCase());
    const { addItem } = useCart();
    const categories = [...new Set(products.map((product) => product.category))].sort((a, b) => a.localeCompare(b));
    const brands = [...new Set(products.map((product) => product.brand).filter(Boolean))].sort((a, b) => a.localeCompare(b));

    const matchingProducts = products.filter((product) => {
        const matchesQuery = !deferredQuery || `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(deferredQuery);
        const matchesCategory = category === "All" || product.category === category;
        const matchesBrand = brand === "All brands" || product.brand === brand;
        return matchesQuery && matchesCategory && matchesBrand && product.priceValue <= maxPrice;
    });

    const filteredProducts = [...matchingProducts].sort((a, b) => {
        if (sort === "price-low") return a.priceValue - b.priceValue;
        if (sort === "price-high") return b.priceValue - a.priceValue;
        if (sort === "popular") return b.rating - a.rating;
        if (sort === "name") return a.name.localeCompare(b.name);
        return 0;
    });

    const clearFilters = () => {
        setQuery("");
        setCategory("All");
        setBrand("All brands");
        setMaxPrice(maxCatalogPrice);
        setSort("featured");
    };

    const filterControls = (
        <>
            <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-neutral-600">Category</span>
                <select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-[#064e3b] focus:ring-2 focus:ring-emerald-800/10">
                    <option value="All">All categories</option>
                    {categories.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
            </label>
            <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-neutral-600">Brand</span>
                <select value={brand} onChange={(event) => setBrand(event.target.value)} className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-[#064e3b] focus:ring-2 focus:ring-emerald-800/10">
                    <option value="All brands">All brands</option>
                    {brands.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
            </label>
            <div>
                <div className="mb-2 flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-[0.14em] text-neutral-600">
                    <label htmlFor="maximum-price">Maximum price</label>
                    <span className="normal-case tracking-normal text-[#064e3b]">{money(maxPrice)}</span>
                </div>
                <input id="maximum-price" type="range" min="0" max={maxCatalogPrice} step="5" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} className="w-full accent-[#064e3b]" />
                <div className="mt-1 flex justify-between text-[11px] text-neutral-400"><span>AED 0</span><span>{money(maxCatalogPrice)}</span></div>
            </div>
            <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-neutral-600">Sort by</span>
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-[#064e3b] focus:ring-2 focus:ring-emerald-800/10">
                    <option value="featured">Featured</option>
                    <option value="popular">Most reviewed</option>
                    <option value="price-low">Price: low to high</option>
                    <option value="price-high">Price: high to low</option>
                    <option value="name">Name: A to Z</option>
                </select>
            </label>
            <button type="button" onClick={clearFilters} className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm font-semibold text-neutral-600 transition hover:border-[#064e3b] hover:text-[#064e3b]">
                Clear filters
            </button>
        </>
    );

    return (
        <section className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 sm:py-14">
            <header className="mb-8 border-b border-neutral-200 pb-6 sm:mb-10">
                <p className="font-cinzel text-[11px] font-bold uppercase tracking-[0.24em] text-[#064e3b]">Vape Mart Collections</p>
                <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <h1 className="font-luxury text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">Shop All Products</h1>
                        <p className="mt-2 text-sm text-neutral-500">Browse authentic products across our vape, pod, e-liquid, and heated tobacco collections.</p>
                    </div>
                    <span className="text-sm text-neutral-500">{filteredProducts.length} products</span>
                </div>
            </header>

            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
                <label className="relative flex-1">
                    <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" aria-hidden="true" />
                    <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products or brands" aria-label="Search products or brands" className="h-11 w-full rounded-lg border border-neutral-300 bg-white pl-10 pr-10 text-sm outline-none placeholder:text-neutral-400 focus:border-[#064e3b] focus:ring-2 focus:ring-emerald-800/10" />
                    {query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"><X size={16} /></button>}
                </label>
                <button type="button" aria-expanded={filtersOpen} onClick={() => setFiltersOpen((open) => !open)} className="flex h-11 items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 text-sm font-semibold text-neutral-700 transition hover:border-[#064e3b] lg:hidden">
                    <SlidersHorizontal size={16} /> Filters
                </button>
            </div>

            <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                <aside className={`${filtersOpen ? "block" : "hidden"} space-y-6 border-b border-neutral-200 pb-6 lg:block lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6`}>
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                        <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-neutral-800">Filters</h2>
                        <button type="button" onClick={clearFilters} className="text-xs font-semibold text-[#064e3b] hover:underline">Reset</button>
                    </div>
                    {filterControls}
                </aside>

                <div>
                    <div className="mb-4 flex items-center justify-between gap-3 border-b border-neutral-200 pb-3">
                        <p className="text-sm text-neutral-500">Showing <span className="font-semibold text-neutral-800">{filteredProducts.length}</span> of {products.length}</p>
                        {category !== "All" && <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#064e3b]">{category}</span>}
                    </div>
                    {filteredProducts.length ? (
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
                            {filteredProducts.map((product) => (
                                <article key={product.slug} className="group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition hover:shadow-[0_12px_30px_rgba(6,78,59,0.12)] sm:p-4">
                                    <Link href={`/products/${product.slug}`} className="relative mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-neutral-50 p-3">
                                        <img src={product.imageUrl} alt={product.name} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                                        <span className="absolute left-2 top-2 rounded-full bg-red-600 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-white">{product.label}</span>
                                    </Link>
                                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#064e3b]">{product.brand || product.category}</p>
                                    <Link href={`/products/${product.slug}`} className="mb-2 line-clamp-2 min-h-10 text-xs font-semibold leading-5 text-neutral-800 hover:text-[#064e3b] sm:text-sm">{product.name}</Link>
                                    <div className="mt-auto flex items-center justify-between gap-2">
                                        <div>
                                            <p className="text-sm font-extrabold text-[#064e3b]">{money(product.priceValue)}</p>
                                            <p className="mt-1 text-[10px] text-neutral-500">★ 4.9 · {product.rating} reviews</p>
                                        </div>
                                        <button type="button" aria-label={`Add ${product.name} to cart`} onClick={() => addItem({id:product.slug,name:product.name,price:product.priceValue,image:product.imageUrl})} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#064e3b] text-white transition hover:bg-[#022c22]">
                                            <span aria-hidden="true">+</span>
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="flex min-h-64 flex-col items-center justify-center border-y border-neutral-200 text-center">
                            <h2 className="font-luxury text-xl font-bold text-neutral-800">No products match these filters</h2>
                            <p className="mt-2 text-sm text-neutral-500">Try another search or clear your filters.</p>
                            <button type="button" onClick={clearFilters} className="mt-4 rounded-full bg-[#064e3b] px-4 py-2 text-sm font-bold text-white">Clear filters</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}