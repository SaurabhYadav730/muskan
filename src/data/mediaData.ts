import type { PhotoItem, VideoItem, VisualCluster } from '../types';

const getMedia = (path: string) => {
  const base = import.meta.env.BASE_URL || './';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBase}${normalizedPath}`;
};

export const photosData: PhotoItem[] = [
  {
    id: 'photo-01',
    title: 'Pure Radiance',
    category: 'selected',
    src: getMedia('media/photos/IMG-20260817-WA0038.jpg'),
    aspectRatio: 'portrait',
    date: 'August 2026',
    location: 'Special Moments',
    caption: 'That effortless, beautiful smile that always brings warmth and joy to everyone.',
    rotation: -1.8,
    featured: true,
  },
  {
    id: 'photo-02',
    title: 'Candid & Cute',
    category: 'stills',
    src: getMedia('media/photos/IMG-20260817-WA0035.jpg'),
    aspectRatio: 'portrait',
    date: 'August 2026',
    location: 'Happy Times',
    caption: 'Playful expressions and candid happiness caught in the perfect moment.',
    rotation: 1.5,
    featured: true,
  },
  {
    id: 'photo-03',
    title: 'Golden Glow',
    category: 'selected',
    src: getMedia('media/photos/IMG-20260817-WA0034.jpg'),
    aspectRatio: 'portrait',
    date: 'August 2026',
    location: 'Evening Memories',
    caption: 'Soft warm light and endless charm — always shining bright.',
    rotation: -1.2,
    featured: true,
  },
  {
    id: 'photo-04',
    title: 'Cozy Winter Days',
    category: 'stills',
    src: getMedia('media/photos/IMG-20260104-WA0019(1).jpg'),
    aspectRatio: 'portrait',
    date: 'January 2026',
    location: 'Cafe & Chilling',
    caption: 'Lost in thoughts and relaxing on a cozy winter afternoon.',
    rotation: 2.1,
  },
  {
    id: 'photo-05',
    title: 'Sweet Elegance',
    category: 'stills',
    src: getMedia('media/photos/IMG-20260104-WA0015.jpg'),
    aspectRatio: 'portrait',
    date: 'January 2026',
    location: 'Winter Outing',
    caption: 'Looking effortlessly graceful and stylish in black.',
    rotation: -2.0,
  },
  {
    id: 'photo-06',
    title: 'Always Smiling',
    category: 'stills',
    src: getMedia('media/photos/IMG-20260104-WA0013.jpg'),
    aspectRatio: 'portrait',
    date: 'January 2026',
    location: 'Memorable Days',
    caption: 'A genuine, unscripted moment full of warmth and sweetness.',
    rotation: 1.2,
  },
  {
    id: 'photo-07',
    title: 'Festival Lights & Diya',
    category: 'stills',
    src: getMedia('media/photos/IMG-20251021-WA0020.jpg'),
    aspectRatio: 'portrait',
    date: 'October 2025',
    location: 'Diwali Celebrations',
    caption: 'Holding the festive diya and lighting up the celebration with grace.',
    rotation: -1.5,
  },
  {
    id: 'photo-08',
    title: 'Fairy Light Magic',
    category: 'stills',
    src: getMedia('media/photos/IMG-20251021-WA0014.jpg'),
    aspectRatio: 'portrait',
    date: 'October 2025',
    location: 'Festive Night',
    caption: 'Reaching for the sparkling lights and creating unforgettable memories.',
    rotation: 1.8,
  },
  {
    id: 'photo-09',
    title: 'Festive Radiance',
    category: 'selected',
    src: getMedia('media/photos/IMG-20251021-WA0013.jpg'),
    aspectRatio: 'portrait',
    date: 'October 2025',
    location: 'Celebration Time',
    caption: 'Dressed in traditional beauty, enjoying every festive beat.',
    rotation: -0.8,
    featured: true,
  },
  {
    id: 'photo-10',
    title: 'Festive Mehndi & Grace',
    category: 'stills',
    src: getMedia('media/photos/IMG-20240415-WA0022.jpg'),
    aspectRatio: 'portrait',
    date: 'Special Occasion',
    location: 'Traditional Look',
    caption: 'Looking stunning in pink with beautiful festive mehndi on hand.',
    rotation: 1.6,
  },
];

export const videosData: VideoItem[] = [
  {
    id: 'video-01',
    title: 'Spontaneous Joy & Laughter',
    category: 'motion',
    src: getMedia('media/videos/VID-20260725-WA0074.mp4'),
    poster: getMedia('media/photos/IMG-20260817-WA0038.jpg'),
    duration: '0:18',
    dominantColor: 'rgba(232, 153, 94, 0.45)',
    date: 'July 2026',
    location: 'Fun Memories',
    caption: 'Full of energy, laughter, and the fun spirit that makes you who you are.',
    rotation: -1.2,
    featured: true,
  },
  {
    id: 'video-02',
    title: 'Grace & Happy Vibes',
    category: 'motion',
    src: getMedia('media/videos/VID-20260809-WA0028.mp4'),
    poster: getMedia('media/photos/poster-video-02.jpg'),
    duration: '0:15',
    dominantColor: 'rgba(212, 175, 55, 0.45)',
    date: 'August 2026',
    location: 'Golden Vibes',
    caption: 'Bright smiles, positive energy, and precious moments captured in motion.',
    rotation: 1.4,
    featured: true,
  },
];

export const visualClusters: VisualCluster[] = [
  {
    id: 'cluster-01',
    clusterTitle: 'Chapter I : Radiant Smiles & Joy',
    subtitle: 'FAVORITE MOMENTS',
    category: 'selected',
    storyText: 'A collection of bright smiles and warm memories that bring pure happiness.',
    year: '2026',
    items: [
      photosData[0],
      photosData[1],
      photosData[2],
    ]
  },
  {
    id: 'cluster-02',
    clusterTitle: 'Chapter II : Joy in Motion',
    subtitle: 'VIDEO MEMORIES',
    category: 'motion',
    storyText: 'Unfiltered laughter and candid video clips that make every second special.',
    year: '2026',
    items: [
      videosData[0],
      photosData[8],
      videosData[1],
    ]
  },
  {
    id: 'cluster-03',
    clusterTitle: 'Chapter III : Cozy Days & Memories',
    subtitle: 'SWEET MEMORIES',
    category: 'stills',
    storyText: 'From winter cafe afternoons to candid conversations and everyday smiles.',
    year: '2025–2026',
    items: [
      photosData[4],
      photosData[5],
      photosData[6],
    ]
  },
  {
    id: 'cluster-04',
    clusterTitle: 'Chapter IV : Festive Sparkle & Grace',
    subtitle: 'CELEBRATIONS',
    category: 'stills',
    storyText: 'Diwali lights, beautiful traditional attire, and memories to cherish forever.',
    year: '2024–2026',
    items: [
      photosData[3],
      photosData[7],
      photosData[9],
    ]
  }
];
