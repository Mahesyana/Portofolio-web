// Dataset Portofolio Proyek Nyata — I Gusti Made Dwi K Mahesyana (XI RPL)
// Memuat data lengkap untuk halaman katalog (/projects) dan halaman detail dinamis (/projects/:id)

export const PROJECTS_DATA = [
  {
    id: 'sagaras-tierlist',
    title: 'Sagaras Music Tierlist',
    category: 'Web Application',
    status: 'Completed (AI-Assisted)',
    statusTagClass: 'tag-mastered',
    windowTag: 'SGR//07 • NEON NOCTURNE',
    windowTech: 'Vanilla JS',
    windowDesc: '[ Sagaras Music Classification System ]',
    windowSub: 'IndexedDB • Export PNG • Backup/Restore',
    
    // Ringkasan untuk kartu katalog
    shortDescription:
      'Aplikasi web klasifikasi musik dengan tema Neon Nocturne yang mengintegrasikan basis data lokal IndexedDB, ekspor grafik Canvas PNG, dan sistem Backup/Restore JSON.',
    
    // Deskripsi lengkap untuk halaman detail
    fullDescription:
      'Sagaras Music Tierlist adalah aplikasi web interaktif yang dirancang untuk membantu pengguna mengkategorikan dan menyusun peringkat lagu atau artis favorit mereka ke dalam tier list (S, A, B, C, D). Dibangun dengan estetika Neon Nocturne bertema gelap futuristik, aplikasi ini menyediakan antarmuka interaktif yang mulus tanpa memerlukan server backend karena seluruh data disimpan secara persisten di browser pengguna.',
    
    // Galeri Mockup Maksimal 3 Gambar
    images: [
      {
        url: '/projects/sagaras-tierlist.png',
        title: 'Tampilan Papan Klasifikasi Musik',
        caption: 'Antarmuka utama penyusunan tierlist musik dengan palet warna tema Neon Nocturne.'
      },
      {
        url: '/projects/sagaras-tierlist.png',
        title: 'Fitur Ekspor Gambar Canvas PNG',
        caption: 'Fitur pembuatan grafik gambar instan untuk diunduh dan dibagikan ke media sosial.'
      },
      {
        url: '/projects/sagaras-tierlist.png',
        title: 'Penyimpanan Basis Data Lokal IndexedDB',
        caption: 'Integrasi sistem database browser lokal dan modul backup & restore file JSON.'
      }
    ],

    // Rincian Teknologi
    techStack: [
      { name: 'JavaScript (ES6+)', desc: 'Penggerak logika interaktivitas dan manipulasi DOM.' },
      { name: 'IndexedDB API', desc: 'Penyimpanan data lokal persisten di sisi browser.' },
      { name: 'Canvas API', desc: 'Rendering grafik visual untuk ekspor berkas PNG.' },
      { name: 'JSON Data Engine', desc: 'Format pencadangan dan pemulihan data pengguna.' },
      { name: 'CSS3 Neon Theme', desc: 'Styling tema gelap modern dengan efek pendaran warna.' }
    ],

    // Peran Saya (Teks Sampel Placeholder — Bebas Diubah)
    myRole: [
      'Merumuskan ide dasar, tema visual Neon Nocturne, serta kebutuhan fungsional sistem klasifikasi musik.',
      'Bertindak sebagai perumus prompt (prompt engineer) menggunakan ChatGPT untuk arsitektur dan Claude untuk pembuatan kode.',
      'Menguji fungsionalitas antarmuka pengguna (UI/UX) dan memastikan fitur ekspor gambar berjalan stabil.',
      'Mempelajari alur baris kode yang dihasilkan secara bertahap demi menjaga komitmen integritas akademik sekolah.'
    ],

    // Pendapat & Refleksi Saya (Teks Sampel Placeholder — Bebas Diubah)
    myOpinion:
      'Proyek ini merupakan sarana eksplorasi yang sangat memuaskan bagi saya. Di sini saya belajar bagaimana teknologi web browser modern seperti IndexedDB dan Canvas API bisa bekerja sama menciptakan aplikasi web tanpa ketergantungan server luar. Konsep tier list dari proyek inilah yang menginspirasi saya untuk membangun fitur Language Tier List pada website tugas besar ini.',

    liveUrl: 'https://sagaras-music-tierlist.vercel.app/',
    repoUrl: 'https://github.com/Mahesyana/Sagaras-Music-Tierlist'
  },
  {
    id: 'untitled-studio',
    title: 'Untitled Studio',
    category: 'Agency Web',
    status: 'In Development (Under Progress)',
    statusTagClass: 'tag-learning',
    windowTag: 'STUDIO LANDING PAGE',
    windowTech: 'HTML / CSS',
    windowDesc: '[ Untitled Studio — Creative Agency ]',
    windowSub: 'Multi-Page • Service Showcase',
    
    // Ringkasan untuk kartu katalog
    shortDescription:
      'Website profil studio kreatif digital untuk jasa pembuatan website (Custom Web, Company Profile, dan E-Commerce) berbasis HTML5 semantik dan CSS modern.',
    
    // Deskripsi lengkap untuk halaman detail
    fullDescription:
      'Untitled Studio adalah rancangan website profil agensi digital kreatif yang menawarkan layanan pembuatan website profesional. Halaman beranda (Home) memuat tampilan paket layanan, ilustrasi alur kerja agensi, serta struktur navigasi multi-halaman. Proyek ini berfokus pada kerapian arsitektur antarmuka yang responsif dan mudah dipahami oleh calon klien.',
    
    // Galeri Mockup Maksimal 3 Gambar
    images: [
      {
        url: '/projects/untitled-studio.png',
        title: 'Halaman Beranda Utama (Hero Section)',
        caption: 'Desain landing page agensi digital dengan tipografi tegas dan tata letak modern.'
      },
      {
        url: '/projects/untitled-studio.png',
        title: 'Showcase Portofolio & Paket Layanan',
        caption: 'Penjelasan opsi jasa pembuatan website kustom, company profile, dan e-commerce.'
      },
      {
        url: '/projects/untitled-studio.png',
        title: 'Navigasi Multi-Halaman Responsif',
        caption: 'Struktur navigasi halaman bersih yang nyaman diakses melalui laptop maupun ponsel.'
      }
    ],

    // Rincian Teknologi
    techStack: [
      { name: 'HTML5 Semantik', desc: 'Pondasi struktur halaman yang ramah aksesibilitas dan SEO.' },
      { name: 'CSS3 Layout (Flex/Grid)', desc: 'Penataan elemen visual responsif tanpa framework luar.' },
      { name: 'Multi-Page Navigation', desc: 'Alur penjelajahan antarhalaman web terstruktur.' },
      { name: 'Responsive Web Design', desc: 'Penyesuaian tata letak otomatis untuk berbagai ukuran layar.' }
    ],

    // Peran Saya (Teks Sampel Placeholder — Bebas Diubah)
    myRole: [
      'Merancang konsep visual studio kreatif dan copywriting penawaran layanan pembuatan website.',
      'Menulis struktur kode HTML5 semantik dan styling CSS modern secara mandiri.',
      'Melakukan pengujian tata letak responsif pada berbagai resolusi layar laptop dan smartphone.',
      'Mengelola repositori kode Git serta mengonfigurasi deployment live demo ke platform Vercel.'
    ],

    // Pendapat & Refleksi Saya (Teks Sampel Placeholder — Bebas Diubah)
    myOpinion:
      'Melalui Untitled Studio, saya melatih kembali fondasi dasar HTML dan CSS murni tanpa bantuan framework besar. Proyek ini mengajarkan saya pentingnya tata letak yang konsisten dan kenyamanan membaca bagi pengunjung. Tantangan yang sedang saya selesaikan adalah melanjutkan pengerjaan halaman About dan Services agar website agensi ini dapat beroperasi secara penuh.',

    liveUrl: 'https://untitled-studio-taupe.vercel.app/',
    repoUrl: 'https://github.com/Mahesyana/Untitled-Studio'
  }
];
