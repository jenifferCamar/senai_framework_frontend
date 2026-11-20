import React from 'react';
import { DIFFICULTIES } from '../utils/constants';

export default function StartScreen({ onStart, onDifficultyChange, difficulty, bestScore }) {
  return (
    <section className="screen start-screen">
      <div className="card start-card">
        <div className="tag-row">
          <span className="chip chip-hot">novo vibe</span>
          <span className="chip">arcade</span>
        </div>
        <h1 className="hero-title">EMPILHA<span>!</span></h1>
        <p className="hero-sub">Solta os blocos no tempo certo, faz combo e monta a torre mais braba.</p>

        <div className="panel" role="group" aria-label="Selecionar dificuldade">
          <div className="panel-head">
            <span className="panel-title">Modo</span>
            <span className="panel-note">escolhe seu nível</span>
          </div>
          <div className="diff-grid">
            {Object.entries(DIFFICULTIES).map(([key, cfg]) => (
              <button
                key={key}
                type="button"
                className={`diff-card ${difficulty === key ? 'active' : ''}`}
                onClick={() => onDifficultyChange(key)}
                aria-pressed={difficulty === key}
              >
                <span className="diff-emoji" aria-hidden="true">{cfg.emoji}</span>
                <span className="diff-name">{cfg.label}</span>
                <span className="diff-hint">{cfg.hint}</span>
              </button>
            ))}
          </div>
        </div>

        <button className="btn btn-primary" onClick={onStart} autoFocus>
          Bora jogar
          <span>espaço ou clique pra soltar</span>
        </button>

        <div className="meta-row">
          <div className="meta-box">
            <span>Recorde</span>
            <strong>{String(bestScore).padStart(4, '0')}</strong>
          </div>
          <div className="meta-box">
            <span>Controles</span>
            <strong>Espaço · Clique · P</strong>
          </div>
        </div>

        <div className="tips-row" aria-label="Dicas">
          <div className="tip-chip">💥 Perfeito dá combo e bônus</div>
          <div className="tip-chip">🚀 A velocidade sobe com o nível</div>
        </div>
      </div>
    </section>
  );
}
