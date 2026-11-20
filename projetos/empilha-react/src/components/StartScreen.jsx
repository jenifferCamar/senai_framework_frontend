import React from 'react';
import { DIFFICULTIES } from '../utils/constants';

export default function StartScreen({ onStart, onDifficultyChange, difficulty, bestScore }) {
  return (
    <section className="screen start-screen">
      <div className="screen-card start-card">
        <p className="eyebrow">Arcade de precisão</p>
        <h1 className="logo">EMPILHA<span>!</span></h1>
        <p className="tagline">Solte os blocos no ritmo certo, encaixe com perfeição e construa a torre mais alta.</p>

        <div className="difficulty-panel" role="group" aria-label="Selecionar dificuldade">
          <span className="panel-label">Dificuldade</span>
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
                <strong>{cfg.label}</strong>
                <small>{cfg.hint}</small>
              </button>
            ))}
          </div>
        </div>

        <button className="btn-primary" onClick={onStart} autoFocus>
          Começar partida
          <span className="btn-sub">Espaço ou clique para jogar</span>
        </button>

        <div className="start-meta">
          <div className="meta-pill"><span>Recorde</span><strong>{String(bestScore).padStart(4, '0')}</strong></div>
          <div className="meta-pill"><span>Controles</span><strong>Espaço · Clique · P</strong></div>
        </div>

        <ul className="tips" aria-label="Dicas">
          <li>🎯 Encaixes perfeitos geram combo e mais pontos</li>
          <li>🧱 A torre sobe e a velocidade aumenta com o nível</li>
        </ul>
      </div>
    </section>
  );
}