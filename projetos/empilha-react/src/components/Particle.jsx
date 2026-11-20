import React, { useEffect, useRef, useState } from 'react';

const PALETTE = ['#ff6b6b', '#ffd166', '#06d6a0', '#4cc9f0', '#b197fc', '#ff9f43'];

export default function Particle({ x, y, count = 12, color, burstKey }) {
  const [particles, setParticles] = useState([]);
  const rafRef = useRef();

  useEffect(() => {
    const items = Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.6;
      const speed = 2 + Math.random() * 4.5;
      return {
        id: i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        life: 1,
        color: color || PALETTE[i % PALETTE.length],
        size: 3 + Math.random() * 5,
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
        vy: p.vy + 0.14,
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
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.life,
            boxShadow: `0 0 10px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
