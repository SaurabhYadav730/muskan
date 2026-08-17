export type CategoryType = 'all' | 'stills' | 'motion' | 'selected';

export interface PhotoItem {
  id: string;
  title: string;
  category: 'stills' | 'selected';
  src: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  date?: string;
  location?: string;
  cameraNote?: string;
  caption?: string;
  rotation?: number; // e.g. -2.5, -1.2, 0, 1.5, 2.0
  featured?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'motion' | 'selected';
  src: string;
  poster?: string;
  duration: string;
  dominantColor: string; // Hex or rgba for ambient blurred glow e.g. '#e8995e' or '#38bdf8' or '#d4af37'
  date?: string;
  location?: string;
  caption?: string;
  rotation?: number;
  featured?: boolean;
}

export interface VisualCluster {
  id: string;
  clusterTitle: string;
  subtitle: string;
  category: CategoryType;
  storyText?: string;
  year?: string;
  items: (PhotoItem | VideoItem)[];
}
