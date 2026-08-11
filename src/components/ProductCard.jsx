import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>

        <h3>{product.name}</h3>

        <div className="product-bottom">
          <strong>{product.price.toFixed(2)} €</strong>

          <button onClick={() => addToCart(product)}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;