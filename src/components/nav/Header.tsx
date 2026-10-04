import { Heart, Phone, ShoppingBag, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const navItems = [
        { text: "HOME", url: "https://vapmart.webestone.net/#" },
        { text: "SHOP", url: "https://vapmart.webestone.net/#" },
        { text: "DISPOSABLE VAPE", url: "https://vapmart.webestone.net/#" },
        { text: "NICOTINE POUCHES", url: "https://vapmart.webestone.net/#" },
        { text: "SHISHA/HOOKAH", url: "https://vapmart.webestone.net/#" },
        { text: "PODS SYSTEM", url: "https://vapmart.webestone.net/#" },
        { text: "E-LIQUID", url: "https://vapmart.webestone.net/#" },
        { text: "VAPE KIT", url: "https://vapmart.webestone.net/#" },
        { text: "BRANDS", url: "https://vapmart.webestone.net/#" },
        { text: "OFFERS", url: "https://vapmart.webestone.net/#" },
    ];

    return (
        <>
            <HeaderRibbon />
            <header className="sticky top-0 z-50 bg-[#064e3b] border-b border-emerald-800 transition-all duration-300 shadow-[0_10px_40px_-15px_rgba(6,78,59,0.3)]">
                <div className="max-w-350 mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-6 md:gap-10 transition-all duration-300 h-16 sm:h-18">
                    <div className="shrink-0 group cursor-pointer block py-1">
                        <img
                            src="/vape-mart-text-logo-white.webp"
                            alt="Logo"
                            className="h-6 sm:h-7 md:h-8 w-auto max-w-37.5 sm:max-w-46.25 md:max-w-52.5 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="hidden sm:block flex-1 max-w-2xl relative group">
                        <input className="w-full h-11 md:h-12 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-transparent focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20 rounded-full pl-12 pr-14 text-sm md:text-[15px] font-medium text-white placeholder-emerald-100/50 outline-none transition-all duration-300 backdrop-blur-md" />
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-3">
                        <span className="hidden md:flex w-10 h-10 md:w-11 md:h-11 items-center justify-center rounded-full bg-white/10 text-white hover:text-[#064e3b] hover:bg-white transition-colors duration-300 backdrop-blur-md cursor-pointer">
                            <Heart width={20} />
                        </span>
                        <span className="hidden md:flex w-10 h-10 md:w-11 md:h-11 items-center justify-center rounded-full bg-white/10 text-white hover:text-[#064e3b] hover:bg-white transition-colors duration-300 backdrop-blur-md cursor-pointer">
                            <User width={20} />
                        </span>
                        <span className="hidden md:flex w-10 h-10 md:w-11 md:h-11 items-center justify-center rounded-full bg-white/10 text-white hover:text-[#064e3b] hover:bg-white transition-colors duration-300 backdrop-blur-md cursor-pointer">
                            <ShoppingBag width={20} />
                        </span>
                    </div>
                </div>
                <nav className="hidden lg:block border-t border-emerald-800 bg-[#064e3b]">
                    <ul className="max-w-350 mx-auto px-6 h-12.5 flex items-center justify-center gap-8 text-[13px] font-bold tracking-wider underline">
                        {navItems.map((navItem) => (
                            <li className="h-full flex items-center relative group cursor-pointer">
                                <Link
                                    href={navItem.url}
                                    className="flex items-center gap-1 hover:text-amber-400 transition-colors text-white"
                                >
                                    {navItem.text}
                                </Link>
                                <div className="absolute bottom-0 left-0 right-0 h-0.75 rounded-t-full bg-amber-400 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}

const HeaderRibbon = () => {
    const emojiProperties = {
        size: 12,
        className: "text-amber-500",
    };

    const ribbonItems = [
        {
            emoji: <ShoppingCart {...emojiProperties} />,
            text: "Secure Payment | COD Available",
        },
        {
            emoji: <ShoppingCart {...emojiProperties} />,
            text: "Free Delivery on Orders Above AED 350",
        },
    ];

    return (
        <div className="bg-[#022c22] text-white text-[11px] font-medium tracking-wide py-2.5 px-6 flex justify-between items-center relative overflow-hidden">
            <div className="flex-1 flex items-center gap-8 whitespace-nowrap">
                {ribbonItems.map((item) => (
                    <span key={item.text} className="flex items-center gap-1.5">
                        {item.emoji}
                        {item.text}
                    </span>
                ))}
            </div>
            <div className="hidden lg:flex lg:justify-center lg:items-center gap-6 ml-6">
                <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                    <Phone size={12} />
                    +971 55 168 8299
                </span>
                <Link
                    href="/about-us"
                    className="text-white opacity-70 hover:opacity-100 transition-opacity underline"
                >
                    About Us
                </Link>
                <Link
                    href="/contact"
                    className="text-white opacity-70 hover:opacity-100 transition-opacity underline"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
};
