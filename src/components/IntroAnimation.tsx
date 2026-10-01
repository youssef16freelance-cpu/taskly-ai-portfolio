/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete?: () => void;
  lang: 'en' | 'ar';
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete, lang }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion or already saw intro in current session
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Auto-dismiss within 1.4 seconds as required
    const timer = setTimeout(() => {
      handleClose();
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 600);
  };

  if (!isVisible) return null;

  const brandText = "Taskly AI";

  return (
    <div
      id="intro-overlay"
      className={`fixed inset-0 z-50 bg-[#000002] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] ${
        isOpening ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      role="dialog"
      aria-label="Welcome to Taskly AI"
    >
      {/* Background Radial Glow */}
      <div className="absolute w-[80vmin] h-[80vmin] rounded-full bg-[radial-gradient(circle,rgba(109,61,245,0.55),rgba(15,214,194,0.18)_45%,transparent_70%)] blur-[40px] animate-pulse" />

      {/* Cinematic Title with letter staggered reveal */}
      <div
        className="relative z-10 flex font-display font-extrabold text-[clamp(36px,9vw,92px)] tracking-tight uppercase"
        role="img"
        aria-label="Taskly AI"
      >
        {brandText.split('').map((char, index) => (
          <span
            key={index}
            style={{
              animationDelay: `${index * 50}ms`
            }}
            className="inline-block bg-gradient-to-r from-white via-[#b9a5ff] to-[#0fd6c2] bg-clip-text text-transparent animate-[fadeInUp_0.5s_cubic-bezier(0.2,0.8,0.2,1)_forwards]"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>

      {/* Subtitle kicker */}
      <div className="relative z-10 mt-3 text-xs md:text-sm tracking-[0.2em] uppercase text-[#8b90b0] font-body">
        {lang === 'ar' ? 'استوديو التصميم والمحتوى الإبداعي' : 'Design · Content · Copywriting'}
      </div>

      {/* Skip Button */}
      <button
        onClick={handleClose}
        type="button"
        className="absolute bottom-10 px-5 py-2 rounded-full border border-white/15 text-xs text-[#8b90b0] hover:text-white hover:border-[#0fd6c2] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0fd6c2]"
      >
        {lang === 'ar' ? 'تخطي المقدمة' : 'Skip intro'}
      </button>
    </div>
  );
};
