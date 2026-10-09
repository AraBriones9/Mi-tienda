"use client";

import { createContext, useContext, useState } from "react";

// Carrito en memoria (se pierde al recargar). Luego lo guardaremos de verdad.
type CartContextValue = {
  items: Record<string, number>; // id de producto -> cantidad
  count: number;
  addItem: (productId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});

  const addItem = (productId: string) =>
    setItems((prev) => ({ ...prev, [productId]: (prev[productId] ?? 0) + 1 }));

  const count = Object.values(items).reduce((sum, qty) => sum + qty, 0);

  return <CartContext value={{ items, count, addItem }}>{children}</CartContext>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
