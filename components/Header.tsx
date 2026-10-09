import Link from "next/link";
import CartButton from "./CartButton";

export default function Header() {
  return (
    <header className="border-b border-[#3B1C3A]/20 bg-[#F7B7F6] text-[#3B1C3A]">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="font-script text-4xl">
          Mi Tienda
        </Link>

        {/* Buscador: solo visual por ahora */}
        <input
          type="search"
          placeholder="Buscar ropa..."
          className="flex-1 rounded border border-[#3B1C3A]/30 bg-white/60 px-3 py-1.5 text-sm placeholder-[#3B1C3A]/60"
        />

        <Link href="/login" className="text-sm hover:underline">
          Iniciar sesión
        </Link>
        <CartButton />
      </div>
    </header>
  );
}
