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
    title: 'Gilded Epilogue',
    category: 'selected',
    src: getMedia('media/photos/IMG-20260817-WA0038.jpg'),
    aspectRatio: 'portrait',
    date: 'August 2026',
    location: 'Studio Session',
    cameraNote: '85mm f/1.4 — Natural Rim Light',
    caption: 'Soft golden hour illumination capturing quiet grace in a reflective state.',
    rotation: -1.8,
    featured: true,
  },
  {
    id: 'photo-02',
    title: 'Subtle Geometry',
    category: 'stills',
    src: getMedia('media/photos/IMG-20260817-WA0035.jpg'),
    aspectRatio: 'portrait',
    date: 'August 2026',
    location: 'Urban Archive',
    cameraNote: '50mm f/1.8 — Ambient Glow',
    caption: 'Lines of architecture meeting human expression in effortless harmony.',
    rotation: 1.5,
    featured: true,
  },
  {
    id: 'photo-03',
    title: 'Luminous Silhouette',
    category: 'selected',
    src: getMedia('media/photos/IMG-20260817-WA0034.jpg'),
    aspectRatio: 'portrait',
    date: 'August 2026',
    location: 'Veranda Twilight',
    cameraNote: '35mm f/2.0 — Dusk Hue',
    caption: 'Between laughter and silence, captured as the daylight fades into twilight.',
    rotation: -1.2,
    featured: true,
  },
  {
    id: 'photo-04',
    title: 'Warm Reverie',
    category: 'stills',
    src: getMedia('media/photos/IMG-20260104-WA0019(1).jpg'),
    aspectRatio: 'portrait',
    date: 'January 2026',
    location: 'Winter Sunlight',
    cameraNote: '50mm f/1.4 — Warm Tone',
    caption: 'The crisp warmth of January afternoon shadows across the room.',
    rotation: 2.1,
  },
  {
    id: 'photo-05',
    title: 'Contemplation in Gold',
    category: 'stills',
    src: getMedia('media/photos/IMG-20260104-WA0015.jpg'),
    aspectRatio: 'portrait',
    date: 'January 2026',
    location: 'Inner Solitude',
    cameraNote: '85mm f/1.8 — Soft Focus',
    caption: 'A fleeting glance suspended in stillness.',
    rotation: -2.0,
  },
  {
    id: 'photo-06',
    title: 'Fleeting Solitude',
    category: 'stills',
    src: getMedia('media/photos/IMG-20260104-WA0013.jpg'),
    aspectRatio: 'portrait',
    date: 'January 2026',
    location: 'Ambient Chamber',
    cameraNote: '35mm f/1.8 — Tungsten & Day',
    caption: 'Unrehearsed sincerity caught in a single shutter click.',
    rotation: 1.2,
  },
  {
    id: 'photo-07',
    title: 'Autumnal Whispers',
    category: 'stills',
    src: getMedia('media/photos/IMG-20251021-WA0020.jpg'),
    aspectRatio: 'portrait',
    date: 'October 2025',
    location: 'Autumn Meadow',
    cameraNote: '50mm f/1.4 — Golden Hour',
    caption: 'Rich amber palette and gentle evening breezes.',
    rotation: -1.5,
  },
  {
    id: 'photo-08',
    title: 'Shadow & Form',
    category: 'stills',
    src: getMedia('media/photos/IMG-20251021-WA0014.jpg'),
    aspectRatio: 'portrait',
    date: 'October 2025',
    location: 'Monochrome Study',
    cameraNote: '85mm f/2.8 — High Contrast',
    caption: 'Playing with contrast, silhouettes, and dramatic textures.',
    rotation: 1.8,
  },
  {
    id: 'photo-09',
    title: 'Glow of Nostalgia',
    category: 'selected',
    src: getMedia('media/photos/IMG-20251021-WA0013.jpg'),
    aspectRatio: 'portrait',
    date: 'October 2025',
    location: 'Golden Haze',
    cameraNote: '50mm f/1.8 — Diffused Flare',
    caption: 'Memories tinted with nostalgic warmth and gentle laughter.',
    rotation: -0.8,
    featured: true,
  },
  {
    id: 'photo-10',
    title: 'Spring Prelude',
    category: 'stills',
    src: getMedia('media/photos/IMG-20240415-WA0022.jpg'),
    aspectRatio: 'portrait',
    date: 'April 2024',
    location: 'Spring Bloom',
    cameraNote: '35mm f/2.0 — Daylight',
    caption: 'The beginning of the visual journal — candid, raw, and vibrant.',
    rotation: 1.6,
  },
];

export const videosData: VideoItem[] = [
  {
    id: 'video-01',
    title: 'Moments in Motion',
    category: 'motion',
    src: getMedia('media/videos/VID-20260725-WA0074.mp4'),
    poster: getMedia('media/photos/IMG-20260817-WA0038.jpg'),
    duration: '0:18',
    dominantColor: 'rgba(232, 153, 94, 0.45)',
    date: 'July 2026',
    location: 'Motion Anthology',
    caption: 'Dynamic frames and candid cinematic movement that photographs cannot quite contain.',
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
    location: 'Cinematic Excerpt',
    caption: 'Effortless rhythm, warm natural illumination, and spontaneous radiant smiles captured in motion.',
    rotation: 1.4,
    featured: true,
  },
];

export const visualClusters: VisualCluster[] = [
  {
    id: 'cluster-01',
    clusterTitle: 'Act I : Luminous Portraits',
    subtitle: 'EDITORIAL & LIGHT STUDY',
    category: 'selected',
    storyText: 'A study of delicate natural illumination and spontaneous stillness, composed with overlapping tactile warmth.',
    year: '2026',
    items: [
      photosData[0], // IMG-20260817-WA0038
      photosData[1], // IMG-20260817-WA0035
      photosData[2], // IMG-20260817-WA0034
    ]
  },
  {
    id: 'cluster-02',
    clusterTitle: 'Act II : Motion & Atmosphere',
    subtitle: 'CINEMATIC MOTION CLIPS',
    category: 'motion',
    storyText: 'Fluid movement accompanied by ambient chromatic glow and intimate companion stills.',
    year: '2026',
    items: [
      videosData[0], // VID-20260725-WA0074
      photosData[8], // IMG-20251021-WA0013
      videosData[1], // VID-20260809-WA0028
    ]
  },
  {
    id: 'cluster-03',
    clusterTitle: 'Act III : Winter Light & Intimacy',
    subtitle: 'NATURAL TEXTURES & SHADOWS',
    category: 'stills',
    storyText: 'Subtle shifts in interior shadows during quiet winter afternoons, preserved on paper.',
    year: '2025–2026',
    items: [
      photosData[4], // IMG-20260104-WA0015
      photosData[5], // IMG-20260104-WA0013
      photosData[6], // IMG-20251021-WA0020
    ]
  },
  {
    id: 'cluster-04',
    clusterTitle: 'Act IV : Archival Stills & Origins',
    subtitle: 'TIMELESS CHRONICLE',
    category: 'stills',
    storyText: 'The foundation of the visual archive — raw expressions, sunlight through foliage, and timeless beginnings.',
    year: '2024–2025',
    items: [
      photosData[3], // IMG-20260104-WA0019(1)
      photosData[7], // IMG-20251021-WA0014
      photosData[9], // IMG-20240415-WA0022
    ]
  }
];
