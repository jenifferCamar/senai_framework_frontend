import React from 'react';

export default function PauseScreen({ onResume }) {
  return (
    <section className="screen pause-screen" aria-label="Jogo pausado" aria-modal="true" role="dialog">
      <div className="screen-card pause-card">
        <p className="eyebrow">Pausa</p>
        <h2>Respira um pouco</h2>
        <p className="pause-text">Sua torre está segura. Volte quando estiver pronto para o próximo encaixe.</p>
        <button className="btn-primary" onClick={onResume} autoFocus>
          Continuar
          <span className="btn-sub">P, Esc ou Espaço</span>
        </button>
      </div>
    </section>
  );
}