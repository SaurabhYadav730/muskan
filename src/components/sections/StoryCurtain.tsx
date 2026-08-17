import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

interface StoryCurtainProps {
  onEnterHover: (text: string) => void;
  onLeaveHover: () => void;
}

export const StoryCurtain: React.FC<StoryCurtainProps> = () => {
  return (
    <section
      id="story"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-gradient-to-b from-transparent via-[#0e0e12] to-transparent border-t border-white/10 overflow-hidden"
    >
      {/* Background Subtle Monogram */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic text-[35vw] text-white/[0.015] select-none pointer-events-none">
        M
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-[#d4af37] border border-[#d4af37]/30 px-3.5 py-1 rounded-full bg-[#d4af37]/5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curator's Note</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif text-white leading-tight font-normal"
        >
          “Some memories are too alive for words, <br />
          <span className="italic font-light text-neutral-300">so we preserved them in light.”</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
        >
          This anthology is dedicated to the unscripted laughter, twilight walks, and quiet glances that define our journey. Every still and motion frame is layered with memory, texture, and affection.
        </motion.p>

        {/* Signature & Heart Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-6 flex flex-col items-center gap-3"
        >
          <span className="font-serif italic text-3xl md:text-4xl text-[#d4af37]">
            Muskan
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 uppercase tracking-widest">
            <span>Crafted with love & precision</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
