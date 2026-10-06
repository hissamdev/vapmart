import { CreditCard, ShieldCheck, Truck, Headphones } from "lucide-react";

const benefits = [
    {
        title: "Free Shipping",
        description:
            "Terms & conditions applied for free shipping and delivery",
        icon: Truck,
    },
    {
        title: "24x7 Support",
        description: "Round-the-clock assistance, anytime you need it",
        icon: Headphones,
    },
    {
        title: "1 Week Return",
        description:
            "Your satisfaction is our priority: return any product within 1 week",
        icon: ShieldCheck,
    },
    {
        title: "Secure Payment",
        description:
            "Seamless shopping backed by safe and secure payment options",
        icon: CreditCard,
    },
];

export default function BenefitsStrip() {
    return (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-12 mb-8 sm:mb-16">
            <div className="relative overflow-hidden rounded-[24px] border border-emerald-900/50 bg-gradient-to-r from-[#022c22] via-[#064e3b] to-[#022c22] p-6 shadow-[0_20px_40px_rgba(6,78,59,0.2)] sm:rounded-[40px] sm:p-10">
                <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[80px]" />
                <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-[80px]" />
                <div className="relative z-10 grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:gap-8">
                    {benefits.map(({ title, description, icon: Icon }) => (
                        <div
                            key={title}
                            className="group flex cursor-pointer flex-col items-center px-4 pt-6 text-center transition-transform duration-500 hover:scale-105 sm:pt-0"
                        >
                            <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] sm:mb-6 sm:h-16 sm:w-16">
                                <Icon className="size-6 text-emerald-400 transition-colors duration-500 group-hover:text-[#064e3b] sm:size-7" />
                            </div>
                            <h3 className="mb-2 text-[15px] font-bold tracking-wide text-white sm:mb-3 sm:text-[17px]">
                                {title}
                            </h3>
                            <p className="max-w-[250px] text-xs leading-relaxed text-emerald-100/60 sm:text-[13px]">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
