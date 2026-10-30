import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="app-canvas">
        {/* Navbar dipasang di bagian paling atas */}
        <Navbar />

        {/* Area Konten Sementara untuk Pengujian */}
        <main className="container main-content" style={{ textAlign: 'center', paddingTop: '4rem' }}>
          
        </main>

        {/* Efek Pendaran Merah Pekat di Bagian Bawah */}
        <div className="crimson-aurora-dense"></div>
      </div>
    </Router>
  );
}