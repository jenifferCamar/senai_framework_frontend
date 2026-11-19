import React from 'react';

export default function GameBoard({ stack, activeBlock, onDrop, status, feedback, towerHeight, screenShake }) {
  const cameraOffset = Math.max(0, (stack.length - 10) * 34);

  return (
    <div
      className={`game-board ${screenShake > 0 ? 'shaking' : ''}`}
      style={{ transform: screenShake > 0 ? `translate(${Math.random() * screenShake - screenShake / 2}px, ${Math.random() * screenShake - screenShake / 2}px)` : 'none' }}
      aria-label="Área do jogo. Clique para soltar o bloco."
      role="button"
      tabIndex="0"
      onClick={onDrop}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onDrop();
        }
      }}
    >
      <div className="board-topline">
        <span className="board-label">torre em construção</span>
        <span className="board-height">{String(towerHeight).padStart(2, '0')} blocos</span>
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

      {activeBlock && (
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
      <span className="board-hint">clique ou pressione espaço</span>
      {status === 'ready' && (
        <div className="board-overlay">
          <span>Pronto?</span>
          <strong>Monte sua torre</strong>
          <small>Comece pela base e mantenha o ritmo.</small>
        </div>
      )}
      {status === 'lost' && (
        <div className="board-overlay lost-overlay">
          <span>Fim de rodada</span>
          <strong>A torre pediu pausa</strong>
          <small>Recomece e tente superar seu recorde.</small>
        </div>
      )}
    </div>
  );
}
