import React, { useEffect, useRef, useState } from 'react';

const PALETTE = ['#ff4fd8', '#00e5ff', '#39ff88', '#ffe14d', '#7c5cff', '#ff7a59'];

export default function Particle({ x, y, count = 12, color, burstKey }) {
  const [particles, setParticles] = useState([]);
  const rafRef = useRef();

  useEffect(() => {
    const items = Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.6;
      const speed = 2.2 + Math.random() * 4.8;
      return {
        id: i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.2,
        life: 1,
        color: color || PALETTE[i % PALETTE.length],
        size: 3 + Math.random() * 6,
        round: Math.random() > 0.45,
      };
    });
    setParticles(items);

    let start = 0;
    const tick = (t) => {
      if (!start) start = t;
      const e = t - start;
      if (e > 650) { setParticles([]); return; }
      setParticles((prev) => prev.map((p) => ({
        ...p,
        x: p.x + p.vx,
        y: p.y + p.vy,
        vy: p.vy + 0.15,
        vx: p.vx * 0.985,
        life: Math.max(0, 1 - e / 650),
      })));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [x, y, count, color, burstKey]);

  if (!particles.length) return null;

  return (
    <div className="particles" style={{ left: `${x}%`, top: `${y}%` }} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            transform: `translate(${p.x}px, ${p.y}px)`,
            width: p.round ? p.size : p.size * 1.4,
            height: p.round ? p.size : p.size * 0.7,
            borderRadius: p.round ? '999px' : '4px',
            background: p.color,
            opacity: p.life,
            boxShadow: `0 0 12px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
