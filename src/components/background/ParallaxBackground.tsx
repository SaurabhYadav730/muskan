import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxBackground: React.FC = () => {
  const { scrollY } = useScroll();

  // Multi-layer parallax scroll transforms
  const ySlowText1 = useTransform(scrollY, [0, 2000], [0, -180]);
  const ySlowText2 = useTransform(scrollY, [0, 3000], [100, -320]);
  const yOrb1 = useTransform(scrollY, [0, 2500], [0, 220]);
  const yOrb2 = useTransform(scrollY, [0, 2500], [0, -160]);
  const yLines = useTransform(scrollY, [0, 2000], [0, -80]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Film Grain Texture */}
      <div className="absolute inset-0 film-grain z-10" />

      {/* Layer 1: Ambient Glowing Warm Orbs (Deep Background) */}
      <motion.div
        style={{ y: yOrb1 }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#d4af37]/5 blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: yOrb2 }}
        className="absolute top-1/2 -right-48 w-[700px] h-[700px] rounded-full bg-[#e8995e]/6 blur-[150px] pointer-events-none"
      />
      <motion.div
        style={{ y: yOrb1 }}
        className="absolute bottom-10 left-1/3 w-[500px] h-[500px] rounded-full bg-[#38bdf8]/4 blur-[130px] pointer-events-none"
      />

      {/* Layer 2: Subtle Editorial Parallax Watermark Typography */}
      <motion.div
        style={{ y: ySlowText1 }}
        className="absolute top-[18%] -left-6 select-none opacity-[0.03] font-serif text-[18vw] leading-none tracking-tighter text-white whitespace-nowrap font-bold"
      >
        ANTHOLOGY
      </motion.div>

      <motion.div
        style={{ y: ySlowText2 }}
        className="absolute top-[58%] -right-10 select-none opacity-[0.025] font-display text-[22vw] leading-none tracking-widest text-[#d4af37] whitespace-nowrap"
      >
        PORTRAITS
      </motion.div>

      {/* Layer 3: Minimalist Parallax Grid / Guide Lines */}
      <motion.div style={{ y: yLines }} className="absolute inset-0 opacity-[0.04]">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 md:grid-cols-6 border-x border-white/40">
          <div className="border-r border-white/40 h-full" />
          <div className="border-r border-white/40 h-full hidden md:block" />
          <div className="border-r border-white/40 h-full" />
          <div className="border-r border-white/40 h-full hidden md:block" />
          <div className="border-r border-white/40 h-full" />
        </div>
      </motion.div>
    </div>
  );
};
