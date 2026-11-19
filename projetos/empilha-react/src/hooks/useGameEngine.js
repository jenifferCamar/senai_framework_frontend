import { useCallback, useEffect, useRef, useState } from 'react';
import { BOARD_BLOCK_HEIGHT, BASE_BLOCK, COLORS, DIFFICULTIES, PERFECT_THRESHOLD, SCORE_PER_BLOCK, PERFECT_BONUS } from '../utils/constants';
import { sounds } from '../utils/audio';

function createActiveBlock(width, index, bottom, difficulty) {
  const startLeft = index % 2 === 0 ? 0 : 100 - width;
  const startDir = index % 2 === 0 ? 1 : -1;
  return {
    id: `active-${index}`,
    width,
    left: startLeft,
    bottom,
    direction: startDir,
    color: COLORS[index % COLORS.length],
    speed: DIFFICULTIES[difficulty].speed,
  };
}

export function useGameEngine(difficulty = 'medium') {
  const [stack, setStack] = useState([BASE_BLOCK]);
  const [activeBlock, setActiveBlock] = useState(() => createActiveBlock(74, 0, BOARD_BLOCK_HEIGHT, difficulty));
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    if (typeof window === 'undefined') return 0;
    return Number(window.localStorage.getItem('empilha-recorde')) || 0;
  });
  const [status, setStatus] = useState('ready');
  const [round, setRound] = useState(0);
  const [combo, setCombo] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [screenShake, setScreenShake] = useState(0);

  const activeRef = useRef(activeBlock);
  const stackRef = useRef(stack);
  const difficultyRef = useRef(difficulty);

  useEffect(() => { activeRef.current = activeBlock; }, [activeBlock]);
  useEffect(() => { stackRef.current = stack; }, [stack]);
  useEffect(() => { difficultyRef.current = difficulty; }, [difficulty]);

  const level = Math.floor(score / 50) + 1;
  const towerHeight = stack.length - 1;
  const currentSpeed = activeBlock ? activeBlock.speed : 0;

  useEffect(() => {
    if (status !== 'playing') return undefined;
    const timer = window.setInterval(() => {
      setActiveBlock((current) => {
        let nextLeft = current.left + current.direction * current.speed;
        let nextDir = current.direction;
        if (nextLeft + current.width >= 100) {
          nextLeft = 100 - current.width;
          nextDir = -1;
        }
        if (nextLeft <= 0) {
          nextLeft = 0;
          nextDir = 1;
        }
        return { ...current, left: nextLeft, direction: nextDir };
      });
    }, 16);
    return () => window.clearInterval(timer);
  }, [current.speed, status]);

  const dropBlock = useCallback(() => {
    if (status === 'ready') {
      setStatus('playing');
      sounds.click();
      return;
    }
    if (status !== 'playing') return;

    const current = activeRef.current;
    const previous = stackRef.current[stackRef.current.length - 1];
    const overlapLeft = Math.max(current.left, previous.left);
    const overlapRight = Math.min(current.left + current.width, previous.left + previous.width);
    const overlapWidth = overlapRight - overlapLeft;

    if (overlapWidth <= 1) {
      setCombo(0);
      sounds.miss();
      setScreenShake(6);
      setFeedback({ type: 'miss', message: 'Errou!', points: 0, id: Date.now() });
      setStatus('lost');
      return;
    }

    const precision = overlapWidth / Math.min(current.width, previous.width);
    const isPerfect = precision >= PERFECT_THRESHOLD;
    const nextCombo = isPerfect ? combo + 1 : 0;
    const points = isPerfect ? SCORE_PER_BLOCK + PERFECT_BONUS + combo * 5 : SCORE_PER_BLOCK;
    const nextScore = score + points;
    const nextBlock = {
      id: `placed-${round}`,
      width: overlapWidth,
      left: overlapLeft,
      bottom: stackRef.current.length * BOARD_BLOCK_HEIGHT,
      color: current.color,
      isLatest: true,
    };
    const nextStack = [...stackRef.current, nextBlock];

    setStack(nextStack);
    setScore(nextScore);
    setCombo(nextCombo);

    if (isPerfect) {
      sounds.perfect();
      if (nextCombo > 0) sounds.combo();
      setFeedback({ type: 'perfect', message: nextCombo > 0 ? `Combo x${nextCombo}!` : 'Perfeito!', points, id: Date.now() });
    } else {
      sounds.drop();
      setFeedback({ type: 'good', message: 'Bom encaixe!', points, id: Date.now() });
    }

    setRound((r) => r + 1);

    if (nextScore > bestScore) {
      setBestScore(nextScore);
      window.localStorage.setItem('empilha-recorde', String(nextScore));
    }

    const nextActiveWidth = overlapWidth;
    const nextActive = createActiveBlock(nextActiveWidth, round + 1, nextStack.length * BOARD_BLOCK_HEIGHT, difficulty);
    nextActive.speed = Math.min(current.speed + DIFFICULTIES[difficulty].acceleration, 0.4);
    nextActive.left = round % 2 === 0 ? 0 : 100 - nextActiveWidth;
    nextActive.direction = round % 2 === 0 ? 1 : -1;
    setActiveBlock(nextActive);
    activeRef.current = nextActive;
    stackRef.current = nextStack;
  }, [bestScore, combo, difficulty, round, score, status]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Space' || event.code === 'ArrowDown') {
        event.preventDefault();
        dropBlock();
      }
      if (event.code === 'KeyP' || event.code === 'Escape') {
        if (status === 'playing') setStatus('paused');
        else if (status === 'paused') setStatus('playing');
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dropBlock, status]);

  function restartGame() {
    const nextActive = createActiveBlock(74, 0, BOARD_BLOCK_HEIGHT, difficulty);
    setStack([BASE_BLOCK]);
    setActiveBlock(nextActive);
    setScore(0);
    setRound(0);
    setCombo(0);
    setFeedback(null);
    setStatus('playing');
    activeRef.current = nextActive;
    stackRef.current = [BASE_BLOCK];
  }

  function startGame() {
    setStatus('playing');
    sounds.click();
  }

  function triggerShake() {
    setScreenShake(6);
    setTimeout(() => setScreenShake(0), 300);
  }

  return {
    stack, activeBlock, score, bestScore, level, combo, feedback, status, setStatus,
    towerHeight, currentSpeed, screenShake,
    dropBlock, startGame, restartGame, triggerShake,
  };
}
