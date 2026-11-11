# Web Profile Pribadi — Portofolio Siswa XI RPL

Website profil dan portofolio pribadi yang responsif, interaktif, dan modern dengan estetika minimalis terinspirasi dari desain Jepang (*Japanese minimalist aesthetic*).

Proyek ini dibangun sebagai tugas besar Rekayasa Perangkat Lunak (RPL) menggunakan React 19, Vite 8, React Router DOM v7, dan Plain CSS.

---

## 🚀 Fitur Utama

- **Multi-Page Routing & Transisi Halus:** Navigasi cepat tanpa reload halaman menggunakan `react-router-dom` dilengkapi transisi halaman halus (`0.25s`), penanganan rute tidak ditemukan (404 Not Found), dukungan SPA routing Vercel (`vercel.json`), dan *auto-scroll to top*.
- **Halaman Lengkap:**
  - `Home`: Perkenalan diri, foto profil avatar (otomatis tampil di paling atas pada mode mobile), highlight pencapaian, dan arah tujuan PKL.
  - `About Me`: Latar belakang pendidikan RPL, timeline 4 fase perjalanan belajar, dan 3 prinsip pembelajaran mandiri.
  - `Skills`: Keterampilan teknis yang dikuasai secara jujur dan transparan (Core Web, Modern Stack, Browser APIs, Workflow).
  - `Projects & Project Detail (/projects/:id)`: Katalog karya (*Sagaras Music Tierlist* & *Untitled Studio*) dengan gambar pratinjau utama dan halaman detail 2 kolom padat kanan-kiri berisi **slider 3 gambar beranimasi**, deskripsi, rincian teknologi, peran pribadi, refleksi, modal **Lightbox Zoom**, serta tautan langsung GitHub dan Vercel.
  - `Minigame Hub`: Katalog dua fitur interaktif mandiri:
    1. **Flag Quiz:** Kuis tebak bendera 5 ronde acak dari dataset 10 bendera SVG resmi dengan sistem kunci anti-spam, auto-scroll ke atas saat berpindah layar/ronde, dan fun fact edukatif.
    2. **Language Tier List:** Papan penyusunan tier 8 bahasa pemrograman interaktif berbasis HTML5 Drag & Drop dan tombol *Quick Move* ramah layar sentuh HP.
  - `Contact`: Informasi kontak profesional (Email publik satu klik salin, mailto instan, GitHub, LinkedIn).
- **Desain Minimalis Jepang:**
  - Dominasi warna bersih: Hitam Tinta (*sumi* `#18181B`), Putih/Off-white (`#FAFAFA`), Abu-abu netral (`#52525B`).
  - Aksen elegan: *Deep Japanese Crimson* (`#A11B39`) dan pendaran Crimson Aurora di dasar halaman.
  - Saklar mode gelap & terang (*Night Mode / Light Mode Switcher*) di header navigasi.
  - Posisi Navbar terkunci konsisten (`scrollbar-gutter: stable`) dan responsif penuh untuk perangkat Desktop, Tablet, maupun Smartphone.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend Library:** [React 19](https://react.dev/)
- **Build Tool & Bundler:** [Vite](https://vite.dev/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Styling:** Plain CSS (Modular, Design Tokens & Responsif)
- **AI Coding IDE:** Google Antigravity
- **Version Control:** Git & GitHub
- **Deployment Platform:** Vercel

---

## 📁 Struktur Folder Proyek

```text
portfolio-web/
├── public/
│   ├── avatar.jpg          # Foto profil pengembang
│   ├── favicon.svg         # Ikon tab browser Kamon Kurenai
│   ├── flags/              # 10 aset bendera vektor SVG untuk Flag Quiz
│   └── projects/           # 6 tangkapan layar asli Sagaras Tierlist & Untitled Studio
├── src/
│   ├── components/         # Komponen navigasi & kaki halaman (Navbar, Footer)
│   ├── data/               # Dataset terpisah (projectsData, flagsData, tierListData)
│   ├── pages/              # Halaman aplikasi (Home, About, Skills, Projects, ProjectDetail, Minigame, Contact)
│   ├── styles/             # Variabel desain (variables.css) dan CSS halaman (pages.css)
│   ├── App.jsx             # Pengaturan rute, layout utama & transisi halaman
│   ├── index.css           # Global reset, kontainer, dan scrollbar stability
│   └── main.jsx            # Titik masuk utama React
├── index.html
├── package.json
├── vercel.json             # Konfigurasi rewrite SPA React Router untuk Vercel
└── vite.config.js
```

---

## 💻 Cara Menjalankan Proyek Secara Lokal

1. **Pastikan Node.js sudah terpasang** di komputermu (rekomendasi versi LTS).
2. **Buka terminal** di dalam folder `portfolio-web/`:
   ```bash
   cd portfolio-web
   ```
3. **Pasang dependency** (jika baru pertama kali clone):
   ```bash
   npm install
   ```
4. **Jalankan server pengembangan lokal:**
   ```bash
   npm run dev
   ```
5. Buka alamat `http://localhost:5173` di browsermu.

---

## 👤 Pengembang

- **Nama:** I Gusti Made Dwi K Mahesyana
- **Kelas/Jurusan:** Siswa Kelas XI Rekayasa Perangkat Lunak (RPL)
- **Tenggat Pengumpulan:** 30 November 2026
