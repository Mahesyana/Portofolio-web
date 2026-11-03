import { Link } from 'react-router-dom';
import '../styles/pages.css';

export default function NotFound() {
  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div className="app-card not-found-card" style={{ textAlign: 'center', maxWidth: '32rem', padding: '2.5rem 1.5rem', width: '100%' }}>
        <div className="not-found-badge">
          <span className="hero-pulse-dot" style={{ backgroundColor: 'var(--crimson)' }}></span>
          <span>404 • Halaman Tidak Ditemukan</span>
        </div>

        <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: '1rem 0 0.5rem', color: 'var(--text-headline)', letterSpacing: '-0.05em' }}>
          404
        </h1>

        <div className="hanko-stamp" style={{ margin: '0 auto 1.5rem' }} title="Tidak Ditemukan">
          無
        </div>

        <p style={{ fontSize: '1rem', color: 'var(--text-headline)', fontWeight: 600, marginBottom: '0.5rem' }}>
          Halaman yang kamu tuju tidak ditemukan
        </p>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
          Mungkin tautan yang kamu masukkan salah ketik atau halamannya telah dipindahkan.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>
            Kembali ke Beranda ➔
          </Link>
          <Link to="/projects" className="btn-secondary" style={{ textDecoration: 'none' }}>
            Lihat Proyek
          </Link>
        </div>
      </div>
    </div>
  );
}
