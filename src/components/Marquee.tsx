/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRANSLATIONS } from '../data/portfolioData';

interface MarqueeProps {
  lang: 'en' | 'ar';
}

export const Marquee: React.FC<MarqueeProps> = ({ lang }) => {
  const text = TRANSLATIONS[lang].marquee;

  return (
    <div
      className="relative z-10 w-full overflow-hidden border-y border-[rgba(160,170,255,0.16)] py-4 bg-[rgba(5,8,22,0.7)] backdrop-blur-sm"
      aria-hidden="true"
    >
      <div className="animate-marquee font-display font-extrabold text-[clamp(16px,3.5vw,30px)] uppercase tracking-wide text-transparent [-webkit-text-stroke:1px_#7a7fb0] whitespace-nowrap select-none">
        <span className="pr-4">{text.repeat(3)}</span>
        <span className="pr-4">{text.repeat(3)}</span>
      </div>
    </div>
  );
};
