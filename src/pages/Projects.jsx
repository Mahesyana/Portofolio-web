import '../styles/pages.css';

export default function Projects() {
  // =========================================================================
  // TAUTAN LANGSUNG PROYEK (Bisa kamu isi atau ubah sewaktu-waktu)
  // =========================================================================
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
      // Ganti tautan ini dengan URL live website atau repo GitHub aslimu jika sudah ada
      liveUrl: 'https://github.com/SagaraS', // Placeholder tautan langsung
      repoUrl: 'https://github.com/SagaraS', // Placeholder repositori GitHub
      hasLiveDemo: true,
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
      // Ganti tautan ini dengan URL live website atau repo GitHub aslimu
      liveUrl: 'https://github.com/SagaraS', // Placeholder tautan langsung
      repoUrl: 'https://github.com/SagaraS', // Placeholder repositori GitHub
      hasLiveDemo: false,
    },
  ];

  const handleOpenLink = (url, projectName, type) => {
    if (!url || url.includes('#')) {
      alert(`Tautan ${type} untuk proyek "${projectName}" belum disetel. Kamu bisa memasukkan URL aslinya di file Projects.jsx!`);
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
              {/* Preview Window Box */}
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

            {/* Tombol Akses Tautan Langsung */}
            <div className="project-actions">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn project-link-primary"
                onClick={(e) => {
                  if (project.liveUrl === 'https://github.com/SagaraS') {
                    // Masih placeholder
                  }
                }}
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
    </div>
  );
}
