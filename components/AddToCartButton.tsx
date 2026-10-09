"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

// Botón que envuelve toda la tarjeta: al hacer clic agrega el producto al carrito.
export default function AddToCartButton({
  productId,
  className,
  children,
  "aria-label": ariaLabel,
}: {
  productId: string;
  className?: string;
  "aria-label"?: string;
  children: React.ReactNode;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  // Oculta el aviso "Agregado" después de un momento
  useEffect(() => {
    if (!added) return;
    const id = setTimeout(() => setAdded(false), 1200);
    return () => clearTimeout(id);
  }, [added]);

  return (
    <button
      onClick={() => {
        addItem(productId);
        setAdded(true);
      }}
      aria-label={ariaLabel}
      className={`relative cursor-pointer text-left ${className ?? ""}`}
    >
      {children}
      {added && (
        <span className="absolute inset-x-0 top-3 mx-auto w-fit rounded-full bg-[#3B1C3A] px-3 py-1 text-sm text-[#F7B7F6]">
          ✓ Agregado al carrito
        </span>
      )}
    </button>
  );
}
