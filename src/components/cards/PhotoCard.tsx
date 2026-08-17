import React from 'react';
import { motion } from 'framer-motion';
import type { PhotoItem } from '../../types';
import { Maximize2, MapPin } from 'lucide-react';

interface PhotoCardProps {
  photo: PhotoItem;
  index: number;
  rotation?: number;
  className?: string;
  onOpen: (photo: PhotoItem) => void;
  onEnterHover: (text: string) => void;
  onLeaveHover: () => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  photo,
  rotation = 0,
  className = '',
  onOpen,
  onEnterHover,
  onLeaveHover,
}) => {
  return (
    <motion.div
      style={{
        rotate: `${rotation}deg`,
      }}
      whileHover={{
        y: -10,
        rotate: 0,
        scale: 1.025,
        transition: { type: 'spring', damping: 20, stiffness: 220 },
      }}
      onClick={() => onOpen(photo)}
      onMouseEnter={() => onEnterHover('VIEW')}
      onMouseLeave={onLeaveHover}
      className={`group relative polaroid-frame p-3 sm:p-4 rounded-2xl cursor-pointer select-none transition-all duration-300 ${className}`}
    >
      {/* Image Container with Paper Border Frame */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-900 shadow-inner">
        <img
          src={photo.src}
          alt={photo.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover Quick Action Badge */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Editorial Bottom Metadata & Caption */}
      <div className="mt-3.5 px-1 space-y-1.5">
        <div className="flex items-center justify-between">
          <h4 className="font-serif italic text-base sm:text-lg text-white group-hover:text-[#d4af37] transition-colors duration-300 font-medium">
            {photo.title}
          </h4>
          <span className="text-[10px] font-mono text-neutral-400">
            {photo.date || '2026'}
          </span>
        </div>

        {photo.caption && (
          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light">
            {photo.caption}
          </p>
        )}

        {photo.location && (
          <div className="flex items-center gap-1 text-[10px] font-mono text-[#d4af37] pt-1">
            <MapPin className="w-2.5 h-2.5" />
            <span>{photo.location}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
