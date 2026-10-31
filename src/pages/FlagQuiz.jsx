import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FLAGS_DATA } from '../data/flagsData';
import '../styles/pages.css';

const TOTAL_ROUNDS = 5;

// Fungsi pembantu untuk mengacak sesi 5 ronde baru
function generateGameSession() {
  // 1. Acak 10 negara dan ambil 5 negara unik untuk 5 ronde
  const shuffledFlags = [...FLAGS_DATA].sort(() => Math.random() - 0.5);
  const selectedRounds = shuffledFlags.slice(0, TOTAL_ROUNDS);

  // 2. Untuk setiap ronde, sediakan 1 jawaban benar dan 2 pengecoh acak unik
  return selectedRounds.map(correctCountry => {
    const distractors = FLAGS_DATA
      .filter(f => f.id !== correctCountry.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    const options = [correctCountry, ...distractors].sort(() => Math.random() - 0.5);

    return {
      correctCountry,
      options
    };
  });
}

export default function FlagQuiz() {
  // Status Permainan: 'guide' (panduan) | 'playing' (ronde kuis) | 'result' (skor akhir)
  const [gameState, setGameState] = useState('guide');
  
  // Data sesi aktif
  const [questions, setQuestions] = useState([]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Status ronde berjalan
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);
  const [roundFeedback, setRoundFeedback] = useState(null);

  // 1. Memulai Permainan
  const handleStartGame = () => {
    const newSession = generateGameSession();
    setQuestions(newSession);
    setCurrentRoundIndex(0);
    setScore(0);
    setSelectedOptionId(null);
    setIsAnswerLocked(false);
    setRoundFeedback(null);
    setGameState('playing');
  };

  // 2. Memilih Jawaban (Dilengkapi Pencegahan Spam Klik Ganda)
  const handleSelectOption = (option) => {
    if (isAnswerLocked) return; // Kunci anti-spam

    setIsAnswerLocked(true);
    setSelectedOptionId(option.id);

    const currentQ = questions[currentRoundIndex];
    const isCorrect = option.id === currentQ.correctCountry.id;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setRoundFeedback({
      isCorrect,
      correctName: currentQ.correctCountry.name,
      funFact: currentQ.correctCountry.funFact
    });
  };

  // 3. Melangkah ke Ronde Berikutnya atau Menuju Hasil Akhir
  const handleNextRound = () => {
    if (currentRoundIndex < TOTAL_ROUNDS - 1) {
      setCurrentRoundIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerLocked(false);
      setRoundFeedback(null);
    } else {
      setGameState('result');
    }
  };

  // Pertanyaan aktif pada ronde saat ini
  const currentQuestion = questions[currentRoundIndex];

  return (
    <div className="container flag-quiz-wrapper">
      
      {/* ============================================================== */}
      {/* 1. TAMPILAN PANDUAN AWAL (GUIDE / WELCOME SCREEN)               */}
      {/* ============================================================== */}
      {gameState === 'guide' && (
        <div className="flag-quiz-card app-card">
          {/* Header Panduan */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="page-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🏁</span> FITUR INTERAKTIF UTAMA
            </div>
            <h1 className="page-title" style={{ fontSize: '2rem', marginTop: '0.5rem' }}>
              Flag Quiz - Tebak Bendera Dunia
            </h1>
            <p className="page-subtitle" style={{ maxWidth: '34rem', margin: '0 auto' }}>
              Uji ketajaman wawasan geografimu dengan menebak bendera 10 negara terkenal dunia dalam 5 ronde acak.
            </p>
          </div>

          {/* Kotak Deskripsi */}
          <div className="flag-guide-desc-box">
            <h2 className="flag-guide-subtitle">
              <span>📖</span> Deskripsi Permainan
            </h2>
            <p>
              Flag Quiz adalah fitur interaktif mandiri yang dibangun menggunakan <strong>React State</strong> dan <strong>10 aset vektor SVG lokal</strong>. Fitur ini dirancang responsif, bebas ketergantungan internet luar (*offline-ready*), dan mengusung filosofi desain minimalis bersih khas portofolio ini.
            </p>
          </div>

          {/* 4 Poin Aturan & Cara Bermain */}
          <div style={{ marginTop: '1.75rem', marginBottom: '2.25rem' }}>
            <h2 className="flag-guide-subtitle" style={{ marginBottom: '1rem' }}>
              <span>⚡</span> Cara Bermain &amp; Ketentuan
            </h2>

            <div className="flag-guide-rules-grid">
              <div className="flag-rule-item">
                <div className="flag-rule-num">1</div>
                <div>
                  <h4 className="flag-rule-title">5 Ronde Acak</h4>
                  <p className="flag-rule-desc">Setiap sesi memilih 5 bendera unik tanpa pengulangan dari dataset 10 negara.</p>
                </div>
              </div>

              <div className="flag-rule-item">
                <div className="flag-rule-num">2</div>
                <div>
                  <h4 className="flag-rule-title">3 Opsi Pilihan</h4>
                  <p className="flag-rule-desc">Tersedia 1 jawaban benar dan 2 pengecoh acak untuk setiap soal bendera.</p>
                </div>
              </div>

              <div className="flag-rule-item">
                <div className="flag-rule-num">3</div>
                <div>
                  <h4 className="flag-rule-title">Kunci Anti-Spam</h4>
                  <p className="flag-rule-desc">Sekali tombol dipilih, seluruh opsi terkunci seketika agar skor tidak dapat dimanipulasi.</p>
                </div>
              </div>

              <div className="flag-rule-item">
                <div className="flag-rule-num">4</div>
                <div>
                  <h4 className="flag-rule-title">Umpan Balik Nyata</h4>
                  <p className="flag-rule-desc">Ketahui langsung apakah tebakanmu tepat disertai fakta menarik dari bendera tersebut.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tombol Aksi Panduan */}
          <div className="flag-guide-actions">
            <button onClick={handleStartGame} className="btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}>
              Mulai Kuis Sekarang ➔
            </button>
            <Link to="/minigame" className="btn-secondary" style={{ textDecoration: 'none' }}>
              ← Kembali ke Menu Minigame
            </Link>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 2. TAMPILAN PERMAINAN 5 RONDE (PLAYING SCREEN)                 */}
      {/* ============================================================== */}
      {gameState === 'playing' && currentQuestion && (
        <div className="flag-quiz-card app-card">
          
          {/* Bar Status Atas */}
          <div className="flag-quiz-topbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span className="project-status-badge" style={{ backgroundColor: 'var(--crimson)', color: '#ffffff' }}>
                Ronde {currentRoundIndex + 1} / {TOTAL_ROUNDS}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Flag Quiz
              </span>
            </div>

            <div className="flag-score-badge">
              Skor: <strong>{score}</strong>
            </div>
          </div>

          {/* Bar Kemajuan (Progress Bar) */}
          <div className="flag-progress-track">
            <div 
              className="flag-progress-fill"
              style={{ width: `${((currentRoundIndex + 1) / TOTAL_ROUNDS) * 100}%` }}
            />
          </div>

          {/* Tampilan Visual Bendera */}
          <div className="flag-display-area">
            <div className="flag-image-frame">
              <img 
                src={currentQuestion.correctCountry.flag} 
                alt="Bendera Soal" 
                className="flag-image-img"
              />
            </div>
            <h2 className="flag-question-title">
              Bendera negara manakah ini?
            </h2>
          </div>

          {/* 3 Tombol Opsi Jawaban */}
          <div className="flag-options-grid">
            {currentQuestion.options.map((option, index) => {
              const letter = String.fromCharCode(65 + index); // A, B, C
              const isSelected = selectedOptionId === option.id;
              const isCorrectOption = option.id === currentQuestion.correctCountry.id;

              let optionClass = 'flag-option-btn';

              if (isAnswerLocked) {
                if (isCorrectOption) {
                  optionClass += ' option-correct';
                } else if (isSelected && !isCorrectOption) {
                  optionClass += ' option-wrong';
                } else {
                  optionClass += ' option-disabled';
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option)}
                  disabled={isAnswerLocked}
                  className={optionClass}
                >
                  <span className="flag-option-letter">{letter}</span>
                  <span className="flag-option-name">{option.name}</span>
                  {isAnswerLocked && isCorrectOption && (
                    <span className="flag-status-check">✓ Benar</span>
                  )}
                  {isAnswerLocked && isSelected && !isCorrectOption && (
                    <span className="flag-status-cross">✗ Salah</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Kotak Umpan Balik & Tombol Lanjut (Muncul Setelah Dijawab) */}
          {isAnswerLocked && roundFeedback && (
            <div className={`flag-feedback-box ${roundFeedback.isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
              <div className="feedback-content">
                <div className="feedback-status-title">
                  {roundFeedback.isCorrect ? (
                    <span>🎉 Jawabanmu Tepat Sekali! (+1 Poin)</span>
                  ) : (
                    <span>⚠️ Kurang Tepat! Jawaban yang benar adalah <strong>{roundFeedback.correctName}</strong>.</span>
                  )}
                </div>
                <p className="feedback-funfact">
                  💡 <em>Fakta:</em> {roundFeedback.funFact}
                </p>
              </div>

              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={handleNextRound} className="btn-primary" style={{ padding: '0.65rem 1.5rem' }}>
                  {currentRoundIndex < TOTAL_ROUNDS - 1 ? 'Ronde Berikutnya ➔' : 'Lihat Hasil Akhir ➔'}
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ============================================================== */}
      {/* 3. TAMPILAN HASIL AKHIR (RESULT SCREEN)                         */}
      {/* ============================================================== */}
      {gameState === 'result' && (
        <div className="flag-quiz-card app-card" style={{ textAlign: 'center' }}>
          
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
            {score === 5 ? '🏆' : score >= 3 ? '🎖️' : '🎯'}
          </div>

          <div className="page-eyebrow" style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
            KUIS TELAH SELESAI
          </div>

          <h1 className="page-title" style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>
            Hasil Akhir Flag Quiz
          </h1>

          <div className="flag-result-score-circle">
            <span className="flag-result-score-num">{score}</span>
            <span className="flag-result-score-total">/ {TOTAL_ROUNDS}</span>
          </div>

          {/* Pesan Evaluasi Mandiri */}
          <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-headline)', marginBottom: '0.5rem' }}>
            {score === 5 && 'Luar Biasa! Sempurna! Pengetahuan geografimu istimewa.'}
            {score >= 3 && score < 5 && 'Bagus Sekali! Kamu menguasai sebagian besar bendera dunia.'}
            {score < 3 && 'Usaha yang Bagus! Ayo main lagi untuk mengasah wawasan bendera duniamu.'}
          </p>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '28rem', margin: '0 auto 2rem' }}>
            Akurasi kuis: <strong>{Math.round((score / TOTAL_ROUNDS) * 100)}%</strong>. Hasil ini dicatat langsung oleh state internal komponen React tanpa modul manipulasi.
          </p>

          {/* Tombol Aksi Hasil */}
          <div className="flag-guide-actions" style={{ justifyContent: 'center' }}>
            <button onClick={handleStartGame} className="btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
              Main Lagi ↺
            </button>
            <button onClick={() => setGameState('guide')} className="btn-secondary">
              📖 Baca Panduan
            </button>
            <Link to="/minigame" className="btn-secondary" style={{ textDecoration: 'none' }}>
              Menu Minigame ➔
            </Link>
          </div>

        </div>
      )}

    </div>
  );
}
