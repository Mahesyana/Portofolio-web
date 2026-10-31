import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Impor ke-6 Halaman Utama
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Minigame from './pages/Minigame';
import FlagQuiz from './pages/FlagQuiz';
import Contact from './pages/Contact';

import './index.css';

export default function App() {
  return (
    <Router>
      <div className="app-canvas">
        {/* 1. Navbar Menempel di Bagian Atas */}
        <Navbar />

        {/* 2. Area Rute Halaman Dinamis */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/minigame" element={<Minigame />} />
            <Route path="/minigame/flag-quiz" element={<FlagQuiz />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* 3. Efek Pendaran Crimson Aurora di Dasar Halaman */}
        <div className="crimson-aurora-dense"></div>

        {/* 4. Footer Menempel di Bagian Bawah */}
        <Footer />
      </div>
    </Router>
  );
}