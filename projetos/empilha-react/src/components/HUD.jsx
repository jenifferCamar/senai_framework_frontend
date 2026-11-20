import React from 'react';

export default function HUD({ score, bestScore, level, combo }) {
  return (
    <header className="hud" aria-label="Placar do jogo">
      <div className="hud-pill hud-main">
        <span className="hud-label">Pontos</span>
        <strong className="hud-value">{String(score).padStart(4, '0')}</strong>
      </div>
      <div className="hud-group">
        <div className="hud-pill">
          <span className="hud-label">Recorde</span>
          <strong className="hud-value small">{String(bestScore).padStart(4, '0')}</strong>
        </div>
        <div className="hud-pill">
          <span className="hud-label">Nível</span>
          <strong className="hud-value small">{String(level).padStart(2, '0')}</strong>
        </div>
        {combo > 0 && (
          <div className="hud-pill hud-combo" aria-live="polite">
            <span className="hud-label">Combo</span>
            <strong className="hud-value small">x{combo}</strong>
          </div>
        )}
      </div>
    </header>
  );
}