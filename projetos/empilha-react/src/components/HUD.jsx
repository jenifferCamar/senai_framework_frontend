import React from 'react';

export default function HUD({ score, bestScore, level, combo }) {
  return (
    <div className="hud" aria-label="Placar">
      <div className="hud-item hud-main">
        <span>Pontos</span>
        <strong>{String(score).padStart(4, '0')}</strong>
      </div>
      <div className="hud-item">
        <span>Recorde</span>
        <strong>{String(bestScore).padStart(4, '0')}</strong>
      </div>
      <div className="hud-item">
        <span>Nível</span>
        <strong>{String(level).padStart(2, '0')}</strong>
      </div>
      {combo > 0 && (
        <div className="hud-item hud-combo">
          <span>Combo</span>
          <strong>x{combo}</strong>
        </div>
      )}
    </div>
  );
}
