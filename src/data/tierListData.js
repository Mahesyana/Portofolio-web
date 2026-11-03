// Dataset 8 Bahasa Pemrograman & Teknologi untuk Fitur Language Tier List

export const INITIAL_LANGUAGES = [
  {
    id: 'js',
    name: 'JavaScript',
    badge: 'JS',
    color: '#f59e0b',
    desc: 'Bahasa penggerak interaktivitas web modern.'
  },
  {
    id: 'py',
    name: 'Python',
    badge: 'PY',
    color: '#3b82f6',
    desc: 'Populer untuk data science, kecerdasan buatan, dan backend.'
  },
  {
    id: 'html',
    name: 'HTML5',
    badge: 'HTML',
    color: '#ef4444',
    desc: 'Pondasi struktur seluruh halaman web di dunia.'
  },
  {
    id: 'css',
    name: 'CSS3',
    badge: 'CSS',
    color: '#06b6d4',
    desc: 'Penata gaya, estetika visual, tata letak, dan animasi.'
  },
  {
    id: 'php',
    name: 'PHP',
    badge: 'PHP',
    color: '#8b5cf6',
    desc: 'Bahasa backend legendaris penggerak web dinamis dan CMS.'
  },
  {
    id: 'ts',
    name: 'TypeScript',
    badge: 'TS',
    color: '#2563eb',
    desc: 'Superset JavaScript dengan sistem keamanan tipe data statis.'
  },
  {
    id: 'cpp',
    name: 'C++',
    badge: 'C++',
    color: '#ec4899',
    desc: 'Performa tingkat tinggi untuk game engine, sistem, dan software desktop.'
  },
  {
    id: 'java',
    name: 'Java',
    badge: 'JAVA',
    color: '#f97316',
    desc: 'Bahasa tangguh berorientasi objek untuk sistem enterprise dan Android.'
  }
];

export const TIER_CONFIG = [
  {
    id: 'bagus',
    label: 'Bagus',
    colorTheme: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.12)',
    borderColor: 'rgba(16, 185, 129, 0.35)',
    textColor: '#10b981',
    desc: 'Kategori pilihan teratas / paling disukai.'
  },
  {
    id: 'biasa',
    label: 'Biasa',
    colorTheme: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.12)',
    borderColor: 'rgba(245, 158, 11, 0.35)',
    textColor: '#f59e0b',
    desc: 'Kategori cukup disukai / dipakai saat dibutuhkan.'
  },
  {
    id: 'kurang',
    label: 'Kurang',
    colorTheme: 'var(--crimson)',
    bgColor: 'var(--crimson-light)',
    borderColor: 'var(--crimson-border)',
    textColor: 'var(--crimson)',
    desc: 'Kategori yang saat ini kurang menjadi preferensi.'
  }
];
