/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Send, 
  Instagram, 
  Facebook, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { 
  WHATSAPP_NUMBER, 
  CONTACT_EMAIL, 
  SOCIAL_LINKS, 
  TRANSLATIONS 
} from '../data/portfolioData';

interface ContactSectionProps {
  lang: 'en' | 'ar';
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, preselectedService }) => {
  const t = TRANSLATIONS[lang].contact;
  const services = t.servicesList;

  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(0);
  const [projectNote, setProjectNote] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  // Update selected service if preselectedService matches
  React.useEffect(() => {
    if (preselectedService) {
      const idx = services.findIndex((s) => s.toLowerCase().includes(preselectedService.toLowerCase()));
      if (idx !== -1) {
        setSelectedServiceIndex(idx);
      }
    }
  }, [preselectedService, services]);

  const selectedService = services[selectedServiceIndex];
  const cleanWhatsAppNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');

  // WhatsApp Message Builder
  const handleWhatsAppClick = () => {
    const introText = lang === 'ar'
      ? `أهلاً Vexlume، أحتاج مساعدة في مشروع: ${selectedService}`
      : `Hi Vexlume, I would like to inquire about: ${selectedService}`;

    const fullMessage = projectNote.trim()
      ? `${introText}\n\nتفاصيل المشروع / Project Details:\n${projectNote.trim()}`
      : introText;

    const encoded = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Email Builder
  const handleEmailClick = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${selectedService} - Taskly AI`);
    const body = encodeURIComponent(
      projectNote.trim()
        ? `Service: ${selectedService}\n\nProject Brief:\n${projectNote.trim()}`
        : `Service: ${selectedService}\n\nI would like to collaborate on an upcoming project.`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
      {/* Section Header with strong CTA */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-display font-extrabold text-[clamp(32px,6vw,68px)] leading-[1.1] tracking-tight text-white mb-4">
          <span>{t.heading} </span>
          <span className="bg-gradient-to-r from-[#6d3df5] via-[#2f6bf0] to-[#0fd6c2] bg-clip-text text-transparent block sm:inline">
            {t.highlight}
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#8b90b0] font-body leading-relaxed">
          {t.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Interactive Form */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            {/* Service selector chips */}
            <div>
              <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-3">
                {t.serviceSelectorLabel}
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {services.map((serviceName, index) => {
                  const isSelected = selectedServiceIndex === index;
                  return (
                    <button
                      key={serviceName}
                      type="button"
                      onClick={() => setSelectedServiceIndex(index)}
                      className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2] ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#6d3df5] to-[#2f6bf0] text-white shadow-[0_0_15px_rgba(109,61,245,0.4)] border-transparent'
                          : 'bg-white/5 border border-white/10 text-[#8b90b0] hover:text-white hover:border-white/20'
                      }`}
                    >
                      {serviceName}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Project Details Textarea */}
            <div>
              <label
                htmlFor="project-note"
                className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2"
              >
                {t.messageLabel}
              </label>
              <textarea
                id="project-note"
                rows={4}
                value={projectNote}
                onChange={(e) => setProjectNote(e.target.value)}
                placeholder={t.messagePlaceholder}
                className="w-full bg-[#050816]/70 border border-white/15 rounded-xl p-3.5 sm:p-4 text-sm text-[#f3f4ff] placeholder-white/30 font-body focus:outline-none focus:border-[#0fd6c2] focus:ring-1 focus:ring-[#0fd6c2] transition-colors resize-y min-h-[110px]"
              />
            </div>

            {/* Direct Action Buttons: WhatsApp & Email */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* WhatsApp CTA Button */}
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="btn-shimmer flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#0fd6c2] via-[#2f6bf0] to-[#6d3df5] text-white font-bold text-sm shadow-[0_0_30px_rgba(15,214,194,0.4)] hover:shadow-[0_0_40px_rgba(15,214,194,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>{t.whatsappBtn}</span>
              </button>

              {/* Email Direct Button */}
              <button
                type="button"
                onClick={handleEmailClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2]"
              >
                <Mail className="w-4 h-4 text-[#0fd6c2]" />
                <span>{t.emailBtn}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Direct Contacts & Verified Social Profiles */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Quick Card */}
          <div className="glass-panel rounded-2xl p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-3 text-white font-display font-bold text-base sm:text-lg">
              <Mail className="w-5 h-5 text-[#0fd6c2]" />
              <h3>{lang === 'ar' ? 'البريد الإلكتروني المباشر' : 'Direct Email'}</h3>
            </div>
            <p className="text-xs text-[#8b90b0] mb-4">
              {lang === 'ar' ? 'للاستفسارات والطلبات والعقود التجارية الرسمية:' : 'For business inquiries, project proposals, and official correspondence:'}
            </p>
            <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-mono text-xs sm:text-sm text-white/90 truncate hover:text-[#0fd6c2] transition-colors focus-visible:outline-none focus-visible:underline"
                title={`Send email to ${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#0fd6c2] transition-colors cursor-pointer shrink-0 ml-2"
                aria-label="Copy email address"
              >
                {copiedEmail ? (lang === 'ar' ? 'تم النسخ!' : 'Copied!') : (lang === 'ar' ? 'نسخ' : 'Copy')}
              </button>
            </div>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="glass-panel rounded-2xl p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-3 text-white font-display font-bold text-base sm:text-lg">
              <MessageCircle className="w-5 h-5 text-[#0fd6c2]" />
              <h3>WhatsApp Direct</h3>
            </div>
            <p className="text-xs text-[#8b90b0] mb-4">
              {lang === 'ar' ? 'رد سريع لمناقشة تفاصيل المشاريع والمواعيد:' : 'Fast turnaround for scheduling briefings and milestone updates:'}
            </p>
            <a
              href={`https://wa.me/${cleanWhatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0fd6c2] hover:text-white transition-colors"
            >
              <span>{WHATSAPP_NUMBER}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div className="glass-panel rounded-2xl p-6 sm:p-7">
            <span className="block text-xs uppercase tracking-wider font-semibold text-white/50 mb-4">
              {t.socialsLabel}
            </span>
            <div className="flex flex-wrap gap-2.5">
              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0fd6c2] text-xs font-semibold text-white transition-all"
              >
                <Instagram className="w-4 h-4 text-[#b9a5ff]" />
                <span>Instagram</span>
              </a>

              {/* TikTok */}
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0fd6c2] text-xs font-semibold text-white transition-all"
              >
                <span className="font-bold text-sm text-[#0fd6c2]">TT</span>
                <span>TikTok</span>
              </a>

              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0fd6c2] text-xs font-semibold text-white transition-all"
              >
                <Facebook className="w-4 h-4 text-[#2f6bf0]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
