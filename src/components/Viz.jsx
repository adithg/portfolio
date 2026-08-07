import { useEffect, useRef } from 'react';

// Animated canvas visualizations ported from the original anime.js site.
const ACCENT = '#ff4b33';
const GREY = '#4a4a4a';
const FAINT = '#2a2a2a';

function vizMarket() {
  const data = [];
  let v = 0.5,
    target = 0.5;
  function step() {
    if (Math.random() < 0.03) target = 0.2 + Math.random() * 0.6;
    v += (target - v) * 0.04 + (Math.random() - 0.5) * 0.05;
    v = Math.max(0.08, Math.min(0.92, v));
    data.push(v);
    if (data.length > 140) data.shift();
  }
  for (let i = 0; i < 140; i++) step();
  let last = -1;
  return (ctx, w, h, t, s) => {
    const every = s.hover ? 2 : 4;
    if (Math.floor(t / every) !== last) {
      last = Math.floor(t / every);
      step();
    }
    const pad = 18,
      cw = w - pad * 2,
      ch = h - pad * 2;
    ctx.strokeStyle = FAINT;
    ctx.setLineDash([3, 5]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad, pad + ch * 0.5);
    ctx.lineTo(pad + cw, pad + ch * 0.5);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    data.forEach((d, i) => {
      const x = pad + (i / (data.length - 1)) * cw;
      const y = pad + (1 - d) * ch;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = s.hover ? ACCENT : '#bdbdbd';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.lineTo(pad + cw, pad + ch);
    ctx.lineTo(pad, pad + ch);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,75,51,.05)';
    ctx.fill();
    const lx = pad + cw,
      ly = pad + (1 - data[data.length - 1]) * ch;
    ctx.fillStyle = ACCENT;
    ctx.beginPath();
    ctx.arc(lx, ly, 3, 0, 7);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,75,51,.4)';
    ctx.beginPath();
    ctx.arc(lx, ly, 3 + ((t % 60) / 60) * 9, 0, 7);
    ctx.stroke();
  };
}

function vizCurve() {
  return (ctx, w, h, t, s) => {
    const pad = 18,
      cw = w - pad * 2,
      ch = h - pad * 2;
    const tt = t * 0.012;
    const mu = 0.5 + Math.sin(tt) * 0.16;
    const sg = 0.1 + (Math.sin(tt * 1.7) + 1) * 0.035;
    const a = 0.42 + Math.sin(tt * 2.3) * 0.1;
    const b = a + 0.2;
    const gauss = x => Math.exp(-((x - mu) ** 2) / (2 * sg * sg));
    ctx.fillStyle = 'rgba(255,75,51,.06)';
    ctx.fillRect(pad + a * cw, pad, (b - a) * cw, ch);
    ctx.strokeStyle = s.hover ? ACCENT : GREY;
    ctx.setLineDash([4, 6]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad + a * cw, pad);
    ctx.lineTo(pad + a * cw, pad + ch);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pad + b * cw, pad);
    ctx.lineTo(pad + b * cw, pad + ch);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    for (let i = 0; i <= 120; i++) {
      const x = i / 120;
      const y = gauss(x);
      const px = pad + x * cw,
        py = pad + ch - y * ch * 0.86;
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.strokeStyle = '#bdbdbd';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pad + a * cw, pad + ch);
    for (let i = 0; i <= 40; i++) {
      const x = a + (b - a) * (i / 40);
      ctx.lineTo(pad + x * cw, pad + ch - gauss(x) * ch * 0.86);
    }
    ctx.lineTo(pad + b * cw, pad + ch);
    ctx.closePath();
    ctx.fillStyle = s.hover ? 'rgba(255,75,51,.28)' : 'rgba(255,75,51,.16)';
    ctx.fill();
    ctx.strokeStyle = FAINT;
    ctx.beginPath();
    ctx.moveTo(pad, pad + ch);
    ctx.lineTo(pad + cw, pad + ch);
    ctx.stroke();
  };
}

function vizBars() {
  const N = 34;
  const seeds = Array.from({ length: N }, () => Math.random() * 9);
  return (ctx, w, h, t, s) => {
    const pad = 18,
      cw = w - pad * 2,
      ch = h - pad * 2;
    const mid = pad + ch * 0.5;
    const bw = cw / N;
    const tt = t * (s.hover ? 0.05 : 0.025);
    ctx.strokeStyle = FAINT;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad, mid);
    ctx.lineTo(pad + cw, mid);
    ctx.stroke();
    for (let i = 0; i < N; i++) {
      const v = Math.sin(tt + seeds[i]) * Math.cos(tt * 0.6 + i * 0.5);
      const bh = v * ch * 0.42;
      const strong = Math.abs(v) > 0.72;
      ctx.fillStyle = strong ? ACCENT : v > 0 ? '#9a9a9a' : '#565656';
      const x = pad + i * bw + bw * 0.22;
      if (bh >= 0) ctx.fillRect(x, mid - bh, bw * 0.56, bh);
      else ctx.fillRect(x, mid, bw * 0.56, -bh);
    }
  };
}

function vizMesh() {
  const N = 70,
    pts = [];
  const GA = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = GA * i;
    pts.push([Math.cos(th) * r, y, Math.sin(th) * r]);
  }
  return (ctx, w, h, t, s) => {
    const cx = w / 2,
      cy = h / 2,
      R = Math.min(w, h) * 0.36;
    const ay = t * (s.hover ? 0.018 : 0.008),
      ax = 0.35;
    const proj = pts.map(([x, y, z]) => {
      let px = x * Math.cos(ay) + z * Math.sin(ay);
      let pz = -x * Math.sin(ay) + z * Math.cos(ay);
      let py = y * Math.cos(ax) - pz * Math.sin(ax);
      pz = y * Math.sin(ax) + pz * Math.cos(ax);
      return [cx + px * R, cy + py * R, pz];
    });
    ctx.lineWidth = 1;
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = proj[i][0] - proj[j][0],
          dy = proj[i][1] - proj[j][1];
        const d = dx * dx + dy * dy;
        if (d < R * R * 0.16) {
          const depth = (proj[i][2] + proj[j][2]) / 2;
          const al = Math.max(0, (depth + 1) / 2) * 0.25;
          ctx.strokeStyle = `rgba(180,180,180,${al})`;
          ctx.beginPath();
          ctx.moveTo(proj[i][0], proj[i][1]);
          ctx.lineTo(proj[j][0], proj[j][1]);
          ctx.stroke();
        }
      }
    }
    proj.forEach(([x, y, z], i) => {
      const front = z > 0;
      const hot = s.hover && i % 9 === 0;
      ctx.fillStyle = hot ? ACCENT : front ? '#cfcfcf' : '#444';
      ctx.beginPath();
      ctx.arc(x, y, front ? 2 : 1.3, 0, 7);
      ctx.fill();
    });
  };
}

function vizLatency() {
  const data = [];
  function step() {
    const base = 0.22 + Math.random() * 0.14;
    const spike = Math.random() < 0.07 ? Math.random() * 0.5 : 0;
    data.push(Math.min(0.95, base + spike));
    if (data.length > 90) data.shift();
  }
  for (let i = 0; i < 90; i++) step();
  let last = -1;
  return (ctx, w, h, t, s) => {
    const every = s.hover ? 2 : 4;
    if (Math.floor(t / every) !== last) {
      last = Math.floor(t / every);
      step();
    }
    const pad = 18,
      cw = w - pad * 2,
      ch = h - pad * 2;
    const sorted = [...data].sort((a, b) => a - b);
    const q = p => sorted[Math.floor(p * (sorted.length - 1))];
    const p50 = q(0.5),
      p95 = q(0.95);
    ctx.strokeStyle = FAINT;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad, pad + ch);
    ctx.lineTo(pad + cw, pad + ch);
    ctx.stroke();
    const bw = cw / data.length;
    data.forEach((d, i) => {
      const x = pad + i * bw;
      const bh = d * ch * 0.9;
      const over = d > p95;
      ctx.fillStyle = over ? ACCENT : d > p50 ? '#8a8a8a' : '#4f4f4f';
      ctx.fillRect(x + bw * 0.15, pad + ch - bh, bw * 0.7, bh);
    });
    ctx.setLineDash([3, 5]);
    ctx.strokeStyle = GREY;
    const y50 = pad + ch - p50 * ch * 0.9;
    ctx.beginPath();
    ctx.moveTo(pad, y50);
    ctx.lineTo(pad + cw, y50);
    ctx.stroke();
    ctx.strokeStyle = s.hover ? ACCENT : 'rgba(255,75,51,.55)';
    const y95 = pad + ch - p95 * ch * 0.9;
    ctx.beginPath();
    ctx.moveTo(pad, y95);
    ctx.lineTo(pad + cw, y95);
    ctx.stroke();
    ctx.setLineDash([]);
  };
}

const factories = { market: vizMarket, curve: vizCurve, bars: vizBars, mesh: vizMesh, latency: vizLatency };

export default function Viz({ type = 'market' }) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    const canvas = container.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const draw = (factories[type] || vizMarket)();
    let w = 0,
      h = 0,
      t = 0,
      raf = null,
      visible = false;
    const state = { hover: false };
    const card = container.closest('.scroll-stack-card') || container;
    const enter = () => (state.hover = true);
    const leave = () => (state.hover = false);
    card.addEventListener('mouseenter', enter);
    card.addEventListener('mouseleave', leave);

    function frame() {
      ctx.clearRect(0, 0, w, h);
      draw(ctx, w, h, t, state);
      t += state.hover ? 2 : 1;
      if (!reduced && visible) raf = requestAnimationFrame(frame);
    }
    function resize() {
      const r = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) frame();
    }
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    let io;
    if (!reduced) {
      io = new IntersectionObserver(
        ([e]) => {
          visible = e.isIntersecting;
          if (visible && raf === null) raf = requestAnimationFrame(frame);
          if (!visible && raf !== null) {
            cancelAnimationFrame(raf);
            raf = null;
          }
        },
        { threshold: 0.05 }
      );
      io.observe(container);
    }
    return () => {
      ro.disconnect();
      if (io) io.disconnect();
      if (raf !== null) cancelAnimationFrame(raf);
      card.removeEventListener('mouseenter', enter);
      card.removeEventListener('mouseleave', leave);
    };
  }, [type]);

  return (
    <div className="viz" ref={ref}>
      <canvas aria-hidden="true" />
    </div>
  );
}
