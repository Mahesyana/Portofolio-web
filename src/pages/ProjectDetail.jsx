import { useState, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import ImageLightbox from '../components/ImageLightbox';
import '../styles/pages.css';

export default function ProjectDetail() {
  const { id } = useParams();

  // Cari data proyek berdasarkan URL parameter (:id)
  const project = PROJECTS_DATA.find((p) => p.id === id);

  // State untuk slider mockup gambar (maksimal 3 gambar)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('fade'); // 'next' | 'prev' | 'fade'

  // State modal lightbox untuk memperbesar gambar jika diklik
  const [zoomedImage, setZoomedImage] = useState(null);
  const handleCloseLightbox = useCallback(() => setZoomedImage(null), []);

  // Jika ID tidak ditemukan di dataset, arahkan kembali ke katalog projects
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const totalImages = project.images.length;
  const currentImage = project.images[currentSlideIndex];

  // Navigasi manual slider (Next)
  const handleNextSlide = () => {
    setSlideDirection('next');
    setCurrentSlideIndex((prev) => (prev + 1) % totalImages);
  };

  // Navigasi manual slider (Prev)
  const handlePrevSlide = () => {
    setSlideDirection('prev');
    setCurrentSlideIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Navigasi manual via titik dots indikator
  const handleGoToSlide = (idx) => {
    setSlideDirection(idx > currentSlideIndex ? 'next' : 'prev');
    setCurrentSlideIndex(idx);
  };

  return (
    <div className="container project-detail-container">
      
      {/* 1. Tombol Navigasi Kembali ke Katalog Proyek */}
      <div className="project-detail-breadcrumb">
        <Link to="/projects" className="detail-back-link">
          <span>←</span>
          <span>Kembali ke Semua Proyek</span>
        </Link>
      </div>

      {/* 2. Kartu Utama Halaman Detail (Layout Padat Kanan-Kiri 2 Kolom untuk Minimalisir Scroll) */}
      <div className="app-card project-detail-card">
        
        <div className="project-detail-layout">
          
          {/* ================= KOLOM KIRI: Visual Mockup Slider & Quick Actions ================= */}
          <div className="project-detail-left-col">
            
            {/* Header Proyek */}
            <div className="project-detail-header">
              <div className="project-status-row">
                <span
                  className={`project-status-badge ${project.statusTagClass}`}
                  style={
                    project.id === 'untitled-studio'
                      ? {
                          backgroundColor: 'var(--crimson-light)',
                          color: 'var(--crimson)',
                          border: '1px solid var(--crimson-border)',
                        }
                      : {}
                  }
                >
                  {project.status}
                </span>
                <span className="project-category-text">{project.category}</span>
              </div>

              <h1 className="project-detail-title">{project.title}</h1>
              <p className="project-detail-subtitle">{project.windowSub}</p>
            </div>

            {/* Slider Mockup Gambar Interaktif (Maksimal 3 Gambar) */}
            <div className="project-slider-section">
              <div className="slider-header-info">
                <div className="slider-label-group">
                  <span className="slider-icon">🖼️</span>
                  <span className="slider-label-title">Galeri Antarmuka Proyek</span>
                </div>
                <span className="slider-counter-badge">
                  Gambar {currentSlideIndex + 1} dari {totalImages}
                </span>
              </div>

              {/* Frame Layar Mockup */}
              <div className="project-slider-frame">
                
                {/* Tampilan Gambar dengan Animasi Geser Berarah */}
                <div
                  key={currentSlideIndex}
                  className={`project-slider-viewport ${
                    slideDirection === 'next'
                      ? 'slide-anim-next'
                      : slideDirection === 'prev'
                      ? 'slide-anim-prev'
                      : 'slide-anim-fade'
                  }`}
                >
                  <img
                    src={currentImage.url}
                    alt={currentImage.title}
                    className="project-slider-img"
                    onClick={() => setZoomedImage(currentImage)}
                    title="Klik untuk memperbesar gambar layar penuh"
                  />

                  {/* Overlay Hint Perbesar */}
                  <div
                    className="project-image-zoom-overlay"
                    onClick={() => setZoomedImage(currentImage)}
                  >
                    <span className="zoom-icon-badge">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                      Perbesar Gambar
                    </span>
                  </div>
                </div>

                {/* Tombol Panah Kiri (Prev) */}
                {totalImages > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className="slider-nav-btn slider-btn-prev"
                    aria-label="Gambar Sebelumnya"
                  >
                    ◀
                  </button>
                )}

                {/* Tombol Panah Kanan (Next) */}
                {totalImages > 1 && (
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="slider-nav-btn slider-btn-next"
                    aria-label="Gambar Selanjutnya"
                  >
                    ▶
                  </button>
                )}

                {/* Indikator Titik (Dots) di Dasar Mockup */}
                {totalImages > 1 && (
                  <div className="slider-dots-bar">
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleGoToSlide(idx)}
                        className={`slider-dot-item ${idx === currentSlideIndex ? 'active' : ''}`}
                        aria-label={`Buka slide ke-${idx + 1}: ${img.title}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Keterangan Gambar Aktif Rapi & Terstruktur */}
              <div className="slider-caption-box">
                <h4 className="slider-caption-title">{currentImage.title}</h4>
                <p className="slider-caption-desc">{currentImage.caption}</p>
              </div>
            </div>

            {/* Tombol Aksi Tautan Eksternal Tepat di Bawah Slider (Langsung Terlihat Tanpa Scroll) */}
            <div className="project-detail-actions">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary detail-action-btn"
              >
                <span>Buka Website Langsung</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary detail-action-btn"
              >
                <span>Lihat Source Code GitHub</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </a>
            </div>

          </div>

          {/* ================= KOLOM KANAN: Konten Terstruktur, Padat & Rapi ================= */}
          <div className="project-detail-right-col">
            
            <div className="project-detail-grid">
              
              {/* Seksi 1: Deskripsi Lengkap */}
              <div className="app-card detail-content-card">
                <div className="detail-card-header">
                  <span className="detail-icon">📖</span>
                  <h3>Deskripsi Lengkap Website</h3>
                </div>
                <p className="detail-text-paragraph">{project.fullDescription}</p>
              </div>

              {/* Seksi 2: Teknologi yang Digunakan */}
              <div className="app-card detail-content-card">
                <div className="detail-card-header">
                  <span className="detail-icon">⚡</span>
                  <h3>Teknologi yang Digunakan</h3>
                </div>
                <div className="detail-tech-list">
                  {project.techStack.map((tech, idx) => (
                    <div key={idx} className="detail-tech-badge">
                      <span className="tech-badge-name">{tech.name}</span>
                      <span className="tech-badge-desc">{tech.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seksi 3: Peran Saya dalam Pembuatan Website */}
              <div className="app-card detail-content-card detail-card-role">
                <div className="detail-card-header">
                  <span className="detail-icon">👤</span>
                  <h3>Peran Saya dalam Pembuatan Website</h3>
                </div>
                <ul className="detail-role-list">
                  {project.myRole.map((roleItem, idx) => (
                    <li key={idx} className="detail-role-item">
                      <span className="role-bullet">✦</span>
                      <span>{roleItem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Seksi 4: Pendapat & Refleksi Saya */}
              <div className="app-card detail-content-card detail-card-opinion">
                <div className="detail-card-header">
                  <span className="detail-icon">💭</span>
                  <h3>Pendapat &amp; Refleksi Pribadi Saya</h3>
                </div>
                <blockquote className="detail-opinion-quote">
                  &ldquo;{project.myOpinion}&rdquo;
                </blockquote>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 6. Modal Lightbox untuk Perbesar Tampilan Layar Penuh Gambar */}
      <ImageLightbox image={zoomedImage} onClose={handleCloseLightbox} />

    </div>
  );
}
