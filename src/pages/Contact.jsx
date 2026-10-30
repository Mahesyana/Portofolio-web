import { useState } from 'react';
import '../styles/pages.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'mahesyana16@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container">
      <div className="contact-wrapper">
        <div className="page-header">
          <div className="page-eyebrow">Kontak Profesional</div>
          <h1 className="page-title">Mari Terhubung</h1>
          <p className="page-subtitle">Informasi kontak publik yang aman sesuai panduan privasi sekolah.</p>
        </div>

        <div className="app-card contact-card-box">
          
          {/* Row 1: Email Publik dengan Fitur Salin Cepat */}
          <div className="contact-item-row">
            <div className="contact-item-left">
              <span className="contact-item-label">Email Publik</span>
              <span className="contact-item-value">{email}</span>
            </div>
            <button onClick={handleCopyEmail} style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--crimson)' }}>
              {copied ? '✓ Tersalin!' : 'Salin'}
            </button>
          </div>

          {/* Row 2: LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-item-row">
            <div className="contact-item-left">
              <span className="contact-item-label">LinkedIn</span>
              <span className="contact-item-value">linkedin.com/in/mahesyana</span>
            </div>
            <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>➔</span>
          </a>

          {/* Row 3: GitHub */}
          <a href="https://github.com/SagaraS" target="_blank" rel="noopener noreferrer" className="contact-item-row">
            <div className="contact-item-left">
              <span className="contact-item-label">GitHub</span>
              <span className="contact-item-value">github.com/SagaraS</span>
            </div>
            <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>➔</span>
          </a>

          <div style={{ textAlign: 'center', paddingTop: '0.5rem', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
            🔒 Sesuai ketentuan privasi sekolah: Tidak mencantumkan nomor telepon, NIK, dan alamat rumah.
          </div>
        </div>

      </div>
    </div>
  );
}
