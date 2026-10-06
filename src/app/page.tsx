import Header from "../components/nav/Header";
import BenefitsStrip from "../components/page/home/BenefitsStrip";
import BlogSection from "../components/page/home/BlogSection";
import CategoryGrid from "../components/page/home/CategoryGrid";
import FAQ from "../components/page/home/FAQ";
import FeaturedBrandSection from "../components/page/home/FeaturedBrandSection";
import FlavorSection from "../components/page/home/FlavorSection";
import Footer from "../components/page/home/Footer";
import Hero from "../components/page/home/Hero";
import PromoCards from "../components/page/home/PromoCards";
import ProductShowcase from "../components/page/home/ProductShowcase";
import TestimonialsSection from "../components/page/home/TestimonialsSection";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <PromoCards />
                <CategoryGrid />
                <BenefitsStrip />
                <ProductShowcase />
                <FeaturedBrandSection />
                <FlavorSection />
                <FAQ />
                <TestimonialsSection />
                <BlogSection />
            </main>
            <Footer />
        </>
    );
}
