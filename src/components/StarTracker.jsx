import React, { useEffect, useRef } from 'react';

// A minimal twinkling star field with gentle parallax
export default function StarTracker() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const starsRef = useRef([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth, clientHeight } = canvas.parentElement;
      canvas.width = Math.floor(clientWidth * dpr);
      canvas.height = Math.floor(clientHeight * dpr);
      canvas.style.width = clientWidth + 'px';
      canvas.style.height = clientHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
    }

    function initStars() {
      const count = Math.floor((canvas.width * canvas.height) / (1000 * 1000)) * 120 + 120; // scale with area
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
        y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
        r: Math.random() * 1.4 + 0.3,
        tw: Math.random() * Math.PI * 2,
        sp: Math.random() * 0.02 + 0.005,
      }));
    }

    function draw() {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // background glow
      const grd = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) / 1.5);
      grd.addColorStop(0, 'rgba(30, 41, 59, 0.6)');
      grd.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'white';
      starsRef.current.forEach((s) => {
        s.tw += s.sp;
        const alpha = 0.6 + Math.sin(s.tw) * 0.4;
        const px = s.x + (mouse.current.x - width / 2) * 0.0008 * (2 - s.r);
        const py = s.y + (mouse.current.y - height / 2) * 0.0008 * (2 - s.r);
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(draw);
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) * (window.devicePixelRatio || 1);
      mouse.current.y = (e.clientY - rect.top) * (window.devicePixelRatio || 1);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    window.addEventListener('mousemove', onMove);
    resize();
    draw();

    return () => {
      window.removeEventListener('mousemove', onMove);
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-xl border border-slate-800/50 bg-black">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
