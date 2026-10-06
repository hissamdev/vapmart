import Header from "../../components/nav/Header";
import CollectionBrowser from "../../components/catalog/CollectionBrowser";
import Footer from "../../components/page/home/Footer";
import { catalogProducts, productCategories } from "../../lib/catalog";

type CollectionsPageProps = {
    searchParams: Promise<{ category?: string }>;
};

export default async function CollectionsPage({ searchParams }: CollectionsPageProps) {
    const { category } = await searchParams;
    const initialCategory = productCategories.includes(category as (typeof productCategories)[number]) ? category : "All";

    return (
        <>
            <Header />
            <main>
                <CollectionBrowser products={catalogProducts} initialCategory={initialCategory} />
            </main>
            <Footer />
        </>
    );
}