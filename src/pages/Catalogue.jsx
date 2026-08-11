import { useState } from "react";

const catalogProducts = [
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
    name: "Blush Rosé Naturel",
    category: "Make-up",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
  },
  {
    id: 5,
    name: "Mascara Volume Intense",
    category: "Make-up",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92",
  },
  {
    id: 6,
    name: "Rouge à Lèvres Velvet",
    category: "Make-up",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
  },
  {
    id: 7,
    name: "Kit Manucure Premium",
    category: "Onglerie",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc",
  },
  {
    id: 8,
    name: "Vernis Gel Collection",
    category: "Onglerie",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  },
  {
    id: 9,
    name: "Kit Nail Art Créatif",
    category: "Onglerie",
    price: 32.99,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  },
  {
    id: 10,
    name: "Top Coat Brillance",
    category: "Onglerie",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc",
  },
  {
    id: 11,
    name: "Sérum Éclat",
    category: "Soins & cosmétiques",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
  },
  {
    id: 12,
    name: "Huile Nourrissante",
    category: "Soins & cosmétiques",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b",
  },
  {
    id: 13,
    name: "Crème Hydratante Glow",
    category: "Soins & cosmétiques",
    price: 25.99,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
  },
  {
    id: 14,
    name: "Nettoyant Visage Doux",
    category: "Soins & cosmétiques",
    price: 21.99,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b",
  },
  {
    id: 15,
    name: "Masque Visage Éclat",
    category: "Soins & cosmétiques",
    price: 23.99,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
  },
  {
    id: 16,
    name: "Beauty Box Kath-Up",
    category: "Kits beauté",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
  {
    id: 17,
    name: "Kit Débutante Make-up",
    category: "Kits beauté",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
  {
    id: 18,
    name: "Kit Glow & Skincare",
    category: "Kits beauté",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
  },
  {
    id: 19,
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

function Catalogue() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = catalogProducts.filter((product) => {
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
    <main className="catalogue-page">
      <section className="catalogue-hero">
        <p className="section-subtitle">KATH-UP BEAUTY</p>

        <h1>
          Notre <span>catalogue.</span>
        </h1>

        <p>
          Explore toute notre sélection beauté : make-up,
          onglerie, soins et kits beauté.
        </p>
      </section>

      <section className="catalogue-tools">
        <div className="catalogue-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Rechercher dans le catalogue..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <button onClick={() => setSearchTerm("")}>
              ×
            </button>
          )}
        </div>

        <div className="catalogue-categories">
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
        </div>
      </section>

      <section className="catalogue-products">
        {filteredProducts.length > 0 ? (
          <div className="catalogue-grid">
            {filteredProducts.map((product) => (
              <article
                className="catalogue-card"
                key={product.id}
              >
                <div className="catalogue-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="catalogue-info">
                  <span>{product.category}</span>

                  <h3>{product.name}</h3>

                  <div className="catalogue-bottom">
                    <strong>
                      {product.price.toFixed(2)} €
                    </strong>

                    <button>
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="catalogue-empty">
            <div>🔍</div>
            <h2>Aucun produit trouvé</h2>
            <p>
              Essaie une autre recherche ou une autre catégorie.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Catalogue;