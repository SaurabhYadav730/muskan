import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PhotoItem, VideoItem } from '../../types';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Camera, Play } from 'lucide-react';

interface MediaLightboxProps {
  activeItem: PhotoItem | VideoItem | null;
  allItems: (PhotoItem | VideoItem)[];
  onClose: () => void;
  onNavigate: (item: PhotoItem | VideoItem) => void;
  onEnterHover: (text: string) => void;
  onLeaveHover: () => void;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({
  activeItem,
  allItems,
  onClose,
  onNavigate,
  onEnterHover,
  onLeaveHover,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (activeItem) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeItem]);

  if (!activeItem) return null;

  const currentIndex = allItems.findIndex((item) => item.id === activeItem.id);
  const isVideo = 'duration' in activeItem;

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
    onNavigate(allItems[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allItems.length;
    onNavigate(allItems[nextIndex]);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[9990] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-8"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-50 pointer-events-auto">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-neutral-400 uppercase">
            <span className="text-[#d4af37]">MUSKAN ARCHIVE</span>
            <span>•</span>
            <span>
              {String(currentIndex + 1).padStart(2, '0')} / {String(allItems.length).padStart(2, '0')}
            </span>
          </div>

          <button
            onClick={onClose}
            onMouseEnter={() => onEnterHover('CLOSE')}
            onMouseLeave={onLeaveHover}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors duration-200"
            title="Close (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          onMouseEnter={() => onEnterHover('PREV')}
          onMouseLeave={onLeaveHover}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black text-white backdrop-blur-md border border-white/15 transition-all duration-300 z-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          onMouseEnter={() => onEnterHover('NEXT')}
          onMouseLeave={onLeaveHover}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black text-white backdrop-blur-md border border-white/15 transition-all duration-300 z-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Center Media Card & Metadata */}
        <motion.div
          key={activeItem.id}
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col lg:flex-row items-center bg-[#121216] border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Media Viewport */}
          <div className="relative w-full lg:w-3/5 h-[45vh] sm:h-[55vh] lg:h-[75vh] bg-black flex items-center justify-center p-2">
            {isVideo ? (
              <video
                ref={videoRef}
                src={activeItem.src}
                controls
                autoPlay
                loop
                playsInline
                className="w-full h-full object-contain rounded-xl"
              />
            ) : (
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="w-full h-full object-contain rounded-xl"
              />
            )}
          </div>

          {/* Editorial Metadata Sidebar */}
          <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between h-auto lg:h-[75vh] border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto">
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
                  {isVideo ? 'MOTION EXCERPT' : 'FINE ART STILL'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif italic text-white font-medium">
                  {activeItem.title}
                </h3>
              </div>

              {activeItem.caption && (
                <p className="text-sm font-light text-neutral-300 leading-relaxed italic border-l-2 border-[#d4af37]/40 pl-3">
                  "{activeItem.caption}"
                </p>
              )}

              {/* Technical & Story Metadata */}
              <div className="space-y-3 pt-2 text-xs font-mono text-neutral-400">
                {activeItem.date && (
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{activeItem.date}</span>
                  </div>
                )}
                {activeItem.location && (
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{activeItem.location}</span>
                  </div>
                )}
                {'cameraNote' in activeItem && activeItem.cameraNote && (
                  <div className="flex items-center gap-2.5">
                    <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{activeItem.cameraNote}</span>
                  </div>
                )}
                {isVideo && (
                  <div className="flex items-center gap-2.5">
                    <Play className="w-3.5 h-3.5 text-[#e8995e]" />
                    <span>Duration: {(activeItem as VideoItem).duration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden items-center justify-between pt-6 border-t border-white/10">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 text-xs font-mono uppercase text-neutral-300"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <button
                onClick={handleNext}
                className="flex items-center gap-2 text-xs font-mono uppercase text-neutral-300"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
