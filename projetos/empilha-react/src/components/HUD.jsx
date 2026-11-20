import React from 'react';

export default function HUD({ score, bestScore, level, combo }) {
  return (
    <header className="hud" aria-label="Placar">
      <div className="hud-card score-card">
        <span className="hud-label">Pontos</span>
        <strong className="hud-value">{String(score).padStart(4, '0')}</strong>
      </div>
      <div className="hud-side">
        <div className="hud-card">
          <span className="hud-label">Recorde</span>
          <strong className="hud-value sm">{String(bestScore).padStart(4, '0')}</strong>
        </div>
        <div className="hud-card">
          <span className="hud-label">Nível</span>
          <strong className="hud-value sm">{String(level).padStart(2, '0')}</strong>
        </div>
        {combo > 0 && (
          <div className="hud-card combo-card" aria-live="polite">
            <span className="hud-label">Combo</span>
            <strong className="hud-value sm">x{combo}</strong>
          </div>
        )}
      </div>
    </header>
  );
}
