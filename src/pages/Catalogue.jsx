import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Catalogue() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const products = [
    { id: "fond-de-teint-glow", name: "Fond de teint Glow", price: 24.99, category: "SE MAQUILLER", image: "/images/fond-de-teint.jpg" },
    { id: "brillance-ultra-brillante", name: "Brillance Ultra Brillante", price: 14.99, category: "SE MAQUILLER", image: "/images/brillance.jpg" },
    { id: "palette-nude-elegance", name: "Palette Nude Élégance", price: 34.99, category: "SE MAQUILLER", image: "/images/palette.jpg" },
    { id: "blush-rose-naturel", name: "Blush Rosé Naturel", price: 18.99, category: "SE MAQUILLER", image: "/images/blush.jpg" },
    { id: "mascara-volume-intense", name: "Mascara Volume Intense", price: 16.99, category: "SE MAQUILLER", image: "/images/mascara.jpg" },
    { id: "rouge-a-levres-velvet", name: "Rouge à Lèvres Velvet", price: 17.99, category: "SE MAQUILLER", image: "/images/rouge.jpg" },
    { id: "kit-fabrication-premium", name: "Kit de fabrication Premium", price: 39.99, category: "ONGLERIE", image: "/images/kit-ongles.jpg" },
    { id: "collection-vernis-gel", name: "Collection Vernis Gel", price: 22.99, category: "ONGLERIE", image: "/images/vernis.jpg" },
    { id: "kit-nail-art-creatif", name: "Kit Nail Art Créatif", price: 32.99, category: "ONGLERIE", image: "/images/nail-art.jpg" },
    { id: "brillance-couche-finition", name: "Brillance de la couche de finition", price: 13.99, category: "ONGLERIE", image: "/images/finition.jpg" },
    { id: "serum-eclat", name: "Sérum Éclat", price: 29.99, category: "SOINS ET COSMÉTIQUES", image: "/images/serum.jpg" },
    { id: "huile-nourrissante", name: "Huile Nourrissante", price: 19.99, category: "SOINS ET COSMÉTIQUES", image: "/images/huile.jpg" },
    { id: "creme-hydratante-eclat", name: "Crème Hydratante Éclat", price: 25.99, category: "SOINS ET COSMÉTIQUES", image: "/images/creme.jpg" },
    { id: "nettoyant-visage-doux", name: "Nettoyant Visage Doux", price: 21.99, category: "SOINS ET COSMÉTIQUES", image: "/images/nettoyant.jpg" },
    { id: "masque-visage-eclat", name: "Masque Visage Éclat", price: 23.99, category: "SOINS ET COSMÉTIQUES", image: "/images/masque.jpg" },
    { id: "coffret-beaute-kath-up", name: "Coffret Beauté Kath-Up", price: 59.99, category: "KITS BEAUTÉ", image: "/images/coffret.jpg" },
    { id: "kit-maquillage-debutantes", name: "Kit de maquillage pour débutantes", price: 49.99, category: "KITS BEAUTÉ", image: "/images/kit-maquillage.jpg" },
    { id: "kit-glow-soins-peau", name: "Kit Glow & Soins de la peau", price: 69.99, category: "KITS BEAUTÉ", image: "/images/kit-glow.jpg" },
    { id: "kit-beaute-essentiel", name: "Kit de beauté essentiel", price: 79.99, category: "KITS BEAUTÉ", image: "/images/kit-essentiel.jpg" }
  ];

  const categories = ["Tous", "SE MAQUILLER", "ONGLERIE", "SOINS ET COSMÉTIQUES", "KITS BEAUTÉ"];

  // Filtrage combiné (recherche + catégorie)
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Tous" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="catalogue-page">
      <section className="catalogue-hero">
        <span>KATH-UP BEAUTÉ</span>
        <h1>Notre catalogue.</h1>
        <p>Découvrez toute notre sélection beauté : maquillage, onglerie, soins et kits beauté.</p>
      </section>

      <section className="catalogue-tools">
        {/* BARRE DE RECHERCHE */}
        <div className="catalogue-search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Rechercher dans le catalogue..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button onClick={() => setSearch("")}>✕</button>
          )}
        </div>

        {/* FILTRES CATEGORIES */}
        <div className="catalogue-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === "Tous" ? "Tous" : cat.charAt(0) + cat.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </section>

      {/* LISTE DES PRODUITS */}
      <section className="catalogue-products">
        {filteredProducts.length > 0 ? (
          <div className="catalogue-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="catalogue-card">
                <div className="catalogue-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="catalogue-info">
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="catalogue-bottom">
                    <strong>{product.price.toFixed(2).replace(".", ",")} €</strong>
                    <button onClick={() => addToCart(product)}>
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="catalogue-empty">
            <div>🔍</div>
            <h2>Aucun produit trouvé</h2>
            <p>Essayez de modifier votre recherche ou de changer de catégorie.</p>
          </div>
        )}
      </section>
    </div>
  );
}