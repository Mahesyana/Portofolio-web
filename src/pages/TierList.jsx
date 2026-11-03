import { useState } from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_LANGUAGES, TIER_CONFIG } from '../data/tierListData';
import '../styles/pages.css';

export default function TierList() {
  // State susunan tier: bagus, biasa, kurang, dan pool (belum ditempatkan)
  const [tiers, setTiers] = useState({
    bagus: [],
    biasa: [],
    kurang: [],
    pool: [...INITIAL_LANGUAGES]
  });

  // State untuk item yang sedang ditarik (Drag & Drop)
  const [draggedItem, setDraggedItem] = useState(null);

  // State untuk menu aksi cepat (Quick Move) di layar HP
  const [activeItemMenu, setActiveItemMenu] = useState(null); // { lang, currentTierId }

  // 1. Memindahkan bahasa dari satu tier ke tier tujuan
  const moveLanguage = (lang, fromTierId, toTierId) => {
    if (fromTierId === toTierId) return;

    setTiers((prev) => {
      // Hapus dari tier asal
      const updatedFrom = prev[fromTierId].filter((item) => item.id !== lang.id);
      // Tambahkan ke tier tujuan
      const updatedTo = [...prev[toTierId], lang];

      return {
        ...prev,
        [fromTierId]: updatedFrom,
        [toTierId]: updatedTo
      };
    });

    setActiveItemMenu(null);
  };

  // 2. Handler HTML5 Drag & Drop
  const handleDragStart = (e, lang, sourceTierId) => {
    setDraggedItem({ lang, sourceTierId });
    e.dataTransfer.setData('text/plain', JSON.stringify({ langId: lang.id, sourceTierId }));
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Wajib agar dropzone menerima drop
  };

  const handleDrop = (e, targetTierId) => {
    e.preventDefault();
    if (!draggedItem) return;

    moveLanguage(draggedItem.lang, draggedItem.sourceTierId, targetTierId);
    setDraggedItem(null);
  };

  // 3. Reset Semua Bahasa Kembali ke Pool
  const handleReset = () => {
    setTiers({
      bagus: [],
      biasa: [],
      kurang: [],
      pool: [...INITIAL_LANGUAGES]
    });
    setActiveItemMenu(null);
  };

  return (
    <div className="container tierlist-container">
      
      {/* Header Halaman */}
      <div className="page-header" style={{ textAlign: 'center', maxWidth: '38rem', margin: '0 auto 1.5rem' }}>
        <div className="page-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>📊</span> FITUR INTERAKTIF TAMBAHAN
        </div>
        <h1 className="page-title" style={{ fontSize: '2.25rem', marginTop: '0.5rem' }}>
          Language Tier List
        </h1>
        <p className="page-subtitle">
          Susun bahasa pemrograman dan teknologi web favoritmu ke dalam 3 kategori: <strong>Bagus</strong>, <strong>Biasa</strong>, dan <strong>Kurang</strong>.
        </p>
      </div>

      {/* Kotak Petunjuk Interaksi */}
      <div className="tier-help-card app-card">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
          <span style={{ fontSize: '1.25rem' }}>💡</span>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            <strong>Cara Menggunakan:</strong> Di laptop/PC, kamu bisa <strong>menyeret (*drag &amp; drop*)</strong> kartu bahasa ke baris yang diinginkan. Di layar HP, <strong>sentuh kartu bahasa</strong> untuk memilih kategori tujuannya secara instan.
          </div>
        </div>
      </div>

      {/* Arena 3 Baris Tier */}
      <div className="tier-board">
        {TIER_CONFIG.map((tier) => {
          const itemsInTier = tiers[tier.id];

          return (
            <div 
              key={tier.id} 
              className="tier-row app-card"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, tier.id)}
            >
              {/* Label Tier Kiri */}
              <div 
                className="tier-label-box"
                style={{ 
                  backgroundColor: tier.bgColor, 
                  borderColor: tier.borderColor,
                  color: tier.textColor 
                }}
              >
                <span className="tier-label-title">{tier.label}</span>
                <span className="tier-count-badge">{itemsInTier.length}</span>
              </div>

              {/* Area Wadah Dropzone */}
              <div className="tier-dropzone">
                {itemsInTier.length === 0 ? (
                  <div className="tier-placeholder-text">
                    Tarik kartu bahasa atau klik kartu untuk menempatkan di sini...
                  </div>
                ) : (
                  itemsInTier.map((lang) => (
                    <div
                      key={lang.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, lang, tier.id)}
                      onClick={() => setActiveItemMenu({ lang, currentTierId: tier.id })}
                      className="tier-lang-card"
                      style={{ borderLeftColor: lang.color }}
                      title="Klik untuk memindahkan atau seret dengan mouse"
                    >
                      <span className="tier-lang-badge" style={{ backgroundColor: lang.color }}>
                        {lang.badge}
                      </span>
                      <span className="tier-lang-name">{lang.name}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pool Area: Bahasa yang Belum Ditempatkan */}
      <div 
        className="tier-pool-section app-card"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'pool')}
      >
        <div className="tier-pool-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1rem' }}>⚪</span>
            <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, margin: 0, color: 'var(--text-headline)' }}>
              Belum Ditempatkan ({tiers.pool.length} Bahasa)
            </h3>
          </div>
          <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Koleksi Awal
          </span>
        </div>

        <div className="tier-pool-grid">
          {tiers.pool.length === 0 ? (
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontStyle: 'italic', padding: '0.5rem 0' }}>
              🎉 Seluruh bahasa pemrograman telah kamu susun ke dalam tier di atas!
            </div>
          ) : (
            tiers.pool.map((lang) => (
              <div
                key={lang.id}
                draggable
                onDragStart={(e) => handleDragStart(e, lang, 'pool')}
                onClick={() => setActiveItemMenu({ lang, currentTierId: 'pool' })}
                className="tier-lang-card"
                style={{ borderLeftColor: lang.color }}
                title="Klik untuk memilih kategori atau seret ke baris tier"
              >
                <span className="tier-lang-badge" style={{ backgroundColor: lang.color }}>
                  {lang.badge}
                </span>
                <span className="tier-lang-name">{lang.name}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Baris Tombol Aksi Bawah */}
      <div className="tier-bottom-actions">
        <button onClick={handleReset} className="btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
          Reset Susunan ↺
        </button>
        <Link to="/minigame" className="btn-secondary" style={{ textDecoration: 'none' }}>
          ← Kembali ke Menu Minigame
        </Link>
      </div>

      {/* ============================================================== */}
      {/* MODAL / MENU AKSI CEPAT (QUICK MOVE) RAMAH LAYAR HP & KLIK     */}
      {/* ============================================================== */}
      {activeItemMenu && (
        <div 
          className="project-lightbox-backdrop"
          onClick={() => setActiveItemMenu(null)}
          style={{ zIndex: 999 }}
        >
          <div 
            className="tier-quick-menu-box app-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="tier-lang-badge" style={{ backgroundColor: activeItemMenu.lang.color }}>
                  {activeItemMenu.lang.badge}
                </span>
                <strong style={{ fontSize: '1rem', color: 'var(--text-headline)' }}>
                  {activeItemMenu.lang.name}
                </strong>
              </div>
              <button 
                onClick={() => setActiveItemMenu(null)} 
                className="btn-secondary" 
                style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem', minWidth: 'auto' }}
              >
                Tutup ✕
              </button>
            </div>

            <p style={{ fontSize: '0.78125rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Pilih baris kategori tujuan untuk bahasa ini:
            </p>

            <div className="tier-quick-buttons-list">
              <button
                onClick={() => moveLanguage(activeItemMenu.lang, activeItemMenu.currentTierId, 'bagus')}
                className="tier-quick-btn"
                style={{ borderColor: 'rgba(16, 185, 129, 0.4)', backgroundColor: 'rgba(16, 185, 129, 0.08)' }}
              >
                <span style={{ color: '#10b981', fontWeight: 700 }}>🟢 Pindahkan ke: Bagus</span>
              </button>

              <button
                onClick={() => moveLanguage(activeItemMenu.lang, activeItemMenu.currentTierId, 'biasa')}
                className="tier-quick-btn"
                style={{ borderColor: 'rgba(245, 158, 11, 0.4)', backgroundColor: 'rgba(245, 158, 11, 0.08)' }}
              >
                <span style={{ color: '#f59e0b', fontWeight: 700 }}>🟡 Pindahkan ke: Biasa</span>
              </button>

              <button
                onClick={() => moveLanguage(activeItemMenu.lang, activeItemMenu.currentTierId, 'kurang')}
                className="tier-quick-btn"
                style={{ borderColor: 'var(--crimson-border)', backgroundColor: 'var(--crimson-light)' }}
              >
                <span style={{ color: 'var(--crimson)', fontWeight: 700 }}>🔴 Pindahkan ke: Kurang</span>
              </button>

              {activeItemMenu.currentTierId !== 'pool' && (
                <button
                  onClick={() => moveLanguage(activeItemMenu.lang, activeItemMenu.currentTierId, 'pool')}
                  className="tier-quick-btn"
                  style={{ borderColor: 'var(--surface-border)' }}
                >
                  <span style={{ color: 'var(--text-body)' }}>⚪ Kembalikan ke Koleksi Awal</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
