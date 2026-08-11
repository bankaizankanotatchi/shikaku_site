"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bot, Swords, Trophy, Clock, Zap } from "lucide-react";
import SamsungMockup from "./SamsungMockup";

const features = [
  {
    icon: Bot,
    title: "IA CYBER & ENTRAÎNEMENT",
    badge: "3 NIVEAUX D'IA",
    color: "cyan",
    description: "Affrontez nos bots d'intelligence artificielle adaptatifs de l'application : du Cyber Apprenti jusqu'au calculateur suprême Omega Prime.",
    screenshot: "/images/screenshots/WhatsApp Image 2026-08-11 at 12.13.01.jpeg",
    details: ["Cyber Apprenti (Niveau Instantané)", "NEXUS-9 Tactique (Niveau Avancé)", "Omega Prime (Calculateur Suprême)"],
    avatars: [
      { name: "CYBER APPRENTI", img: "/images/assets/ai_beginner.png" },
      { name: "NEXUS-9 TACTIQUE", img: "/images/assets/ai_intermediate.png" },
      { name: "OMEGA PRIME", img: "/images/assets/ai_expert.png" },
    ],
  },
  {
    icon: Swords,
    title: "MULTIJOUEUR EN LIGNE & LOCAL",
    badge: "1V1 COMPÉTITION",
    color: "pink",
    description: "Défiez des joueurs en ligne sur le réseau ou affrontez vos amis sur le même écran avec le mode local Pass-and-Play.",
    screenshot: "/images/screenshots/match_gameplay.png",
    details: ["Matchmaking instantané 1v1", "Mode Local 2 Joueurs", "Défi Quotidien Spécial"],
    avatars: [
      { name: "MODE EN LIGNE", img: "/images/assets/mode_online.png" },
      { name: "MODE LOCAL", img: "/images/assets/mode_friend.png" },
      { name: "DÉFI DU JOUR", img: "/images/assets/mode_daily_challenge.png" },
    ],
  },
  {
    icon: Trophy,
    title: "TOURNOIS & CASH PRIZES",
    badge: "BRACKETS OFFICIELS",
    color: "gold",
    description: "Participez aux tournois Bronze, Argent et Or ! Arbre de compétition en 8 ou 16 joueurs avec prize pool et trophées d'honneur.",
    screenshot: "/images/screenshots/WhatsApp Image 2026-08-11 at 12.13.02.jpeg",
    details: ["Tournois Bronze (4 à 8 Joueurs)", "Tournois Argent (Éliminatoires)", "Tournois Or & Inscriptions Jetons"],
    avatars: [
      { name: "TROPHÉE BRONZE", img: "/images/assets/bronze_trophy_1785240418333.png" },
      { name: "TROPHÉE ARGENT", img: "/images/assets/silver_trophy_1785240396735.png" },
      { name: "TROPHÉE OR", img: "/images/assets/gold_trophy_1785240350043.png" },
    ],
  },
  {
    icon: Clock,
    title: "TIMERS & RECONNEXION 30S",
    badge: "SYSTEME ANTI-DÉCO",
    color: "cyan",
    description: "Des parties palpitantes cadencées à 15s par coup. Si vous subissez une perte de réseau, vous disposez de 30 secondes pour revenir !",
    screenshot: "/images/screenshots/WhatsApp Image 2026-08-11 at 12.13.07.jpeg",
    details: ["Timer 15 secondes / coup", "Durée max 3 min par partie", "Grace period de 30 secondes"],
    avatars: [],
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        position: "relative",
        padding: "6rem 1.5rem",
        background: "radial-gradient(ellipse at center, rgba(12, 6, 26, 0.9) 0%, rgba(5, 2, 12, 1) 100%)",
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
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "30px",
              background: "rgba(255, 0, 127, 0.1)",
              border: "1px solid rgba(255, 0, 127, 0.3)",
              color: "var(--neon-pink)",
              fontSize: "0.8rem",
              fontWeight: 700,
              fontFamily: "var(--font-orbitron)",
              marginBottom: "1rem",
            }}
          >
            <Zap size={14} />
            GAMEPLAY & INNOVATIONS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-orbitron"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            DES FONCTIONNALITÉS CONÇUES POUR LES <br />
            <span className="text-gradient-cyan-pink">CHAMPIONS DE STRATÉGIE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Chaque détail de Shikaku a été conçu pour offrir une expérience compétitive fluide, rapide et palpitante.
          </motion.p>
        </div>

        {/* Features Showcase Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          {features.map((feat, index) => {
            const Icon = feat.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "3rem",
                  alignItems: "center",
                  padding: "2.5rem",
                  borderRadius: "28px",
                  background: "rgba(18, 10, 36, 0.5)",
                  border: feat.color === "pink"
                    ? "1px solid rgba(255, 0, 127, 0.2)"
                    : feat.color === "gold"
                    ? "1px solid rgba(255, 215, 0, 0.2)"
                    : "1px solid rgba(0, 240, 255, 0.2)",
                  backdropFilter: "blur(20px)",
                }}
                className="feature-card-grid"
              >
                {/* Content Side */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-orbitron)",
                      marginBottom: "1rem",
                      background: feat.color === "pink"
                        ? "rgba(255, 0, 127, 0.15)"
                        : feat.color === "gold"
                        ? "rgba(255, 215, 0, 0.15)"
                        : "rgba(0, 240, 255, 0.15)",
                      color: feat.color === "pink"
                        ? "var(--neon-pink)"
                        : feat.color === "gold"
                        ? "var(--cyber-gold)"
                        : "var(--neon-cyan)",
                    }}
                  >
                    <Icon size={14} />
                    {feat.badge}
                  </div>

                  <h3
                    className="font-orbitron"
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "#fff",
                      marginBottom: "1rem",
                    }}
                  >
                    {feat.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                      marginBottom: "1.8rem",
                    }}
                  >
                    {feat.description}
                  </p>

                  {/* Avatars Row if available */}
                  {feat.avatars && feat.avatars.length > 0 && (
                    <div
                      className="feature-avatars-grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1rem",
                        marginBottom: "2.2rem",
                        padding: "1.25rem 0.75rem",
                        borderRadius: "24px",
                        background: "rgba(10, 5, 24, 0.85)",
                        border: "1px solid rgba(0, 240, 255, 0.3)",
                        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
                        width: "100%",
                      }}
                    >
                      {feat.avatars.map((av) => (
                        <div
                          key={av.name}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              width: "clamp(55px, 18vw, 120px)",
                              height: "clamp(55px, 18vw, 120px)",
                              borderRadius: "50%",
                              overflow: "hidden",
                              border: feat.color === "pink"
                                ? "3px solid var(--neon-pink)"
                                : feat.color === "gold"
                                ? "3px solid var(--cyber-gold)"
                                : "3px solid var(--neon-cyan)",
                              boxShadow: feat.color === "pink"
                                ? "0 0 25px rgba(255, 0, 127, 0.5)"
                                : feat.color === "gold"
                                ? "0 0 25px rgba(255, 215, 0, 0.5)"
                                : "0 0 25px rgba(0, 240, 255, 0.5)",
                              background: "#0d061c",
                              transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            }}
                            className="avatar-hover-glow"
                          >
                            <Image
                              src={av.img}
                              alt={av.name}
                              fill
                              sizes="120px"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <span
                            className="font-orbitron"
                            style={{
                              fontSize: "clamp(0.65rem, 2.2vw, 0.85rem)",
                              fontWeight: 800,
                              color: feat.color === "pink"
                                ? "var(--neon-pink)"
                                : feat.color === "gold"
                                ? "var(--cyber-gold)"
                                : "var(--neon-cyan)",
                              letterSpacing: "0.03em",
                              textTransform: "uppercase",
                              lineHeight: 1.2,
                            }}
                          >
                            {av.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullet list */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {feat.details.map((detail) => (
                      <div
                        key={detail}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "var(--text-main)",
                        }}
                      >
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: feat.color === "pink"
                              ? "var(--neon-pink)"
                              : feat.color === "gold"
                              ? "var(--cyber-gold)"
                              : "var(--neon-cyan)",
                            boxShadow: feat.color === "pink"
                              ? "0 0 10px var(--neon-pink)"
                              : feat.color === "gold"
                              ? "0 0 10px var(--cyber-gold)"
                              : "0 0 10px var(--neon-cyan)",
                          }}
                        />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mockup Side */}
                <div
                  style={{
                    order: isEven ? 2 : 1,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <SamsungMockup
                    src={feat.screenshot}
                    alt={feat.title}
                    width={260}
                    height={540}
                    glowColor={feat.color}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .feature-card-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
