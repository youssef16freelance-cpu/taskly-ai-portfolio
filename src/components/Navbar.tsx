/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { TRANSLATIONS, OWNER_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  lang: 'en' | 'ar';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [activeSection, setActiveSection] = useState<string>('top');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const t = TRANSLATIONS[lang].nav;

  const navLinks = [
    { href: '#services', label: t.services },
    { href: '#work', label: t.work },
    { href: '#process', label: t.process },
    { href: '#skills', label: t.skills },
    { href: '#about', label: t.about },
    { href: '#contact', label: t.contact }
  ];

  // Track scroll position for background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to highlight active section
  useEffect(() => {
    const sectionIds = ['services', 'work', 'process', 'skills', 'about', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Handle mobile link click: scroll and close
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050816]/85 backdrop-blur-md border-b border-[rgba(160,170,255,0.12)] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="flex items-center gap-2.5 text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2] rounded-md px-1 py-0.5"
          aria-label="Taskly AI Home"
        >
          {/* Official Vexlume Logo Icon */}
          <div className="w-8 h-8 rounded-lg bg-black border border-white/15 p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(109,61,245,0.5)] transition-transform duration-200 group-hover:scale-105 overflow-hidden">
            {OWNER_PROFILE.avatarUrl ? (
              <img
                src={OWNER_PROFILE.avatarUrl}
                alt="Vexlume Logo"
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="font-display font-black text-sm text-white">V</span>
            )}
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-base md:text-lg tracking-tight">
              Taskly AI
            </span>
            <span className="text-[10px] text-[#8b90b0] tracking-widest uppercase font-body mt-0.5">
              by Vexlume
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 font-body text-sm font-medium text-[#8b90b0]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors duration-150 hover:text-white ${
                  isActive ? 'text-white font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6d3df5] to-[#0fd6c2] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Language Switch & CTA & Mobile Toggle) */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Language Switch Button */}
          <button
            onClick={onToggleLang}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[rgba(160,170,255,0.2)] bg-[rgba(13,18,45,0.6)] text-xs font-semibold text-[#f3f4ff] hover:border-[#0fd6c2] hover:text-[#0fd6c2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2] cursor-pointer"
            aria-label={`Switch language to ${t.langSwitch}`}
          >
            <Globe className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.langSwitch}</span>
          </button>

          {/* Quick CTA Button (Desktop) */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white border border-white/15 transition-all hover:border-[#0fd6c2]/50 hover:shadow-[0_0_20px_rgba(15,214,194,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2]"
          >
            <span>{lang === 'ar' ? 'تواصل معي' : 'Get in touch'}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 text-[#0fd6c2] ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 rounded-lg text-[#8b90b0] hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050816]/95 backdrop-blur-xl border-b border-[rgba(160,170,255,0.16)] px-4 pt-4 pb-6 mt-2 shadow-2xl transition-all animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3 font-body text-base">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6d3df5]/20 to-[#0fd6c2]/10 text-white font-semibold border-l-2 border-[#0fd6c2]'
                      : 'text-[#8b90b0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#0fd6c2]" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-[#6d3df5] to-[#2f6bf0] text-white font-semibold text-sm shadow-[0_0_25px_rgba(109,61,245,0.4)]"
              >
                {lang === 'ar' ? 'ابدأ مشروعك الآن' : 'Start a Project'}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
