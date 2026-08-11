"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SamsungMockup({
  src,
  alt = "Shikaku Game Interface",
  width = 280,
  height = 580,
  tilt = true,
  glowColor = "cyan",
  label = null,
  children,
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!tilt) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const glowStyle =
    glowColor === "pink"
      ? "0 0 35px rgba(255, 0, 127, 0.4)"
      : glowColor === "gold"
      ? "0 0 35px rgba(255, 215, 0, 0.4)"
      : "0 0 35px rgba(0, 240, 255, 0.4)";

  return (
    <div
      style={{
        perspective: "1000px",
        display: "inline-block",
        padding: "10px",
      }}
    >
      <div
        className="samsung-mockup-frame"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          boxShadow: isHovered ? glowStyle : "0 20px 40px rgba(0,0,0,0.8)",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out, box-shadow 0.5s ease",
        }}
      >
        {/* Antenna / Titanium Side Accent Lines */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "-4px",
            width: "3px",
            height: "40px",
            background: "#332a4e",
            borderRadius: "2px 0 0 2px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "110px",
            left: "-4px",
            width: "3px",
            height: "40px",
            background: "#332a4e",
            borderRadius: "2px 0 0 2px",
          }}
        />

        {/* Screen Container */}
        <div className="samsung-mockup-screen">
          {/* Hole Punch Camera */}
          <div className="samsung-camera-hole" />

          {children ? (
            children
          ) : (
            /* Screenshot Image */
            <Image
              src={src}
              alt={alt}
              fill
              sizes={`(max-width: 768px) 100vw, ${width}px`}
              style={{
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          )}

          {/* Screen Gloss Reflection */}
          <div className="samsung-glare" />
        </div>

        {/* Optional Label Badge Below Phone */}
        {label && (
          <div
            style={{
              position: "absolute",
              bottom: "-35px",
              left: "50%",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
              background: "rgba(10, 5, 24, 0.9)",
              border: "1px solid var(--neon-cyan-glow)",
              padding: "0.25rem 0.8rem",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 700,
              fontFamily: "var(--font-orbitron)",
              color: "#fff",
              boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
            }}
          >
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
