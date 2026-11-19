import React from 'react';

export default function PauseScreen({ onResume }) {
  return (
    <section className="screen pause-screen" aria-label="Pausado" aria-modal="true" role="dialog">
      <div className="screen-content">
        <h2>⏸ Pausado</h2>
        <button className="btn-resume" onClick={onResume} autoFocus>
          Retomar partida
          <span className="btn-hint">P · Espaço</span>
        </button>
      </div>
    </section>
  );
}
