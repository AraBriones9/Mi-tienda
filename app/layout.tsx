import type { Metadata } from "next";
import { Great_Vibes, Lato, Playfair_Display } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Cursiva para el logo
const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

// Serif elegante para títulos y nombres de producto
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// Texto general
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mi Tienda",
  description: "Tienda de ropa en línea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${greatVibes.variable} ${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#F2EFC9] font-sans text-[#3B1C3A]">
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
