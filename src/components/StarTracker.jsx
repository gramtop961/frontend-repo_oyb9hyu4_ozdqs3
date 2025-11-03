import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Simple interactive star map rendered on canvas
const StarTracker = () => {
  const canvasRef = useRef(null);
  const [objects, setObjects] = useState([]);
  const [hover, setHover] = useState(null);
  const [selected, setSelected] = useState(null);

  // Generate demo celestial objects
  const generateObjects = (w, h) => {
    const names = [
      { name: 'Sirius', type: 'Star', distance: '8.6 ly' },
      { name: 'Betelgeuse', type: 'Star', distance: '642 ly' },
      { name: 'Polaris', type: 'Star', distance: '433 ly' },
      { name: 'Mars', type: 'Planet', distance: '0.5–2.5 AU' },
      { name: 'Jupiter', type: 'Planet', distance: '4.2–6.2 AU' },
      { name: 'Andromeda', type: 'Galaxy', distance: '2.5 Mly' },
    ];
    const objs = names.map((n, i) => ({
      ...n,
      x: Math.random() * (w - 80) + 40,
      y: Math.random() * (h - 80) + 40,
      r: n.type === 'Galaxy' ? 5 : n.type === 'Planet' ? 4 : 3,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      hue: n.type === 'Galaxy' ? 280 : n.type === 'Planet' ? 40 : 200,
    }));
    // Add background starfield
    for (let i = 0; i < 250; i++) {
      objs.push({
        name: null,
        type: 'bg',
        distance: '',
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.2,
        vx: 0,
        vy: 0,
        hue: 220 + Math.random() * 60,
      });
    }
    return objs;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      setObjects(generateObjects(canvas.width, canvas.height));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let animId;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Subtle space gradient background
      const grad = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.5,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        Math.max(canvas.width, canvas.height) * 0.7
      );
      grad.addColorStop(0, 'rgba(20,20,40,0.6)');
      grad.addColorStop(1, 'rgba(0,0,0,0.8)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Twinkling + subtle drift
      const next = objects.map(o => {
        const twinkle = o.type !== 'bg' ? (Math.sin(Date.now() * 0.002 + o.x) + 1) * 0.25 : 0;
        const nx = o.x + o.vx;
        const ny = o.y + o.vy;
        return { ...o, x: (nx + canvas.width) % canvas.width, y: (ny + canvas.height) % canvas.height, twinkle };
      });

      next.forEach(o => {
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r + (o.twinkle || 0), 0, Math.PI * 2);
        if (o.type === 'bg') {
          ctx.fillStyle = `rgba(255,255,255,${0.4 + Math.random() * 0.4})`;
        } else {
          ctx.fillStyle = `hsl(${o.hue} 90% 70% / 0.9)`;
          const glow = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r * 4);
          glow.addColorStop(0, `hsl(${o.hue} 100% 80% / 0.9)`);
          glow.addColorStop(1, 'transparent');
          ctx.fill(glow);
        }
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [objects.length]);

  // Mouse interactions
  useEffect(() => {
    const canvas = canvasRef.current;

    const getHit = (x, y) => {
      for (let i = 0; i < objects.length; i++) {
        const o = objects[i];
        if (!o.name) continue;
        const dx = x - o.x;
        const dy = y - o.y;
        if (Math.hypot(dx, dy) <= o.r + 6) return o;
      }
      return null;
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setHover(getHit(x, y));
      canvas.style.cursor = getHit(x, y) ? 'pointer' : 'default';
    };

    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const hit = getHit(x, y);
      if (hit) setSelected(hit);
    };

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('click', onClick);
    return () => {
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('click', onClick);
    };
  }, [objects]);

  return (
    <section id="tracker" className="relative bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Live Star Tracker</h2>
            <p className="text-white/80 mt-2">Click on stars and planets to reveal details.</p>
          </div>
          <div className="text-sm text-white/60">Real-time interactive canvas with twinkling stars</div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pb-12">
        <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <canvas ref={canvasRef} className="w-full h-full block" />

          {hover && (
            <div className="absolute left-4 top-4 bg-black/70 backdrop-blur px-3 py-2 rounded-md border border-white/10 text-white text-sm">
              <div className="font-semibold">{hover.name}</div>
              <div className="text-white/80">{hover.type} • {hover.distance}</div>
            </div>
          )}

          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur px-4 py-3 rounded-lg border border-white/10 text-white"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-lg">{selected.name}</div>
                  <div className="text-white/80">{selected.type} • {selected.distance}</div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20"
                >
                  Close
                </button>
              </div>
              <div className="mt-3 text-sm text-white/80">
                Explore its full description below in the knowledge sections.
                <div className="mt-2 flex gap-2 text-xs">
                  {selected.type === 'Planet' && (
                    <a href="#learn-planets" className="underline hover:text-white">Go to Planets</a>
                  )}
                  {selected.type === 'Star' && (
                    <a href="#learn-stars" className="underline hover:text-white">Go to Stars</a>
                  )}
                  {selected.type === 'Galaxy' && (
                    <a href="#learn-galaxies" className="underline hover:text-white">Go to Galaxies</a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StarTracker;
