import { Link } from 'react-router-dom';
import '../styles/pages.css';

export default function Minigame() {
  return (
    <div className="container">
      <div className="page-header" style={{ textAlign: 'center', maxWidth: '36rem', margin: '0 auto 2rem' }}>
        <div className="page-eyebrow">🎮 Fitur Interaktif Tambahan</div>
        <h1 className="page-title">Minigame Hub</h1>
        <p className="page-subtitle">Memenuhi ketentuan tugas besar: minimal satu fitur interaktif yang berfungsi nyata.</p>
      </div>

      <div className="minigame-hub-grid">
        
        {/* Game 1: Flag Quiz (Fitur Wajib Utama yang Akan Dibangun di Tahap 4) */}
        <div className="app-card minigame-featured-card">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>🏁</span>
              <span className="project-status-badge" style={{ backgroundColor: 'var(--crimson)', color: '#ffffff' }}>
                FITUR UTAMA WAJIB
              </span>
            </div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Flag Quiz (Tebak Bendera)
            </h3>
            
            <p className="project-desc">
              Kuis interaktif menebak bendera negara dalam 5 ronde acak dari dataset 10 bendera lokal. Dilengkapi umpan balik jawaban seketika dan pencegahan spam klik ganda.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              <span>• 5 Ronde</span>
              <span>• 3 Opsi</span>
              <span>• Aman Offline</span>
            </div>
          </div>

          <div style={{ paddingTop: '1.5rem' }}>
            <Link to="/minigame/flag-quiz" className="btn-primary" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
              Mulai Mainkan Flag Quiz ➔
            </Link>
          </div>
        </div>

        {/* Game 2: Programming Language Tier List (Fitur Interaktif 2) */}
        <div className="app-card minigame-secondary-card">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>📊</span>
              <span className="project-status-badge tag-mastered">FITUR TAMBAHAN AKTIF</span>
            </div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Language Tier List
            </h3>

            <p className="project-desc">
              Editor seret dan lepas (*drag-and-drop*) untuk menyusun 8 bahasa pemrograman favorit ke kategori penilaian: Bagus, Biasa, dan Kurang.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              <span>• Drag &amp; Drop</span>
              <span>• 8 Bahasa</span>
              <span>• Mobile Friendly</span>
            </div>
          </div>

          <div style={{ paddingTop: '1.5rem' }}>
            <Link to="/minigame/tier-list" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
              Buka Language Tier List ➔
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
