import React from 'react';
import { DIFFICULTIES } from '../utils/constants';

export default function StartScreen({ onStart, onDifficultyChange, difficulty, bestScore }) {
  return (
    <section className="screen start-screen">
      <div className="card start-card">
        <span className="pill">Jogo de precisão</span>
        <h1 className="hero-title">Empilha<span>!</span></h1>
        <p className="hero-sub">Alinhe os blocos, encaixe com calma e construa a torre mais alta que conseguir.</p>

        <div className="panel" role="group" aria-label="Selecionar dificuldade">
          <div className="panel-head">
            <span className="panel-title">Dificuldade</span>
            <span className="panel-note">Escolha seu ritmo</span>
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
          Jogar agora
          <span>Espaço ou clique para soltar</span>
        </button>

        <div className="meta-row">
          <div className="meta-box">
            <span>Seu recorde</span>
            <strong>{String(bestScore).padStart(4, '0')}</strong>
          </div>
          <div className="meta-box">
            <span>Controles</span>
            <strong>Espaço · Clique · P</strong>
          </div>
        </div>

        <div className="tips-row" aria-label="Dicas">
          <div className="tip-chip">✨ Perfeito = combo e bônus</div>
          <div className="tip-chip">📈 A velocidade sobe a cada nível</div>
        </div>
      </div>
    </section>
  );
}
