export const BOARD_BLOCK_HEIGHT = 34;
export const COLORS = [
  '#ff4d6d', '#ffb703', '#fb8500', '#219ebc',
  '#8ecae6', '#ff9aa2', '#ffdac1', '#b5ead7',
  '#c7ceea', '#ff6b6b', '#4ecdc4', '#45b7d1',
];
export const BASE_BLOCK = {
  id: 'base',
  width: 74,
  left: 13,
  bottom: 0,
  color: '#ffffff',
};
export const DIFFICULTIES = {
  easy: { speed: 0.08, acceleration: 0.008, label: 'Fácil' },
  medium: { speed: 0.13, acceleration: 0.015, label: 'Médio' },
  hard: { speed: 0.19, acceleration: 0.025, label: 'Difícil' },
};
export const PERFECT_THRESHOLD = 0.92;
export const SCORE_PER_BLOCK = 10;
export const PERFECT_BONUS = 25;
