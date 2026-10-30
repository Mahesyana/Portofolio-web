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
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Mulai Mainkan Flag Quiz ➔
            </button>
          </div>
        </div>

        {/* Game 2: Programming Language Tier List (Fitur Opsional) */}
        <div className="app-card minigame-secondary-card">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>📊</span>
              <span className="project-status-badge tag-tools">Fitur Opsional</span>
            </div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Language Tier List
            </h3>

            <p className="project-desc">
              Editor seret dan lepas (*drag-and-drop*) untuk menyusun bahasa pemrograman favorit ke kategori penilaian: Bagus, Biasa Aja, dan Kurang.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              <span>• Drag &amp; Drop</span>
              <span>• Prioritas 3</span>
            </div>
          </div>

          <div style={{ paddingTop: '1.5rem' }}>
            <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center', opacity: 0.6, cursor: 'not-allowed' }}>
              🔒 Akan Dibuka Setelah Flag Quiz Selesai
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
