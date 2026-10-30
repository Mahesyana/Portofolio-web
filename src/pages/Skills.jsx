import '../styles/pages.css';

export default function Skills() {
  return (
    <div className="container">
      <div className="page-header">
        <div className="page-eyebrow">Keahlian Teknis Nyata</div>
        <h1 className="page-title">Keterampilan &amp; Teknologi</h1>
        <p className="page-subtitle">Terbukti dari proyek nyata yang telah dibangun dan sedang dipelajari secara aktif.</p>
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
            <span className="skill-pill">JavaScript (Vanilla ES6+)</span>
            <span className="skill-pill">DOM Manipulation</span>
          </div>
        </div>

        {/* KATEGORI 2: BROWSER APIS & DATA (TERBUKTI DI SAGARAS TIERLIST) */}
        <div className="app-card skill-category-card">
          <div className="skill-category-header">
            <span>💾 Browser APIs &amp; Data Storage</span>
            <span className="skill-status-tag tag-mastered">Implementasi Nyata</span>
          </div>
          <div className="skill-pills-list">
            <span className="skill-pill highlight">IndexedDB API (Client Database)</span>
            <span className="skill-pill">Canvas API (Ekspor Gambar PNG)</span>
            <span className="skill-pill">Backup &amp; Restore (JSON Parsing)</span>
            <span className="skill-pill">Local Storage &amp; Web Fonts</span>
          </div>
        </div>

        {/* KATEGORI 3: MODERN FRONTEND (SEDANG DIPELAJARI DI PROYEK INI) */}
        <div className="app-card skill-category-card">
          <div className="skill-category-header">
            <span>⚛️ Modern Web Stack</span>
            <span className="skill-status-tag tag-learning">Sedang Dipelajari</span>
          </div>
          <div className="skill-pills-list">
            <span className="skill-pill highlight">React 19 (Component &amp; Hooks)</span>
            <span className="skill-pill">React Router v7 (Client-side Routing)</span>
            <span className="skill-pill">Vite 8 (Dev Server &amp; Build Tool)</span>
            <span className="skill-pill">Plain CSS Variables (Tokens)</span>
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
            <span className="skill-pill">Google Antigravity (AI Coding IDE)</span>
            <span className="skill-pill">VS Code &amp; Live Server</span>
            <span className="skill-pill">Vercel Deployment</span>
          </div>
        </div>

      </div>
    </div>
  );
}
