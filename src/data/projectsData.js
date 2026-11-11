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
    windowSub: 'IndexedDB • Ranking History • Export PNG',
    coverImage: '/projects/sagaras-tierlist.png',
    
    // Ringkasan untuk kartu katalog
    shortDescription:
      'Aplikasi web klasifikasi musik dengan tema Neon Nocturne yang mengintegrasikan basis data lokal IndexedDB, grafik Ranking History, ekspor Canvas PNG, dan sistem Backup/Restore JSON.',
    
    // Deskripsi lengkap untuk halaman detail
    fullDescription:
      'Sagaras Music Tierlist adalah aplikasi web interaktif yang dirancang untuk membantu pengguna mengelola Music Library serta menyusun peringkat lagu ke dalam tier list (Top, Banger, Lumayan, Belum Masuk, Gak Masuk). Dibangun dengan tema gelap futuristik, aplikasi ini dilengkapi fitur unggah cover lagu, perekaman Snapshot untuk grafik perkembangan selera musik (Ranking History), ekspor gambar PNG, serta penyimpanan lokal IndexedDB tanpa memerlukan server luar.',
    
    // Galeri Mockup Maksimal 3 Gambar
    images: [
      {
        url: '/projects/sagaras-tierlist.png',
        title: 'Papan Utama Tierlist Musik',
        caption: 'Antarmuka penyusunan ranking lagu (Tier T-01 Top hingga T-02 Banger) lengkap dengan fitur Ekspor PNG dan Buat Snapshot.'
      },
      {
        url: '/projects/sagaras-tierlist-insert.png',
        title: 'Music Library & Form Tambah Lagu',
        caption: 'Koleksi pustaka lagu bersama disertai modal formulir tambah lagu baru dengan fitur potong foto artwork persegi otomatis.'
      },
      {
        url: '/projects/sagaras-tierlist-diagram.png',
        title: 'Grafik Ranking History (Snapshot)',
        caption: 'Visualisasi grafik garis perkembangan peringkat lagu antarwaktu berdasarkan rekaman arsip snapshot di browser.'
      }
    ],

    // Rincian Teknologi
    techStack: [
      { name: 'JavaScript (ES6+)', desc: 'Penggerak logika interaktivitas, grafik history, dan manipulasi DOM.' },
      { name: 'IndexedDB API', desc: 'Penyimpanan data lagu dan riwayat snapshot secara persisten di browser.' },
      { name: 'Canvas API', desc: 'Rendering grafik visual papan tier list untuk ekspor berkas PNG.' },
      { name: 'JSON Data Engine', desc: 'Format pencadangan (Backup) dan pemulihan data pengguna.' },
      { name: 'CSS3 Dark Theme', desc: 'Styling tema gelap futuristik SGR//07 dengan efek neon elegan.' }
    ],

    // Peran Siswa dalam Pembuatan Website
    myRole: [
      'Merumuskan ide dasar, struktur fitur (Library, Tierlist, Snapshot History), serta kebutuhan visual aplikasi.',
      'Bertindak sebagai perumus prompt (prompt engineer) menggunakan ChatGPT untuk arsitektur dan Claude untuk pembuatan kode.',
      'Menguji fungsionalitas antarmuka pengguna (UI/UX), alur penambahan lagu, dan memastikan fitur ekspor PNG berjalan stabil.',
      'Mempelajari alur kode serta alasan penggunaan teknologi di dalamnya secara bertahap demi menjaga integritas akademik.'
    ],

    // Pendapat & Refleksi Pribadi Siswa
    myOpinion:
      'Menurut saya, website ini menjadi wadah bagi saya untuk belajar memanfaatkan AI guna membangun aplikasi web yang benar-benar berfungsi dengan baik. Saat ini, saya terus mempelajari setiap teknologi yang digunakan di dalamnya agar memahami alasan teknis di balik pemilihan teknologi tersebut. Selain itu, proyek ini juga saya buat sebagai tolok ukur untuk menguji sejauh mana kemampuan prompting saya berkembang.',

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
    coverImage: '/projects/untitled-studio-home.png',
    
    // Ringkasan untuk kartu katalog
    shortDescription:
      'Website profil studio kreatif digital untuk layanan pembuatan website (Game Website, Education Website, dan E-Commerce) berbasis HTML5 semantik dan CSS murni.',
    
    // Deskripsi lengkap untuk halaman detail
    fullDescription:
      'Untitled Studio adalah website profil agensi digital kreatif yang dirancang untuk menawarkan jasa pembuatan website modern, cepat, dan responsif bagi kebutuhan bisnis maupun personal. Bagian beranda menampilkan identitas studio dan katalog pilihan layanan (Game Website, Education Website, serta E-Commerce Website), sementara halaman sekunder sedang dalam tahap penyempurnaan bertahap.',
    
    // Galeri Mockup Maksimal 3 Gambar
    images: [
      {
        url: '/projects/untitled-studio-home.png',
        title: 'Halaman Beranda Utama (Hero Section)',
        caption: 'Tampilan beranda minimalis lengkap dengan navigasi Home, Service, dan About serta pengenalan layanan studio.'
      },
      {
        url: '/projects/untitled-studio-card.png',
        title: 'Katalog Layanan (Our Services)',
        caption: 'Menampilkan tiga pilihan layanan utama meliputi Game Website, Education Website, dan E-Commerce Website.'
      },
      {
        url: '/projects/untitled-studio-progress.png',
        title: 'Halaman Sekunder (Status Under Progress)',
        caption: 'Halaman - halaman lanjutan seperti Service dan About yang masih dalam proses pengembangan bertahap.'
      }
    ],

    // Rincian Teknologi
    techStack: [
      { name: 'HTML5 Semantik', desc: 'Pondasi struktur halaman yang bersih, teratur, dan ramah SEO.' },
      { name: 'CSS3 Layout (Flex/Grid)', desc: 'Penataan elemen kartu layanan dan hero section secara manual.' },
      { name: 'Multi-Page Navigation', desc: 'Struktur navigasi antarhalaman Home, Service, dan About.' },
      { name: 'Responsive Web Design', desc: 'Penyesuaian tampilan agar layak digunakan di layar desktop maupun mobile.' }
    ],

    // Peran Siswa dalam Pembuatan Website
    myRole: [
      'Merancang konsep visual studio kreatif dan menyusun kategori layanan pembuatan website.',
      'Menulis seluruh baris kode struktur HTML5 semantik dan styling CSS secara manual dengan tangan sendiri.',
      'Melakukan pengujian tampilan awal pada peramban desktop dan menyesuaikan keterbacaan layout.',
      'Mengelola repositori kode Git serta mengonfigurasi deployment ke platform Vercel sebagai persiapan PKL.'
    ],

    // Pendapat & Refleksi Pribadi Siswa
    myOpinion:
      'Website ini saya buat sebagai persiapan menghadapi PKL, dengan tujuan mempelajari dasar-dasar pembuatan website yang baik dan layak digunakan. Seluruh kodenya saya tulis sendiri secara manual sehingga meskipun hasilnya saat ini terasa masih sederhana dan belum sepenuhnya memuaskan bagi saya, proses belajarnya tetap sangat saya hargai.',

    liveUrl: 'https://untitled-studio-taupe.vercel.app/',
    repoUrl: 'https://github.com/Mahesyana/Untitled-Studio'
  }
];
