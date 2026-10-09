import { formatPrice, type Product } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";

// Toda la tarjeta es un botón. Se usan <span> porque un <button> solo admite contenido en línea.
export default function ProductCard({ product }: { product: Product }) {
  return (
    <AddToCartButton
      productId={product.id}
      aria-label={`Agregar ${product.name} al carrito`}
      className="flex flex-col rounded border border-[#3B1C3A]/20 bg-[#F7B7F6] text-[#3B1C3A] transition hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Placeholder en lugar de foto */}
      <span className="block aspect-square rounded-t" style={{ backgroundColor: product.color }} />

      <span className="flex flex-col gap-1 p-3">
        <span className="text-xs uppercase tracking-widest text-[#3B1C3A]/70">{product.category}</span>
        <span className="font-serif text-lg">{product.name}</span>
        <span className="font-bold">{formatPrice(product.price)}</span>
      </span>
    </AddToCartButton>
  );
}
