import React from "react";
import { useCart } from "../context/CartContext";
import "./catalogue.css";

export default function Catalogue() {
  const { addToCart } = useCart();

  const products = [
    {
      id: "fond-de-teint-glow",
      name: "Fond de teint Glow",
      price: 24.99,
      category: "SE MAQUILLER",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: "brillance-ultra-brillante",
      name: "Brillance Ultra Brillante",
      price: 14.99,
      category: "SE MAQUILLER",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: "palette-nude-elegance",
      name: "Palette Nude Élégance",
      price: 34.99,
      category: "SE MAQUILLER",
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: "blush-rose-naturel",
      name: "Blush Rosé Naturel",
      price: 18.99,
      category: "SE MAQUILLER",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    },
  ];

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