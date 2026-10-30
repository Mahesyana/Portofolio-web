import '../styles/pages.css';

export default function About() {
  return (
    <div className="container">
      {/* Header Halaman */}
      <div className="page-header">
        <div className="page-eyebrow">Perkenalan Diri</div>
        <h1 className="page-title">Tentang Saya &amp; Perjalanan Belajar</h1>
        <p className="page-subtitle">Mengenal rekam jejak belajar, pengalaman praktik industri, dan prinsip pembelajaran.</p>
      </div>

      {/* 3 Kartu Sorotan Informasi */}
      <div className="about-stats-grid">
        <div className="app-card stat-card">
          <div className="stat-label">Pendidikan</div>
          <div className="stat-value">Kelas XI RPL 1</div>
          <div className="stat-desc">SMK TI BALI GLOBAL DENPASAR</div>
        </div>

        <div className="app-card stat-card">
          <div className="stat-label">Aktivitas Saat Ini</div>
          <div className="stat-value">Praktik Kerja Lapangan</div>
          <div className="stat-desc">Program Industri (6 Bulan)</div>
        </div>

        <div className="app-card stat-card">
          <div className="stat-label">Fokus Teknis</div>
          <div className="stat-value">Front-End Web</div>
          <div className="stat-desc">Eksplorasi React 19 &amp; Vite 8</div>
        </div>
      </div>

      {/* Bagian 1: Timeline Perjalanan Belajar (4 Fase Utuh) */}
      <div className="about-section-container">
        <div className="about-section-heading">
          <h2>Perjalanan Belajar Pemrograman</h2>
          <p>Alur perkembangan teknis dari eksplorasi awal jenjang SMP hingga pengalaman industri.</p>
        </div>

        <div className="timeline-cards-list">
          {/* Fase 01: Timedoor Academy */}
          <div className="app-card timeline-step-card">
            <span className="timeline-badge-number">01</span>
            <div className="timeline-body">
              <h3>
                Eksplorasi Awal &amp; Pelajaran dari Kegagalan
                <span className="timeline-period-tag">• SMP (Timedoor Academy, 1,5 Tahun)</span>
              </h3>
              <p>
                Memulai langkah pertama di dunia pemrograman selama 1,5 tahun di Timedoor Academy, bertahap dari Scratch, dasar HTML/CSS/JavaScript, game development, hingga pengenalan mobile apps sebelum pindah ke Denpasar. Di fase ini saya mengalami titik krusial: proyek game JavaScript terhenti karena ekspektasi logika yang belum saya kuasai, sementara proyek website berhasil diselesaikan dengan rapi. Kegagalan tersebut sempat membuat saya ingin berhenti, namun dorongan tentang dampak positif teknologi membangkitkan tekad saya untuk melanjutkan pendidikan ke SMK jurusan RPL.
              </p>
            </div>
          </div>

          {/* Fase 02: Kelas X SMK */}
          <div className="app-card timeline-step-card">
            <span className="timeline-badge-number">02</span>
            <div className="timeline-body">
              <h3>
                Fondasi Logika &amp; Algoritma Pemrograman
                <span className="timeline-period-tag">• Kelas X SMK</span>
              </h3>
              <p>
                Memperdalam dasar algoritma pemrograman, pseudocode, pengenalan singkat HTML/CSS, dan bahasa C++. Di kelas X, saya menguji kemampuan logika computational thinking dengan menyelesaikan proyek tugas kelompok sistem berbasis C++, dengan kontribusi mandiri mencapai 80% pada perancangan logika dan alur sistemnya.
              </p>
            </div>
          </div>

          {/* Fase 03: Kelas XI & PKL */}
          <div className="app-card timeline-step-card">
            <span className="timeline-badge-number">03</span>
            <div className="timeline-body">
              <h3>
                Adaptasi Standar Kerja Industri
                <span className="timeline-period-tag">• Kelas XI (PKL 6 Bulan)</span>
              </h3>
              <p>
                Menjalani program Praktik Kerja Lapangan (PKL) selama 6 bulan untuk beradaptasi dengan ritme profesional dan standar kerja industri. Di samping tanggung jawab penugasan harian, pembimbing memberikan modul pelatihan serta proyek terarah guna memperluas wawasan dan kemampuan teknis dalam pengembangan website.
              </p>
            </div>
          </div>

          {/* Fase 04: Proyek Portofolio React */}
          <div className="app-card timeline-step-card">
            <span className="timeline-badge-number">04</span>
            <div className="timeline-body">
              <h3>
                Tantangan Eksplorasi React 19
                <span className="timeline-period-tag">• Proyek Portofolio</span>
              </h3>
              <p>
                Ketika diberikan opsi teknologi oleh pembimbing PKL, saya memilih React karena belum pernah menggunakannya dan ingin menantang diri mempelajari ekosistem komponen modern. Didukung Google Antigravity sebagai asisten interaktif, saya belajar membangun antarmuka web dengan arsitektur React 19, Client Routing, dan Plain CSS Tokens.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian 2: Prinsip Belajar & Karakter Pribadi */}
      <div className="about-section-container">
        <div className="about-section-heading">
          <h2>Prinsip Pembelajaran &amp; Komitmen Diri</h2>
          <p>Nilai kerja yang diterapkan dalam mengembangkan kode dan menyelesaikan masalah.</p>
        </div>

        <div className="values-grid">
          <div className="app-card value-card">
            <div className="value-card-icon">⚖️</div>
            <h3>Integritas Konseptual vs Kode</h3>
            <p>
              Membedakan secara tegas antara memahami konsep sistem dan menguasai seluruh baris kodenya. Kode yang dibuat dengan bantuan AI dipelajari secara bertahap dan tidak diklaim secara berlebihan sebelum dipahami sepenuhnya.
            </p>
          </div>

          <div className="app-card value-card">
            <div className="value-card-icon">🔍</div>
            <h3>Problem Solving Mandiri Sebelum AI</h3>
            <p>
              Saat terjadi kendala atau error di terminal, saya membiasakan diri membaca dan mengurai pesan kesalahan terlebih dahulu. AI dimanfaatkan sebagai mitra diskusi terarah ketika menghadapi bagian yang benar-benar membutuhkan panduan teknis lebih lanjut.
            </p>
          </div>

          <div className="app-card value-card">
            <div className="value-card-icon">🎯</div>
            <h3>Fokus Minat yang Realistis</h3>
            <p>
              Belajar dari pengalaman proyek game di masa SMP yang melampaui batas pemahaman, kini saya fokus di Front-End Web dengan komitmen menyelesaikan apa yang dimulai secara terukur, sembari menyiapkan Back-End dan Mobile sebagai target berikutnya.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
