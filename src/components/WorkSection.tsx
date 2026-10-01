/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Eye, Sparkles, Info, Layers } from 'lucide-react';
import { PROJECTS, ProjectItem, TRANSLATIONS } from '../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';

interface WorkSectionProps {
  lang: 'en' | 'ar';
}

export const WorkSection: React.FC<WorkSectionProps> = ({ lang }) => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const t = TRANSLATIONS[lang].work;

  // 3D perspective tilt handler
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const mediaContainer = card.querySelector('.project-media') as HTMLElement;
    if (mediaContainer) {
      mediaContainer.style.transform = `perspective(800px) rotateY(${px * 12}deg) rotateX(${-py * 12}deg) scale(1.02)`;
    }
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const mediaContainer = card.querySelector('.project-media') as HTMLElement;
    if (mediaContainer) {
      mediaContainer.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
    }
  };

  return (
    <section id="work" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-display font-extrabold text-[clamp(28px,5vw,56px)] tracking-tight text-white mb-4">
          {t.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#8b90b0] font-body leading-relaxed mb-6">
          {t.subheading}
        </p>

        {/* Transparent Concept Projects Note */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-[#8b90b0]">
          <Info className="w-4 h-4 text-[#0fd6c2] shrink-0 mt-0.5" aria-hidden="true" />
          <span>{t.conceptNotice}</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS.map((project) => {
          const category = lang === 'ar' ? project.categoryAr : project.categoryEn;
          const description = lang === 'ar' ? project.descriptionAr : project.descriptionEn;

          return (
            <article
              key={project.id}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              className="group flex flex-col rounded-2xl bg-[rgba(10,14,36,0.5)] border border-[rgba(160,170,255,0.14)] hover:border-[#0fd6c2]/40 transition-all duration-300 p-5 sm:p-6"
            >
              {/* Image Frame with 3D Tilt */}
              <div className="project-media relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-black/60 transition-transform duration-300 ease-out">
                <img
                  src={project.image}
                  alt={`${project.title} - ${category}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Ambient Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Concept Tag */}
                {project.isConcept && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#050816]/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#0fd6c2]">
                    {t.conceptBadge}
                  </div>
                )}

                {/* Hover Quick Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <button
                    onClick={() => setActiveProject(project)}
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#050816] font-body font-bold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-transform cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{t.viewCaseStudy}</span>
                  </button>
                </div>
              </div>

              {/* Project Metadata */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-semibold text-[#0fd6c2] tracking-wide uppercase">
                    {category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {project.tools.slice(0, 2).map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono text-[#8b90b0] bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-2 group-hover:text-[#0fd6c2] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[#8b90b0] font-body leading-relaxed mb-6 flex-grow">
                  {description}
                </p>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(project)}
                    type="button"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90 hover:text-[#0fd6c2] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0fd6c2] rounded-sm"
                  >
                    <Layers className="w-4 h-4 text-[#6d3df5]" />
                    <span>{t.viewCaseStudy}</span>
                  </button>

                  <span className="text-xs text-[#8b90b0] font-mono">
                    {project.tools.join(' · ')}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Case Study Reusable Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        lang={lang}
      />
    </section>
  );
};
