"use client";
import React, { useState, useEffect } from "react";

export default function RobotMascotWeb({
  size = 220,
  state = "idle",
  skinColor = "#7F56D9",
}) {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Status Badge Colors & Texts
  let badgeColor = "#1570EF";
  let badgeText = "i";

  if (state === "joyous") {
    badgeColor = "#12B76A";
    badgeText = "OK";
  } else if (state === "stressed") {
    badgeColor = "#F3A23A";
    badgeText = "?";
  } else if (state === "sad") {
    badgeColor = "#F04438";
    badgeText = "!";
  }

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: "relative",
        display: "inline-block",
      }}
      className="mascot-float"
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* 1. JET PROPULSION FLAME (Strictly vertical) */}
        <path
          d="M 92 156 Q 100 178 108 156 Z"
          fill="url(#flameGrad)"
          style={{
            animation: "pulseFlame 1.2s infinite ease-in-out alternate",
            transformOrigin: "center top",
          }}
        />

        {/* 2. ANTENNAS */}
        <line x1="56" y1="46" x2="40" y2="20" stroke="#344054" strokeWidth="6" strokeLinecap="round" />
        <circle cx="40" cy="20" r="10" fill={skinColor} stroke="#344054" strokeWidth="5" />

        <line x1="144" y1="46" x2="160" y2="20" stroke="#344054" strokeWidth="6" strokeLinecap="round" />
        <circle cx="160" cy="20" r="10" fill={skinColor} stroke="#344054" strokeWidth="5" />

        {/* 3. ARMS */}
        <path d="M 68 132 Q 40 136 38 152" fill="none" stroke="#344054" strokeWidth="6" strokeLinecap="round" />
        <circle cx="38" cy="152" r="9" fill={skinColor} stroke="#344054" strokeWidth="5" />

        <path d="M 132 132 Q 160 136 162 152" fill="none" stroke="#344054" strokeWidth="6" strokeLinecap="round" />
        <circle cx="162" cy="152" r="9" fill={skinColor} stroke="#344054" strokeWidth="5" />

        {/* 4. JET NOZZLE */}
        <rect x="84" y="152" width="32" height="10" rx="4" fill="#475467" stroke="#344054" strokeWidth="4" />

        {/* 5. BODY CHEST PLATE */}
        <path d="M 72 122 L 82 156 L 118 156 L 128 122 Z" fill="#F8F9FA" stroke="#344054" strokeWidth="6" />

        {/* 6. STATUS BADGE */}
        <circle cx="100" cy="138" r="18" fill={badgeColor} stroke="#344054" strokeWidth="5" />
        <text
          x="100"
          y="144"
          textAnchor="middle"
          fill="#FFF"
          fontSize="18"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
        >
          {badgeText}
        </text>

        {/* 7. ROBOT HELMET */}
        <ellipse cx="100" cy="86" rx="65" ry="42" fill="#F8F9FA" stroke="#344054" strokeWidth="7" />

        {/* 8. FOREHEAD STRIPE */}
        <g clipPath="url(#headClip)">
          <path d="M 35 64 L 165 64 L 165 20 L 35 20 Z" fill={skinColor} />
        </g>
        <clipPath id="headClip">
          <ellipse cx="100" cy="86" rx="65" ry="42" />
        </clipPath>
        <ellipse cx="100" cy="86" rx="65" ry="42" fill="none" stroke="#344054" strokeWidth="7" />

        {/* 9. HEADPHONES */}
        <rect x="26" y="64" width="10" height="40" rx="4" fill={skinColor} stroke="#344054" strokeWidth="5" />
        <rect x="164" y="64" width="10" height="40" rx="4" fill={skinColor} stroke="#344054" strokeWidth="5" />

        {/* 10. FACE SCREEN */}
        <rect x="52" y="65" width="96" height="50" rx="14" fill="#15192C" stroke="#344054" strokeWidth="5" />

        {/* 11. CYAN GLOWING EYES & MOUTH */}
        {isBlinking ? (
          <>
            <line x1="63" y1="88" x2="83" y2="88" stroke="#00D4FF" strokeWidth="6" strokeLinecap="round" />
            <line x1="117" y1="88" x2="137" y2="88" stroke="#00D4FF" strokeWidth="6" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="73" cy="88" r="10" fill="#00D4FF" />
            <circle cx="127" cy="88" r="10" fill="#00D4FF" />
          </>
        )}

        {/* Smile Mouth */}
        <path d="M 90 98 Q 100 106 110 98" fill="none" stroke="#00D4FF" strokeWidth="5" strokeLinecap="round" />

        {/* Microphone */}
        <path d="M 36 92 Q 40 114 52 116" fill="none" stroke="#344054" strokeWidth="5" strokeLinecap="round" />
        <circle cx="52" cy="116" r="7" fill={skinColor} stroke="#344054" strokeWidth="4" />
      </svg>
    </div>
  );
}
