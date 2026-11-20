import React from 'react';

export default function GameOverScreen({ score, bestScore, towerHeight, isNewRecord, onRestart, onMenu }) {
  return (
    <section className="screen overlay-screen" aria-label="Fim de jogo" aria-modal="true" role="dialog">
      <div className="card overlay-card">
        <span className={`pill ${isNewRecord ? 'gold' : 'soft'}`}>{isNewRecord ? 'Novo recorde' : 'Fim de rodada'}</span>
        <h2 className={isNewRecord ? 'celebrate' : ''}>{isNewRecord ? 'Que torre incrível!' : 'Quase lá!'}</h2>
        <p className="overlay-text">
          {isNewRecord
            ? 'Você superou sua melhor marca. Continue assim e vá ainda mais alto!'
            : 'Cada tentativa melhora seu tempo. Ajuste o drop e tente de novo.'}
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
            Jogar novamente
            <span>Começar nova rodada</span>
          </button>
          {onMenu && (
            <button className="btn btn-ghost" type="button" onClick={onMenu}>
              Voltar ao início
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
