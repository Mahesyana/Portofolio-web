import { NavLink } from 'react-router-dom';
import '../styles/pages.css';

export default function Home() {
  return (
    <div className="container">
      <div className="hero-grid">
        
        {/* Kolom Kiri: Sapaan & Call to Action */}
        <div>
          <div className="hero-badge">
            <span className="hero-pulse-dot"></span>
            <span>Siswa Kelas XI RPL • Web Developer</span>
          </div>

          <h1 className="hero-title">
            Halo, Saya <span className="hero-highlight">Mahesyana</span>.
          </h1>

          <p className="hero-description">
            Fokus belajar membangun antarmuka website yang bersih, responsif, dan interaktif dengan sentuhan estetika minimalis Jepang.
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
        </div>

        {/* Kolom Kanan: Avatar Card Kamon */}
        <div className="avatar-card-wrapper">
          <div className="app-card avatar-card">
            <div className="avatar-circle">
              <div className="avatar-circle-inner">
                👨‍💻
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
