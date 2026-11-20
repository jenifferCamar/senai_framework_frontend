import React from 'react';

export default function GameBoard({ stack, activeBlock, onDrop, status, feedback, towerHeight }) {
  const cameraOffset = Math.max(0, (stack.length - 10) * 34);

  return (
    <div
      className={`game-board ${status}`}
      aria-label="Área do jogo. Clique, toque ou pressione espaço para soltar o bloco."
      role="button"
      tabIndex={0}
      onClick={onDrop}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onDrop();
        }
      }}
    >
      <div className="board-topline">
        <span className="board-badge">Torre ativa</span>
        <span className="board-badge ghost">{String(towerHeight).padStart(2, '0')} blocos</span>
      </div>

      <div className="board-stars" aria-hidden="true">
        <span className="star" style={{ left: '12%', top: '18%' }}>✦</span>
        <span className="star" style={{ left: '78%', top: '10%' }}>✦</span>
        <span className="star" style={{ left: '86%', top: '42%' }}>✧</span>
        <span className="star" style={{ left: '18%', top: '52%' }}>✧</span>
      </div>

      {stack.map((block) => (
        <div
          className={`block placed-block${block.isLatest ? ' latest-block' : ''}`}
          key={block.id}
          style={{
            width: `${block.width}%`,
            left: `${block.left}%`,
            bottom: `${block.bottom - cameraOffset}px`,
            background: block.color,
          }}
        />
      ))}

      {activeBlock && status !== 'lost' && (
        <div
          className="block active-block"
          style={{
            width: `${activeBlock.width}%`,
            left: `${activeBlock.left}%`,
            bottom: `${activeBlock.bottom - cameraOffset}px`,
            background: activeBlock.color,
          }}
        />
      )}

      <div className="board-floor" aria-hidden="true" />

      {feedback && (
        <div className={`drop-feedback ${feedback.type}`} key={feedback.id} aria-live="polite">
          <strong>{feedback.message}</strong>
          {feedback.points > 0 && <span>+{feedback.points}</span>}
        </div>
      )}

      {status === 'ready' && (
        <div className="board-overlay">
          <span>Pronto para empilhar?</span>
          <strong>Solte o primeiro bloco</strong>
          <small>Clique, toque ou pressione espaço para alinhar a base.</small>
        </div>
      )}

      {status === 'lost' && (
        <div className="board-overlay lost-overlay">
          <span>Fim da torre</span>
          <strong>Quase lá!</strong>
          <small>Veja seus pontos e tente uma nova sequência.</small>
        </div>
      )}

      <span className="board-hint">Espaço · Clique · Toque</span>
    </div>
  );
}