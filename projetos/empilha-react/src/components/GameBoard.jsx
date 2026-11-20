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
      <div className="board-top">
        <span className="board-badge">Torre</span>
        <span className="board-badge alt">{String(towerHeight).padStart(2, '0')} blocos</span>
      </div>

      <div className="board-decor" aria-hidden="true">
        <span className="spark" style={{ left: '14%', top: '16%' }} />
        <span className="spark" style={{ left: '82%', top: '12%' }} />
        <span className="spark" style={{ left: '76%', top: '44%' }} />
        <span className="spark" style={{ left: '18%', top: '54%' }} />
      </div>

      {stack.map((block) => (
        <div
          key={block.id}
          className={`block placed-block${block.isLatest ? ' latest' : ''}`}
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
        <div className={`feedback ${feedback.type}`} key={feedback.id} aria-live="polite">
          <strong>{feedback.message}</strong>
          {feedback.points > 0 && <span>+{feedback.points}</span>}
        </div>
      )}

      {status === 'ready' && (
        <div className="board-overlay">
          <span>Vamos começar</span>
          <strong>Solte o primeiro bloco</strong>
          <small>Clique, toque ou use espaço para alinhar.</small>
        </div>
      )}

      {status === 'lost' && (
        <div className="board-overlay lost">
          <span>Fim da torre</span>
          <strong>Boa tentativa!</strong>
          <small>Confira seus pontos e jogue de novo.</small>
        </div>
      )}

      <span className="board-hint">Espaço · Clique · Toque</span>
    </div>
  );
}
