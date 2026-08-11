import "../styles/home.css";

function Home() {
  return (
    <main className="home">

      {/* ================= HERO ================= */}
      <section className="home-hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-kicker">
            KATH-UP BEAUTÉ
          </p>

          <h1>
            Révèle ton
            <span> éclat.</span>
          </h1>

          <p className="hero-description">
            Découvrez notre univers, nos produits et nos services.
            Une expérience beauté pensée pour vous.
          </p>

          <div className="hero-buttons">
            <a href="/shop" className="btn btn-primary">
              Découvrir la boutique
            </a>

            <a href="/booking" className="btn btn-secondary">
              Réserver un moment
            </a>
          </div>
        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="home-intro">

        <div className="intro-text">
          <p className="section-subtitle">
            BIENVENUE CHEZ KATH-UP
          </p>

          <h2>
            Tout ce qu'il faut pour
            <span> révéler ta beauté.</span>
          </h2>

          <p>
            Kath-Up réunit beauté, maquillage, onglerie,
            soins et produits cosmétiques dans un seul univers.
          </p>
        </div>

      </section>


      {/* ================= UNIVERS KATH-UP ================= */}
      <section className="beauty-universe">

        <div className="universe-header">
          <p className="section-subtitle">
            Notre univers 
          </p>

          <h2>
            Une expérience beauté
            <span> complète.</span>
          </h2>

          <p>
            Découvre les différents espaces de Kath-Up
            et trouve ce qui correspond à tes envies.
          </p>
        </div>


        <div className="universe-grid">

          {/* MAKE-UP */}
          <a href="/shop" className="universe-card universe-makeup">
            <div className="universe-image">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85"
                alt="Make-up Kath-Up"
              />
            </div>

            <div className="universe-content">
              <span>01</span>
              <h3>Make-up</h3>
              <p>
                Maquillage, gloss, palettes et produits
                pour révéler ton éclat.
              </p>
              <strong>Découvrir →</strong>
            </div>
          </a>


          {/* ONGLERIE */}
          <a href="/booking" className="universe-card universe-nails">
            <div className="universe-image">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85"
                alt="Onglerie Kath-Up"
              />
            </div>

            <div className="universe-content">
              <span>02</span>
              <h3>Onglerie</h3>
              <p>
                Manucure, pose de gel et Nail Art
                pour des mains impeccables.
              </p>
              <strong>Réserver →</strong>
            </div>
          </a>


          {/* SOINS */}
          <a href="/shop" className="universe-card universe-care">
            <div className="universe-image">
              <img
                src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85"
                alt="Soins et cosmétiques Kath-Up"
              />
            </div>

            <div className="universe-content">
              <span>03</span>
              <h3>Soins & cosmétiques</h3>
              <p>
                Des soins et produits sélectionnés
                pour prendre soin de ta peau.
              </p>
              <strong>Explorer →</strong>
            </div>
          </a>


          {/* KITS */}
          <a href="/shop" className="universe-card universe-kits">
            <div className="universe-image">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85"
                alt="Kits beauté Kath-Up"
              />
            </div>

            <div className="universe-content">
              <span>04</span>
              <h3>Kits beauté</h3>
              <p>
                Des coffrets beauté pensés pour
                créer ton propre rituel.
              </p>
              <strong>Voir les kits →</strong>
            </div>
          </a>

        </div>

      </section>


      {/* ================= BLOC VISUEL RÉCAPITULATIF ================= */}
      <section className="home-showcase">

        <div className="showcase-image">
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85"
            alt="Univers beauté Kath-Up"
          />
        </div>

        <div className="showcase-content">

          <p className="section-subtitle">
            KATH-UP BEAUTÉ
          </p>

          <h2>
            Plus qu'une boutique,
            <span> un univers.</span>
          </h2>

          <p>
            Retrouve tout Kath-Up au même endroit :
            produits beauté, prestations, catalogue
            et réservation.
          </p>

          <div className="showcase-list">

            <div>
              <b>✦</b>
              <span>
                Produits maquillage & cosmétiques
              </span>
            </div>

            <div>
              <b>✦</b>
              <span>
                Prestations d'onglerie & beauté
              </span>
            </div>

            <div>
              <b>✦</b>
              <span>
                Catalogue de nos produits
              </span>
            </div>

            <div>
              <b>✦</b>
              <span>
                Réservation simple via WhatsApp
              </span>
            </div>

          </div>

          <a href="/catalogue" className="showcase-button">
            Voir le catalogue
          </a>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="home-cta">

        <p className="section-subtitle">
          TON MOMENT BEAUTÉ
        </p>

        <h2>
          Prête à révéler ton
          <span> éclat ?</span>
        </h2>

        <p>
          Choisis ta prestation et réserve ton moment
          beauté avec Kath-Up.
        </p>

        <a href="/booking" className="cta-button">
          Prendre rendez-vous
        </a>

      </section>

    </main>
  );
}

export default Home;