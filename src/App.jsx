import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Catalogue from "./pages/Catalogue";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 1. Import de votre CartProvider (ajustez le chemin selon votre dossier)
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    // 2. Encapsulation globale
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;