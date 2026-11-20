import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import PauseScreen from './components/PauseScreen';
import GameOverScreen from './components/GameOverScreen';
import GameBoard from './components/GameBoard';
import HUD from './components/HUD';
import Particle from './components/Particle';
import { useGameEngine } from './hooks/useGameEngine';

export default function App() {
  const [difficulty, setDifficulty] = useState('medium');
  const [screen, setScreen] = useState('start');
  const {
    stack, activeBlock, score, bestScore, level, combo, feedback, status, setStatus,
    towerHeight, screenShake, dropBlock, startGame, restartGame,
  } = useGameEngine(difficulty);

  const playing = screen === 'game';
  const burst = playing && feedback && feedback.type === 'perfect';

  return (
    <div className={`app ${screenShake > 0 ? 'app-shake' : ''}`}>
      <div className="scene-bg" aria-hidden="true">
        <span className="bg-orb orb-a" />
        <span className="bg-orb orb-b" />
        <span className="bg-orb orb-c" />
        <span className="bg-grid" />
        <span className="sticker s1">✦</span>
        <span className="sticker s2">★</span>
        <span className="sticker s3">✦</span>
      </div>

      {screen === 'start' && (
        <StartScreen
          bestScore={bestScore}
          difficulty={difficulty}
          onDifficultyChange={setDifficulty}
          onStart={() => { setScreen('game'); startGame(); }}
        />
      )}

      {playing && (
        <main className="game-shell" aria-label="Jogo Empilha">
          <HUD score={score} bestScore={bestScore} level={level} combo={combo} />
          <div className="board-wrap">
            <GameBoard
              stack={stack}
              activeBlock={activeBlock}
              onDrop={dropBlock}
              status={status}
              feedback={feedback}
              towerHeight={towerHeight}
            />
            {burst && (
              <Particle
                x={activeBlock ? activeBlock.left + activeBlock.width / 2 : 50}
                y={Math.max(16, 76 - towerHeight * 4)}
                count={14 + Math.min(combo * 2, 12)}
                color={activeBlock?.color}
                burstKey={feedback.id}
              />
            )}
          </div>
          <p className="game-tip"><kbd>Espaço</kbd> / clique solta o bloco · <kbd>P</kbd> pausa</p>
        </main>
      )}

      {status === 'paused' && <PauseScreen onResume={() => setStatus('playing')} />}
      {status === 'lost' && playing && (
        <GameOverScreen
          score={score}
          bestScore={bestScore}
          towerHeight={towerHeight}
          isNewRecord={score >= bestScore && score > 0}
          onRestart={() => { setScreen('game'); restartGame(); }}
          onMenu={() => setScreen('start')}
        />
      )}
    </div>
  );
}
