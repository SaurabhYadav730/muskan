import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { VideoItem } from '../../types';
import { Volume2, VolumeX, Sparkles, Maximize2 } from 'lucide-react';

interface VideoCardProps {
  video: VideoItem;
  rotation?: number;
  className?: string;
  onOpen: (video: VideoItem) => void;
  onEnterHover: (text: string) => void;
  onLeaveHover: () => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  video,
  rotation = 0,
  className = '',
  onOpen,
  onEnterHover,
  onLeaveHover,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.muted = true;
    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, [video.src]);

  const handleMouseEnter = () => {
    onEnterHover('PLAY');
  };

  const handleMouseLeave = () => {
    onLeaveHover();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <motion.div
      style={{
        rotate: `${rotation}deg`,
      }}
      whileHover={{
        y: -12,
        rotate: 0,
        scale: 1.025,
        transition: { type: 'spring', damping: 20, stiffness: 220 },
      }}
      onClick={() => onOpen(video)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative select-none cursor-pointer ${className}`}
    >
      {/* Ambient Blurred Color Glow Projected Behind the Frame */}
      <div
        className="ambient-video-glow absolute -inset-4 sm:-inset-6 rounded-3xl pointer-events-none z-0"
        style={{
          backgroundColor: video.dominantColor || 'rgba(232, 153, 94, 0.4)',
        }}
      />

      {/* Main Polaroid Frame Container */}
      <div className="relative z-10 polaroid-frame p-3 sm:p-4 rounded-2xl bg-[#121216] border border-white/15 transition-all duration-300">
        {/* Top Badges */}
        <div className="flex items-center justify-between pb-2.5 px-1">
          <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-[#e8995e] uppercase">
            <Sparkles className="w-3 h-3" />
            <span>CINEMATIC MOTION</span>
          </div>
          <div className="text-[9px] font-mono bg-black/60 px-2 py-0.5 rounded-full border border-white/10 text-neutral-300">
            {video.duration}
          </div>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-[9/16] sm:aspect-[3/4] w-full overflow-hidden rounded-xl bg-black shadow-inner">
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Hover Action Badge */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <div className="w-11 h-11 rounded-full bg-[#e8995e]/90 text-black flex items-center justify-center shadow-lg shadow-[#e8995e]/40 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
              <Maximize2 className="w-5 h-5" />
            </div>
          </div>

          {/* Sound Toggle Button */}
          <button
            type="button"
            onClick={toggleMute}
            className="absolute bottom-3 right-3 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 z-30 transition-all duration-200"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-neutral-300" /> : <Volume2 className="w-3.5 h-3.5 text-[#e8995e]" />}
          </button>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-3.5 px-1 space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="font-serif italic text-base sm:text-lg text-white group-hover:text-[#e8995e] transition-colors duration-300 font-medium">
              {video.title}
            </h4>
            <span className="text-[10px] font-mono text-neutral-400">
              {video.date}
            </span>
          </div>
          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light">
            {video.caption}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
