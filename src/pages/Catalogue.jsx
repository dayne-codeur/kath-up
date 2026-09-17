
import React from "react";
import { useCart } from "../context/CartContext";
import "./catalogue.css";

const products = [
  {
    id: 1,
    name: "Fond de teint Glow",
    category: "Make-up",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Gloss Ultra Shine",
    category: "Make-up",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Palette Nude Elegance",
    category: "Make-up",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Sérum Éclat",
    category: "Soins & cosmétiques",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Huile Nourrissante",
    category: "Soins & cosmétiques",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Kit Manucure Premium",
    category: "Onglerie",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Vernis Gel Collection",
    category: "Onglerie",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Beauty Box Kath-Up",
    category: "Kits beauté",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Blush Rosé Naturel",
    category: "Make-up",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Mascara Volume Intense",
    category: "Make-up",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Rouge à Lèvres Velvet",
    category: "Make-up",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Crème Hydratante Glow",
    category: "Soins & cosmétiques",
    price: 25.99,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    name: "Nettoyant Visage Doux",
    category: "Soins & cosmétiques",
    price: 21.99,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Masque Visage Éclat",
    category: "Soins & cosmétiques",
    price: 23.99,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    name: "Base Coat Professionnelle",
    category: "Onglerie",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    name: "Top Coat Brillance",
    category: "Onglerie",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    name: "Kit Nail Art Créatif",
    category: "Onglerie",
    price: 32.99,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    name: "Kit Débutante Make-up",
    category: "Kits beauté",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 19,
    name: "Kit Glow & Skincare",
    category: "Kits beauté",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    name: "Kit Beauty Essentials",
    category: "Kits beauté",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Catalogue() {
  const { addToCart } = useCart();

  return (
    <main className="catalogue-page">
      <section className="catalogue-hero">
        <p className="catalogue-kicker">KATH-UP BEAUTÉ</p>

        <h1>Notre catalogue</h1>

        <p>
          Découvrez notre sélection de produits beauté pour révéler votre
          élégance.
        </p>
      </section>

      <section className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
              <span className="category">{product.category}</span>

              <h3>{product.name}</h3>

              <div className="product-bottom">
                <p className="price">
                  {product.price.toFixed(2).replace(".", ",")} €
                </p>

                <button
                  className="btn-add-cart"
                  onClick={() => addToCart(product)}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
