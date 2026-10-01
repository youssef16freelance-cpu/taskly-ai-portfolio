/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageSquareQuote, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { TESTIMONIALS, TRANSLATIONS } from '../data/portfolioData';

interface TestimonialsSectionProps {
  lang: 'en' | 'ar';
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].testimonials;

  return (
    <section id="testimonials" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-display font-extrabold text-[clamp(28px,5vw,56px)] tracking-tight text-white mb-3">
          {t.heading}
        </h2>
        <p className="text-base text-[#8b90b0] font-body leading-relaxed mb-6">
          {t.subheading}
        </p>

        {/* Transparency Commitment Notice */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-[#8b90b0]">
          <ShieldAlert className="w-4 h-4 text-[#0fd6c2] shrink-0 mt-0.5" aria-hidden="true" />
          <span>{t.notice}</span>
        </div>
      </div>

      {/* Testimonial Placeholder Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item) => {
          const role = lang === 'ar' ? item.clientRoleAr : item.clientRoleEn;
          const quote = lang === 'ar' ? item.quoteAr : item.quoteEn;

          return (
            <div
              key={item.id}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between border-dashed border-white/20 hover:border-[#0fd6c2]/40 transition-colors"
            >
              <div>
                <MessageSquareQuote className="w-8 h-8 text-[#6d3df5]/60 mb-4" />
                <p className="text-sm text-[#8b90b0] italic leading-relaxed mb-6 font-body">
                  {quote}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-white/90">
                    {item.clientName}
                  </div>
                  <div className="text-xs text-[#0fd6c2]">
                    {role} · {item.companyName}
                  </div>
                </div>

                <span className="text-[10px] font-mono text-white/40 uppercase bg-white/5 px-2 py-0.5 rounded">
                  {lang === 'ar' ? 'خانة محجوزة' : 'Reserved Slot'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Box */}
      <div className="mt-10 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0fd6c2] hover:text-white transition-colors"
        >
          <span>{t.cta}</span>
          <ArrowUpRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
        </a>
      </div>
    </section>
  );
};
