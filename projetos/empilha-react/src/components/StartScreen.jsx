import React from 'react';

export default function StartScreen({ onStart, onDifficultyChange, difficulty, bestScore }) {
  return (
    <section className="screen start-screen" aria-hidden="true">
      <div className="screen-content">
        <h1>EMPILHA<span>!</span></h1>
        <p className="tagline">Construa a torre mais alta que conseguir.</p>

        <div className="difficulty-select">
          <span className="diff-label">Dificuldade</span>
          <div className="diff-options">
            {['easy', 'medium', 'hard'].map((key) => (
              <button
                key={key}
                className={`diff-btn ${difficulty === key ? 'active' : ''}`}
                onClick={() => onDifficultyChange(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <button className="btn-start" onClick={onStart} autoFocus>
          Começar partida
          <span className="btn-hint">ESPAÇO · CLIQUE</span>
        </button>

        <div className="controls-hint">
          <div className="hint-row"><kbd>Espaço</kbd> / <kbd>Clique</kbd> — soltar bloco</div>
          <div className="hint-row"><kbd>P</kbd> / <kbd>Esc</kbd> — pausar</div>
        </div>

        <div className="best-score">
          Recorde: <strong>{String(bestScore).padStart(4, '0')}</strong>
        </div>
      </div>
    </section>
  );
}
