import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/Componentes/Navbar";
import img1 from "../src/Data/images/img1.gif";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Componentes/Footer";
import whatsappimg from "./Data/images/whatsapp.png";
import Products from "./Pages/Products";
import BuyProduct from "./Pages/BuyProduct";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import { useEffect } from "react";
import Horscope from "./Pages/Horscope";
import HoroscopeDetail from "./Pages/HoroscopeDetail";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <div className="bg-black">
      <div class="fixed bottom-4 left-4 z-[99999]">
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noreferrer"
          class="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img src={whatsappimg} alt="WhatsApp" class="w-12 h-12" />
        </a>
      </div>

      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/buy-product" element={<BuyProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/horoscope" element={<Horscope />} /> 
          <Route path="/horoscope-detail" element={<HoroscopeDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
