/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CanvasBackground } from './components/CanvasBackground';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import { ProcessSection } from './components/ProcessSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Initialize language from localStorage or browser preferences
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('taskly_lang');
      if (savedLang === 'ar' || savedLang === 'en') {
        setLang(savedLang);
        applyLanguageSettings(savedLang);
      } else {
        applyLanguageSettings('en');
      }
    } catch {
      applyLanguageSettings('en');
    }
  }, []);

  const applyLanguageSettings = (newLang: 'en' | 'ar') => {
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const handleToggleLang = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
    applyLanguageSettings(nextLang);
    try {
      localStorage.setItem('taskly_lang', nextLang);
    } catch {
      // Storage unavailable fallback
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative min-h-screen bg-[#050816] text-[#f3f4ff] font-body selection:bg-[#6d3df5]/40 selection:text-white ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {/* Interactive Drifting Particle Network & Ambient Glows */}
      <CanvasBackground />

      {/* Cinematic 1.2s Fast Intro */}
      <IntroAnimation lang={lang} />

      {/* Sticky 3-Zone Navigation Bar */}
      <Navbar lang={lang} onToggleLang={handleToggleLang} />

      {/* Main Content Sections */}
      <main id="top" className="relative z-10">
        <Hero lang={lang} />
        <Marquee lang={lang} />
        <ServicesSection lang={lang} onSelectService={handleSelectService} />
        <WorkSection lang={lang} />
        <ProcessSection lang={lang} />
        <SkillsSection lang={lang} />
        <AboutSection lang={lang} />
        <TestimonialsSection lang={lang} />
        <ContactSection lang={lang} preselectedService={preselectedService} />
      </main>

      {/* Semantic Footer */}
      <Footer lang={lang} />
    </div>
  );
}
