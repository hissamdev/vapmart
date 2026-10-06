"use client";

import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { catalogProducts } from "../../lib/catalog";

export type CartProduct = {
    id: string;
    name: string;
    price: number;
    image: string;
};

type CartLine = CartProduct & { quantity: number };

type CartContextValue = {
    items: CartLine[];
    itemCount: number;
    subtotal: number;
    isCartOpen: boolean;
    addItem: (product: CartProduct, quantity?: number) => void;
    updateQuantity: (id: string, quantity: number) => void;
    removeItem: (id: string) => void;
    setCartOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const CART_STORAGE_KEY = "vapemart-cart";

function normalizeStoredCart(value: unknown): CartLine[] {
    if (!Array.isArray(value)) return [];

    const lines = new Map<string, CartLine>();
    for (const entry of value) {
        if (!entry || typeof entry !== "object") continue;
        const stored = entry as Record<string, unknown>;
        const product = catalogProducts.find((item) => item.slug === stored.id || item.name === stored.name);
        const name = product?.name ?? (typeof stored.name === "string" ? stored.name : "");
        const id = product?.slug ?? (typeof stored.id === "string" ? stored.id : name);
        const image = product?.imageUrl ?? (typeof stored.image === "string" ? stored.image : "");
        const price = product?.priceValue ?? Number(stored.price);
        const quantity = typeof stored.quantity === "number" && Number.isInteger(stored.quantity) && stored.quantity > 0 ? stored.quantity : 1;
        if (!id || !name || !image || !Number.isFinite(price)) continue;

        const current = lines.get(id);
        if (current) current.quantity += quantity;
        else lines.set(id, { id, name, image, price, quantity });
    }
    return [...lines.values()];
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
}

function CartDrawer() {
    const { items, subtotal, isCartOpen, setCartOpen, updateQuantity, removeItem } = useCart();
    const [checkoutMessage, setCheckoutMessage] = useState("");

    useEffect(() => {
        if (!isCartOpen) return;
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setCartOpen(false);
        };
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, [isCartOpen, setCartOpen]);

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black/45" onMouseDown={() => setCartOpen(false)}>
            <aside
                role="dialog"
                aria-modal="true"
                aria-labelledby="cart-title"
                onMouseDown={(event) => event.stopPropagation()}
                className="absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-white text-neutral-900 shadow-2xl"
            >
                <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                        <ShoppingBag className="text-[#064e3b]" size={20} aria-hidden="true" />
                        <h2 id="cart-title" className="font-luxury text-xl font-bold text-[#064e3b]">
                            Your Cart
                        </h2>
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-bold text-[#064e3b]">
                            {items.reduce((count, item) => count + item.quantity, 0)}
                        </span>
                    </div>
                    <button type="button" aria-label="Close cart" onClick={() => setCartOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900">
                        <X size={19} />
                    </button>
                </header>

                {items.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                        <ShoppingBag size={38} className="mb-4 text-emerald-800/35" aria-hidden="true" />
                        <h3 className="font-luxury text-xl font-bold text-neutral-800">Your cart is empty</h3>
                        <p className="mt-2 text-sm text-neutral-500">Add a product to get started.</p>
                        <button type="button" onClick={() => setCartOpen(false)} className="mt-6 rounded-full bg-[#064e3b] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#022c22]">
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto px-5 sm:px-6">
                            {items.map((item) => (
                                <article key={item.id} className="flex gap-3 border-b border-neutral-100 py-5">
                                    <img src={item.image} alt="" className="h-20 w-20 shrink-0 rounded-xl bg-neutral-50 object-contain p-2" />
                                    <div className="min-w-0 flex-1">
                                        <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-neutral-800">{item.name}</h3>
                                        <p className="mt-1 text-sm font-bold text-[#064e3b]">AED {item.price.toFixed(2)}</p>
                                        <div className="mt-3 flex items-center justify-between">
                                            <div className="flex h-8 items-center rounded-full border border-neutral-200">
                                                <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.quantity - 1)} className="flex h-8 w-8 items-center justify-center text-neutral-600 hover:text-[#064e3b]">
                                                    <Minus size={13} />
                                                </button>
                                                <span className="min-w-7 text-center text-xs font-bold">{item.quantity}</span>
                                                <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.quantity + 1)} className="flex h-8 w-8 items-center justify-center text-neutral-600 hover:text-[#064e3b]">
                                                    <Plus size={13} />
                                                </button>
                                            </div>
                                            <button type="button" aria-label={`Remove ${item.name}`} onClick={() => removeItem(item.id)} className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition hover:bg-red-50 hover:text-red-600">
                                                <Trash2 size={15} />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <div className="border-t border-neutral-200 px-5 py-5 sm:px-6">
                            <div className="mb-2 flex items-center justify-between text-sm text-neutral-600">
                                <span>Subtotal</span>
                                <span className="font-bold text-neutral-900">AED {subtotal.toFixed(2)}</span>
                            </div>
                            <p className="mb-4 text-xs text-neutral-500">Shipping and taxes are calculated at checkout.</p>
                            <button type="button" onClick={() => setCheckoutMessage("Checkout is not connected yet.")} className="w-full rounded-full bg-[#064e3b] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#022c22]">
                                Proceed to Checkout
                            </button>
                            {checkoutMessage && <p role="status" className="mt-3 text-center text-xs text-neutral-500">{checkoutMessage}</p>}
                        </div>
                    </>
                )}
            </aside>
        </div>
    );
}

export default function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartLine[]>([]);
    const [isCartOpen, setCartOpen] = useState(false);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        try {
            const storedItems = window.localStorage.getItem(CART_STORAGE_KEY);
            if (storedItems) {
                const normalized = normalizeStoredCart(JSON.parse(storedItems));
                setItems(normalized);
                window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(normalized));
            }
        } catch {
            window.localStorage.removeItem(CART_STORAGE_KEY);
        } finally {
            setHydrated(true);
        }
    }, []);

    useEffect(() => {
        if (hydrated) window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }, [hydrated, items]);

    const addItem = (product: CartProduct, quantity = 1) => {
        setItems((current) => {
            const existing = current.find((item) => item.id === product.id);
            if (existing) {
                return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
            }
            return [...current, { ...product, quantity }];
        });
        setCartOpen(true);
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity < 1) {
            setItems((current) => current.filter((item) => item.id !== id));
            return;
        }
        setItems((current) => current.map((item) => item.id === id ? { ...item, quantity } : item));
    };

    const removeItem = (id: string) => setItems((current) => current.filter((item) => item.id !== id));
    const itemCount = items.reduce((count, item) => count + item.quantity, 0);
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ items, itemCount, subtotal, isCartOpen, addItem, updateQuantity, removeItem, setCartOpen }}>
            {children}
            <CartDrawer />
        </CartContext.Provider>
    );
}