import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import type { PhotoItem } from '../../types';

interface HeroParallaxProps {
  featuredPhotos: PhotoItem[];
  onOpenLightbox: (item: PhotoItem) => void;
  onEnterHover: (text: string) => void;
  onLeaveHover: () => void;
}

export const HeroParallax: React.FC<HeroParallaxProps> = ({
  featuredPhotos,
  onOpenLightbox,
  onEnterHover,
  onLeaveHover,
}) => {
  const { scrollY } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax transforms on scroll
  const yHeroText = useTransform(scrollY, [0, 800], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);
  const yHeroCards = useTransform(scrollY, [0, 800], [0, -120]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const primaryPhoto = featuredPhotos[0]; // IMG-20260817-WA0038
  const secondaryPhoto1 = featuredPhotos[1]; // IMG-20260817-WA0035
  const secondaryPhoto2 = featuredPhotos[2]; // IMG-20260817-WA0034

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] pt-28 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono tracking-widest text-neutral-400 uppercase"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>PORTFOLIO & VISUAL ARCHIVE</span>
        </div>
        <div>
          <span>EST. 2024 — 2026</span>
        </div>
      </motion.div>

      {/* Main Grid: Headline & Floating Layered Media Stack */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8 pb-12">
        {/* Left Editorial Headline */}
        <motion.div
          style={{ y: yHeroText, opacity: opacityHero }}
          className="lg:col-span-6 space-y-6 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[11px] font-mono tracking-[0.3em] uppercase text-[#d4af37] mb-3">
              The Collection — Vol. 03
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.92] text-white font-normal">
              Moments, <br />
              <span className="italic font-light text-neutral-200">Suspended</span> <br />
              in Light.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base text-neutral-400 font-light max-w-md leading-relaxed"
          >
            An intimate editorial anthology of spontaneous stills, dynamic movement, and layered compositions capturing authentic emotion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 pt-2"
          >
            <a
              href="#clusters"
              onMouseEnter={() => onEnterHover('EXPLORE')}
              onMouseLeave={onLeaveHover}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#f5f5f7] text-[#08080a] text-xs font-semibold tracking-wider uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-lg hover:shadow-[#d4af37]/20"
            >
              <span>Explore Stacks</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <span className="text-xs font-mono text-neutral-500">
              10 Photographs • 2 Motion Captures
            </span>
          </motion.div>
        </motion.div>

        {/* Right Floating Layered Interactive Composition (Collage Cluster) */}
        <motion.div
          style={{ y: yHeroCards }}
          className="lg:col-span-6 relative h-[420px] sm:h-[480px] md:h-[540px] flex items-center justify-center"
        >
          {/* Ambient Warm Golden Glow behind stack */}
          <div className="absolute w-72 h-72 rounded-full bg-[#d4af37]/15 blur-[80px] pointer-events-none" />

          {/* Layer 1: Left Background Angled Polaroid */}
          {secondaryPhoto1 && (
            <motion.div
              animate={{
                x: mousePos.x * -25,
                y: mousePos.y * -20,
                rotate: -6 + mousePos.x * 4,
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              onClick={() => onOpenLightbox(secondaryPhoto1)}
              onMouseEnter={() => onEnterHover('VIEW')}
              onMouseLeave={onLeaveHover}
              className="absolute -left-2 sm:left-4 top-12 sm:top-8 w-44 sm:w-56 md:w-64 polaroid-frame p-2.5 sm:p-3 rounded-xl cursor-pointer z-10"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900">
                <img
                  src={secondaryPhoto1.src}
                  alt={secondaryPhoto1.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[9px] font-mono text-neutral-400 uppercase tracking-widest px-1">
                <span>02 // ARCHIVE</span>
                <span className="text-[#d4af37]">{secondaryPhoto1.date}</span>
              </div>
            </motion.div>
          )}

          {/* Layer 2: Right Background Angled Polaroid */}
          {secondaryPhoto2 && (
            <motion.div
              animate={{
                x: mousePos.x * 30,
                y: mousePos.y * 25,
                rotate: 7 + mousePos.y * 3,
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              onClick={() => onOpenLightbox(secondaryPhoto2)}
              onMouseEnter={() => onEnterHover('VIEW')}
              onMouseLeave={onLeaveHover}
              className="absolute -right-2 sm:right-6 bottom-8 sm:bottom-12 w-48 sm:w-60 md:w-68 polaroid-frame p-2.5 sm:p-3 rounded-xl cursor-pointer z-20"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900">
                <img
                  src={secondaryPhoto2.src}
                  alt={secondaryPhoto2.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[9px] font-mono text-neutral-400 uppercase tracking-widest px-1">
                <span>03 // TWILIGHT</span>
                <span className="text-[#d4af37]">{secondaryPhoto2.location}</span>
              </div>
            </motion.div>
          )}

          {/* Layer 3: Foreground Main Hero Centerpiece with Tilt */}
          {primaryPhoto && (
            <motion.div
              animate={{
                x: mousePos.x * 12,
                y: mousePos.y * 12,
                rotate: -1 + mousePos.x * 2,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 140 }}
              onClick={() => onOpenLightbox(primaryPhoto)}
              onMouseEnter={() => onEnterHover('VIEW')}
              onMouseLeave={onLeaveHover}
              className="relative w-56 sm:w-72 md:w-80 polaroid-frame p-3 sm:p-4 rounded-2xl cursor-pointer z-30 shadow-polaroid hover:shadow-polaroid-hover"
            >
              {/* Gold Exhibition Stamp */}
              <div className="absolute -top-3.5 -right-3.5 bg-[#d4af37] text-black text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md z-40">
                ★ FEATURED
              </div>

              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900">
                <img
                  src={primaryPhoto.src}
                  alt={primaryPhoto.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-serif italic text-white">Click to expand</span>
                </div>
              </div>

              <div className="mt-3.5 px-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif italic text-base md:text-lg text-white font-medium">
                    {primaryPhoto.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#d4af37]">01 // STILL</span>
                </div>
                <p className="text-[11px] font-sans text-neutral-400 line-clamp-1">
                  {primaryPhoto.caption}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-neutral-500 uppercase tracking-widest pt-4">
        <span>SCROLL TO UNCOVER STACKS</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex items-center gap-2 text-neutral-400"
        >
          <span>↓</span>
        </motion.div>
      </div>
    </section>
  );
};
