/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Palette, 
  Share2, 
  Sparkles, 
  Film, 
  Layout, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { SERVICES, TRANSLATIONS, ServiceItem } from '../data/portfolioData';

interface ServicesSectionProps {
  lang: 'en' | 'ar';
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectService }) => {
  const [selectedId, setSelectedId] = useState<string>(SERVICES[0].id);
  const t = TRANSLATIONS[lang].services;

  const currentService = SERVICES.find((s) => s.id === selectedId) || SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'branding':
        return <Palette className="w-5 h-5 text-[#6d3df5]" />;
      case 'social':
        return <Share2 className="w-5 h-5 text-[#0fd6c2]" />;
      case 'content':
        return <Sparkles className="w-5 h-5 text-[#b9a5ff]" />;
      case 'video':
        return <Film className="w-5 h-5 text-[#2f6bf0]" />;
      case 'ui':
        return <Layout className="w-5 h-5 text-[#d4e21a]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0fd6c2]" />;
    }
  };

  return (
    <section id="services" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
      {/* Section Header */}
      <div className="max-w-2xl mb-12 md:mb-16">
        <h2 className="font-display font-extrabold text-[clamp(28px,5vw,56px)] tracking-tight text-white mb-4">
          {t.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#8b90b0] font-body leading-relaxed">
          {t.subheading}
        </p>
      </div>

      {/* Services Interactive Grid / Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Services Accordion/List */}
        <div className="lg:col-span-6 flex flex-col border-t border-[rgba(160,170,255,0.16)]">
          {SERVICES.map((service, index) => {
            const isSelected = service.id === selectedId;
            const title = lang === 'ar' ? service.titleAr : service.titleEn;
            const indexStr = `0${index + 1}`;

            return (
              <button
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                onMouseEnter={() => setSelectedId(service.id)}
                className={`group flex items-center justify-between w-full py-5 sm:py-6 border-b border-[rgba(160,170,255,0.16)] text-left cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2] ${
                  isSelected
                    ? 'text-white px-2 sm:px-4 bg-white/[0.03]'
                    : 'text-[#8b90b0] hover:text-[#f3f4ff] hover:pl-2'
                }`}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                      isSelected
                        ? 'border-[#0fd6c2]/40 bg-[#0fd6c2]/10 shadow-[0_0_15px_rgba(15,214,194,0.2)]'
                        : 'border-white/10 bg-white/5'
                    }`}
                  >
                    {getServiceIcon(service.id)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-2xl transition-colors">
                      {title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#8b90b0] tabular-nums">
                    {indexStr}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full transition-all ${
                      isSelected ? 'bg-[#0fd6c2] scale-125' : 'bg-transparent'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Active Service Detail Panel */}
        <div className="lg:col-span-6">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300">
            {/* Subtle glow accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#6d3df5]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-[#0fd6c2] font-semibold mb-4">
                {getServiceIcon(currentService.id)}
                <span>
                  {lang === 'ar' ? currentService.titleAr : currentService.titleEn}
                </span>
              </div>

              <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
                {lang === 'ar' ? currentService.titleAr : currentService.titleEn}
              </h4>

              <p className="text-base text-[#8b90b0] font-body leading-relaxed mb-6">
                {lang === 'ar' ? currentService.shortDescAr : currentService.shortDescEn}
              </p>

              {/* Deliverables checklist */}
              <div className="mb-8">
                <div className="text-xs uppercase tracking-wider font-semibold text-white/50 mb-3">
                  {t.deliverablesHeader}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(lang === 'ar'
                    ? currentService.deliverablesAr
                    : currentService.deliverablesEn
                  ).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#f3f4ff]">
                      <CheckCircle2 className="w-4 h-4 text-[#0fd6c2] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Action */}
              <a
                href="#contact"
                onClick={() => onSelectService?.(lang === 'ar' ? currentService.titleAr : currentService.titleEn)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#6d3df5] to-[#2f6bf0] text-white text-sm font-semibold hover:shadow-[0_0_25px_rgba(109,61,245,0.5)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2]"
              >
                <span>{t.getStarted}</span>
                <ArrowUpRight className={`w-4 h-4 text-[#0fd6c2] ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
