import React, { useState, useEffect } from 'react';
import Admin from './Admin';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import ProcessSection from './components/ProcessSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const [lang, setLang] = useState('ar');
  const [preselectedService, setPreselectedService] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    const adminByPath = path === '/admin' || path.startsWith('/admin/');
    const adminByQuery = params.get('admin') === 'true';

    setIsAdminRoute(adminByPath || adminByQuery);
  }, []);

  const handleToggleLang = () => {
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleSelectService = (service) => {
    setPreselectedService(service);
  };

  // Admin Dashboard
  if (isAdminRoute) {
    return <Admin />;
  }

  // Main Website
  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      <main id="top" className="relative z-10">
        <Hero lang={lang} />

        <Marquee lang={lang} />

        <ServicesSection
          lang={lang}
          onSelectService={handleSelectService}
        />

        <WorkSection lang={lang} />

        <ProcessSection lang={lang} />

        <SkillsSection lang={lang} />

        <AboutSection lang={lang} />

        <TestimonialsSection lang={lang} />

        <ContactSection
          lang={lang}
          preselectedService={preselectedService}
        />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
