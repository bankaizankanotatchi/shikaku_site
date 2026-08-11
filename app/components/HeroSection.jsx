"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Sparkles, Shield, Trophy, Smartphone, ArrowRight } from "lucide-react";
import SamsungMockup from "./SamsungMockup";
import AnimatedGameSimulation from "./AnimatedGameSimulation";

export default function HeroSection() {
  return (
    <section
      className="hero-section-container"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Ambient Orbs */}
      <div className="bg-orb-cyan" style={{ top: "10%", left: "-10%" }} />
      <div className="bg-orb-pink" style={{ bottom: "10%", right: "-10%" }} />

      <div
        style={{
          maxWidth: "1250px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
        }}
        className="hero-grid"
      >
        {/* Left Column: Text & Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-left-content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1
            className="font-orbitron hero-title"
            style={{
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "1.2rem",
              letterSpacing: "-0.02em",
            }}
          >
            OÙ LA STRATÉGIE <br />
            <span className="text-gradient-cyan-pink">RENCONTRE LA RAPIDITÉ</span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-subtitle"
            style={{
              color: "var(--text-muted)",
              maxWidth: "540px",
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
          >
            Formez des carrés néon, surpassez l&apos;Intelligence Artificielle Cyber,
            affrontez vos amis en multijoueur et décrochez la couronne dans les tournois mondiaux !
          </p>

          {/* Store Download Buttons */}
          <div className="hero-buttons-container">
            {/* Play Store Download Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.shikaku.jeu_carre"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-cyan hero-store-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L15.42 12.016 3.61 22.186c-.365-.302-.61-.75-.61-1.282V3.096c0-.533.245-.98.61-1.282zM16.834 13.238l2.616-2.259c.677-.585.677-1.536 0-2.121l-2.616-2.259-2.828 2.443 2.828 2.2zM4.71 1.096l10.71 9.255-2.203 1.903L2.61 2.378c.453-.873 1.258-1.282 2.1-1.282zM4.71 22.904c-.842 0-1.647-.409-2.1-1.282l10.607-9.877 2.203 1.903L4.71 22.904z" />
              </svg>
              <div style={{ textAlign: "left", lineHeight: 1.2 }}>
                <span style={{ fontSize: "0.65rem", display: "block", opacity: 0.8, textTransform: "uppercase" }}>
                  Disponible sur
                </span>
                <span style={{ fontSize: "1rem", fontWeight: 800 }}>GOOGLE PLAY</span>
              </div>
            </a>

            {/* App Store Coming Soon Button */}
            <div
              className="btn-cyber-outline hero-store-btn"
              style={{
                position: "relative",
                cursor: "default",
                opacity: 0.85,
                borderColor: "rgba(255, 0, 127, 0.4)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.82c.62-.76 1.04-1.81.93-2.86-.9.04-1.99.6-2.63 1.35-.58.67-.99 1.74-.85 2.77 1.01.08 2.03-.5 2.55-1.26z" />
              </svg>
              <div style={{ textAlign: "left", lineHeight: 1.2 }}>
                <span style={{ fontSize: "0.65rem", display: "block", color: "var(--neon-pink)", fontWeight: 700 }}>
                  PROCHAINEMENT
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 700 }}>APP STORE</span>
              </div>
            </div>
          </div>

          {/* Highlights Row */}
          <div className="hero-highlights-row">
            <div>
              <div className="font-orbitron highlight-number" style={{ color: "var(--neon-cyan)" }}>
                ONLINE
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Multijoueur 1v1</div>
            </div>
            <div>
              <div className="font-orbitron highlight-number" style={{ color: "var(--neon-pink)" }}>
                3 NIVEAUX
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>IA Cyber Avancée</div>
            </div>
            <div>
              <div className="font-orbitron highlight-number" style={{ color: "var(--cyber-gold)" }}>
                TOURNOIS
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Cash prize & Cash</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Animated Live Gameplay Simulation (2 Blue, 1 Red) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <AnimatedGameSimulation />
        </motion.div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
