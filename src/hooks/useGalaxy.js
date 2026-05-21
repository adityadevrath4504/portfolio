import { useEffect } from 'react';

export function useGalaxy(canvasRef) {
  useEffect(() => {
    const galaxyCanvas = canvasRef.current;
    if (!galaxyCanvas) return undefined;

    const ctx = galaxyCanvas.getContext('2d');
    let gw = 0;
    let gh = 0;
    let dpr = 1;
    let galaxyStars = [];
    let galaxyDust = [];
    let galaxyClusters = [];
    let mx = 0;
    let my = 0;
    let lastFrame = 0;
    let frame = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const trackMouse = (event) => {
      mx = event.clientX;
      my = event.clientY;
    };

    function resizeGalaxy() {
      const rect = galaxyCanvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.2);
      gw = Math.max(1, rect.width);
      gh = Math.max(1, rect.height);
      galaxyCanvas.width = Math.floor(gw * dpr);
      galaxyCanvas.height = Math.floor(gh * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isSmall = window.matchMedia('(max-width: 700px)').matches;
      const starCount = isSmall ? 72 : 150;
      const dustCount = isSmall ? 24 : 54;
      galaxyStars = Array.from({ length: starCount }, () => ({
        x: Math.random() * gw,
        y: Math.random() * gh,
        r: Math.random() * 1.15 + 0.18,
        a: Math.random() * 0.72 + 0.18,
        s: Math.random() * 0.18 + 0.04,
        tw: Math.random() * Math.PI * 2,
      }));
      galaxyDust = Array.from({ length: dustCount }, () => {
        const t = Math.random();
        const bandY = gh * (0.28 + 0.38 * t);
        return {
          x: Math.random() * gw,
          y: bandY + (Math.random() - 0.5) * gh * 0.34,
          r: Math.random() * 1.8 + 0.45,
          a: Math.random() * 0.24 + 0.05,
          hue: Math.random() > 0.55 ? '150,185,255' : '255,178,120',
          s: Math.random() * 0.11 + 0.03,
        };
      });
      galaxyClusters = [
        { x: gw * 0.24, y: gh * 0.3, r: Math.min(gw, gh) * 0.15, rot: -0.38, hue: '126,112,255', a: 0.17, speed: 0.28 },
        { x: gw * 0.76, y: gh * 0.62, r: Math.min(gw, gh) * 0.18, rot: 0.24, hue: '255,172,116', a: 0.13, speed: 0.18 },
      ];
    }

    function drawGalaxy(time = 0) {
      if (document.hidden) {
        frame = window.requestAnimationFrame(drawGalaxy);
        return;
      }
      if (time - lastFrame < 42) {
        frame = window.requestAnimationFrame(drawGalaxy);
        return;
      }

      lastFrame = time;
      ctx.clearRect(0, 0, gw, gh);
      const px = reducedMotion || !gw ? 0 : (mx / gw - 0.5) * 12;
      const py = reducedMotion || !gh ? 0 : (my / gh - 0.5) * 7;
      const drift = reducedMotion ? 0 : time * 0.000006;

      const bg = ctx.createRadialGradient(gw * 0.56, gh * 0.42, 0, gw * 0.56, gh * 0.42, Math.max(gw, gh) * 0.72);
      bg.addColorStop(0, 'rgba(70,78,140,.18)');
      bg.addColorStop(0.45, 'rgba(12,14,38,.12)');
      bg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, gw, gh);

      for (const cluster of galaxyClusters) {
        const phase = reducedMotion ? 0 : time * 0.000026 * cluster.speed;
        const cx = cluster.x + Math.cos(phase) * 8 + px * 0.42;
        const cy = cluster.y + Math.sin(phase * 1.4) * 6 + py * 0.42;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(cluster.rot + Math.sin(phase) * 0.08);
        ctx.scale(1.55, 0.42);

        const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, cluster.r);
        glow.addColorStop(0, `rgba(255,255,255,${cluster.a * 1.35})`);
        glow.addColorStop(0.16, `rgba(${cluster.hue},${cluster.a})`);
        glow.addColorStop(0.48, `rgba(${cluster.hue},${cluster.a * 0.32})`);
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.filter = 'blur(6px)';
        ctx.beginPath();
        ctx.arc(0, 0, cluster.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.filter = 'none';

        for (let arm = 0; arm < 2; arm += 1) {
          ctx.beginPath();
          for (let i = 0; i < 36; i += 1) {
            const t = i / 35;
            const angle = arm * Math.PI + t * Math.PI * 2.15;
            const radius = cluster.r * (0.12 + t * 0.72);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius * 0.26;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(${cluster.hue},${cluster.a * 0.55})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        }
        ctx.restore();
      }

      ctx.save();
      ctx.translate(gw * 0.5 + px, gh * 0.5 + py);
      ctx.rotate(-0.16);
      const band = ctx.createLinearGradient(-gw * 0.7, 0, gw * 0.7, 0);
      band.addColorStop(0, 'rgba(0,0,0,0)');
      band.addColorStop(0.28, 'rgba(92,116,190,.1)');
      band.addColorStop(0.5, 'rgba(238,216,185,.16)');
      band.addColorStop(0.72, 'rgba(116,86,165,.1)');
      band.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = band;
      ctx.filter = 'blur(10px)';
      ctx.fillRect(-gw, -gh * 0.12, gw * 2, gh * 0.24);
      ctx.filter = 'none';
      ctx.restore();

      for (const dust of galaxyDust) {
        const x = (dust.x + drift * gw * dust.s * 120 + px * 0.55) % gw;
        const y = dust.y + Math.sin(time * 0.00012 + dust.x * 0.01) * 4 + py * 0.55;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${dust.hue},${dust.a})`;
        ctx.arc(x < 0 ? x + gw : x, y, dust.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const star of galaxyStars) {
        const x = (star.x + drift * gw * star.s * 90 + px * star.s) % gw;
        const y = star.y + py * star.s;
        const twinkle = 0.65 + Math.sin(time * 0.0012 + star.tw) * 0.35;
        ctx.beginPath();
        ctx.fillStyle = `rgba(245,248,255,${star.a * twinkle})`;
        ctx.arc(x < 0 ? x + gw : x, y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = window.requestAnimationFrame(drawGalaxy);
    }

    resizeGalaxy();
    window.addEventListener('resize', resizeGalaxy);
    document.addEventListener('mousemove', trackMouse, { passive: true });
    frame = window.requestAnimationFrame(drawGalaxy);

    return () => {
      window.removeEventListener('resize', resizeGalaxy);
      document.removeEventListener('mousemove', trackMouse);
      window.cancelAnimationFrame(frame);
    };
  }, [canvasRef]);
}
