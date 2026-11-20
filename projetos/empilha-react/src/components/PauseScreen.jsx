import React from 'react';

export default function PauseScreen({ onResume }) {
  return (
    <section className="screen overlay-screen" aria-label="Jogo pausado" aria-modal="true" role="dialog">
      <div className="card overlay-card">
        <span className="pill soft">pausa</span>
        <h2>Deu uma pausa</h2>
        <p className="overlay-text">A torre tá safe. Volta quando quiser continuar mandando bem.</p>
        <button className="btn btn-primary" onClick={onResume} autoFocus>
          Continuar
          <span>P, Esc ou Espaço</span>
        </button>
      </div>
    </section>
  );
}
