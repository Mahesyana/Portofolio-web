import '../styles/pages.css';

export default function Skills() {
  return (
    <div className="container">
      <div className="page-header">
        <div className="page-eyebrow">Keahlian Teknis &amp; Eksplorasi</div>
        <h1 className="page-title">Keterampilan &amp; Teknologi</h1>
        <p className="page-subtitle">Disampaikan secara transparan dan jujur sesuai tingkat pemahaman aktual.</p>
      </div>

      <div className="skills-grid">
        
        {/* KATEGORI 1: BAHASA PEMROGRAMAN WEB (DIKUASAI) */}
        <div className="app-card skill-category-card">
          <div className="skill-category-header">
            <span>💻 Bahasa Pemrograman Web</span>
            <span className="skill-status-tag tag-mastered">Dikuasai</span>
          </div>
          <div className="skill-pills-list">
            <span className="skill-pill">HTML5 Semantik</span>
            <span className="skill-pill">CSS3 (Flexbox/Grid/Theming)</span>
            <span className="skill-pill">Dasar JavaScript (ES6+)</span>
            <span className="skill-pill">DOM &amp; Event Handling</span>
          </div>
        </div>

        {/* KATEGORI 2: MODERN FRONTEND (SEDANG DIPELAJARI AKTIF DI PROYEK INI) */}
        <div className="app-card skill-category-card">
          <div className="skill-category-header">
            <span>⚛️ Modern Web Stack</span>
            <span className="skill-status-tag tag-learning">Sedang Dipelajari</span>
          </div>
          <div className="skill-pills-list">
            <span className="skill-pill highlight">React 19 (Component &amp; State)</span>
            <span className="skill-pill">React Router v7 (Client Routing)</span>
            <span className="skill-pill">Vite 8 (Dev Server &amp; Bundler)</span>
            <span className="skill-pill">Plain CSS Variables (Design Tokens)</span>
          </div>
        </div>

        {/* KATEGORI 3: BROWSER APIS & FITUR LANJUTAN (SEDANG DIPELAJARI DARI SAGARAS TIERLIST) */}
        <div className="app-card skill-category-card">
          <div className="skill-category-header">
            <span>💾 Browser APIs &amp; Data Logic</span>
            <span className="skill-status-tag tag-learning">Sedang Dipelajari</span>
          </div>
          <div className="skill-pills-list">
            <span className="skill-pill">IndexedDB (Database Browser)</span>
            <span className="skill-pill">Canvas API (Ekspor Gambar PNG)</span>
            <span className="skill-pill">Backup &amp; Restore (JSON Data)</span>
            <span className="skill-pill">Local Storage</span>
          </div>
        </div>

        {/* KATEGORI 4: TOOLS & WORKFLOW */}
        <div className="app-card skill-category-card">
          <div className="skill-category-header">
            <span>🛠️ Tools &amp; Development Workflow</span>
            <span className="skill-status-tag tag-tools">Alat Kerja</span>
          </div>
          <div className="skill-pills-list">
            <span className="skill-pill">Git &amp; GitHub</span>
            <span className="skill-pill">Google Antigravity</span>
            <span className="skill-pill">VS Code &amp; Live Server</span>
            <span className="skill-pill">Vercel Deployment</span>
          </div>
        </div>

      </div>

      {/* Catatan Kaki Integritas Akademik */}
      <div className="app-card skills-integrity-notice">
        <div className="integrity-notice-header">
          <span className="integrity-icon">⚖️</span>
          <h4>Komitmen Integritas Akademik &amp; Pemahaman Mandiri</h4>
        </div>
        <p>
          Pengelompokan keahlian di atas disusun secara objektif dan jujur untuk keperluan evaluasi guru penguji. Kategori <strong>Sedang Dipelajari</strong> mencerminkan teknologi dan API browser yang dieksplorasi melalui bantuan AI (Claude &amp; ChatGPT) pada proyek portofolio, di mana saya masih mendalami pemahaman kodenya secara bertahap dan tidak mengklaimnya sebagai keahlian mandiri sebelum diuji secara tuntas.
        </p>
      </div>

    </div>
  );
}
