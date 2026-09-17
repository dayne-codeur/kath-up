import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  if (!product) return null;

  // Conversion et sécurisation du prix
  const numericPrice = typeof product.price === "number" 
    ? product.price 
    : parseFloat(product.price) || 0;

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
            onClick={() => addToCart(product)}
            aria-label={`Ajouter ${product.name} au panier`}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;