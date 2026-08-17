import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  onEnterHover: (text: string) => void;
  onLeaveHover: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onEnterHover, onLeaveHover }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 py-16 md:py-24 px-6 md:px-12 bg-[#060608] z-10 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Brand Statement */}
        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-[#d4af37] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Moments That Stay</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-white font-normal">
            Muskan — Visual Anthology
          </h2>
          <p className="text-xs text-neutral-500 font-mono tracking-wider">
            Curated with 10 Fine Art Stills & 2 Cinematic Motion Captures.
          </p>
        </div>

        {/* Right Back to Top Button */}
        <div className="flex items-center gap-6">
          <button
            onClick={scrollToTop}
            onMouseEnter={() => onEnterHover('TOP')}
            onMouseLeave={onLeaveHover}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black text-neutral-200 border border-white/15 text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-md"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
        <span>© 2024–2026 Muskan Portfolio • All Rights Reserved</span>
        <span>Curated Editorial Architecture</span>
      </div>
    </footer>
  );
};
