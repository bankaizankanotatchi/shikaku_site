"use client";
import React, { useState } from "react";
import RobotMascotWeb from "./RobotMascotWeb";
import { motion } from "framer-motion";
import { MessageSquare, Target, Lightbulb, Flame, Palette } from "lucide-react";

const mascotTips = [
  {
    title: "Le Piège du 3ème Côté",
    text: "Ne posez jamais le 3ème côté d'un carré sans pouvoir le fermer immédiatement ! Vous offririez un point gratuit à votre adversaire.",
    icon: Target,
  },
  {
    title: "Combos & Multi-Carrés",
    text: "Positionnez vos segments pour pouvoir fermer 2 voire 3 carrés en un seul coup stratégique !",
    icon: Flame,
  },
  {
    title: "Gestion du Chrono 15s",
    text: "Utilisez les 15 secondes pour pousser votre adversaire à la faute sous la pression du temps.",
    icon: Lightbulb,
  },
];

const mascotSkins = [
  { id: "classic", name: "Classique", color: "#7F56D9" },
  { id: "emerald", name: "Émeraude", color: "#00E676" },
  { id: "ruby", name: "Rubis", color: "#FF1744" },
  { id: "cyan", name: "Cyan Cyber", color: "#00E5FF" },
  { id: "gold", name: "Or (Divin)", color: "#FFD700" },
];

export default function MascotSection() {
  const [activeTip, setActiveTip] = useState(0);
  const [selectedSkin, setSelectedSkin] = useState(mascotSkins[0]);

  return (
    <section
      id="mascot"
      style={{
        position: "relative",
        padding: "6rem 1.5rem",
        background: "radial-gradient(ellipse at bottom, rgba(15, 8, 38, 0.9) 0%, rgba(5, 2, 12, 1) 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Ambient Orb */}
      <div className="bg-orb-pink" style={{ top: "20%", left: "-10%" }} />

      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="mascot-grid"
        >
          {/* Left Column: Vector Robot Mascot Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Mascot Container */}
            <div
              style={{
                position: "relative",
                width: "290px",
                height: "290px",
                borderRadius: "45px",
                background: "rgba(18, 10, 36, 0.85)",
                border: `3px solid ${selectedSkin.color}`,
                boxShadow: `0 0 50px ${selectedSkin.color}66, inset 0 0 20px ${selectedSkin.color}33`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                transition: "all 0.5s ease",
              }}
            >
              <RobotMascotWeb size={240} state="idle" skinColor={selectedSkin.color} />
            </div>

            {/* Dynamic Skin Picker */}
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                padding: "0.6rem 1.2rem",
                borderRadius: "30px",
                background: "rgba(10, 5, 24, 0.8)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Palette size={16} color="var(--neon-cyan)" />
              <span
                className="font-orbitron"
                style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)" }}
              >
                SKINS :
              </span>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {mascotSkins.map((skin) => (
                  <button
                    key={skin.id}
                    onClick={() => setSelectedSkin(skin)}
                    title={skin.name}
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: skin.color,
                      border: selectedSkin.id === skin.id ? "2px solid #fff" : "none",
                      boxShadow: selectedSkin.id === skin.id ? `0 0 12px ${skin.color}` : "none",
                      cursor: "pointer",
                      transition: "transform 0.2s ease",
                      transform: selectedSkin.id === skin.id ? "scale(1.25)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Skin Name Display */}
            <div
              className="font-orbitron"
              style={{
                marginTop: "0.8rem",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: selectedSkin.color,
              }}
            >
              SKIN DU ROBOT : {selectedSkin.name.toUpperCase()}
            </div>
          </motion.div>

          {/* Right Column: Tips & Mascot Speech */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
              <MessageSquare size={14} />
              CONSEILS TACTIQUES DU ROBOT
            </div>

            <h2
              className="font-orbitron"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "1.5rem",
              }}
            >
              L&apos;ESPRIT DE LA <br />
              <span className="text-gradient-cyan-pink">STRATÉGIE PARFAITE</span>
            </h2>

            {/* Mascot Interactive Speech Bubble */}
            <div
              className="cyber-glass-card"
              style={{
                padding: "2rem",
                marginBottom: "2rem",
                position: "relative",
                borderLeft: `4px solid ${selectedSkin.color}`,
              }}
            >
              <div
                style={{
                  fontSize: "1.15rem",
                  color: "#fff",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{mascotTips[activeTip].text}&rdquo;
              </div>

              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: selectedSkin.color,
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-orbitron)",
                }}
              >
                <span>— Robot Mascotte Shikaku</span>
                <span>Astuce #{activeTip + 1}</span>
              </div>
            </div>

            {/* Tips Selector Cards */}
            <div className="mascot-tips-grid">
              {mascotTips.map((tip, idx) => {
                const Icon = tip.icon;
                const isActive = activeTip === idx;

                return (
                  <button
                    key={tip.title}
                    onClick={() => setActiveTip(idx)}
                    style={{
                      padding: "1rem",
                      borderRadius: "16px",
                      background: isActive ? "rgba(255, 0, 127, 0.2)" : "rgba(18, 10, 36, 0.5)",
                      border: isActive ? "1px solid var(--neon-pink)" : "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Icon size={20} color={isActive ? "var(--neon-pink)" : "var(--neon-cyan)"} />
                    <div
                      className="font-orbitron"
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        marginTop: "0.5rem",
                        color: isActive ? "#fff" : "var(--text-muted)",
                      }}
                    >
                      {tip.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
