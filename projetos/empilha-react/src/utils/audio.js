const ctx = typeof window !== 'undefined' ? new (window.AudioContext || window.webkitAudioContext)() : null;

function playTone(freq, type, duration = 0.1, vol = 0.1) {
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  gain.gain.setValueAtTime(vol, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

export const sounds = {
  drop: () => playTone(440, 'sine', 0.08, 0.12),
  perfect: () => {
    playTone(660, 'sine', 0.1, 0.15);
    playTone(880, 'sine', 0.1, 0.12);
  },
  combo: () => {
    playTone(880, 'square', 0.12, 0.15);
    playTone(1320, 'sine', 0.1, 0.12);
  },
  miss: () => playTone(150, 'sawtooth', 0.3, 0.1),
  gameOver: () => {
    playTone(220, 'sawtooth', 0.15, 0.12);
    playTone(165, 'sawtooth', 0.15, 0.12);
  },
  levelUp: () => {
    playTone(523, 'sine', 0.1, 0.15);
    playTone(659, 'sine', 0.1, 0.15);
    playTone(784, 'sine', 0.15, 0.15);
  },
  click: () => playTone(700, 'sine', 0.05, 0.08),
};
