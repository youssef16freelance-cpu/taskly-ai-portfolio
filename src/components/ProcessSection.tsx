/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Lightbulb, PenTool, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS, TRANSLATIONS } from '../data/portfolioData';

interface ProcessSectionProps {
  lang: 'en' | 'ar';
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].process;

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-[#6d3df5]" />;
      case 1:
        return <Lightbulb className="w-5 h-5 text-[#0fd6c2]" />;
      case 2:
        return <PenTool className="w-5 h-5 text-[#b9a5ff]" />;
      case 3:
        return <CheckCircle className="w-5 h-5 text-[#d4e21a]" />;
      default:
        return <Compass className="w-5 h-5 text-[#0fd6c2]" />;
    }
  };

  return (
    <section id="process" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
      {/* Section Header */}
      <div className="max-w-2xl mb-12 md:mb-16">
        <h2 className="font-display font-extrabold text-[clamp(28px,5vw,56px)] tracking-tight text-white mb-4">
          {t.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#8b90b0] font-body leading-relaxed">
          {t.subheading}
        </p>
      </div>

      {/* 4-Step Process Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {PROCESS_STEPS.map((step, idx) => {
          const title = lang === 'ar' ? step.titleAr : step.titleEn;
          const desc = lang === 'ar' ? step.descriptionAr : step.descriptionEn;

          return (
            <div
              key={step.number}
              className="glass-panel rounded-2xl p-6 sm:p-7 relative group hover:border-[#0fd6c2]/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Step Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-display font-black text-2xl sm:text-3xl text-white/20 group-hover:text-[#0fd6c2]/40 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-[#0fd6c2] transition-colors">
                  {title}
                </h3>

                <p className="text-sm text-[#8b90b0] font-body leading-relaxed">
                  {desc}
                </p>
              </div>

              {/* Bottom connecting subtle line */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40 font-mono">
                <span>Phase {step.number}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#0fd6c2]/40 group-hover:bg-[#0fd6c2] transition-colors" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
