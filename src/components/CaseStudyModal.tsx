/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Sparkles, 
  CheckCircle, 
  Layers, 
  Wrench, 
  Target, 
  Lightbulb,
  ArrowRight,
  Sliders
} from 'lucide-react';
import { ProjectItem, TRANSLATIONS } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: 'en' | 'ar';
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, lang }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  const t = TRANSLATIONS[lang].caseStudyModal;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const cs = project.caseStudy;
  const overview = lang === 'ar' ? cs.overviewAr : cs.overviewEn;
  const challenge = lang === 'ar' ? cs.challengeAr : cs.challengeEn;
  const solution = lang === 'ar' ? cs.solutionAr : cs.solutionEn;
  const processSteps = lang === 'ar' ? cs.processAr : cs.processEn;
  const results = lang === 'ar' ? cs.resultsAr : cs.resultsEn;
  const category = lang === 'ar' ? project.categoryAr : project.categoryEn;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#090d24] border border-[rgba(160,170,255,0.22)] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#060919]/90 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#6d3df5]/20 text-[#0fd6c2] text-xs font-semibold">
              {category}
            </span>
            <span className="text-xs text-[#8b90b0] font-mono">
              {project.isConcept ? (lang === 'ar' ? 'تصميم تجريبي لعرض المهارات' : 'Concept Showcase') : 'Client Work'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8b90b0] hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2] cursor-pointer"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-body">
          {/* Hero Banner with Title */}
          <div>
            <h3 id="case-study-title" className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-3">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-[#8b90b0] leading-relaxed">
              {overview}
            </p>
          </div>

          {/* Project Featured Image */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/9] bg-black/40 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d24] via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Challenge Card */}
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2.5 text-[#ff8080] font-display font-bold text-lg mb-3">
                <Target className="w-5 h-5 text-[#ff8080]" />
                <h4>{t.challenge}</h4>
              </div>
              <p className="text-sm sm:text-base text-[#8b90b0] leading-relaxed">
                {challenge}
              </p>
            </div>

            {/* Solution Card */}
            <div className="p-6 rounded-xl bg-[#0fd6c2]/[0.04] border border-[#0fd6c2]/20">
              <div className="flex items-center gap-2.5 text-[#0fd6c2] font-display font-bold text-lg mb-3">
                <Lightbulb className="w-5 h-5 text-[#0fd6c2]" />
                <h4>{t.solution}</h4>
              </div>
              <p className="text-sm sm:text-base text-[#8b90b0] leading-relaxed">
                {solution}
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <div className="flex items-center gap-2 text-white font-display font-bold text-xl mb-4">
              <Layers className="w-5 h-5 text-[#6d3df5]" />
              <h4>{t.process}</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5"
                >
                  <span className="font-mono text-xs text-[#0fd6c2] bg-[#0fd6c2]/10 px-2 py-0.5 rounded shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-sm text-[#f3f4ff]">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Software Badges */}
          <div>
            <div className="flex items-center gap-2 text-white font-display font-bold text-xl mb-4">
              <Wrench className="w-5 h-5 text-[#2f6bf0]" />
              <h4>{t.tools}</h4>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/90"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Before & After Section (if available) */}
          {cs.beforeAfter && (
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-[#6d3df5]/10 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
                  <Sliders className="w-5 h-5 text-[#0fd6c2]" />
                  <h4>{t.comparison}</h4>
                </div>
                <span className="text-xs text-[#8b90b0]">
                  {lang === 'ar' ? cs.beforeAfter.descriptionAr : cs.beforeAfter.descriptionEn}
                </span>
              </div>

              {/* Visual Transformation Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-black/40 border border-red-500/20 text-center">
                  <span className="text-xs font-mono text-red-400 uppercase tracking-wider block mb-2">
                    {lang === 'ar' ? cs.beforeAfter.beforeLabelAr : cs.beforeAfter.beforeLabelEn}
                  </span>
                  <p className="text-xs text-[#8b90b0]">
                    {lang === 'ar' ? 'تصاميم مشتتة، غياب الهوية الموحدة، وضعف جذب العملاء.' : 'Inconsistent layout, lack of distinct brand recognition, weak retention.'}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-black/40 border border-[#0fd6c2]/40 text-center">
                  <span className="text-xs font-mono text-[#0fd6c2] uppercase tracking-wider block mb-2">
                    {lang === 'ar' ? cs.beforeAfter.afterLabelAr : cs.beforeAfter.afterLabelEn}
                  </span>
                  <p className="text-xs text-[#f3f4ff]">
                    {lang === 'ar' ? 'نظام بصري متماسك، هوية فاخرة تبرر السعر العالي وتبني الولاء.' : 'Cohesive design system, premium appeal, and scroll-stopping visuals.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Final Results Outcome */}
          <div className="p-6 rounded-xl bg-[#6d3df5]/10 border border-[#6d3df5]/30">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg mb-2">
              <CheckCircle className="w-5 h-5 text-[#0fd6c2]" />
              <h4>{t.results}</h4>
            </div>
            <p className="text-sm sm:text-base text-[#f3f4ff] leading-relaxed">
              {results}
            </p>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#060919] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs sm:text-sm text-[#8b90b0]">
            {t.cta}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/80 transition-colors cursor-pointer"
            >
              {t.close}
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#6d3df5] to-[#0fd6c2] text-white text-xs font-bold shadow-[0_0_20px_rgba(109,61,245,0.4)] transition-all cursor-pointer"
            >
              {lang === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
