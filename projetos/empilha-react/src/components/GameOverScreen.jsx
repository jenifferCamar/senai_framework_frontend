import React from 'react';

export default function GameOverScreen({ score, bestScore, towerHeight, isNewRecord, onRestart, onMenu }) {
  return (
    <section className="screen gameover-screen" aria-label="Fim de jogo" aria-modal="true" role="dialog">
      <div className="screen-card gameover-card">
        <p className="eyebrow">{isNewRecord ? 'Novo marco' : 'Rodada encerrada'}</p>
        <h2 className={isNewRecord ? 'new-record' : ''}>
          {isNewRecord ? '🎉 Novo recorde!' : 'Boa tentativa!'}
        </h2>
        <p className="gameover-subtitle">
          {isNewRecord ? 'Você elevou o nível da torre. Dá para ir ainda mais alto.' : 'Ajuste o tempo do próximo drop e tente superar sua marca.'}
        </p>

        <div className="stats-grid">
          <div className="stat-card highlight">
            <span>Pontos</span>
            <strong>{String(score).padStart(4, '0')}</strong>
          </div>
          <div className="stat-card">
            <span>Recorde</span>
            <strong>{String(bestScore).padStart(4, '0')}</strong>
          </div>
          <div className="stat-card">
            <span>Blocos</span>
            <strong>{String(towerHeight).padStart(2, '0')}</strong>
          </div>
        </div>

        <div className="button-stack">
          <button className="btn-primary" onClick={onRestart} autoFocus>
            Jogar novamente
            <span className="btn-sub">Nova rodada imediata</span>
          </button>
          {onMenu && (
            <button className="btn-ghost" onClick={onMenu} type="button">
              Voltar ao início
            </button>
          )}
        </div>
      </div>
    </section>
  );
}