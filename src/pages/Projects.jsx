import { useState, useEffect } from 'react';
import '../styles/pages.css';

// Komponen penampil mockup gambar otomatis jika tersedia di folder public/projects/
function ProjectMockupBox({ project, onZoom }) {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const candidates = [
      `/projects/${project.id}.png`,
      `/projects/${project.id}.jpg`,
      `/projects/${project.id}.jpeg`,
      `/projects/${project.id}.webp`,
    ];

    const testCandidate = (idx) => {
      if (idx >= candidates.length) return;
      const test = new Image();
      test.src = candidates[idx];
      test.onload = () => {
        if (isMounted) setImgUrl(candidates[idx]);
      };
      test.onerror = () => {
        testCandidate(idx + 1);
      };
    };

    testCandidate(0);
    return () => {
      isMounted = false;
    };
  }, [project.id]);

  if (imgUrl) {
    return (
      <div
        className="project-image-preview-wrapper"
        onClick={() => onZoom && onZoom({ url: imgUrl, title: project.title })}
        title="Klik untuk memperbesar tampilan antarmuka"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onZoom && onZoom({ url: imgUrl, title: project.title });
          }
        }}
      >
        <img
          src={imgUrl}
          alt={`Pratinjau tampilan antarmuka ${project.title}`}
          className="project-mockup-image"
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

  // Menutup Lightbox dengan tombol keyboard Escape & mengunci scroll latar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setZoomedImage(null);
      }
    };

    if (zoomedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [zoomedImage]);

  // Data proyek nyata yang telah terverifikasi
  const projectsData = [
    {
      id: 'sagaras-tierlist',
      title: 'Sagaras Music Tierlist',
      category: 'Web Application',
      status: 'Completed (AI-Assisted)',
      statusTagClass: 'tag-mastered',
      windowTag: 'SGR//07 • NEON NOCTURNE',
      windowTech: 'Vanilla JS',
      windowDesc: '[ Sagaras Music Classification System ]',
      windowSub: 'IndexedDB • Export PNG • Backup/Restore',
      description:
        'Aplikasi web sistem klasifikasi musik dengan tema Neon Nocturne yang dikembangkan melalui eksplorasi AI (Claude sebagai pembuat kode dan ChatGPT sebagai perumus prompt). Mengintegrasikan penyimpanan IndexedDB, ekspor Canvas PNG, dan sistem Backup & Restore JSON yang saat ini sedang saya pelajari alur kodenya secara bertahap.',
      techStack: ['JavaScript (ES6+)', 'IndexedDB API', 'Canvas PNG', 'Prompt Engineering'],
      liveUrl: 'https://sagaras-music-tierlist.vercel.app/',
      repoUrl: 'https://github.com/Mahesyana/Sagaras-Music-Tierlist',
    },
    {
      id: 'untitled-studio',
      title: 'Untitled Studio',
      category: 'Agency Web',
      status: 'In Development (Under Progress)',
      statusTagClass: 'tag-learning',
      windowTag: 'STUDIO LANDING PAGE',
      windowTech: 'HTML / CSS',
      windowDesc: '[ Untitled Studio — Creative Agency ]',
      windowSub: 'Multi-Page • Service Showcase',
      description:
        'Website profil studio kreatif digital untuk jasa pembuatan website (Custom Web, Company Website, dan E-Commerce). Saat ini halaman beranda (Home) telah memuat layout layanan dan ilustrasi, sementara halaman About dan Service sedang dalam tahap konstruksi aktif.',
      techStack: ['HTML5 Semantik', 'CSS3 Layout', 'Multi-Page Navigation'],
      liveUrl: 'https://untitled-studio-taupe.vercel.app/',
      repoUrl: 'https://github.com/Mahesyana/Untitled-Studio',
    },
  ];

  return (
    <div className="container">
      <div className="page-header">
        <div className="page-eyebrow">Portofolio Karya Nyata</div>
        <h1 className="page-title">Proyek yang Pernah Dibangun</h1>
        <p className="page-subtitle">Disampaikan secara transparan, jujur, dan dapat diakses langsung melalui tombol aksi.</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="app-card project-card">
            <div>
              {/* Preview Window Box / Mockup Gambar Otomatis dengan Fitur Zoom */}
              <ProjectMockupBox
                project={project}
                onZoom={(imgData) => setZoomedImage(imgData)}
              />

              {/* Status Badge */}
              <div className="project-status-row">
                <span className={`project-status-badge ${project.statusTagClass}`} style={project.id === 'untitled-studio' ? { backgroundColor: 'var(--crimson-light)', color: 'var(--crimson)', border: '1px solid var(--crimson-border)' } : {}}>
                  {project.status}
                </span>
                <span style={{ fontSize: '0.6875rem', opacity: 0.6 }}>{project.category}</span>
              </div>

              {/* Judul & Deskripsi */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Tag Teknologi */}
              <div className="project-tech-tags">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tombol Akses Tautan Langsung yang Berfungsi Nyata */}
            <div className="project-actions">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn project-link-primary"
              >
                <span>Buka Website</span>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn project-link-outline"
              >
                <span>Source Code</span>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox Zoom untuk Tampilan Layar Penuh Gambar Proyek */}
      {zoomedImage && (
        <div
          className="project-lightbox-backdrop"
          onClick={() => setZoomedImage(null)}
          title="Klik di mana saja untuk menutup"
        >
          <div
            className="project-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-lightbox-close"
              onClick={() => setZoomedImage(null)}
              aria-label="Tutup Pratinjau Gambar"
            >
              ✕
            </button>
            <img
              src={zoomedImage.url}
              alt={zoomedImage.title}
              className="project-lightbox-img"
            />
            <div className="project-lightbox-caption">
              <span>{zoomedImage.title} — Pratinjau Tampilan Antarmuka</span>
              <span className="project-lightbox-hint">Tekan Esc atau klik di luar gambar untuk menutup</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
