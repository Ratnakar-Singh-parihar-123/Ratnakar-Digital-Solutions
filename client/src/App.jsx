import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home";
import ServicesSection from "./pages/ServicesSection/ServicesSection";
import Loader from "./components/Loader";
import ContactPage from "./pages/Contacts/ContactPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <HomePage />
      <ServicesSection />
      <ContactPage />
    </>
  );
}

export default App;
