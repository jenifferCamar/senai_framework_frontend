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
        <span className="spark" style={{ left: '12%', top: '18%' }} />
        <span className="spark" style={{ left: '82%', top: '14%' }} />
        <span className="spark" style={{ left: '76%', top: '46%' }} />
        <span className="spark" style={{ left: '18%', top: '56%' }} />
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
          <span>Partiu?</span>
          <strong>Solta o primeiro bloco</strong>
          <small>Clique, toque ou espaço pra começar.</small>
        </div>
      )}

      {status === 'lost' && (
        <div className="board-overlay lost">
          <span>Cabou a torre</span>
          <strong>Foi por pouco!</strong>
          <small>Confere a pontuação e manda outra.</small>
        </div>
      )}

      <span className="board-hint">toque · clique · espaço</span>
    </div>
  );
}
