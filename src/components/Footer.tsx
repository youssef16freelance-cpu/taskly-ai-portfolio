/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { TRANSLATIONS } from '../data/portfolioData';

interface FooterProps {
  lang: 'en' | 'ar';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[rgba(160,170,255,0.14)] bg-[#03050e] py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 font-body text-xs sm:text-sm text-[#8b90b0]">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-display font-extrabold text-white text-base">
            Taskly AI
          </span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>© 2026 Vexlume. {t.rights}</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          type="button"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-[#0fd6c2] text-white/80 hover:text-[#0fd6c2] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0fd6c2]"
        >
          <span>{t.backToTop}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
