import '../styles/pages.css';

export default function About() {
  return (
    <div className="container">
      <div className="page-header">
        <div className="page-eyebrow">Perkenalan Diri</div>
        <h1 className="page-title">Tentang Saya &amp; Perjalanan Belajar</h1>
        <p className="page-subtitle">Mengenal latar belakang pendidikan dan minat di bidang pengembangan web.</p>
      </div>

      {/* 3 Kartu Sorotan Informasi */}
      <div className="about-stats-grid">
        <div className="app-card stat-card">
          <div className="stat-label">Pendidikan</div>
          <div className="stat-value">Kelas XI RPL 1</div>
          <div className="stat-desc">SMK TI BALI GLOBAL DENPASAR</div>
        </div>

        <div className="app-card stat-card">
          <div className="stat-label">Fokus Belajar</div>
          <div className="stat-value">Front-End Web</div>
          <div className="stat-desc">React 19, Component, Plain CSS</div>
        </div>

        <div className="app-card stat-card">
          <div className="stat-label">Tujuan Karier</div>
          <div className="stat-value">Software Engineer</div>
          <div className="stat-desc">Membangun produk digital bermanfaat</div>
        </div>
      </div>

      {/* Cerita Perjalanan Belajar */}
      <div className="app-card bio-card">
        <h3>Perjalanan dari Kelas X hingga XI</h3>
        <p>
          Memulai langkah pemrograman dari dasar HTML dan CSS di kelas X. Di kelas XI, saya mendalami React dan ekosistem Vite untuk memahami cara membangun antarmuka yang modular, cepat, dan terstruktur.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Dengan memanfaatkan Google Antigravity sebagai AI mentor dan ChatGPT sebagai asisten belajar dan mencari ide, saya belajar memecahkan masalah koding dan memahami alur logika secara mandiri agar siap menghadapi dunia industri, tugas besar, dan presentasi sekolah.
        </p>
      </div>
    </div>
  );
}
