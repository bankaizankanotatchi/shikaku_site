"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import InteractiveGrid from "../components/InteractiveGrid";
import SamsungMockup from "../components/SamsungMockup";
import { motion } from "framer-motion";
import { HelpCircle, Grid, Clock, Award, ShieldAlert, Sparkles, Zap, Smartphone } from "lucide-react";

export default function RulesPage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", background: "var(--bg-deep)", overflowX: "hidden" }}>
      <div className="bg-orb-cyan" style={{ top: "10%", left: "-10%" }} />
      <div className="bg-orb-pink" style={{ top: "50%", right: "-10%" }} />

      <InteractiveGrid />
      <Navbar />

      <div className="subpage-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Page Header */}
        <div className="subpage-header" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "30px",
              background: "rgba(0, 240, 255, 0.1)",
              border: "1px solid rgba(0, 240, 255, 0.3)",
              color: "var(--neon-cyan)",
              fontSize: "0.8rem",
              fontWeight: 700,
              fontFamily: "var(--font-orbitron)",
              marginBottom: "1rem",
            }}
          >
            <HelpCircle size={14} />
            GUIDE OFFICIEL DE JEU
          </div>

          <h1
            className="font-orbitron"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            RÈGLES DU JEU & <span className="text-gradient-cyan-pink">MÉCANIQUES DE GRILLE</span>
          </h1>

          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "680px", margin: "0 auto", lineHeight: 1.7 }}>
            Apprenez à maîtriser les dimensions de grille de 15x15 à 30x30, le placement tactique des sommets,
            la règle du 4ème côté et les combos multi-carrés.
          </p>
        </div>

        {/* Grid Dimensions & Mechanics Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "2.5rem",
            marginBottom: "5rem",
          }}
        >
          {/* Card 1: Formations & Sommets */}
          <div className="cyber-glass-card" style={{ padding: "2.5rem" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                background: "rgba(0, 240, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--neon-cyan)",
                marginBottom: "1.5rem",
              }}
            >
              <Grid size={26} />
            </div>

            <h2 className="font-orbitron" style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
              1. Capture de Carrés 1x1
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              Les joueurs placent à tour de rôle un point de leur couleur (Bleu ou Rouge) sur une intersection libre de la grille.
              Un carré de 1x1 est capturé lorsqu&apos;un joueur ferme son 4ème sommet. Le joueur marquant gagne 1 point et REJOUE immédiatement !
            </p>

            <div
              style={{
                padding: "1rem",
                borderRadius: "12px",
                background: "rgba(10, 5, 24, 0.8)",
                border: "1px solid rgba(0, 240, 255, 0.2)",
                fontSize: "0.88rem",
                color: "var(--neon-cyan)",
                fontWeight: 600,
              }}
            >
              ⚡ Astuce Combo : Un seul coup judicieux peut fermer 2 carrés adjacents d&apos;un coup et vous rapporter 2 points !
            </div>
          </div>

          {/* Card 2: Tailles de Grilles */}
          <div className="cyber-glass-card" style={{ padding: "2.5rem" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                background: "rgba(255, 0, 127, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--neon-pink)",
                marginBottom: "1.5rem",
              }}
            >
              <Smartphone size={26} />
            </div>

            <h2 className="font-orbitron" style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
              2. Dimensions de Grille
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              Choisissez la taille de terrain adaptée à votre style de jeu avant chaque match :
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
              <div style={{ padding: "0.8rem", borderRadius: "10px", background: "rgba(255, 255, 255, 0.04)", textAlign: "center" }}>
                <span className="font-orbitron" style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>15 × 15</span>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Rapide & Intense</div>
              </div>
              <div style={{ padding: "0.8rem", borderRadius: "10px", background: "rgba(255, 255, 255, 0.04)", textAlign: "center" }}>
                <span className="font-orbitron" style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>20 × 20</span>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Équilibré Standard</div>
              </div>
              <div style={{ padding: "0.8rem", borderRadius: "10px", background: "rgba(255, 255, 255, 0.04)", textAlign: "center" }}>
                <span className="font-orbitron" style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>25 × 25</span>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Tactique Avancée</div>
              </div>
              <div style={{ padding: "0.8rem", borderRadius: "10px", background: "rgba(255, 255, 255, 0.04)", textAlign: "center" }}>
                <span className="font-orbitron" style={{ color: "var(--neon-pink)", fontWeight: 800, fontSize: "1rem" }}>30 × 30</span>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Grand Terrain Pro</div>
              </div>
            </div>
          </div>

          {/* Card 3: Timers & Anti-Forfait */}
          <div className="cyber-glass-card" style={{ padding: "2.5rem" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                background: "rgba(255, 215, 0, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--cyber-gold)",
                marginBottom: "1.5rem",
              }}
            >
              <Clock size={26} />
            </div>

            <h2 className="font-orbitron" style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
              3. Timers & Anti-Inactivité
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              • <strong>Temps de réflexion par coup</strong> : Configurable de 15s à 30s.<br />
              • <strong>Pénalité Inactivité</strong> : 3 tours manqués consécutifs entraînent un forfait automatique.<br />
              • <strong>Protection Déconnexion (30s)</strong> : En cas d&apos;interruption réseau, vous disposez de 30 secondes pour revenir sans perdre votre match.
            </p>
          </div>
        </div>

      </div>

      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
