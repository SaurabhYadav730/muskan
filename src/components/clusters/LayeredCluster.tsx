import React from 'react';
import { motion } from 'framer-motion';
import type { VisualCluster, PhotoItem, VideoItem } from '../../types';
import { PhotoCard } from '../cards/PhotoCard';
import { VideoCard } from '../cards/VideoCard';
import { Sparkles } from 'lucide-react';

interface LayeredClusterProps {
  cluster: VisualCluster;
  clusterIndex: number;
  onOpenPhoto: (photo: PhotoItem) => void;
  onOpenVideo: (video: VideoItem) => void;
  onEnterHover: (text: string) => void;
  onLeaveHover: () => void;
}

export const LayeredCluster: React.FC<LayeredClusterProps> = ({
  cluster,
  clusterIndex,
  onOpenPhoto,
  onOpenVideo,
  onEnterHover,
  onLeaveHover,
}) => {
  const isEven = clusterIndex % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 md:py-24 border-b border-white/10 last:border-b-0"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Cluster Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{cluster.subtitle}</span>
              <span className="text-white/20">•</span>
              <span className="text-neutral-400">{cluster.year}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-white font-normal">
              {cluster.clusterTitle}
            </h3>
          </div>

          {cluster.storyText && (
            <p className="text-xs sm:text-sm font-light text-neutral-400 max-w-md leading-relaxed italic border-l border-[#d4af37]/40 pl-4">
              "{cluster.storyText}"
            </p>
          )}
        </div>

        {/* Dynamic Layered Collage Cluster Layout */}
        {/* Layout with 3 items */}
        {cluster.items.length === 3 && (
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center min-h-[460px] md:min-h-[560px]">
            {/* Item 1 (Left / Foreground Offset) */}
            <div
              className={`md:col-span-5 relative z-20 ${
                isEven ? 'md:translate-x-6 md:-rotate-2' : 'md:translate-x-4 md:rotate-2'
              }`}
            >
              {'duration' in cluster.items[0] ? (
                <VideoCard
                  video={cluster.items[0] as VideoItem}
                  rotation={isEven ? -1.8 : 1.5}
                  onOpen={onOpenVideo}
                  onEnterHover={onEnterHover}
                  onLeaveHover={onLeaveHover}
                />
              ) : (
                <PhotoCard
                  photo={cluster.items[0] as PhotoItem}
                  index={0}
                  rotation={isEven ? -1.8 : 1.5}
                  onOpen={onOpenPhoto}
                  onEnterHover={onEnterHover}
                  onLeaveHover={onLeaveHover}
                />
              )}
            </div>

            {/* Item 2 (Center Overlapping Elevated Centerpiece) */}
            <div
              className={`md:col-span-4 relative z-30 md:-ml-8 md:-mr-8 ${
                isEven ? 'md:-translate-y-8 md:rotate-1' : 'md:translate-y-6 md:-rotate-1'
              }`}
            >
              {'duration' in cluster.items[1] ? (
                <VideoCard
                  video={cluster.items[1] as VideoItem}
                  rotation={isEven ? 1.2 : -1.2}
                  className="shadow-2xl"
                  onOpen={onOpenVideo}
                  onEnterHover={onEnterHover}
                  onLeaveHover={onLeaveHover}
                />
              ) : (
                <PhotoCard
                  photo={cluster.items[1] as PhotoItem}
                  index={1}
                  rotation={isEven ? 1.2 : -1.2}
                  className="shadow-2xl"
                  onOpen={onOpenPhoto}
                  onEnterHover={onEnterHover}
                  onLeaveHover={onLeaveHover}
                />
              )}
            </div>

            {/* Item 3 (Right / Subtle Angled Anchor) */}
            <div
              className={`md:col-span-5 relative z-10 ${
                isEven ? 'md:-translate-x-6 md:rotate-2' : 'md:-translate-x-4 md:rotate-2'
              }`}
            >
              {'duration' in cluster.items[2] ? (
                <VideoCard
                  video={cluster.items[2] as VideoItem}
                  rotation={isEven ? 2.0 : -2.0}
                  onOpen={onOpenVideo}
                  onEnterHover={onEnterHover}
                  onLeaveHover={onLeaveHover}
                />
              ) : (
                <PhotoCard
                  photo={cluster.items[2] as PhotoItem}
                  index={2}
                  rotation={isEven ? 2.0 : -2.0}
                  onOpen={onOpenPhoto}
                  onEnterHover={onEnterHover}
                  onLeaveHover={onLeaveHover}
                />
              )}
            </div>
          </div>
        )}

        {/* Layout with 2 items (Asymmetric Dual Stack) */}
        {cluster.items.length === 2 && (
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center justify-center max-w-4xl mx-auto min-h-[420px] md:min-h-[500px]">
            {/* Primary Larger Frame */}
            <div className="md:col-span-7 relative z-20 md:translate-x-6">
              {'duration' in cluster.items[0] ? (
                <VideoCard
                  video={cluster.items[0] as VideoItem}
                  rotation={-1.5}
                  onOpen={onOpenVideo}
                  onEnterHover={onEnterHover}
                  onLeaveHover={onLeaveHover}
                />
              ) : (
                <PhotoCard
                  photo={cluster.items[0] as PhotoItem}
                  index={0}
                  rotation={-1.5}
                  onOpen={onOpenPhoto}
                  onEnterHover={onEnterHover}
                  onLeaveHover={onLeaveHover}
                />
              )}
            </div>

            {/* Secondary Companion Frame (Overlapping Behind) */}
            <div className="md:col-span-5 relative z-10 md:-ml-12 md:translate-y-8">
              {'duration' in cluster.items[1] ? (
                <VideoCard
                  video={cluster.items[1] as VideoItem}
                  rotation={2.2}
                  onOpen={onOpenVideo}
                  onEnterHover={onEnterHover}
                  onLeaveHover={onLeaveHover}
                />
              ) : (
                <PhotoCard
                  photo={cluster.items[1] as PhotoItem}
                  index={1}
                  rotation={2.2}
                  onOpen={onOpenPhoto}
                  onEnterHover={onEnterHover}
                  onLeaveHover={onLeaveHover}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
