import React from 'react';

export default function GameOverScreen({ score, bestScore, towerHeight, isNewRecord, onRestart, onMenu }) {
  return (
    <section className="screen overlay-screen" aria-label="Fim de jogo" aria-modal="true" role="dialog">
      <div className="card overlay-card">
        <span className={`pill ${isNewRecord ? 'gold' : 'soft'}`}>{isNewRecord ? 'recorde novo' : 'fim de game'}</span>
        <h2 className={isNewRecord ? 'celebrate' : ''}>{isNewRecord ? 'Você amassou!' : 'Foi quase!'}</h2>
        <p className="overlay-text">
          {isNewRecord
            ? 'Mandou muito! Novo recorde na conta — bora subir mais essa torre?'
            : 'Errou o timing, acontece. Ajusta o drop e tenta de novo!'}
        </p>

        <div className="stats-grid">
          <div className="stat-card accent">
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

        <div className="actions">
          <button className="btn btn-primary" onClick={onRestart} autoFocus>
            Jogar de novo
            <span>partida rápida</span>
          </button>
          {onMenu && (
            <button className="btn btn-ghost" type="button" onClick={onMenu}>
              Voltar pro início
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
