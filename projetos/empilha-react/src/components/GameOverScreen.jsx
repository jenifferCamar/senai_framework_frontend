import React from 'react';

export default function GameOverScreen({ score, bestScore, towerHeight, isNewRecord, onRestart }) {
  return (
    <section className="screen gameover-screen" aria-label="Fim de jogo" aria-modal="true" role="dialog">
      <div className="screen-content">
        <h2 className={isNewRecord ? 'new-record' : ''}>
          {isNewRecord ? '🎉 Novo Recorde!' : 'Fim de rodada'}
        </h2>
        <div className="final-stats">
          <div className="stat">
            <span>Blocos</span>
            <strong>{towerHeight}</strong>
          </div>
          <div className="stat">
            <span>Pontos</span>
            <strong>{String(score).padStart(4, '0')}</strong>
          </div>
          <div className="stat">
            <span>Recorde</span>
            <strong>{String(bestScore).padStart(4, '0')}</strong>
          </div>
        </div>
        <button className="btn-restart" onClick={onRestart} autoFocus>
          Jogar novamente
        </button>
      </div>
    </section>
  );
}
