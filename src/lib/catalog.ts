export const productCategories = [
    "Disposables",
    "Pod Systems",
    "E-Liquids",
    "Heated Tobacco",
] as const;

export type ProductCategory = (typeof productCategories)[number];

type ProductSeed = {
    label: string;
    brand: string;
    name: string;
    rating: number;
    price: string;
    image: string;
    category?: ProductCategory;
};

type CollectionSeed = {
    eyebrow: string;
    title: string;
    description: string;
    category: ProductCategory;
    products: ProductSeed[];
};

const collectionSeeds: CollectionSeed[] = [
    {
        eyebrow: "Top Picks",
        title: "Best Selling",
        description: "Our most loved products, chosen by you",
        category: "Disposables",
        products: [
            {
                label: "VAPOR UAE",
                brand: "KIEF KING 35000",
                name: "Kief King 35000 Puffs 3mg Disposable Vape in UAE",
                rating: 57,
                price: "AED 49.00",
                image: "cat_vape_kits.png",
            },
            {
                label: "BEST SELLER",
                brand: "VOZOL STAR 40000",
                name: "Vozol Star 40000 puff 20mg nicotine vape in UAE",
                rating: 55,
                price: "AED 45.00",
                image: "prod_disposable.png",
            },
            {
                label: "MYLE META MAX",
                brand: "",
                name: "Myle Meta Max 18000 Puff 50mg Disposable Vape in UAE",
                rating: 50,
                price: "AED 50.00",
                image: "product-2.png",
            },
            {
                label: "7% OFF",
                brand: "ELF BAR JOINONE",
                name: "Elf bar JoinOne Ice 25000 Puffs 50mg Pod Kit in UAE",
                rating: 54,
                price: "AED 50.00",
                image: "prod_pod.png",
                category: "Pod Systems",
            },
        ],
    },
    {
        eyebrow: "Heated Tobacco",
        title: "TEREA & HEETS",
        description:
            "Authentic heated tobacco sticks for IQOS ILUMA & IQOS 3 Duo in UAE",
        category: "Heated Tobacco",
        products: [
            {
                label: "BEST SELLER",
                brand: "TEREA INDO",
                name: "IQOS Terea Amber Selection Indonesian in UAE",
                rating: 84,
                price: "AED 125.00",
                image: "terea_heets.jpg",
            },
            {
                label: "POPULAR",
                brand: "TEREA INDO",
                name: "IQOS Terea Bronze Selection Indonesian Sticks",
                rating: 67,
                price: "AED 125.00",
                image: "terea_heets.jpg",
            },
            {
                label: "COOL",
                brand: "TEREA INDO",
                name: "IQOS Terea Purple Wave Menthol Heated Sticks",
                rating: 92,
                price: "AED 130.00",
                image: "terea_heets.jpg",
            },
            {
                label: "TEREA ILUMA",
                brand: "",
                name: "IQOS Terea Sienna Balanced Warm Tobacco",
                rating: 48,
                price: "AED 125.00",
                image: "terea_heets.jpg",
            },
        ],
    },
    {
        eyebrow: "Premium Pods",
        title: "JUUL Pods & Devices",
        description:
            "Original JUUL2 starter kits, replacement pods & accessories with rapid delivery",
        category: "Pod Systems",
        products: [
            {
                label: "STARTER KIT",
                brand: "JUUL OFFICIAL",
                name: "JUUL 2 Starter Kit with Slate Grey Device & 2 Pods",
                rating: 110,
                price: "AED 145.00",
                image: "juul_product.jpg",
            },
            {
                label: "DEVICE ONLY",
                brand: "JUUL OFFICIAL",
                name: "JUUL 2 Device with USB Magnetic Charging Dock",
                rating: 88,
                price: "AED 95.00",
                image: "juul_product.jpg",
            },
            {
                label: "TOP RATED",
                brand: "JUUL2 PODS",
                name: "JUUL 2 Virginia Tobacco Pods 18mg (Pack of 2)",
                rating: 142,
                price: "AED 45.00",
                image: "juul_product.jpg",
            },
            {
                label: "ICE",
                brand: "JUUL2 PODS",
                name: "JUUL 2 Crisp Menthol Pods 18mg Nicotine 2-Pack",
                rating: 96,
                price: "AED 45.00",
                image: "juul_product.jpg",
            },
        ],
    },
    {
        eyebrow: "New Items",
        title: "New Arrivals",
        description: "Explore our latest premium collection",
        category: "Disposables",
        products: [
            {
                label: "NEW",
                brand: "LOST MARY OS5000",
                name: "Lost Mary OS5000 Disposable Pod Device",
                rating: 12,
                price: "AED 35.00",
                image: "cat_vape_kits.png",
            },
            {
                label: "NEW",
                brand: "GEEK BAR PULSE",
                name: "Geek Bar Pulse 15000 Puffs Disposable",
                rating: 18,
                price: "AED 55.00",
                image: "prod_disposable.png",
            },
            {
                label: "VAPORESSO XROS 3",
                brand: "",
                name: "Vaporesso XROS 3 Mini Pod Kit",
                rating: 22,
                price: "AED 110.00",
                image: "product-3.png",
                category: "Pod Systems",
            },
            {
                label: "NASTY JUICE CUSH",
                brand: "",
                name: "Nasty Juice Cush Man 60ml E-Liquid",
                rating: 41,
                price: "AED 45.00",
                image: "prod_eliquid.png",
                category: "E-Liquids",
            },
        ],
    },
    {
        eyebrow: "Trending",
        title: "Most Popular",
        description: "The most trending products right now",
        category: "Pod Systems",
        products: [
            {
                label: "HOT",
                brand: "SMOK NORD 4",
                name: "Smok Nord 4 80W Pod Kit",
                rating: 85,
                price: "AED 120.00",
                image: "product-1.png",
            },
            {
                label: "JUICE HEAD BLUEBERRY",
                brand: "",
                name: "Juice Head Blueberry Lemon 100ml",
                rating: 43,
                price: "AED 55.00",
                image: "prod_eliquid.png",
                category: "E-Liquids",
            },
            {
                label: "HOT",
                brand: "UWELL CALIBURN G2",
                name: "Uwell Caliburn G2 Pod System",
                rating: 112,
                price: "AED 95.00",
                image: "prod_pod.png",
            },
            {
                label: "DINNER LADY LEMON",
                brand: "",
                name: "Dinner Lady Lemon Tart 60ml",
                rating: 67,
                price: "AED 50.00",
                image: "product-2.png",
                category: "E-Liquids",
            },
        ],
    },
];

function slugify(value: string) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

export const productCollections = collectionSeeds.map((collection) => ({
    ...collection,
    products: collection.products.map((product) => ({
        ...product,
        slug: slugify(product.name),
        category: product.category ?? collection.category,
        priceValue: Number(product.price.replace(/[^\d.]/g, "")),
        imageUrl: `https://vapmart.webestone.net/images/${product.image}`,
    })),
}));

export const catalogProducts = productCollections.flatMap((collection) =>
    collection.products.map((product) => ({
        ...product,
        description: `${product.name}. An authentic selection from our ${product.category.toLowerCase()} collection.`,
    })),
);

export type CatalogProduct = (typeof catalogProducts)[number];

export const catalogBrands = Array.from(
    new Set(catalogProducts.map((product) => product.brand).filter(Boolean)),
).sort((a, b) => a.localeCompare(b));
