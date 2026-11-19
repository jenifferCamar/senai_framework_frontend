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
    towerHeight, currentSpeed, screenShake, dropBlock, startGame, restartGame, triggerShake,
  } = useGameEngine(difficulty);

  const isNewRecord = score > 0 && score > bestScore - (score - (feedback?.points || 0)) && status === 'lost';

  return (
    <div className="app">
      {screen === 'start' && (
        <StartScreen
          bestScore={bestScore}
          difficulty={difficulty}
          onDifficultyChange={setDifficulty}
          onStart={() => { setScreen('game'); startGame(); }}
        />
      )}

      {screen === 'game' && (
        <>
          <HUD score={score} bestScore={bestScore} level={level} combo={combo} />
          <GameBoard
            stack={stack}
            activeBlock={activeBlock}
            onDrop={dropBlock}
            status={status}
            feedback={feedback}
            towerHeight={towerHeight}
            screenShake={screenShake}
          />
          {feedback && (
            <Particle
              x={48 + (activeBlock?.left || 0) * 3.04}
              y={260 - (activeBlock?.bottom || 0) - (towerHeight * 34)}
              count={status === 'lost' ? 0 : 14}
              color={feedback.type === 'perfect' ? '#219ebc' : '#ffb703'}
            />
          )}
        </>
      )}

      {status === 'paused' && <PauseScreen onResume={() => setStatus('playing')} />}
      {status === 'lost' && screen === 'game' && (
        <GameOverScreen
          score={score}
          bestScore={bestScore}
          towerHeight={towerHeight}
          isNewRecord={score > bestScore - (feedback?.points || 0) && feedback?.type !== 'miss'}
          onRestart={() => { setScreen('game'); restartGame(); }}
        />
      )}
    </div>
  );
}
