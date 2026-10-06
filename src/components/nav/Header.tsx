"use client";

import {
    ArrowRight,
    ChevronDown,
    Droplets,
    Heart,
    House,
    Layers,
    Lock,
    Menu,
    Phone,
    Search,
    ShieldCheck,
    ShoppingBag,
    ShoppingCart,
    Tag,
    Truck,
    User,
    Users,
    X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../cart/CartProvider";

const tickerMessages = [
    { text: "Secure Payment | COD Available", icon: Lock },
    { text: "Exclusive offer up to 10% OFF", icon: Tag },
    {
        text: "100% Authentic Products - Original Brands Guaranteed",
        icon: ShieldCheck,
    },
    { text: "Free Delivery on Orders Above AED 350", icon: Truck },
    { text: "20,000+ Happy Customers", icon: Users },
];

const navItems = [
    "HOME",
    "SHOP",
    "DISPOSABLE VAPE",
    "NICOTINE POUCHES",
    "SHISHA/HOOKAH",
    "PODS SYSTEM",
    "E-LIQUID",
    "VAPE KIT",
    "BRANDS",
    "OFFERS",
];

const megaMenus: Record<string, { title: string; items: string[] }[]> = {
    "DISPOSABLE VAPE": [
        {
            title: "Shop by type",
            items: [
                "All Disposable Vapes",
                "Rechargeable Disposables",
                "High Puff Vapes",
                "Nicotine-Free Vapes",
            ],
        },
        {
            title: "Popular brands",
            items: ["Lost Mary", "Elf Bar", "Vozol", "Waka"],
        },
        {
            title: "Featured picks",
            items: [
                "Best Sellers",
                "New Arrivals",
                "Top Rated",
                "Special Offers",
            ],
        },
    ],
    "SHISHA/HOOKAH": [
        {
            title: "Shisha essentials",
            items: [
                "Shisha Devices",
                "Shisha Tobacco",
                "Hookah Coals",
                "Bowls & Hoses",
            ],
        },
        {
            title: "Shop by flavor",
            items: [
                "Fruit Blends",
                "Mint & Ice",
                "Classic Flavors",
                "Premium Mixes",
            ],
        },
        {
            title: "Popular brands",
            items: ["Al Fakher", "Starbuzz", "Fumari", "Adalya"],
        },
    ],
    "E-LIQUID": [
        {
            title: "Shop by type",
            items: [
                "Freebase E-Liquids",
                "Nicotine Salts",
                "Shortfills",
                "Nicotine-Free",
            ],
        },
        {
            title: "Shop by flavor",
            items: ["Fruit", "Dessert", "Menthol", "Tobacco"],
        },
        {
            title: "Popular brands",
            items: ["Nasty Juice", "Dinner Lady", "Juice Head", "Al Fakher"],
        },
    ],
};

const menuCategoryFilters: Record<string, string> = {
    "All Disposable Vapes": "Disposables",
    "Rechargeable Disposables": "Disposables",
    "High Puff Vapes": "Disposables",
    "Nicotine-Free Vapes": "Disposables",
    "Freebase E-Liquids": "E-Liquids",
    "Nicotine Salts": "E-Liquids",
    Shortfills: "E-Liquids",
    "Nicotine-Free": "E-Liquids",
};

const collectionHref = (category?: string) =>
    category
        ? `/collections?category=${encodeURIComponent(category)}`
        : "/collections";

export default function Header() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(
        null,
    );
    const { itemCount, setCartOpen } = useCart();
    const openMobileMenu = () => {
        setActiveMenu(null);
        setMobileExpandedMenu(null);
        setMobileMenuOpen(true);
    };

    useEffect(() => {
        if (!mobileMenuOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <div className="bg-[#022c22] text-white text-[11px] font-medium tracking-wide py-2.5 px-6 flex justify-between items-center relative overflow-hidden">
                <div className="flex-1 overflow-hidden relative flex items-center h-full">
                    <div className="ticker-track flex w-max animate-[marquee_25s_linear_infinite] cursor-default hover:[animation-play-state:paused]">
                        {[0, 1].map((copy) => (
                            <div
                                key={copy}
                                aria-hidden={copy === 1}
                                className="flex shrink-0 gap-8 pr-8 whitespace-nowrap"
                            >
                                {tickerMessages.map(({ text, icon: Icon }) => (
                                    <span
                                        key={text}
                                        className="flex items-center gap-1.5 opacity-90"
                                    >
                                        <Icon
                                            size={12}
                                            className="text-amber-400"
                                            aria-hidden="true"
                                        />
                                        {text}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-6 ml-6 border-l border-white/10 pl-6 z-10 bg-[#022c22]">
                    <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                        <Phone size={12} />
                        +971 55 168 8299
                    </span>
                    <Link
                        href="#"
                        className="text-white opacity-70 hover:opacity-100 transition-opacity"
                    >
                        About Us
                    </Link>
                    <Link
                        href="#"
                        className="text-white opacity-70 hover:opacity-100 transition-opacity"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            <header
                onMouseLeave={() => setActiveMenu(null)}
                onKeyDown={(event) => {
                    if (event.key === "Escape") {
                        setActiveMenu(null);
                        setMobileMenuOpen(false);
                    }
                }}
                className="sticky top-0 z-50 bg-[#064e3b] border-b border-emerald-800 transition-all duration-300 shadow-[0_10px_40px_-15px_rgba(6,78,59,0.3)]"
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-6 md:gap-10 transition-all duration-300 h-[64px] sm:h-[72px]">
                    <div className="flex items-center gap-2.5 sm:gap-4">
                        <button
                            type="button"
                            aria-label="Open mobile navigation"
                            aria-expanded={mobileMenuOpen}
                            onClick={openMobileMenu}
                            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                        >
                            <Menu size={18} />
                        </button>
                        <Link
                            href="/"
                            className="flex-shrink-0 group cursor-pointer block py-1"
                        >
                            <img
                                src="/vape-mart-text-logo-white.webp"
                                alt="Vape Mart Logo"
                                className="h-6 sm:h-7 md:h-8 w-auto max-w-[150px] sm:max-w-[185px] md:max-w-[210px] object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                    </div>

                    <div className="hidden sm:block flex-1 max-w-2xl relative group">
                        <span className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-emerald-100/50 group-focus-within:text-white transition-colors">
                            <Search size={16} />
                        </span>
                        <input
                            aria-label="Search products"
                            placeholder="Search for vapes, e-liquids, brands..."
                            className="w-full h-11 md:h-12 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-transparent focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20 rounded-full pl-12 pr-14 text-sm md:text-[15px] font-medium text-white placeholder-emerald-100/50 outline-none transition-all duration-300 backdrop-blur-md"
                        />
                        <button className="absolute inset-y-1 right-1 md:inset-y-1.5 md:right-1.5 w-9 h-9 flex items-center justify-center bg-white hover:bg-emerald-50 text-[#064e3b] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all cursor-pointer">
                            <ArrowRight size={16} strokeWidth={2.5} />
                        </button>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-3">
                        <button className="sm:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer">
                            <Search size={18} />
                        </button>
                        <button className="hidden md:flex w-10 h-10 md:w-11 md:h-11 items-center justify-center rounded-full bg-white/10 text-white hover:text-[#064e3b] hover:bg-white transition-colors duration-300 backdrop-blur-md cursor-pointer">
                            <Heart width={20} />
                        </button>
                        <button className="hidden sm:flex w-10 h-10 md:w-11 md:h-11 items-center justify-center rounded-full bg-white/10 text-white hover:text-[#064e3b] hover:bg-white transition-colors duration-300 backdrop-blur-md cursor-pointer">
                            <User width={20} />
                        </button>
                        <button
                            type="button"
                            aria-label={`Open cart, ${itemCount} items`}
                            onClick={() => setCartOpen(true)}
                            className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:text-[#064e3b] hover:bg-white transition-colors duration-300 relative group backdrop-blur-md cursor-pointer"
                        >
                            <ShoppingBag width={20} />
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 text-neutral-900 text-[11px] font-bold flex items-center justify-center rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                {itemCount}
                            </span>
                        </button>
                    </div>
                </div>

                <nav className="hidden lg:block border-t border-emerald-800 bg-[#064e3b]">
                    <ul className="max-w-[1400px] mx-auto px-6 h-[50px] flex items-center justify-center gap-8 text-[13px] font-bold tracking-wider">
                        {navItems.map((item, index) => {
                            const hasMenu = item in megaMenus;
                            const isOpen = activeMenu === item;
                            return (
                                <li
                                    key={item}
                                    onMouseEnter={() =>
                                        setActiveMenu(hasMenu ? item : null)
                                    }
                                    className="h-full flex items-center relative group cursor-pointer"
                                >
                                    {hasMenu ? (
                                        <button
                                            type="button"
                                            aria-haspopup="true"
                                            aria-expanded={isOpen}
                                            onFocus={() => setActiveMenu(item)}
                                            onClick={() =>
                                                setActiveMenu(
                                                    isOpen ? null : item,
                                                )
                                            }
                                            className={`flex items-center gap-1 ${index === 0 ? "text-amber-400" : "text-white"} hover:text-amber-400 transition-colors`}
                                        >
                                            {item}
                                            <ChevronDown
                                                size={14}
                                                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                                aria-hidden="true"
                                            />
                                        </button>
                                    ) : (
                                        <Link
                                            href={
                                                item === "HOME"
                                                    ? "/"
                                                    : item === "SHOP" ||
                                                        item === "OFFERS"
                                                      ? "/collections"
                                                      : "/collections"
                                            }
                                            className={`flex items-center gap-1 ${index === 0 ? "text-amber-400" : "text-white"} hover:text-amber-400 transition-colors`}
                                        >
                                            {item}
                                        </Link>
                                    )}
                                    <span
                                        className={`absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full bg-amber-400 transform origin-left transition-transform duration-300 ${index === 0 ? "scale-x-100" : isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {activeMenu && (
                    <div className="absolute left-1/2 top-full z-[60] w-screen -translate-x-1/2 border-t border-emerald-400/20 bg-gradient-to-br from-[#064e3b] via-[#043e2e] to-[#022c22] text-white shadow-[0_25px_55px_rgba(0,0,0,0.4)]">
                        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.1fr_1fr_1fr_1fr] lg:gap-10 lg:px-10 lg:py-10">
                            <div className="flex flex-col items-start justify-center border-b border-white/10 pb-6 sm:col-span-2 lg:col-span-1 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                                <span className="font-cinzel text-[11px] font-bold uppercase tracking-[0.24em] text-emerald-300">
                                    Explore Vape Mart
                                </span>
                                <h2 className="mt-3 font-luxury text-2xl font-bold text-white">
                                    {activeMenu}
                                </h2>
                                <p className="mt-3 max-w-xs text-sm leading-6 text-emerald-100/75">
                                    Browse authentic products, trusted brands,
                                    and customer favorites.
                                </p>
                                <Link
                                    href={collectionHref(
                                        activeMenu === "DISPOSABLE VAPE"
                                            ? "Disposables"
                                            : activeMenu === "E-LIQUID"
                                              ? "E-Liquids"
                                              : undefined,
                                    )}
                                    onClick={() => setActiveMenu(null)}
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300 transition hover:text-white"
                                >
                                    Shop all {activeMenu.toLowerCase()}{" "}
                                    <ArrowRight size={15} />
                                </Link>
                            </div>
                            {megaMenus[activeMenu].map((column) => (
                                <div key={column.title}>
                                    <h3 className="mb-4 font-cinzel text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                                        {column.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {column.items.map((entry) => (
                                            <li key={entry}>
                                                <Link
                                                    href={collectionHref(
                                                        menuCategoryFilters[
                                                            entry
                                                        ],
                                                    )}
                                                    onClick={() =>
                                                        setActiveMenu(null)
                                                    }
                                                    className="text-sm text-emerald-50/85 transition hover:pl-1 hover:text-white"
                                                >
                                                    {entry}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-[90] bg-[#022c22] text-white lg:hidden"
                    onKeyDown={(event) => {
                        if (event.key === "Escape") setMobileMenuOpen(false);
                    }}
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget)
                            setMobileMenuOpen(false);
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation"
                        className="flex h-full flex-col bg-gradient-to-b from-[#064e3b] via-[#043e2e] to-[#022c22]"
                    >
                        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-white/10 px-5">
                            <Link
                                href="/"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block"
                            >
                                <img
                                    src="/vape-mart-text-logo-white.webp"
                                    alt="Vape Mart"
                                    className="h-7 w-auto max-w-[185px] object-contain"
                                />
                            </Link>
                            <button
                                type="button"
                                aria-label="Close mobile navigation"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <nav
                            aria-label="Mobile primary navigation"
                            className="flex-1 overflow-y-auto px-5 py-4"
                        >
                            <ul className="divide-y divide-white/10">
                                {navItems.map((item) => {
                                    const menu = megaMenus[item];
                                    const isExpanded =
                                        mobileExpandedMenu === item;
                                    const href =
                                        item === "HOME" ? "/" : "/collections";
                                    return (
                                        <li key={item} className="py-1">
                                            {menu ? (
                                                <>
                                                    <button
                                                        type="button"
                                                        aria-expanded={
                                                            isExpanded
                                                        }
                                                        onClick={() =>
                                                            setMobileExpandedMenu(
                                                                isExpanded
                                                                    ? null
                                                                    : item,
                                                            )
                                                        }
                                                        className="flex w-full items-center justify-between py-3 text-left text-sm font-bold tracking-[0.12em] text-white"
                                                    >
                                                        {item}
                                                        <ChevronDown
                                                            size={17}
                                                            className={`text-emerald-200 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                    {isExpanded && (
                                                        <div className="grid grid-cols-1 gap-5 pb-5 pl-3 sm:grid-cols-2">
                                                            {menu.map(
                                                                (column) => (
                                                                    <div
                                                                        key={
                                                                            column.title
                                                                        }
                                                                    >
                                                                        <h3 className="mb-2 font-cinzel text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300">
                                                                            {
                                                                                column.title
                                                                            }
                                                                        </h3>
                                                                        <ul className="space-y-2">
                                                                            {column.items.map(
                                                                                (
                                                                                    entry,
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            entry
                                                                                        }
                                                                                    >
                                                                                        <Link
                                                                                            href={collectionHref(
                                                                                                menuCategoryFilters[
                                                                                                    entry
                                                                                                ],
                                                                                            )}
                                                                                            onClick={() =>
                                                                                                setMobileMenuOpen(
                                                                                                    false,
                                                                                                )
                                                                                            }
                                                                                            className="text-sm text-emerald-50/80 hover:text-white"
                                                                                        >
                                                                                            {
                                                                                                entry
                                                                                            }
                                                                                        </Link>
                                                                                    </li>
                                                                                ),
                                                                            )}
                                                                        </ul>
                                                                    </div>
                                                                ),
                                                            )}
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <Link
                                                    href={href}
                                                    onClick={() =>
                                                        setMobileMenuOpen(false)
                                                    }
                                                    className="block py-3 text-sm font-bold tracking-[0.12em] text-white transition hover:text-amber-300"
                                                >
                                                    {item}
                                                </Link>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                        <a
                            href="tel:+971551688299"
                            className="border-t border-white/10 px-5 py-4 text-sm font-semibold text-emerald-100/80"
                        >
                            Call us: +971 55 168 8299
                        </a>
                    </div>
                </div>
            )}

            <nav
                aria-label="Quick navigation"
                className="safe-bottom fixed bottom-0 left-0 right-0 z-[70] flex min-h-[77px] items-center justify-between border-t border-emerald-600/40 bg-[#064e3b] px-2 py-2 shadow-[0_-8px_25px_rgba(0,0,0,0.35)] lg:hidden"
            >
                <Link
                    href="/"
                    className="flex-1 flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-center text-amber-400 transition-all active:scale-95"
                >
                    <House size={20} aria-hidden="true" />
                    <span className="text-[11px] font-semibold">Home</span>
                </Link>
                <button
                    type="button"
                    aria-label="Open mobile navigation"
                    onClick={openMobileMenu}
                    className="flex-1 flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-center text-emerald-100/75 transition-all hover:text-white active:scale-95"
                >
                    <Layers size={20} aria-hidden="true" />
                    <span className="text-[11px] font-semibold">Menu</span>
                </button>
                <button
                    type="button"
                    className="flex-1 flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-center text-emerald-100/75 transition-all hover:text-white active:scale-95"
                >
                    <Search size={20} aria-hidden="true" />
                    <span className="text-[11px] font-semibold">Search</span>
                </button>
                <Link
                    href="#flavors"
                    className="flex-1 flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-center text-emerald-100/75 transition-all hover:text-white active:scale-95"
                >
                    <Droplets size={20} aria-hidden="true" />
                    <span className="text-[11px] font-semibold">Flavors</span>
                </Link>
                <button
                    type="button"
                    aria-label={`Open cart, ${itemCount} items`}
                    onClick={() => setCartOpen(true)}
                    className="relative flex-1 flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-center text-emerald-100/75 transition-all hover:text-white active:scale-95"
                >
                    <ShoppingBag size={20} aria-hidden="true" />
                    {itemCount > 0 && (
                        <span className="absolute right-1/4 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[9px] font-bold text-neutral-900">
                            {itemCount}
                        </span>
                    )}
                    <span className="text-[10px] font-semibold">Cart</span>
                </button>
            </nav>
        </>
    );
}
