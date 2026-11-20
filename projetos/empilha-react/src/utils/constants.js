export const BOARD_BLOCK_HEIGHT = 34;

export const COLORS = [
  '#ff6b6b', '#ff9f43', '#ffd166', '#06d6a0',
  '#4cc9f0', '#5c7cfa', '#b197fc', '#f783ac',
  '#ff8787', '#38d9a9', '#74c0fc', '#faa2c1',
];

export const BASE_BLOCK = {
  id: 'base',
  width: 74,
  left: 13,
  bottom: 0,
  color: '#ffffff',
};

export const DIFFICULTIES = {
  easy: { speed: 0.08, acceleration: 0.008, label: 'Fácil', emoji: '🌤️', hint: 'Calmo e divertido' },
  medium: { speed: 0.13, acceleration: 0.015, label: 'Médio', emoji: '🎯', hint: 'Bom desafio' },
  hard: { speed: 0.19, acceleration: 0.025, label: 'Difícil', emoji: '🔥', hint: 'Para experts' },
};

export const PERFECT_THRESHOLD = 0.92;
export const SCORE_PER_BLOCK = 10;
export const PERFECT_BONUS = 25;
