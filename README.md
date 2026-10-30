# Web Profile Pribadi — Portofolio Siswa XI RPL

Website profil dan portofolio pribadi yang responsif, interaktif, dan modern dengan estetika minimalis terinspirasi dari desain Jepang (*Japanese minimalist aesthetic*).

Proyek ini dibangun sebagai tugas besar Rekayasa Perangkat Lunak (RPL) menggunakan React, Vite, dan Plain CSS.

---

## 🚀 Fitur Utama

- **Multi-Page Routing:** Navigasi cepat tanpa reload halaman menggunakan `react-router-dom`.
- **Halaman Lengkap:**
  - `Home`: Perkenalan diri, foto/avatar, dan tujuan karier.
  - `About Me`: Latar belakang pendidikan RPL dan perjalanan belajar pemrograman.
  - `Skills`: Keterampilan teknis yang dikuasai secara jujur dan terstruktur.
  - `Projects`: Portofolio karya (*SagaraS Music Tierlist* & *Untitled Studio*).
  - `Minigame`: Hub fitur interaktif berisi **Flag Quiz** (kuis tebak bendera 5 ronde dengan skor anti-spam) dan wadah game mendatang.
  - `Contact`: Informasi kontak profesional (Email, GitHub, LinkedIn).
- **Desain Minimalis Jepang:**
  - Dominasi warna bersih: Hitam Tinta (`#18181B`), Putih/Off-white (`#FBFBFB`), Abu-abu netral (`#52525B`).
  - Aksen elegan: *Deep Japanese Crimson* (`#A11B39`).
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

- **Siswa Kelas XI Rekayasa Perangkat Lunak (RPL)**
- **Tenggat Pengumpulan:** 30 November 2026
