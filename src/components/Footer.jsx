
import "../styles/footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faTiktok,
  faFacebookF,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() { 
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* MARQUE */}
        <div className="footer-brand">

          <h2>
            Kath<span>-Up</span>
          </h2>

          <p>
            Votre univers beauté : maquillage, onglerie,
            soins et cosmétiques.
          </p>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/2290147968409"
            target="_blank"
            rel="noreferrer"
            className="footer-whatsapp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>Nous contacter sur WhatsApp</span>
          </a>

          {/* RÉSEAUX SOCIAUX */}
          <div className="footer-socials">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="https://wa.me/2290147968409"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

          </div>

        </div>


        {/* NAVIGATION */}
        <div className="footer-column">

          <h3>Navigation</h3>

          <a href="/">Accueil</a>
          <a href="/shop">Boutique</a>
          <a href="/catalogue">Catalogue</a>
          <a href="/booking">Réservation</a>
          <a href="/contact">Contact</a>

        </div>


        {/* NOTRE UNIVERS */}
        <div className="footer-column">

          <h3>Notre univers</h3>

          <a href="/shop">Make-up</a>
          <a href="/shop">Onglerie</a>
          <a href="/shop">Soins & cosmétiques</a>
          <a href="/shop">Kits beauté</a>

        </div>


        {/* CONTACT */}
        <div className="footer-column">

          <h3>Contact</h3>

          <p>📍 Abomey-Calavi, Bénin</p>
          <p>📱 WhatsApp</p>
          <p>💄 Kath-Up Beauty</p>

        </div>

      </div>


      {/* COPYRIGHT */}
      <div className="footer-bottom">

        <p>
          © 2026 Kath-Up — Tous droits réservés.
        </p>

      </div>

    </footer>
  );
}

export default Footer;

