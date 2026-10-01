/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TOOLS, TRANSLATIONS } from '../data/portfolioData';

interface SkillsSectionProps {
  lang: 'en' | 'ar';
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].skills;

  return (
    <section id="skills" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <h2 className="font-display font-extrabold text-[clamp(28px,5vw,56px)] tracking-tight text-white mb-3">
          {t.heading}
        </h2>
        <p className="text-base text-[#8b90b0] font-body leading-relaxed">
          {t.subheading}
        </p>
      </div>

      {/* Tools Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
        {TOOLS.map((tool) => {
          const category = lang === 'ar' ? tool.categoryAr : tool.category;

          return (
            <div
              key={tool.name}
              className="glass-panel rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#0fd6c2]/50 hover:shadow-[0_0_25px_rgba(15,214,194,0.15)] transition-all duration-300 group"
            >
              {/* Top Accent Icon/Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-xs text-[#0fd6c2] group-hover:scale-110 transition-transform">
                  {tool.name.slice(0, 2)}
                </div>
                <span className="text-[10px] font-mono text-white/40 uppercase">
                  {tool.level}
                </span>
              </div>

              {/* Tool Name & Category */}
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white mb-1 group-hover:text-[#0fd6c2] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-[#8b90b0] font-body line-clamp-2">
                  {category}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
