import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onEnterHover: (text: string) => void;
  onLeaveHover: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onEnterHover, onLeaveHover }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-5 flex items-center justify-between pointer-events-none">
      {/* Brand & Curator */}
      <div className="flex items-center gap-4 pointer-events-auto">
        <a
          href="#"
          className="group flex items-baseline gap-2.5"
          onMouseEnter={() => onEnterHover('HOME')}
          onMouseLeave={onLeaveHover}
        >
          <span className="font-serif italic text-2xl md:text-3xl tracking-tight text-white group-hover:text-[#d4af37] transition-colors duration-300">
            Muskan
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase border border-[#d4af37]/30 px-1.5 py-0.5 rounded">
            Anthology
          </span>
        </a>
      </div>

      {/* Center Metadata Indicator (Desktop) */}
      <div className="hidden md:flex items-center gap-3 text-xs tracking-widest uppercase text-neutral-400 font-mono pointer-events-auto bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Curated Exhibition • Vol. 03</span>
      </div>

      {/* Right Action */}
      <div className="flex items-center gap-3 pointer-events-auto">
        <a
          href="#story"
          onMouseEnter={() => onEnterHover('STORY')}
          onMouseLeave={onLeaveHover}
          className="text-xs font-mono tracking-widest uppercase text-neutral-300 hover:text-white px-3.5 py-1.5 rounded-full border border-white/15 hover:border-[#d4af37]/60 hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center gap-1.5"
        >
          <span>Behind Stills</span>
          <ArrowUpRight className="w-3 h-3 text-[#d4af37]" />
        </a>
      </div>
    </header>
  );
};
