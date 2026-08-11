"use client";
import React, { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Create grid points
    const spacing = 70;
    const dots = [];

    const cols = Math.ceil(width / spacing) + 2;
    const rows = Math.ceil(height / spacing) + 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push({
          baseX: c * spacing,
          baseY: r * spacing,
          x: c * spacing,
          y: r * spacing,
          pulseOffset: Math.random() * Math.PI * 2,
          color: (r + c) % 2 === 0 ? "#00f0ff" : "#ff007f",
        });
      }
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw faint background grid lines
      ctx.strokeStyle = "rgba(100, 70, 180, 0.08)";
      ctx.lineWidth = 1;

      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        ctx.moveTo(c * spacing, 0);
        ctx.lineTo(c * spacing, height);
        ctx.stroke();
      }
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        ctx.moveTo(0, r * spacing);
        ctx.lineTo(width, r * spacing);
        ctx.stroke();
      }

      // Draw interactive dots & connections near mouse
      dots.forEach((dot) => {
        const dx = mouse.x - dot.baseX;
        const dy = mouse.y - dot.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        let scale = 1;
        let alpha = 0.25 + Math.sin(time + dot.pulseOffset) * 0.15;

        if (dist < maxDist) {
          const factor = (1 - dist / maxDist);
          scale = 1 + factor * 1.5;
          alpha = 0.5 + factor * 0.5;

          // Connect nearby dots to mouse
          ctx.strokeStyle = dot.color === "#00f0ff"
            ? `rgba(0, 240, 255, ${factor * 0.4})`
            : `rgba(255, 0, 127, ${factor * 0.4})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(dot.baseX, dot.baseY);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Draw dot
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(dot.baseX, dot.baseY, 2.5 * scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.8,
      }}
    />
  );
}
