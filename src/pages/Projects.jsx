import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import ImageLightbox from '../components/ImageLightbox';
import '../styles/pages.css';

// Komponen penampil 1 gambar utama gambaran besar proyek pada kartu katalog
function ProjectMockupBox({ project, onZoom }) {
  const [imgError, setImgError] = useState(false);
  const coverUrl = project.coverImage || project.images?.[0]?.url;

  if (coverUrl && !imgError) {
    return (
      <div
        className="project-image-preview-wrapper"
        onClick={() => {
          if (onZoom) onZoom({ url: coverUrl, title: project.title });
        }}
        title="Klik untuk memperbesar tampilan antarmuka"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (onZoom) onZoom({ url: coverUrl, title: project.title });
          }
        }}
      >
        <img
          src={coverUrl}
          alt={`Pratinjau tampilan utama ${project.title}`}
          className="project-mockup-image"
          onError={() => setImgError(true)}
        />
        <div className="project-image-zoom-overlay">
          <span className="zoom-icon-badge">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            Perbesar
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-mockup-window" style={{ display: 'flex', flexDirection: 'column', padding: '1rem', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem', opacity: 0.6, fontSize: '0.6875rem' }}>
        <span>{project.windowTag}</span>
        <span>{project.windowTech}</span>
      </div>
      <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-headline)' }}>
        {project.windowDesc}
      </div>
      <div style={{ textAlign: 'center', fontSize: '0.6875rem', color: 'var(--crimson)', marginTop: '0.25rem' }}>
        {project.windowSub}
      </div>
    </div>
  );
}

export default function Projects() {
  const [zoomedImage, setZoomedImage] = useState(null);
  const handleCloseLightbox = useCallback(() => setZoomedImage(null), []);

  return (
    <div className="container">
      <div className="page-header">
        <div className="page-eyebrow">Portofolio Karya Nyata</div>
        <h1 className="page-title">Proyek yang Pernah Dibangun</h1>
        <p className="page-subtitle">Disampaikan secara transparan dan jujur. Klik tombol untuk melihat rincian peran dan galeri antarmuka.</p>
      </div>

      <div className="projects-grid">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="app-card project-card">
            <div>
              {/* Preview Window Box / Mockup Gambar Otomatis dengan Fitur Zoom */}
              <ProjectMockupBox
                project={project}
                onZoom={(imgData) => setZoomedImage(imgData)}
              />

              {/* Status Badge */}
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
                <span style={{ fontSize: '0.6875rem', opacity: 0.6 }}>{project.category}</span>
              </div>

              {/* Judul & Deskripsi Singkat */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.shortDescription || project.description}</p>

              {/* Tag Teknologi */}
              <div className="project-tech-tags">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {typeof tech === 'string' ? tech : tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* SATU-SATUNYA TOMBOL AKSI: Mengarahkan ke Halaman Khusus Detail Proyek */}
            <div className="project-actions">
              <Link
                to={`/projects/${project.id}`}
                className="project-link-btn project-link-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Lihat Detail Lengkap &amp; Peran Saya</span>
                <span style={{ fontSize: '1rem' }}>➔</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox Zoom untuk Tampilan Layar Penuh Gambar Proyek */}
      <ImageLightbox image={zoomedImage} onClose={handleCloseLightbox} />
    </div>
  );
}
