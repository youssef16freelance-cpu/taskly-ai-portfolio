/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, ShieldCheck, Zap, Users, ArrowUpRight } from 'lucide-react';
import { OWNER_PROFILE, TRANSLATIONS } from '../data/portfolioData';

interface AboutSectionProps {
  lang: 'en' | 'ar';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].about;
  const profile = OWNER_PROFILE;
  const pillars = profile.pillars[lang];

  return (
    <section id="about" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <h2 className="font-display font-extrabold text-[clamp(28px,5vw,56px)] tracking-tight text-white mb-3">
          {t.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#8b90b0] font-body leading-relaxed">
          {t.subheading}
        </p>
      </div>

      {/* Main About Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Creator Identity Card */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#6d3df5]/30 rounded-full blur-2xl pointer-events-none" />

          {/* Official Vexlume Logo Avatar */}
          <div className="relative mb-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl sm:rounded-3xl bg-black border border-[rgba(160,170,255,0.22)] p-1.5 shadow-[0_0_40px_rgba(109,61,245,0.45)] hover:shadow-[0_0_50px_rgba(15,214,194,0.5)] transition-shadow duration-300">
              <div className="w-full h-full rounded-xl sm:rounded-2xl bg-black flex items-center justify-center overflow-hidden">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={`${profile.name} - ${profile.studioName} Official Logo`}
                    className="w-full h-full object-contain aspect-square"
                    loading="lazy"
                  />
                ) : (
                  <span className="font-display font-black text-3xl sm:text-4xl text-white">
                    {profile.name.charAt(0)}
                  </span>
                )}
              </div>
            </div>
            <div
              className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0fd6c2] border-2 border-[#050816] shadow-[0_0_12px_#0fd6c2]"
              title="Available for projects"
            />
          </div>

          <h3 className="font-display font-extrabold text-2xl text-white mb-1">
            {profile.name}
          </h3>
          <span className="text-xs font-semibold text-[#0fd6c2] tracking-wider uppercase mb-4">
            {profile.studioName}
          </span>

          <p className="text-sm text-[#8b90b0] font-body leading-relaxed mb-6">
            {profile.role[lang]}
          </p>

          <a
            href="#contact"
            className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-white transition-colors flex items-center justify-center gap-2"
          >
            <span>{lang === 'ar' ? 'ابدأ محادثة عمل' : 'Start a Collaboration'}</span>
            <ArrowUpRight className={`w-4 h-4 text-[#0fd6c2] ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
          </a>
        </div>

        {/* Right Column: 4 Strategic Pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* 1. Who I Am */}
          <div className="glass-panel rounded-xl p-5 sm:p-6 hover:border-[#6d3df5]/40 transition-colors">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#6d3df5]/20 flex items-center justify-center text-[#b9a5ff]">
                <User className="w-4 h-4" />
              </div>
              <h4>{pillars.who.title}</h4>
            </div>
            <p className="text-xs sm:text-sm text-[#8b90b0] font-body leading-relaxed">
              {pillars.who.text}
            </p>
          </div>

          {/* 2. What I Do */}
          <div className="glass-panel rounded-xl p-5 sm:p-6 hover:border-[#0fd6c2]/40 transition-colors">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#0fd6c2]/20 flex items-center justify-center text-[#0fd6c2]">
                <Zap className="w-4 h-4" />
              </div>
              <h4>{pillars.what.title}</h4>
            </div>
            <p className="text-xs sm:text-sm text-[#8b90b0] font-body leading-relaxed">
              {pillars.what.text}
            </p>
          </div>

          {/* 3. What Makes My Work Different */}
          <div className="glass-panel rounded-xl p-5 sm:p-6 hover:border-[#2f6bf0]/40 transition-colors">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#2f6bf0]/20 flex items-center justify-center text-[#2f6bf0]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4>{pillars.difference.title}</h4>
            </div>
            <p className="text-xs sm:text-sm text-[#8b90b0] font-body leading-relaxed">
              {pillars.difference.text}
            </p>
          </div>

          {/* 4. Who I Work With */}
          <div className="glass-panel rounded-xl p-5 sm:p-6 hover:border-[#d4e21a]/40 transition-colors">
            <div className="flex items-center gap-3 text-white font-display font-bold text-lg mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#d4e21a]/20 flex items-center justify-center text-[#d4e21a]">
                <Users className="w-4 h-4" />
              </div>
              <h4>{pillars.clients.title}</h4>
            </div>
            <p className="text-xs sm:text-sm text-[#8b90b0] font-body leading-relaxed">
              {pillars.clients.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
