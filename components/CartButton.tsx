"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartButton() {
  const { count } = useCart();

  return (
    <Link href="/carrito" className="relative text-sm hover:underline">
      🛒 Carrito
      {count > 0 && (
        <span className="absolute -right-3 -top-2 rounded-full bg-red-600 px-1.5 text-xs text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
