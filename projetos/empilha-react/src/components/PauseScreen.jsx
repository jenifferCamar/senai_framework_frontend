import React from 'react';

export default function PauseScreen({ onResume }) {
  return (
    <section className="screen overlay-screen" aria-label="Jogo pausado" aria-modal="true" role="dialog">
      <div className="card overlay-card">
        <span className="pill soft">Pausa</span>
        <h2>Jogo pausado</h2>
        <p className="overlay-text">A torre está te esperando. Continue quando quiser retomar o ritmo.</p>
        <button className="btn btn-primary" onClick={onResume} autoFocus>
          Continuar
          <span>P, Esc ou Espaço</span>
        </button>
      </div>
    </section>
  );
}
