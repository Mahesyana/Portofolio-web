import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/pages.css';

// Daftar kemungkinan nama file foto yang ditaruh di folder public/
const CANDIDATE_IMAGES = [
  '/avatar.jpg',
  '/avatar.png',
  '/profile.jpg',
  '/profile.png',
  '/profile.jpeg',
  '/foto_profil.jpg',
];

export default function Home() {
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    // Mengecek apakah salah satu nama file foto tersedia di folder public/
    let isMounted = true;
    const testImage = (index) => {
      if (index >= CANDIDATE_IMAGES.length) return;
      const img = new Image();
      img.src = CANDIDATE_IMAGES[index];
      img.onload = () => {
        if (isMounted) setActivePhoto(CANDIDATE_IMAGES[index]);
      };
      img.onerror = () => {
        testImage(index + 1);
      };
    };
    testImage(0);
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container">
      <div className="hero-grid">
        
        {/* Kolom Kiri: Sapaan, Call to Action, & Quick Highlights */}
        <div>
          <div className="hero-badge">
            <span className="hero-pulse-dot"></span>
            <span>Siswa Kelas XI RPL • Web Developer</span>
          </div>

          <h1 className="hero-title">
            Halo, Saya <span className="hero-highlight">Mahesyana</span>.
          </h1>

          <p className="hero-description">
            Fokus belajar membangun antarmuka website yang bersih, responsif, dan interaktif.
          </p>

          <div className="hero-cta-group">
            <NavLink to="/projects" className="btn-primary">
              Lihat Proyek Saya ➔
            </NavLink>
            <NavLink to="/minigame" className="btn-secondary">
              🎮 Mainkan Minigame
            </NavLink>
          </div>

          <div className="hero-meta-bar">
            <span>📍 SMK TI BALI GLOBAL DENPASAR • Rekayasa Perangkat Lunak</span>
            <span>•</span>
            <span>⚡ React 19 + Vite 8</span>
          </div>

          {/* Quick Highlights Bar */}
          <div className="hero-highlights-strip">
            <div className="highlight-item">
              <span className="highlight-number">2+</span>
              <span className="highlight-label">Proyek Nyata</span>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-item">
              <span className="highlight-number">6</span>
              <span className="highlight-label">Halaman Web</span>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-item">
              <span className="highlight-number">100%</span>
              <span className="highlight-label">Responsif HP</span>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Avatar Card Kamon (Otomatis Foto jika ada di public/) */}
        <div className="avatar-card-wrapper">
          <div className="app-card avatar-card">
            <div className="avatar-circle">
              <div className="avatar-circle-inner">
                {activePhoto ? (
                  <img
                    src={activePhoto}
                    alt="Foto Profil Mahesyana"
                    className="avatar-photo-img"
                  />
                ) : (
                  <span className="avatar-fallback-icon">👨‍💻</span>
                )}
              </div>
            </div>

            <div className="avatar-name">Mahesyana</div>
            <div className="avatar-subtitle">Siswa Kelas XI RPL</div>

            {/* Stempel Merah Tradisional (Hanko) */}
            <div className="hanko-stamp" title="Stempel Nama Resmi">
              印
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
