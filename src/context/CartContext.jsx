import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("kathup-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Erreur de lecture du localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("kathup-cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Erreur de sauvegarde dans le localStorage:", error);
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      // Sécurisation de l'ID du produit
      const productId = product.id || product._id;
      const existingProduct = currentCart.find(
        (item) => (item.id || item._id) === productId
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          (item.id || item._id) === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Conversion propre du prix en nombre
      const rawPrice = typeof product.price === "string" 
        ? parseFloat(product.price.replace(",", ".").replace(/[^0-9.]/g, "")) 
        : product.price;

      return [...currentCart, { ...product, price: rawPrice || 0, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => (item.id || item._id) !== productId)
    );
  };

  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        (item.id || item._id) === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          (item.id || item._id) === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const cartTotal = cart.reduce((total, item) => {
    const itemPrice = typeof item.price === "number" ? item.price : parseFloat(item.price) || 0;
    return total + itemPrice * (item.quantity || 1);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}