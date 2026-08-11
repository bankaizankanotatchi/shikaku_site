"use client";
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Target, Users, Grid, Award, Timer, WifiOff } from "lucide-react";

const rulesSteps = [
  {
    step: "01",
    title: "OBJECTIF DU JEU",
    icon: Target,
    text: "Former le plus de carrés possible en connectant les points de la grille. Chaque carré complété vous rapporte 1 point.",
    color: "cyan",
  },
  {
    step: "02",
    title: "TOUR PAR TOUR",
    icon: Users,
    text: "Les joueurs (Bleu et Rouge) jouent à tour de rôle en traçant des lignes horizontales ou verticales entre deux points adjacents.",
    color: "pink",
  },
  {
    step: "03",
    title: "FORMATION DES CARRÉS",
    icon: Grid,
    text: "Un carré se forme dès que 4 côtés sont fermés autour de 4 points. Le joueur qui pose le 4ème côté capture le carré à sa couleur.",
    color: "cyan",
  },
  {
    step: "04",
    title: "SCORING MULTI-CARRÉS",
    icon: Award,
    text: "Si un seul segment permet de compléter 2 carrés simultanément, vous marquez immédiatement 2 points et rejouez un coup gratuit !",
    color: "gold",
  },
  {
    step: "05",
    title: "CHRONO & TIMERS",
    icon: Timer,
    text: "15 secondes par coup pour maintenir un rythme de jeu ultra-dynamique. Une partie dure 3 minutes au maximum.",
    color: "pink",
  },
  {
    step: "06",
    title: "RECONNEXION 30 SECONDES",
    icon: WifiOff,
    text: "Une micro-coupure Internet ? Pas de panique ! Vous disposez de 30 secondes pour vous reconnecter et reprendre votre match.",
    color: "cyan",
  },
];

export default function RulesSection() {
  return (
    <section
      id="rules"
      style={{
        position: "relative",
        padding: "6rem 1.5rem",
        background: "var(--bg-deep)",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
            GUIDE RAPIDE
          </div>

          <h2
            className="font-orbitron"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            RÈGLES DU JEU <span className="text-gradient-cyan-pink">SHIKAKU</span>
          </h2>

          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Un jeu simple à prendre en main, mais d&apos;une profondeur tactique sans fin.
          </p>
        </div>

        {/* 6 Grid Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {rulesSteps.map((rule, idx) => {
            const Icon = rule.icon;
            const borderColor = rule.color === "pink"
              ? "rgba(255, 0, 127, 0.25)"
              : rule.color === "gold"
              ? "rgba(255, 215, 0, 0.25)"
              : "rgba(0, 240, 255, 0.25)";

            return (
              <motion.div
                key={rule.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="cyber-glass-card"
                style={{
                  padding: "2rem",
                  position: "relative",
                  borderColor: borderColor,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: rule.color === "pink"
                        ? "rgba(255, 0, 127, 0.15)"
                        : rule.color === "gold"
                        ? "rgba(255, 215, 0, 0.15)"
                        : "rgba(0, 240, 255, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: rule.color === "pink"
                        ? "var(--neon-pink)"
                        : rule.color === "gold"
                        ? "var(--cyber-gold)"
                        : "var(--neon-cyan)",
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <span
                    className="font-orbitron"
                    style={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      opacity: 0.25,
                      color: "#fff",
                    }}
                  >
                    {rule.step}
                  </span>
                </div>

                <h3
                  className="font-orbitron"
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: "0.8rem",
                  }}
                >
                  {rule.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.98rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {rule.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
