
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GovernmentPage from './pages/GovernmentPage';
import BusinessPage from './pages/BusinessPage';
import HealthPage from './pages/HealthPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
      <div className="antialiased selection:bg-brand selection:text-white min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/government" element={<GovernmentPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/health" element={<HealthPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
