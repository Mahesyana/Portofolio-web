import './Footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      {/* Sinar Laser Crimson Menyala di Atas Footer */}
      <div className="crimson-laser-beam"></div>

      <div className="container footer-container">
        {/* Teks Kiri: Hak Cipta & Identitas Siswa */}
        <div className="footer-left glow-safe-text">
          © 2026 <strong>I Gusti Made Dwi K Mahesyana</strong>. Siswa Kelas XI RPL.
        </div>

        {/* Teks Kanan: Status Proyek & Teknologi */}
        <div className="footer-right glow-safe-text">
          <span style={{ opacity: 0.75 }}>TUGAS BESAR</span>
          <span className="footer-dot">•</span>
          <span className="footer-badge">REACT 19 + ANTIGRAVITY</span>
        </div>
      </div>
    </footer>
  );
}
