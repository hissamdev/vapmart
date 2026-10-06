const faqs = [
    {
        question: "What products does Vape Mart offer?",
        answer:
            "We offer a wide range of premium disposable vapes, pod systems, e-liquids, and vaping accessories from top global brands.",
    },
    {
        question: "Are your vape products authentic?",
        answer:
            "Yes! All our products are 100% authentic and sourced directly from official manufacturers. We guarantee original brands.",
    },
    {
        question: "Do you offer same-day delivery in Dubai?",
        answer:
            "Absolutely. We provide fast same-day delivery across Dubai for all orders placed before our daily cutoff time.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept all major credit and debit cards, Apple Pay, and offer cash on delivery for your convenience.",
    },
    {
        question: "Can I refill a disposable vape?",
        answer:
            "No, disposable vapes are designed for single-use. Attempting to refill them can be dangerous and damage the device.",
    },
];

export default function FAQ() {
    return (
        <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 md:py-24">
            <div className="mb-10 flex flex-col items-center px-2 text-center sm:mb-16">
                <p className="mb-3 inline-block rounded-full bg-[#064e3b]/10 px-4 py-1.5 font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#064e3b] sm:mb-4">
                    Got Questions?
                </p>
                <h2 className="font-luxury text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                        Frequently Asked Questions
                </h2>
                <p className="mt-3 max-w-2xl text-xs leading-relaxed text-neutral-500 sm:text-[15px]">
                    Everything you need to know about our products and services.
                </p>
            </div>

            <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:gap-20">
                    <div className="h-max w-full rounded-[24px] border border-neutral-200/60 bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 shadow-sm sm:rounded-[32px] sm:p-10 lg:w-1/3">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#064e3b] text-white shadow-lg shadow-emerald-900/20 sm:mb-8 sm:h-16 sm:w-16">
                            <span className="text-xl" aria-hidden="true">?</span>
                        </div>
                        <p className="mb-2 font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-[#064e3b]">
                            Need help?
                        </p>
                        <h3 className="font-luxury text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
                            Still have questions?
                        </h3>
                        <p className="mt-4 max-w-md text-sm leading-7 text-neutral-600">
                            Can’t find the answer you’re looking for? Our support team is happy to help you with any inquiries.
                        </p>
                        <button className="relative mt-7 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent bg-[#064e3b] py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-900/10 transition-all hover:bg-[#022c22] hover:shadow-lg sm:py-4 sm:text-base">
                            Contact Support
                        </button>
                    </div>

                    <div className="flex-1 space-y-3">
                        {faqs.map(({ question, answer }, index) => (
                            <div
                                key={question}
                                className="cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/80 bg-transparent transition-all duration-300 hover:bg-neutral-50"
                            >
                                <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-5">
                                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                                        <span className="font-cinzel text-xs font-bold text-[#064e3b]/50 sm:text-sm">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <p className="text-sm font-bold text-neutral-900 sm:text-base">
                                            {question}
                                        </p>
                                    </div>
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold text-neutral-400 sm:h-8 sm:w-8">
                                        +
                                    </span>
                                </div>
                                <p className="px-4 pb-4 pl-11 text-xs leading-6 text-neutral-600 sm:px-5 sm:pb-5 sm:pl-14 sm:text-sm">
                                    {answer}
                                </p>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    );
}
