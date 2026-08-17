import { useState, useEffect, useMemo } from 'react';
import Lenis from 'lenis';
import type { PhotoItem, VideoItem } from './types';
import { photosData, videosData, visualClusters } from './data/mediaData';
import { CustomCursor } from './components/layout/CustomCursor';
import type { CursorState } from './components/layout/CustomCursor';
import { Header } from './components/layout/Header';
import { ParallaxBackground } from './components/background/ParallaxBackground';
import { HeroParallax } from './components/hero/HeroParallax';
import { LayeredCluster } from './components/clusters/LayeredCluster';
import { StoryCurtain } from './components/sections/StoryCurtain';
import { MediaLightbox } from './components/lightbox/MediaLightbox';

export function App() {
  // State
  const [activeLightboxItem, setActiveLightboxItem] = useState<PhotoItem | VideoItem | null>(null);
  const [cursorState, setCursorState] = useState<CursorState>({ type: 'default' });

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Cursor Helpers
  const handleEnterHover = (text: string) => {
    if (text === 'VIEW') setCursorState({ type: 'view', text: 'VIEW' });
    else if (text === 'PLAY') setCursorState({ type: 'play', text: 'PLAY' });
    else if (text === 'CLOSE') setCursorState({ type: 'close', text: 'ESC' });
    else setCursorState({ type: 'drag', text });
  };

  const handleLeaveHover = () => {
    setCursorState({ type: 'default' });
  };

  const allMediaItems = useMemo(() => {
    return [...photosData, ...videosData];
  }, []);

  return (
    <div className="relative min-h-screen bg-[#08080a] text-[#f5f5f7] selection:bg-[#d4af37]/30 selection:text-white">
      {/* Custom Dynamic Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Multi-Layer Parallax Background */}
      <ParallaxBackground />

      {/* Minimalist Top Header */}
      <Header
        onEnterHover={handleEnterHover}
        onLeaveHover={handleLeaveHover}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* Layered Interactive Hero with Mouse-Tilt Stack */}
        <HeroParallax
          featuredPhotos={photosData}
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
          onEnterHover={handleEnterHover}
          onLeaveHover={handleLeaveHover}
        />

        {/* Visual Clusters Section */}
        <section id="clusters" className="relative z-10 pt-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-400">
                MEMORY ALBUM & SPECIAL CHAPTERS
              </span>
            </div>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              {photosData.length} Photos • {videosData.length} Videos
            </div>
          </div>

          {/* Render Layered Clusters */}
          <div className="space-y-4">
            {visualClusters.map((cluster, index) => (
              <LayeredCluster
                key={cluster.id}
                cluster={cluster}
                clusterIndex={index}
                onOpenPhoto={(photo) => setActiveLightboxItem(photo)}
                onOpenVideo={(video) => setActiveLightboxItem(video)}
                onEnterHover={handleEnterHover}
                onLeaveHover={handleLeaveHover}
              />
            ))}
          </div>
        </section>

        {/* Story Curtain / About Section */}
        <StoryCurtain
          onEnterHover={handleEnterHover}
          onLeaveHover={handleLeaveHover}
        />
      </main>

      {/* Fullscreen Media Lightbox Viewer */}
      <MediaLightbox
        activeItem={activeLightboxItem}
        allItems={allMediaItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(item) => setActiveLightboxItem(item)}
        onEnterHover={handleEnterHover}
        onLeaveHover={handleLeaveHover}
      />
    </div>
  );
}

export default App;
