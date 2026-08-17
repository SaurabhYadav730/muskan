import React from 'react';
import { motion } from 'framer-motion';
import type { CategoryType } from '../../types';
import { Sparkles, Camera, Film, Compass } from 'lucide-react';

interface FloatingDockProps {
  activeCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
  stillsCount: number;
  motionCount: number;
  selectedCount: number;
  onEnterHover: (text: string) => void;
  onLeaveHover: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  activeCategory,
  onSelectCategory,
  stillsCount,
  motionCount,
  selectedCount,
  onEnterHover,
  onLeaveHover,
}) => {
  const categories: { id: CategoryType; label: string; icon: React.ReactNode; count: number }[] = [
    { id: 'all', label: 'All', icon: <Compass className="w-3.5 h-3.5" />, count: stillsCount + motionCount },
    { id: 'stills', label: 'Stills', icon: <Camera className="w-3.5 h-3.5" />, count: stillsCount },
    { id: 'motion', label: 'Motion', icon: <Film className="w-3.5 h-3.5" />, count: motionCount },
    { id: 'selected', label: 'Selected', icon: <Sparkles className="w-3.5 h-3.5" />, count: selectedCount },
  ];

  return (
    <aside aria-label="Category Navigation" className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <nav aria-label="Media Filters" className="floating-dock px-2.5 py-2 rounded-full flex items-center gap-1.5 shadow-dock border border-white/10">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              onMouseEnter={() => onEnterHover(`FILTER`)}
              onMouseLeave={onLeaveHover}
              className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300 flex items-center gap-2 ${
                isActive ? 'text-[#08080a] font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {/* Active animated pill background */}
              {isActive && (
                <motion.div
                  layoutId="activeDockPill"
                  className="absolute inset-0 bg-[#f5f5f7] rounded-full shadow-lg"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              <span className="relative z-10 flex items-center gap-1.5">
                {cat.icon}
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-[#08080a]/15 text-[#08080a]' : 'bg-white/10 text-neutral-400'
                  }`}
                >
                  {cat.count}
                </span>
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
