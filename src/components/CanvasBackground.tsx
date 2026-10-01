/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  h: number; // Hue: 268 (purple), 222 (blue), 174 (cyan)
}

export const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationId: number;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Generate responsive particle count
    const particleCount = Math.min(65, Math.max(25, Math.floor((width * height) / 18000)));
    const hues = [268, 222, 174];
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      h: hues[Math.floor(Math.random() * hues.length)]
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const handlePointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handlePointerLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep atmospheric ambient radial gradients
      const gradPurple = ctx.createRadialGradient(width * 0.85, height * 0.15, 0, width * 0.85, height * 0.15, width * 0.7);
      gradPurple.addColorStop(0, 'rgba(109, 61, 245, 0.22)');
      gradPurple.addColorStop(1, 'transparent');
      ctx.fillStyle = gradPurple;
      ctx.fillRect(0, 0, width, height);

      const gradCyan = ctx.createRadialGradient(width * 0.15, height * 0.85, 0, width * 0.15, height * 0.85, width * 0.6);
      gradCyan.addColorStop(0, 'rgba(15, 214, 194, 0.14)');
      gradCyan.addColorStop(1, 'transparent');
      ctx.fillStyle = gradCyan;
      ctx.fillRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        // Move particles
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 135) {
              const alpha = 0.22 * (1 - dist / 135);
              ctx.strokeStyle = `hsla(${p1.h}, 90%, 65%, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        // Mouse interactive glow
        if (mouseX > 0 && mouseY > 0) {
          const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 180);
          mouseGlow.addColorStop(0, 'rgba(15, 214, 194, 0.18)');
          mouseGlow.addColorStop(1, 'transparent');
          ctx.fillStyle = mouseGlow;
          ctx.beginPath();
          ctx.arc(mouseX, mouseY, 180, 0, Math.PI * 2);
          ctx.fill();

          for (const p of particles) {
            const d = Math.hypot(p.x - mouseX, p.y - mouseY);
            if (d < 150) {
              ctx.strokeStyle = `rgba(15, 214, 194, ${0.45 * (1 - d / 150)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouseX, mouseY);
              ctx.stroke();
            }
          }
        }
      }

      // Draw particle nodes
      for (const p of particles) {
        ctx.fillStyle = `hsl(${p.h}, 90%, 70%)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <>
      {/* Fixed Ambient Orbs */}
      <div
        className="fixed -left-[10vw] top-[15vh] w-[42vw] h-[42vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none z-0 blur-[90px] opacity-35 bg-[#6d3df5] animate-drift"
        aria-hidden="true"
      />
      <div
        className="fixed -right-[10vw] bottom-[5vh] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none z-0 blur-[90px] opacity-25 bg-[#0fd6c2] animate-drift"
        style={{ animationDuration: '24s', animationDelay: '-6s' }}
        aria-hidden="true"
      />
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />
    </>
  );
};
