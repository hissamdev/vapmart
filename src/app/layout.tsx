import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Poppins } from "next/font/google";
import CartProvider from "../components/cart/CartProvider";
import "./globals.css";

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
    variable: "--font-cinzel",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Vape Mart | Premium E-Cigarettes & E-Liquids",
    description:
        "Premium vape products, e-liquids, and accessories in Dubai and UAE.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${playfair.variable} ${cinzel.variable} ${poppins.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <CartProvider>{children}</CartProvider>
            </body>
        </html>
    );
}
