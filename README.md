# Web Profile Pribadi — Portofolio Siswa XI RPL

Website profil dan portofolio pribadi yang responsif, interaktif, dan modern dengan estetika minimalis terinspirasi dari desain Jepang (*Japanese minimalist aesthetic*).

Proyek ini dibangun sebagai tugas besar Rekayasa Perangkat Lunak (RPL) menggunakan React, Vite, dan Plain CSS.

---

## 🚀 Fitur Utama

- **Multi-Page Routing:** Navigasi cepat tanpa reload halaman menggunakan `react-router-dom` dengan dukungan penanganan rute tidak ditemukan (404 Not Found) dan *auto-scroll to top*.
- **Halaman Lengkap:**
  - `Home`: Perkenalan diri, foto/avatar otomatis, quick highlights, dan tujuan karier.
  - `About Me`: Latar belakang pendidikan RPL, timeline 4 fase perjalanan belajar, dan 3 prinsip pembelajaran mandiri.
  - `Skills`: Keterampilan teknis yang dikuasai secara jujur dan transparan (Core Web, Modern Stack, Browser APIs, Workflow).
  - `Projects`: Portofolio karya (*SagaraS Music Tierlist* & *Untitled Studio*) dilengkapi modal **Lightbox Zoom** layar penuh dan tautan live demo Vercel.
  - `Minigame Hub`: Katalog dua fitur interaktif mandiri:
    1. **Flag Quiz:** Kuis tebak bendera 5 ronde acak dari dataset 10 bendera SVG resmi dengan sistem kunci anti-spam dan fun fact edukatif.
    2. **Language Tier List:** Papan penyusunan tier 8 bahasa pemrograman interaktif berbasis HTML5 Drag & Drop dan tombol *Quick Move* ramah layar sentuh HP.
  - `Contact`: Informasi kontak profesional (Email publik satu klik salin, mailto instan, GitHub, LinkedIn).
- **Desain Minimalis Jepang:**
  - Dominasi warna bersih: Hitam Tinta (*sumi* `#18181B`), Putih/Off-white (`#FAFAFA`), Abu-abu netral (`#52525B`).
  - Aksen elegan: *Deep Japanese Crimson* (`#A11B39`) dan pendaran Crimson Aurora di dasar halaman.
  - Saklar mode gelap & terang (*Night Mode / Light Mode Switcher*) di header navigasi.
  - Responsif penuh untuk perangkat Desktop, Tablet, dan Smartphone.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend Library:** [React 19](https://react.dev/)
- **Build Tool & Bundler:** [Vite](https://vite.dev/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Styling:** Plain CSS (Modular & Responsif)
- **AI Coding IDE:** Google Antigravity
- **Version Control:** Git & GitHub
- **Deployment Platform:** Vercel

---

## 📁 Struktur Folder Proyek

```text
portfolio-web/
├── public/
│   └── flags/              # File gambar bendera lokal untuk Flag Quiz
├── src/
│   ├── assets/             # Gambar & ikon statis
│   ├── components/         # Komponen UI bersama (Navbar, Footer, Card, Button)
│   ├── data/               # Data statis (proyek, bendera, skills)
│   ├── pages/              # Halaman utama (Home, About, Skills, Projects, Minigame, Contact)
│   ├── styles/             # File CSS styling terpisah
│   ├── App.jsx             # Pengaturan rute & navigasi aplikasi
│   └── main.jsx            # Titik masuk utama React
├── index.html
├── package.json
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
