import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import HomePage from "./pages/home";
import ServicesSection from "./pages/ServicesSection/ServicesSection";
import ContactPage from "./pages/Contacts/ContactPage";
import Career from "./pages/career/CareerPage";

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
    }, 1500);

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
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
