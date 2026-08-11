import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import Cart from "./Cart";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);

  const { cartCount } = useCart();

  return (
    <>
      <header className="navbar">

        {/* LOGO */}
        <Link to="/" className="logo">
          Kath<span>-Up</span>
        </Link>


        {/* NAVIGATION */}
        <nav className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/shop">Boutique</Link>
          <Link to="/catalogue">Catalogue</Link>
          <Link to="/booking">Réservation</Link>
          <Link to="/contact">Contact</Link>
        </nav>


        {/* ACTIONS */}
        <div className="navbar-actions">

          {/* PANIER */}
          <button
            className="cart-icon"
            onClick={() => setCartOpen(true)}
            aria-label="Ouvrir le panier"
          >
            <FontAwesomeIcon icon={faShoppingBag} />

            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </button>


          {/* BOUTON */}
          <Link to="/shop" className="nav-button">
            Découvrir
          </Link>

        </div>

      </header>


      {/* PANIER */}
      {cartOpen && (
        <Cart
          closeCart={() => setCartOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;

