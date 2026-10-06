export default function Footer() {
    return (
        <footer className="relative mt-0 overflow-hidden rounded-t-[28px] bg-[#022c22] pt-12 pb-24 text-white shadow-2xl sm:rounded-t-[40px] sm:pt-16 md:pt-20 lg:pb-8">
            <div className="pointer-events-none absolute -right-20 -top-40 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-48 -left-32 h-[600px] w-[600px] -translate-x-1/4 translate-y-1/3 rounded-full bg-amber-500/5 blur-[80px]" />
            <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                <div className="mb-12 grid grid-cols-1 gap-8 border-b border-white/10 pb-10 sm:mb-16 sm:gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                    <div className="flex flex-col items-start lg:col-span-4">
                        <img
                            src="/vape-mart-text-logo-white.webp"
                            alt="Vape Mart"
                            className="h-10 w-auto"
                        />
                        <p className="mt-5 max-w-md text-sm leading-7 text-emerald-50/75">
                            The UAE’s premier destination for premium vaping
                            products. We offer 100% authentic devices, exquisite
                            e-liquids, and top-tier accessories with exceptional
                            customer service.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f6d36d]">
                            Quick Links
                        </p>
                        <ul className="mt-4 space-y-3 text-sm text-emerald-50/75">
                            <li>Home</li>
                            <li>Shop All</li>
                            <li>About Us</li>
                            <li>Blog & News</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f6d36d]">
                            Categories
                        </p>
                        <ul className="mt-4 space-y-3 text-sm text-emerald-50/75">
                            <li>Vape Kits</li>
                            <li>Disposable Vapes</li>
                            <li>E-Liquids</li>
                            <li>Nicotine Pouches</li>
                            <li>Pod Systems</li>
                            <li>Accessories</li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f6d36d]">
                            Contact Us
                        </p>
                        <ul className="mt-4 space-y-3 text-sm text-emerald-50/75">
                            <li>
                                123 Vape Street, Downtown Dubai, United Arab
                                Emirates
                            </li>
                            <li>+971 55 168 8299</li>
                            <li>support@vapemart.ae</li>
                        </ul>
                        <form className="mt-6">
                            <label
                                htmlFor="newsletter-email"
                                className="text-sm font-bold uppercase tracking-[0.14em] text-white"
                            >
                                Join Our Newsletter
                            </label>
                            <div className="mt-3 flex rounded-full border border-white/15 bg-white/10 p-1">
                                <input
                                    id="newsletter-email"
                                    type="email"
                                    aria-label="Email address for newsletter"
                                    placeholder="Enter your email"
                                    className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-emerald-100/50"
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe to newsletter"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400 text-[#022c22] transition hover:bg-amber-300"
                                >
                                    <span aria-hidden="true">→</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-[11px] font-medium text-emerald-100/40 sm:pt-8 md:flex-row md:text-left sm:text-xs">
                    <p>© 2026 Vape Mart. All Rights Reserved.</p>
                    <div className="flex items-center gap-1">
                        <span>Designed with</span>
                        <span className="text-rose-400" aria-label="love">
                            ♥
                        </span>
                        <span>in UAE.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
