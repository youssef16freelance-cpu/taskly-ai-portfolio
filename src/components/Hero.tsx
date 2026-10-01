/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, FolderOpen, Send } from 'lucide-react';
import { TRANSLATIONS } from '../data/portfolioData';

interface HeroProps {
  lang: 'en' | 'ar';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].hero;
  const words = t.words;
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Rotating words typewriter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsFading(false);
      }, 300);
    }, 2400);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Decorative Conic Ring */}
      <div
        className={`absolute z-0 pointer-events-none opacity-40 w-[clamp(180px,30vw,340px)] aspect-square rounded-full border-[3px] border-transparent [background:conic-gradient(#6d3df5,#2f6bf0,#0fd6c2,#6d3df5)_border-box] [-webkit-mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude] animate-spin-slow ${
          lang === 'ar' ? '-left-6 top-16 md:left-4 md:top-24' : '-right-6 top-16 md:right-4 md:top-24'
        }`}
        aria-hidden="true"
      />

      {/* Sparkle Ambient Accents */}
      <div className="absolute top-20 left-10 text-[#cbb8ff]/30 text-lg pointer-events-none animate-pulse" aria-hidden="true">
        ✦
      </div>
      <div className="absolute bottom-28 right-12 text-[#0fd6c2]/40 text-xl pointer-events-none animate-pulse" aria-hidden="true" style={{ animationDelay: '1.2s' }}>
        ✦
      </div>

      <div className="relative z-10 max-w-3xl">
        {/* Subtle Category Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#0fd6c2] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#0fd6c2]" aria-hidden="true" />
          <span>{t.tagline}</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-extrabold text-[clamp(34px,7.5vw,90px)] leading-[1.05] tracking-tight text-white mb-6">
          <span className="block">{t.h1Line1}</span>
          <span className="bg-gradient-to-r from-white via-[#d3c7ff] to-[#0fd6c2] bg-clip-text text-transparent block">
            {t.h1Line2}
          </span>
          <span className="block text-[#f3f4ff]">{t.h1Line3}</span>
        </h1>

        {/* Paragraph Bio */}
        <p className="text-base sm:text-lg md:text-xl text-[#8b90b0] font-body max-w-2xl leading-relaxed mb-6">
          {t.bio}
        </p>

        {/* Dynamic Rotating Skill Indicator */}
        <div className="flex items-center gap-2.5 text-base sm:text-xl font-display font-bold mb-10 text-[#0fd6c2]">
          <span className="text-white/60 font-body text-sm sm:text-base font-normal">{t.rotatingLabel}</span>
          <span
            className={`transition-all duration-300 transform inline-block bg-gradient-to-r from-[#0fd6c2] to-[#b9a5ff] bg-clip-text text-transparent ${
              isFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            {words[wordIndex]}
          </span>
        </div>

        {/* Improved Dual CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          {/* Primary CTA: Let's Work Together */}
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#6d3df5] via-[#2f6bf0] to-[#0fd6c2] text-white font-body font-bold text-sm sm:text-base shadow-[0_0_35px_rgba(109,61,245,0.45)] hover:shadow-[0_0_45px_rgba(15,214,194,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2]"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
            <span>{t.ctaContact}</span>
          </a>

          {/* Secondary CTA: View My Work */}
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[rgba(10,14,36,0.8)] border border-[rgba(160,170,255,0.25)] hover:border-[#0fd6c2] text-white font-body font-semibold text-sm sm:text-base hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2]"
          >
            <FolderOpen className="w-4 h-4 text-[#0fd6c2]" aria-hidden="true" />
            <span>{t.ctaWork}</span>
          </a>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="relative z-10 mt-14 sm:mt-16 flex items-center gap-2 text-xs text-[#8b90b0] font-body tracking-wider uppercase">
        <a
          href="#services"
          className="group inline-flex items-center gap-2 text-[#8b90b0] hover:text-[#0fd6c2] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0fd6c2] rounded-sm py-1"
        >
          <span className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#0fd6c2] transition-colors">
            <ArrowDown className="w-3 h-3 animate-bounce text-[#0fd6c2]" aria-hidden="true" />
          </span>
          <span>{t.scrollHint}</span>
        </a>
      </div>
    </section>
  );
};
