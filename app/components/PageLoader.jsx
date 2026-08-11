"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function PageLoader() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const pathname = usePathname();

  // Initial Site Loading Screen (1s on initial visit)
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // Route Change Transition Effect
  useEffect(() => {
    setRouteLoading(true);
    const routeTimer = setTimeout(() => {
      setRouteLoading(false);
    }, 450);

    return () => clearTimeout(routeTimer);
  }, [pathname]);

  return (
    <>
      {/* 1. INITIAL FULLSCREEN CYBER LOADER */}
      {initialLoading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#05020c",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            transition: "opacity 0.5s ease, visibility 0.5s ease",
          }}
        >
          {/* Ambient Glowing Orbs */}
          <div className="bg-orb-cyan" style={{ top: "20%", left: "10%" }} />
          <div className="bg-orb-pink" style={{ bottom: "20%", right: "10%" }} />

          {/* App Icon Container with Pulsing Neon Ring */}
          <div
            style={{
              position: "relative",
              width: "85px",
              height: "85px",
              borderRadius: "22px",
              overflow: "hidden",
              border: "2px solid #00f0ff",
              boxShadow: "0 0 35px rgba(0, 240, 255, 0.6), inset 0 0 15px rgba(0, 240, 255, 0.4)",
              marginBottom: "1.8rem",
              animation: "pulseLoader 1.5s infinite ease-in-out",
            }}
          >
            <Image
              src="/images/icon/app_icon.png"
              alt="Shikaku Icon"
              fill
              sizes="85px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Game Title */}
          <h1
            className="font-orbitron"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              letterSpacing: "0.15em",
              color: "#fff",
              marginBottom: "1.2rem",
              textAlign: "center",
            }}
          >
            SHIKAKU<span style={{ color: "var(--neon-cyan)" }}>.</span>
          </h1>

          {/* Neon Progress Bar */}
          <div
            style={{
              width: "100%",
              maxWidth: "240px",
              height: "4px",
              borderRadius: "4px",
              background: "rgba(255, 255, 255, 0.1)",
              overflow: "hidden",
              position: "relative",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #00f0ff 0%, #ff007f 100%)",
                boxShadow: "0 0 12px #00f0ff",
                animation: "fillProgress 0.85s ease-out forwards",
              }}
            />
          </div>

          <div
            className="font-orbitron"
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            CHARGEMENT DU SYSTÈME...
          </div>
        </div>
      )}

      {/* 2. FAST ROUTE CHANGE TOP PROGRESS BAR & BACKDROP BLUR */}
      {routeLoading && !initialLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            zIndex: 9998,
            background: "transparent",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #00f0ff 0%, #ff007f 100%)",
              boxShadow: "0 0 15px #00f0ff, 0 0 25px #ff007f",
              animation: "routeProgress 0.45s ease-out forwards",
            }}
          />
        </div>
      )}

      <style jsx global>{`
        @keyframes pulseLoader {
          0%, 100% { transform: scale(1); boxShadow: 0 0 35px rgba(0, 240, 255, 0.6); }
          50% { transform: scale(1.05); boxShadow: 0 0 50px rgba(255, 0, 127, 0.8); }
        }
        @keyframes fillProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes routeProgress {
          0% { width: 0%; opacity: 1; }
          70% { width: 85%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
      `}</style>
    </>
  );
}
