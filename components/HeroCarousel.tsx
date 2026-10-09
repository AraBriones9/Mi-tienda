"use client";

import { useEffect, useState } from "react";

// Placeholders: más adelante se reemplazan por fotos reales.
const slides = [
  { icon: "👕", color: "#ef4444" },
  { icon: "👗", color: "#ec4899" },
  { icon: "🧥", color: "#3b82f6" },
  { icon: "👖", color: "#22c55e" },
  { icon: "🧢", color: "#f59e0b" },
];

const INTERVAL_MS = 4000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Avanza solo cada INTERVAL_MS; se reinicia cuando el usuario cambia de slide
  useEffect(() => {
    const id = setTimeout(() => setCurrent((c) => (c + 1) % slides.length), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [current]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative mb-10 h-96 overflow-clip rounded">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="flex h-full w-full shrink-0 items-center justify-center pb-28 text-9xl"
            style={{ backgroundColor: slide.color }}
          >
            {slide.icon}
          </div>
        ))}
      </div>

      {/* Flechas */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-1 text-2xl text-white hover:bg-black/60"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-1 text-2xl text-white hover:bg-black/60"
      >
        ›
      </button>

      {/* Mensaje fijo con transparencia */}
      <div className="absolute inset-x-0 bottom-0 bg-gray-900/60 px-6 py-4 text-center text-white">
        <h1 className="font-serif text-4xl italic">Nueva temporada</h1>
        <p className="mt-1 text-gray-200">Envío gratis en compras mayores a $999</p>

        {/* Puntos indicadores */}
        <div className="mt-2 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a la imagen ${i + 1}`}
              className={`h-2 w-2 rounded-full ${i === current ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
