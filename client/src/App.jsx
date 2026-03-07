import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import HomePage from "./pages/home";
import ServicesSection from "./pages/ServicesSection/ServicesSection";
import ContactPage from "./pages/Contacts/ContactSection";
import Career from "./pages/career/CareerPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AboutSection from "./pages/about/AboutSection";
import ContactSection from "./pages/Contacts/ContactSection";
import ProductsPage from "./pages/Products/ProductsPage";
import DealsPage from "./pages/Deals/DealsPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      <ScrollToTop />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <ServicesSection />
                <ContactPage />
              </>
            }
          />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/deals" element={<DealsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
