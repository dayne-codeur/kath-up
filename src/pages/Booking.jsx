import { useState } from "react";
import "../styles/booking.css";
const services = [
  {
    id: 1,
    name: "Manucure",
    duration: "45 min",
    price: 15,
    options: [
      "Manucure classique",
      "Manucure avec vernis",
      "Manucure + soin",
    ],
  },
  {
    id: 2,
    name: "Pose de gel",
    duration: "1h30",
    price: 30,
    options: [
      "Gel naturel",
      "Gel avec couleur",
      "Gel + French",
      "Gel + Nail Art",
    ],
  },
  {
    id: 3,
    name: "Nail Art",
    duration: "1h",
    price: 25,
    options: [
      "Nail Art simple",
      "Nail Art personnalisé",
      "Nail Art premium",
    ],
  },
  {
    id: 4,
    name: "Maquillage",
    duration: "1h",
    price: 35,
    options: [
      "Maquillage naturel",
      "Maquillage soirée",
      "Maquillage événement",
      "Maquillage mariage",
    ],
  },
  {
    id: 5,
    name: "Soin du visage",
    duration: "1h",
    price: 30,
    options: [
      "Soin hydratant",
      "Soin éclat",
      "Soin nettoyant",
      "Soin premium",
    ],
  },
  {
    id: 6,
    name: "Beauté complète",
    duration: "2h",
    price: 60,
    options: [
      "Make-up + Manucure",
      "Make-up + Soin",
      "Beauté complète Premium",
    ],
  },
];

function Booking() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [inspiration, setInspiration] = useState(null);
  const [message, setMessage] = useState("");

  const handleServiceChange = (service) => {
    setSelectedService(service);
    setSelectedOption("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !selectedService ||
      !selectedOption ||
      !date ||
      !time ||
      !name ||
      !phone
    ) {
      setMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const whatsappMessage = `
Bonjour Kath-Up 👋

Je souhaite prendre rendez-vous.

Prestation : ${selectedService.name}
Style : ${selectedOption}
Date : ${date}
Heure : ${time}

Nom : ${name}
Téléphone : ${phone}

Demande particulière :
${notes || "Aucune demande particulière."}

Photo d'inspiration :
${
  inspiration
    ? "Une photo a été sélectionnée. Je vais la joindre à ce message."
    : "Aucune photo sélectionnée."
}

Prix estimatif : ${selectedService.price.toFixed(2)} EUR

Merci 💕
`.trim();

    const whatsappNumber = "2290147968409";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setMessage(
      inspiration
        ? "WhatsApp va s'ouvrir. Pense à joindre ta photo d'inspiration au message."
        : "Ouverture de WhatsApp..."
    );
  };

  return (
    <main>
      {/* HERO */}
      <section className="booking-hero">
        <p className="section-subtitle">KATH-UP BEAUTY</p>

        <h1>
          Réserve ton <span>moment beauté.</span>
        </h1>

        <p>
          Choisis ta prestation, ton style, ta date et ton heure
          pour prendre rendez-vous.
        </p>
      </section>

      {/* BOOKING */}
      <section className="booking-section">
        <div className="booking-container">

          {/* SERVICES */}
          <div className="booking-intro">
            <p className="section-subtitle">NOS PRESTATIONS</p>

            <h2>Que souhaites-tu faire ?</h2>

            <p>
              Sélectionne une prestation pour découvrir les options
              disponibles.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <button
                type="button"
                key={service.id}
                className={
                  selectedService?.id === service.id
                    ? "service-card selected"
                    : "service-card"
                }
                onClick={() => handleServiceChange(service)}
              >
                <h3>{service.name}</h3>

                <p>{service.duration}</p>

                <strong>
                  À partir de {service.price.toFixed(2)} EUR
                </strong>
              </button>
            ))}
          </div>

          {/* OPTIONS */}
          {selectedService && (
            <div className="booking-options">
              <div className="booking-form-title">
                <p className="section-subtitle">PERSONNALISATION</p>

                <h2>Choisis ton style</h2>
              </div>

              <div className="options-grid">
                {selectedService.options.map((option) => (
                  <button
                    type="button"
                    key={option}
                    className={
                      selectedOption === option
                        ? "option-card selected"
                        : "option-card"
                    }
                    onClick={() => setSelectedOption(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FORMULAIRE */}
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form-title">
              <p className="section-subtitle">TON RENDEZ-VOUS</p>

              <h2>Quand souhaites-tu venir ?</h2>
            </div>

            {/* DATE + HEURE */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date *</label>

                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Heure *</label>

                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* NOM + TELEPHONE */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>

                <input
                  id="name"
                  type="text"
                  placeholder="Ton nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone *</label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Ton numéro"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* DEMANDE PARTICULIERE */}
            <div className="form-group">
              <label htmlFor="notes">
                Demande particulière
              </label>

              <textarea
                id="notes"
                rows="5"
                placeholder="Décris-nous ce que tu souhaites..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* PHOTO D'INSPIRATION */}
            <div className="form-group inspiration-upload">
              <label htmlFor="inspiration">
                Photo d'inspiration
                <span> (facultatif)</span>
              </label>

              <input
                id="inspiration"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setInspiration(e.target.files?.[0] || null)
                }
              />

              <p>
                Ajoute une photo du modèle que tu souhaites réaliser.
              </p>

              {inspiration && (
                <div className="inspiration-preview">
                  <img
                    src={URL.createObjectURL(inspiration)}
                    alt="Inspiration"
                  />

                  <span>{inspiration.name}</span>
                </div>
              )}
            </div>

            {/* RECAPITULATIF */}
            {selectedService && selectedOption && (
              <div className="booking-summary">
                <div>
                  <span>Prestation</span>

                  <strong>{selectedService.name}</strong>
                </div>

                <div>
                  <span>Style</span>

                  <strong>{selectedOption}</strong>
                </div>

                <div>
                  <span>Prix estimatif</span>

                  <strong>
                    {selectedService.price.toFixed(2)} EUR
                  </strong>
                </div>
              </div>
            )}

            {/* WHATSAPP */}
            <button
              className="booking-submit"
              type="submit"
            >
              Confirmer ma demande sur WhatsApp
            </button>

            {message && (
              <div className="booking-message">
                {message}
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Booking;