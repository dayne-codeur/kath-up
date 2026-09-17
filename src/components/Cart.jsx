import { useCart } from "../context/CartContext";

function Cart({ closeCart }) {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal,
  } = useCart();

  // Sécurisation des valeurs de repli
  const currentCart = cart || [];
  const numericTotal = typeof cartTotal === "number" && !isNaN(cartTotal) ? cartTotal : 0;

  // Numéro WhatsApp de Kath-Up (format international sans le +)
  const WHATSAPP_NUMBER = "22900000000"; // ⚠️ Remplace par ton vrai numéro WhatsApp

  const handleCheckout = () => {
    if (currentCart.length === 0) return;

    // Construction du récapitulatif des articles
    let message = "Bonjour Kath-Up, je souhaite passer la commande suivante :\n\n";

    currentCart.forEach((item) => {
      const price = typeof item.price === "number" ? `${item.price.toFixed(2)} €` : `${item.price}`;
      message += `• *${item.name}* (x${item.quantity}) - ${price}\n`;
    });

    message += `\n*Total : ${numericTotal.toFixed(2)} €*`;

    // Redirection vers WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="cart-overlay" onClick={closeCart}>
      <aside className="cart-panel" onClick={(event) => event.stopPropagation()}>
        
        <div className="cart-header">
          <div>
            <p className="cart-label">VOTRE SÉLECTION</p>
            <h2>Mon panier</h2>
          </div>

          <button className="cart-close" onClick={closeCart} aria-label="Fermer le panier">
            ×
          </button>
        </div>

        {currentCart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <h3>Votre panier est vide</h3>
            <p>
              Découvrez nos produits et ajoutez vos favoris à votre panier.
            </p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {currentCart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name || "Produit"} />
                  </div>

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>

                    <p className="cart-item-price">
                      {typeof item.price === "number" ? item.price.toFixed(2) : item.price} €
                    </p>

                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Supprimer l'article"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>{numericTotal.toFixed(2)} €</strong>
              </div>

              <button className="checkout-button" onClick={handleCheckout}>
                Passer la commande
              </button>

              <button className="clear-cart" onClick={clearCart}>
                Vider le panier
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default Cart;