import { notFound } from "next/navigation";
import Header from "../../../components/nav/Header";
import ProductDetails from "../../../components/catalog/ProductDetails";
import Footer from "../../../components/page/home/Footer";
import { catalogProducts } from "../../../lib/catalog";

type ProductPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return catalogProducts.map(({ slug }) => ({ slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = catalogProducts.find((item) => item.slug === slug);
    if (!product) notFound();

    return (
        <>
            <Header />
            <ProductDetails product={product} />
            <Footer />
        </>
    );
}