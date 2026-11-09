import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Impor ke-6 Halaman Utama, Halaman Khusus Detail Proyek & Fitur Interaktif
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Minigame from './pages/Minigame';
import FlagQuiz from './pages/FlagQuiz';
import TierList from './pages/TierList';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './index.css';

// Helper agar halaman otomatis scroll ke posisi paling atas saat berpindah rute
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Komponen Layout Utama dengan Transisi Halaman Halus
function MainLayout() {
  const location = useLocation();

  return (
    <div className="app-canvas">
      {/* 1. Navbar Menempel di Bagian Atas */}
      <Navbar />

      {/* 2. Area Rute Halaman Dinamis dengan Transisi Halus (key=location.pathname) */}
      <main className="main-content">
        <div key={location.pathname} className="page-transition-wrap">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/minigame" element={<Minigame />} />
            <Route path="/minigame/flag-quiz" element={<FlagQuiz />} />
            <Route path="/minigame/tier-list" element={<TierList />} />
            <Route path="/contact" element={<Contact />} />
            {/* Halaman 404 jika rute tidak ditemukan */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      {/* 3. Efek Pendaran Crimson Aurora di Dasar Halaman */}
      <div className="crimson-aurora-dense"></div>

      {/* 4. Footer Menempel di Bagian Bawah */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout />
    </Router>
  );
}
