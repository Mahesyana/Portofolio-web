import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default Night Mode sesuai kesepakatan

   // Mengatur atribut tema di tag <html> untuk Night Mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDark]);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };
  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        
        {/* 1. Bagian Kiri: Logo Kamon Bundar & Brand */}
        <NavLink to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="kamon-badge">
            <div className="kamon-inner">
              <span className="brand-dot">M</span>
            </div>
          </div>
          <span>Mahesyana<span className="brand-dot">.</span></span>
        </NavLink>
        {/* 2. Bagian Tengah: Menu Desktop Berikon */}
        <nav className="navbar-menu-desktop">
          <NavLink to="/" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`} end>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            About
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Skills
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
            Projects
          </NavLink>
          <NavLink to="/minigame" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>
            Minigame <span className="minigame-dot"></span>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            Contact
          </NavLink>
        </nav>
        {/* 3. Bagian Kanan: Saklar Tema & Tombol Hamburger Mobile */}
        <div className="navbar-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Night Mode" title="Ganti Tema">
            {isDark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="hamburger-btn" aria-label="Toggle Navigation Menu">
            {isMobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {/* 4. Menu Drawer Mobile (Tampil Hanya di Layar HP saat Dibuka) */}
      {isMobileOpen && (
        <div className="mobile-drawer">
          <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu} end>
            <div className="mobile-nav-link-left">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              <span>Home</span>
            </div>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
            <div className="mobile-nav-link-left">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              <span>About Me</span>
            </div>
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
            <div className="mobile-nav-link-left">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              <span>Skills</span>
            </div>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
            <div className="mobile-nav-link-left">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              <span>Projects</span>
            </div>
          </NavLink>
          <NavLink to="/minigame" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
            <div className="mobile-nav-link-left">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>
              <span>Minigame Hub</span>
            </div>
            <span className="mobile-badge-game">GAME</span>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
            <div className="mobile-nav-link-left">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span>Contact</span>
            </div>
          </NavLink>
        </div>
      )}
    </header>
  );
}