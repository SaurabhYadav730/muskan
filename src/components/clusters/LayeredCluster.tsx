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
  clusterIndex: _clusterIndex,
  onOpenPhoto,
  onOpenVideo,
  onEnterHover,
  onLeaveHover,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-14 md:py-20 border-b border-white/10 last:border-b-0"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
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
            <p className="text-xs sm:text-sm font-light text-neutral-300 max-w-md leading-relaxed italic border-l border-[#d4af37]/40 pl-4">
              "{cluster.storyText}"
            </p>
          )}
        </div>

        {/* Clean Horizontal Side-by-Side Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {cluster.items.map((item, itemIndex) => {
            const isVideo = 'duration' in item;
            // Subtle aesthetic tilts for polaroid look
            const rotation = itemIndex === 0 ? -1.5 : itemIndex === 1 ? 0.8 : 1.5;

            return (
              <div key={item.id} className="relative z-10 w-full">
                {isVideo ? (
                  <VideoCard
                    video={item as VideoItem}
                    rotation={rotation}
                    onOpen={onOpenVideo}
                    onEnterHover={onEnterHover}
                    onLeaveHover={onLeaveHover}
                  />
                ) : (
                  <PhotoCard
                    photo={item as PhotoItem}
                    index={itemIndex}
                    rotation={rotation}
                    onOpen={onOpenPhoto}
                    onEnterHover={onEnterHover}
                    onLeaveHover={onLeaveHover}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
