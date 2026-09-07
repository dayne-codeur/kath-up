import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/shop.css";
const products = [
  {
    id: 1,
    name: "Fond de teint Glow",
    category: "Make-up",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    id: 2,
    name: "Gloss Ultra Shine",
    category: "Make-up",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
  },
  {
    id: 3,
    name: "Palette Nude Elegance",
    category: "Make-up",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
  },
  {
    id: 4,
    name: "Sérum Éclat",
    category: "Soins & cosmétiques",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
  },
  {
    id: 5,
    name: "Huile Nourrissante",
    category: "Soins & cosmétiques",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b",
  },
  {
    id: 6,
    name: "Kit Manucure Premium",
    category: "Onglerie",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc",
  },
  {
    id: 7,
    name: "Vernis Gel Collection",
    category: "Onglerie",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  },
  {
    id: 8,
    name: "Beauty Box Kath-Up",
    category: "Kits beauté",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
  {
    id: 9,
    name: "Blush Rosé Naturel",
    category: "Make-up",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
  },
  {
    id: 10,
    name: "Mascara Volume Intense",
    category: "Make-up",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92",
  },
  {
    id: 11,
    name: "Rouge à Lèvres Velvet",
    category: "Make-up",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
  },
  {
    id: 12,
    name: "Crème Hydratante Glow",
    category: "Soins & cosmétiques",
    price: 25.99,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
  },
  {
    id: 13,
    name: "Nettoyant Visage Doux",
    category: "Soins & cosmétiques",
    price: 21.99,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b",
  },
  {
    id: 14,
    name: "Masque Visage Éclat",
    category: "Soins & cosmétiques",
    price: 23.99,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
  },
  {
    id: 15,
    name: "Base Coat Professionnelle",
    category: "Onglerie",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  },
  {
    id: 16,
    name: "Top Coat Brillance",
    category: "Onglerie",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc",
  },
  {
    id: 17,
    name: "Kit Nail Art Créatif",
    category: "Onglerie",
    price: 32.99,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  },
  {
    id: 18,
    name: "Kit Débutante Make-up",
    category: "Kits beauté",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
  {
    id: 19,
    name: "Kit Glow & Skincare",
    category: "Kits beauté",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
  },
  {
    id: 20,
    name: "Kit Beauty Essentials",
    category: "Kits beauté",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
];

const categories = [
  "Tous",
  "Make-up",
  "Onglerie",
  "Soins & cosmétiques",
  "Kits beauté",
];

function Shop() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "Tous" ||
      product.category === activeCategory;

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <p className="section-subtitle">KATH-UP BEAUTY SHOP</p>

        <h1>
          Révèle ton <span>éclat.</span>
        </h1>

        <p>
          Découvre notre sélection de produits make-up, soins,
          onglerie et kits beauté.
        </p>
      </section>

      <section className="shop-search">
        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <button
              className="search-clear"
              onClick={() => setSearchTerm("")}
            >
              ×
            </button>
          )}
        </div>
      </section>

      <section className="shop-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category ? "active" : ""
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="products-section">
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <div>🔍</div>
            <h2>Aucun produit trouvé</h2>
            <p>
              Essaie avec un autre nom ou une autre catégorie.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Shop;