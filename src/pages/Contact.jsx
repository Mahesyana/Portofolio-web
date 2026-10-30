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
          
          {/* Row 1: Email Publik dengan Fitur Salin Cepat & Buka Mailto Langsung */}
          <div className="contact-item-row">
            <div className="contact-item-left">
              <span className="contact-item-label">Email Publik</span>
              <span className="contact-item-value">{email}</span>
            </div>
            <div className="contact-actions-group">
              <button onClick={handleCopyEmail} className="contact-action-btn contact-copy-btn">
                {copied ? '✓ Tersalin!' : 'Salin'}
              </button>
              <a href={`mailto:${email}`} className="contact-action-btn contact-mailto-btn">
                Kirim Email ✉️
              </a>
            </div>
          </div>

          {/* Row 2: LinkedIn (Tersambung & Terverifikasi) */}
          <a href="https://linkedin.com/in/mahesyana" target="_blank" rel="noopener noreferrer" className="contact-item-row">
            <div className="contact-item-left">
              <span className="contact-item-label">LinkedIn</span>
              <span className="contact-item-value">linkedin.com/in/mahesyana</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.6875rem', color: '#10b981', fontWeight: 600 }}>Aktif</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>➔</span>
            </div>
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
