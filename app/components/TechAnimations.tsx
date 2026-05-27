"use client";

import { useEffect, useRef } from "react";

/* ─── ELEGANT AMBIENT PARTICLES (Updated from Spark Canvas) ─── */
export function ForgeSparkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let frame = 0;

    const resize = () => {
      const r = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * r;
      canvas.height = window.innerHeight * r;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(r, 0, 0, r, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type Spark = {
      x: number; y: number;
      vx: number; vy: number;
      life: number; maxLife: number;
      size: number; color: string;
    };

    const sparks: Spark[] = [];
    // Apple intelligence inspired soft glowing blue, purple, magenta, and silver tones
    const colors = [
      "rgba(41, 151, 255, 0.4)", // Blue
      "rgba(162, 89, 255, 0.35)", // Purple
      "rgba(255, 255, 255, 0.3)", // Silver/white
      "rgba(0, 240, 255, 0.25)", // Light cyan
    ];

    const spawn = () => {
      if (sparks.length > 70) return; // Reduced density for elegance
      const x = Math.random() * window.innerWidth;
      sparks.push({
        x, y: window.innerHeight + 10,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(0.3 + Math.random() * 1.2),
        life: 0,
        maxLife: 150 + Math.random() * 150,
        size: 0.8 + Math.random() * 1.8,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (Math.random() > 0.8) spawn();

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy -= 0.002; // slow drift upwards
        s.vx *= 0.997;
        s.life++;

        const t = s.life / s.maxLife;
        const alpha = t < 0.2 ? t / 0.2 : 1 - (t - 0.2) / 0.8;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * (1 - t * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = alpha * 0.5;
        ctx.fill();
        ctx.globalAlpha = 1;

        if (s.life >= s.maxLife || s.y < -20) sparks.splice(i, 1);
      }

      frame = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="forge-spark-canvas" aria-hidden="true" style={{ opacity: 0.6 }} />;
}

/* ─── NATIVE HOVER BASED - DUMMY COMPONENT FOR COMPATIBILITY ─── */
export function ForgeCursor() {
  return null;
}

/* ─── SLEEK TOP PROGRESS BAR (Replaces vertical scrollbar) ─── */
export function ForgeScrollBar() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${pct})`;
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: "48px",
        left: 0,
        right: 0,
        height: "2px",
        background: "rgba(255, 255, 255, 0.04)",
        zIndex: 1001,
      }}
    >
      <div
        ref={fillRef}
        style={{
          height: "100%",
          width: "100%",
          background: "var(--accent-blue)",
          transformOrigin: "left",
          transform: "scaleX(0)",
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
}

/* ─── APPLE STYLE LOADER ─── */
export function ForgeLoader({ onDone }: { onDone: () => void }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letters = document.querySelectorAll<HTMLElement>(".forge-loader-title span");
    letters.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.04}s`;
    });

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 22 + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(onDone, 350);
      }
      if (barRef.current) barRef.current.style.width = `${progress}%`;
    }, 60);

    return () => clearInterval(interval);
  }, [onDone]);

  const letters = "WEBOVEX".split("");

  return (
    <div className="forge-loader" id="forge-loader">
      <div className="forge-loader-title" aria-label="WEBOVEX">
        {letters.map((ch, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.04}s` }}>{ch}</span>
        ))}
      </div>
      <div className="forge-loader-bar-wrap">
        <div ref={barRef} className="forge-loader-bar" />
      </div>
      <div className="forge-loader-label">Designed by Webovex</div>
    </div>
  );
}

/* ─── TYPING HEADLINE ─── */
export function TypingHeadline({ words }: { words: string[] }) {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let wi = 0, li = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[wi];
      if (!deleting && li <= word.length) {
        if (elRef.current) elRef.current.textContent = word.slice(0, li);
        li++;
        timer = setTimeout(tick, li === word.length + 1 ? 1600 : 70);
      } else if (deleting && li >= 0) {
        if (elRef.current) elRef.current.textContent = word.slice(0, li);
        li--;
        timer = setTimeout(tick, 30);
      } else {
        deleting = !deleting;
        if (!deleting) {
          wi = (wi + 1) % words.length;
          li = 0;
        }
        timer = setTimeout(tick, 100);
      }
    };
    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span>
      <span ref={elRef} />
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
}

/* ─── HUD OVERLAY (Cleaned / Disabled for Apple Minimalist Vibe) ─── */
export function HudOverlays() {
  return null;
}
