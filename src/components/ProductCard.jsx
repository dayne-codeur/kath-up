import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  // Conversion et sécurisation du prix
  const numericPrice = typeof product.price === "number" 
    ? product.price 
    : parseFloat(product.price) || 0;

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Empêche de déclencher un éventuel clic sur la carte parent
    
    if (typeof addToCart === "function") {
      addToCart(product);
      
      // Feedback visuel temporaire pour l'utilisateur
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1500);
    } else {
      console.error("La fonction addToCart n'est pas définie dans le CartContext");
    }
  };

  return (
    <article className="product-card">
      <div className="product-image">
        <img 
          src={product.image} 
          alt={product.name || "Produit"} 
          loading="lazy"
        />
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>

        <h3>{product.name}</h3>

        <div className="product-bottom">
          <strong>{numericPrice.toFixed(2)} €</strong>

          <button 
            type="button"
            onClick={handleAddToCart}
            disabled={isAdded}
            aria-label={`Ajouter ${product.name} au panier`}
            style={{ cursor: "pointer" }}
          >
            {isAdded ? "Ajouté ! ✓" : "Ajouter au panier"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;