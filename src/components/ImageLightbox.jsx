import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ImageLightbox({ image, onClose }) {
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Mengunci scroll halaman (desktop & mobile touch) serta mendengarkan tombol Escape
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCloseRef.current?.();
      }
    };

    const preventTouchScroll = (e) => {
      e.preventDefault();
    };

    document.documentElement.classList.add('lightbox-scroll-lock');
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchmove', preventTouchScroll, { passive: false });

    return () => {
      document.documentElement.classList.remove('lightbox-scroll-lock');
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchmove', preventTouchScroll);
    };
  }, [image]);

  if (!image) return null;

  return createPortal(
    <div
      className="project-lightbox-backdrop"
      onClick={() => onCloseRef.current?.()}
      role="dialog"
      aria-modal="true"
      aria-label={`Tampilan penuh ${image.title}`}
      title="Klik atau ketuk area luar untuk menutup"
    >
      <button
        type="button"
        className="project-lightbox-close-btn"
        onClick={(e) => {
          e.stopPropagation();
          onCloseRef.current?.();
        }}
        aria-label="Tutup tampilan penuh"
      >
        <span aria-hidden="true">✕</span>
        <span>Tutup</span>
      </button>

      <div className="project-lightbox-content">
        {/* Header Modal Beraksen Warna */}
        <div className="project-lightbox-header">
          <div
            className="project-lightbox-title-group"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="project-lightbox-kamon-dot"></span>
            <span className="project-lightbox-title">{image.title}</span>
            <span className="project-lightbox-badge">Tampilan Penuh</span>
          </div>
        </div>

        {/* Frame Gambar dengan Efek Border Glow */}
        <div
          className="project-lightbox-image-frame"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.url}
            alt={image.title}
            className="project-lightbox-img"
          />
        </div>

        {/* Footer Modal dengan Hint Responsif Desktop & Mobile */}
        <div className="project-lightbox-footer">
          <span className="project-lightbox-hint lightbox-hint-desktop">
            Tekan tombol <kbd className="lightbox-kbd">Esc</kbd> atau klik area luar untuk menutup
          </span>
          <span className="project-lightbox-hint lightbox-hint-mobile">
            Ketuk area luar gambar atau tombol <strong>✕ Tutup</strong> untuk kembali
          </span>
        </div>
      </div>
    </div>,
    document.body
  );
}
