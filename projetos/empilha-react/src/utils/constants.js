export const BOARD_BLOCK_HEIGHT = 34;

export const COLORS = [
  '#ff4fd8', '#7c5cff', '#00e5ff', '#39ff88',
  '#ffe14d', '#ff7a59', '#ff5c8a', '#4de1ff',
  '#b8ff3d', '#ff9f1c', '#c77dff', '#00f5d4',
];

export const BASE_BLOCK = {
  id: 'base',
  width: 74,
  left: 13,
  bottom: 0,
  color: '#ffffff',
};

export const DIFFICULTIES = {
  easy: { speed: 0.08, acceleration: 0.008, label: 'De boa', emoji: '😎', hint: 'Pra pegar o ritmo' },
  medium: { speed: 0.13, acceleration: 0.015, label: 'Médio', emoji: '⚡', hint: 'Desafio na medida' },
  hard: { speed: 0.19, acceleration: 0.025, label: 'Insano', emoji: '🔥', hint: 'Só pros brabos' },
};

export const PERFECT_THRESHOLD = 0.92;
export const SCORE_PER_BLOCK = 10;
export const PERFECT_BONUS = 25;
