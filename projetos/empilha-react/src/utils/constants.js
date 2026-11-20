export const BOARD_BLOCK_HEIGHT = 34;

export const COLORS = [
  '#ff5fa2', '#ffb347', '#ffe066', '#4dd4ff',
  '#7c6cff', '#5cf2c7', '#ff7ab6', '#ffd166',
  '#6ee7ff', '#b388ff', '#7ae582', '#ff9f68',
];

export const BASE_BLOCK = {
  id: 'base',
  width: 74,
  left: 13,
  bottom: 0,
  color: '#ffffff',
};

export const DIFFICULTIES = {
  easy: { speed: 0.08, acceleration: 0.008, label: 'Fácil', emoji: '🌈', hint: 'Ritmo leve' },
  medium: { speed: 0.13, acceleration: 0.015, label: 'Médio', emoji: '⚡', hint: 'Equilíbrio' },
  hard: { speed: 0.19, acceleration: 0.025, label: 'Difícil', emoji: '🔥', hint: 'Precisão total' },
};

export const PERFECT_THRESHOLD = 0.92;
export const SCORE_PER_BLOCK = 10;
export const PERFECT_BONUS = 25;