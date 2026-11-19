import React, { useEffect, useRef, useState } from 'react';

const COLORS = ['#ff4d6d', '#ffb703', '#219ebc', '#8ecae6', '#ff9aa2'];

export default function Particle({ x, y, count = 12, color }) {
  const [particles, setParticles] = useState([]);
  const rafRef = useRef();

  useEffect(() => {
    const created = Array.from({ length: count }, () => ({
      id: Math.random(),
      x,
      y,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6 - 1,
      life: 1,
      color: color || COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 4 + 2,
    }));
    setParticles(created);

    let elapsed = 0;
    const tick = () => {
      elapsed += 16;
      if (elapsed > 600) { setParticles([]); return; }
      setParticles((prev) => prev.map((p) => ({
        ...p,
        x: p.x + p.vx,
        y: p.y + p.vy,
        vy: p.vy + 0.15,
        life: Math.max(0, p.life - 0.016),
      })));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [x, y, count, color]);

  if (particles.length === 0) return null;

  return (
    <div className="particles" style={{ left: x, top: y }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            opacity: p.life,
            boxShadow: `0 0 8px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
