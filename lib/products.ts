// Datos de ejemplo. Más adelante esto vendrá de la base de datos:
// solo cambiará el interior de getProducts / getProductBySlug.

export type Product = {
  id: string;
  slug: string; // identificador para la URL, ej. /productos/jeans-slim-azul
  name: string;
  description: string;
  price: number; // en MXN
  category: string;
  sizes: string[];
  color: string; // color de fondo del placeholder
};

const SIZES_ROPA = ["CH", "M", "G", "XG"];
const SIZES_PANTALON = ["28", "30", "32", "34"];
const SIZES_UNICA = ["Única"];

const products: Product[] = [
  {
    id: "1",
    slug: "playera-basica-blanca",
    name: "Playera básica blanca",
    description: "Playera de algodón 100% con corte regular. Un básico que combina con todo.",
    price: 199,
    category: "Playeras",
    sizes: SIZES_ROPA,
    color: "#e5e7eb",
  },
  {
    id: "2",
    slug: "playera-estampada-negra",
    name: "Playera estampada negra",
    description: "Playera de algodón con estampado frontal. Cómoda y con estilo para el día a día.",
    price: 249,
    category: "Playeras",
    sizes: SIZES_ROPA,
    color: "#374151",
  },
  {
    id: "3",
    slug: "sudadera-capucha-gris",
    name: "Sudadera con capucha gris",
    description: "Sudadera afelpada con capucha ajustable y bolsa canguro.",
    price: 549,
    category: "Sudaderas",
    sizes: SIZES_ROPA,
    color: "#9ca3af",
  },
  {
    id: "4",
    slug: "jeans-slim-azul",
    name: "Jeans slim azul",
    description: "Jeans de mezclilla elástica con corte slim. Cinco bolsillos.",
    price: 699,
    category: "Pantalones",
    sizes: SIZES_PANTALON,
    color: "#1e3a8a",
  },
  {
    id: "5",
    slug: "pantalon-chino-beige",
    name: "Pantalón chino beige",
    description: "Pantalón chino de gabardina ligera, ideal para looks casuales o de oficina.",
    price: 599,
    category: "Pantalones",
    sizes: SIZES_PANTALON,
    color: "#d6c7a1",
  },
  {
    id: "6",
    slug: "chamarra-mezclilla",
    name: "Chamarra de mezclilla",
    description: "Chamarra clásica de mezclilla con botones metálicos y bolsillos al pecho.",
    price: 899,
    category: "Chamarras",
    sizes: SIZES_ROPA,
    color: "#3b82f6",
  },
  {
    id: "7",
    slug: "vestido-floral",
    name: "Vestido floral",
    description: "Vestido midi con estampado floral y tela ligera, perfecto para primavera.",
    price: 649,
    category: "Vestidos",
    sizes: SIZES_ROPA,
    color: "#f9a8d4",
  },
  {
    id: "8",
    slug: "gorra-negra",
    name: "Gorra negra",
    description: "Gorra de seis paneles con broche ajustable en la parte trasera.",
    price: 179,
    category: "Accesorios",
    sizes: SIZES_UNICA,
    color: "#111827",
  },
];

// Son async desde ya para que, al conectar la base de datos, las páginas no cambien.
export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(price);
}
