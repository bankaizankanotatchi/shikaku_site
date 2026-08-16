"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import InteractiveGrid from "../components/InteractiveGrid";
import SamsungMockup from "../components/SamsungMockup";
import Image from "next/image";
import { Bot, Flame, Star, Zap } from "lucide-react";

const aiProfiles = [
  {
    name: "CYBER APPRENTI",
    stars: 1,
    color: "#00f0ff",
    borderColor: "rgba(0, 240, 255, 0.5)",
    glowColor: "rgba(0, 240, 255, 0.4)",
    bgColor: "rgba(0, 240, 255, 0.12)",
    image: "/images/assets/ai_beginner.png",
    tag: "DÉBUTANT",
    description: "Idéal pour appréhender le jeu, tester vos tactiques de base et prendre en main le positionnement des 4 sommets.",
    style: "Réponse instantanée • Placement élémentaire",
  },
  {
    name: "NEXUS-9 TACTIQUE",
    stars: 2,
    color: "#b026ff",
    borderColor: "rgba(176, 38, 255, 0.5)",
    glowColor: "rgba(176, 38, 255, 0.4)",
    bgColor: "rgba(176, 38, 255, 0.12)",
    image: "/images/assets/ai_intermediate.png",
    tag: "INTERMÉDIAIRE",
    description: "Un adversaire équilibré qui anticipe les pièges et cherche constamment à compléter des carrés 1x1 tout en vous bloquant.",
    style: "Tactique réfléchie • Blocage agressif",
  },
  {
    name: "OMEGA PRIME",
    stars: 3,
    color: "#ff0055",
    borderColor: "rgba(255, 0, 85, 0.5)",
    glowColor: "rgba(255, 0, 85, 0.4)",
    bgColor: "rgba(255, 0, 85, 0.12)",
    image: "/images/assets/ai_expert.png",
    tag: "EXPERT",
    description: "Calculateur suprême, impitoyable et d'une précision chirurgicale. Seuls les grands maîtres de la grille parviennent à l'emporter.",
    style: "Impitoyable • Précision absolue",
  },
];

export default function AIModesPage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", background: "var(--bg-deep)", overflowX: "hidden" }}>
      <div className="bg-orb-pink" style={{ top: "10%", left: "-10%" }} />
      <div className="bg-orb-cyan" style={{ top: "50%", right: "-10%" }} />

      <InteractiveGrid />
      <Navbar />

      <div className="subpage-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
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
            <Bot size={14} />
            ENTRAÎNEMENT & INTELLIGENCE ARTIFICIELLE
          </div>

          <h1
            className="font-orbitron"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            LES 3 ADVERSAIRES <span className="text-gradient-cyan-pink">ROBOTIQUES & DÉFI DU JOUR</span>
          </h1>

          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "680px", margin: "0 auto", lineHeight: 1.7 }}>
            Affrontez les IA adaptatives de l&apos;application pour perfectionner votre stratégie avant de vous lancer dans les tournois en ligne.
          </p>
        </div>

        {/* 3 AI Cards Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "2.5rem",
            marginBottom: "5rem",
          }}
        >
          {aiProfiles.map((ai) => (
            <div
              key={ai.name}
              className="cyber-glass-card"
              style={{
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                border: `1px solid ${ai.borderColor}`,
                boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
              }}
            >
              {/* AI Avatar */}
              <div
                style={{
                  position: "relative",
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: `4px solid ${ai.color}`,
                  boxShadow: `0 0 30px ${ai.glowColor}`,
                  marginBottom: "1.5rem",
                  background: "#0d061c",
                }}
              >
                <Image src={ai.image} alt={ai.name} fill sizes="130px" style={{ objectFit: "cover" }} />
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.8rem" }}>
                {[...Array(ai.stars)].map((_, i) => (
                  <Star key={i} size={18} fill={ai.color} color={ai.color} />
                ))}
              </div>

              <span
                className="font-orbitron"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: ai.color,
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  background: ai.bgColor,
                  marginBottom: "0.8rem",
                  border: `1px solid ${ai.borderColor}`,
                }}
              >
                {ai.tag}
              </span>

              <h2 className="font-orbitron" style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
                {ai.name}
              </h2>

              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                {ai.description}
              </p>

              <div
                style={{
                  marginTop: "auto",
                  padding: "0.8rem 1.2rem",
                  borderRadius: "14px",
                  background: "rgba(10, 5, 24, 0.8)",
                  border: `1px solid ${ai.borderColor}`,
                  color: ai.color,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-orbitron)",
                }}
              >
                {ai.style}
              </div>
            </div>
          ))}
        </div>

        {/* Daily Challenge Feature */}
        <div
          className="cyber-glass-card"
          style={{
            padding: "3rem",
            marginBottom: "5rem",
            background: "linear-gradient(135deg, rgba(20, 10, 42, 0.9) 0%, rgba(10, 5, 24, 0.95) 100%)",
            border: "1px solid rgba(255, 0, 127, 0.3)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="feature-card-grid">
            <div>
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
                  background: "rgba(255, 0, 127, 0.15)",
                  color: "var(--neon-pink)",
                }}
              >
                <Flame size={14} />
                ÉVÉNEMENT QUOTIDIEN
              </div>

              <h2 className="font-orbitron" style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", marginBottom: "1.2rem" }}>
                LE DÉFI DU JOUR SHIKAKU
              </h2>

              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Chaque jour à minuit, une grille surprise et une configuration d&apos;IA unique sont proposées à toute la communauté.
                Remportez le défi du jour pour accumuler des jetons et maintenir votre série de victoires (*streak*) !
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "#fff", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <Zap size={16} color="var(--neon-cyan)" /> Grille surprise renouvelée toutes les 24h
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <Zap size={16} color="var(--neon-pink)" /> Récompense de +5 Jetons Classiques crédités instantanément à chaque victoire !
                </li>
              </ul>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <SamsungMockup
                src="/images/screenshots/acceuil_2.jpeg"
                alt="Interface des cartes IA"
                width={280}
                height={560}
                glowColor="pink"
                label="SELECTION DES IA ET DÉFI"
              />
            </div>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
