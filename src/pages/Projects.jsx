import '../styles/pages.css';

export default function Projects() {
  return (
    <div className="container">
      <div className="page-header">
        <div className="page-eyebrow">Portofolio Karya Nyata</div>
        <h1 className="page-title">Proyek yang Pernah Dibangun</h1>
        <p className="page-subtitle">Berdasarkan repositori dan kode aktual yang dikembangkan secara mandiri.</p>
      </div>

      <div className="projects-grid">
        
        {/* PROYEK 1: SAGARAS MUSIC TIERLIST */}
        <div className="app-card project-card">
          <div>
            <div className="project-mockup-window" style={{ display: 'flex', flexDirection: 'column', padding: '1rem', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem', opacity: 0.6, fontSize: '0.6875rem' }}>
                <span>SGR//07 • NEON NOCTURNE</span>
                <span>Vanilla JS</span>
              </div>
              <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-headline)' }}>
                [ Sagaras Music Classification System ]
              </div>
              <div style={{ textAlign: 'center', fontSize: '0.6875rem', color: 'var(--crimson)', marginTop: '0.25rem' }}>
                IndexedDB • Export PNG • Backup/Restore
              </div>
            </div>

            <div className="project-status-row">
              <span className="project-status-badge tag-mastered">Completed (v1.0)</span>
              <span style={{ fontSize: '0.6875rem', opacity: 0.6 }}>Web Application</span>
            </div>

            <h3 className="project-title">Sagaras Music Tierlist</h3>
            <p className="project-desc">
              Aplikasi web sistem klasifikasi musik interaktif dengan tema <em>Neon Nocturne</em>. Dilengkapi penyimpanan database lokal browser menggunakan <strong>IndexedDB</strong>, fitur unduh ekspor grafik ke format <strong>PNG</strong>, serta sistem pencadangan dan pemulihan data (<strong>Backup &amp; Restore JSON</strong>).
            </p>

            <div className="project-tech-tags">
              <span className="tech-tag">JavaScript (ES6+)</span>
              <span className="tech-tag">IndexedDB API</span>
              <span className="tech-tag">Canvas PNG Export</span>
              <span className="tech-tag">CSS Neon Nocturne</span>
            </div>
          </div>

          <div className="project-actions">
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--crimson)' }}>
              ✓ Fitur &amp; Database Lokal Aktif
            </span>
          </div>
        </div>

        {/* PROYEK 2: UNTITLED STUDIO */}
        <div className="app-card project-card">
          <div>
            <div className="project-mockup-window" style={{ display: 'flex', flexDirection: 'column', padding: '1rem', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem', opacity: 0.6, fontSize: '0.6875rem' }}>
                <span>STUDIO LANDING PAGE</span>
                <span>HTML / CSS</span>
              </div>
              <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-headline)' }}>
                [ Untitled Studio — Creative Agency ]
              </div>
              <div style={{ textAlign: 'center', fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Multi-Page • Service Showcase
              </div>
            </div>

            <div className="project-status-row">
              <span className="project-status-badge" style={{ backgroundColor: 'var(--crimson-light)', color: 'var(--crimson)', border: '1px solid var(--crimson-border)' }}>
                In Development (Under Progress)
              </span>
              <span style={{ fontSize: '0.6875rem', opacity: 0.6 }}>Agency Web</span>
            </div>

            <h3 className="project-title">Untitled Studio</h3>
            <p className="project-desc">
              Website profil studio kreatif digital untuk jasa pembuatan website (Custom Web, Company Website, dan E-Commerce). Saat ini halaman beranda (*Home*) telah memuat layout layanan dan ilustrasi, sementara halaman *About* dan *Service* sedang dalam tahap konstruksi aktif.
            </p>

            <div className="project-tech-tags">
              <span className="tech-tag">HTML5 Semantik</span>
              <span className="tech-tag">CSS3 Layout</span>
              <span className="tech-tag">Multi-Page Navigation</span>
            </div>
          </div>

          <div className="project-actions">
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              ⏳ Tahap Pengembangan Struktur Halaman
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
