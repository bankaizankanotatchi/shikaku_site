"use client";
import React, { useState } from "react";
import RobotMascotWeb from "./RobotMascotWeb";
import { motion } from "framer-motion";
import { MessageSquare, Target, Lightbulb, Flame, Palette, ShieldCheck, Sparkles, Award } from "lucide-react";

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
  { id: "classic", name: "Classique", color: "#7F56D9", pts: 0, desc: "Débloqué par défaut" },
  { id: "emerald", name: "Émeraude", color: "#00E676", pts: 25, desc: "25 Points accumulés" },
  { id: "ruby", name: "Rubis", color: "#FF1744", pts: 50, desc: "50 Points accumulés" },
  { id: "cyan", name: "Cyan Cyber", color: "#00E5FF", pts: 100, desc: "100 Points accumulés" },
  { id: "gold", name: "Or (Divin)", color: "#FFD700", pts: 200, desc: "200 Points accumulés" },
];

export default function MascotSection() {
  const [activeTip, setActiveTip] = useState(0);
  const [selectedSkin, setSelectedSkin] = useState(mascotSkins[0]);

  return (
    <section
      id="mascot"
      style={{
        position: "relative",
        padding: "5rem 1.5rem",
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
        {/* Mobile & Section Header Badge */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1.1rem",
              borderRadius: "30px",
              background: "rgba(0, 240, 255, 0.12)",
              border: "1px solid rgba(0, 240, 255, 0.35)",
              color: "var(--neon-cyan)",
              fontSize: "0.85rem",
              fontWeight: 800,
              fontFamily: "var(--font-orbitron)",
              letterSpacing: "0.08em",
              marginBottom: "0.8rem",
              boxShadow: "0 0 15px rgba(0, 240, 255, 0.2)",
            }}
          >
            <Sparkles size={15} />
            NOTRE MASCOTTE
          </motion.div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
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
                width: "270px",
                height: "270px",
                borderRadius: "45px",
                background: "rgba(18, 10, 36, 0.85)",
                border: `3px solid ${selectedSkin.color}`,
                boxShadow: `0 0 45px ${selectedSkin.color}66, inset 0 0 20px ${selectedSkin.color}33`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                transition: "all 0.5s ease",
              }}
            >
              <RobotMascotWeb size={220} state="idle" skinColor={selectedSkin.color} />
            </div>

            {/* Dynamic Skin Picker */}
            <div
              style={{
                marginTop: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                padding: "0.55rem 1.1rem",
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
                    title={`${skin.name} (${skin.pts} Pts)`}
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

            {/* Skin Name & Unlock Info */}
            <div
              style={{
                marginTop: "0.8rem",
                textAlign: "center",
              }}
            >
              <div
                className="font-orbitron"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  color: selectedSkin.color,
                  letterSpacing: "0.05em",
                }}
              >
                SKIN SELECTIONNÉ : {selectedSkin.name.toUpperCase()}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  marginTop: "0.2rem",
                }}
              >
                {selectedSkin.pts === 0
                  ? "✓ Gratuit (Débloqué par défaut)"
                  : `🔒 Requis : ${selectedSkin.pts} Points accumulés en profil`}
              </div>
            </div>

            {/* Skin Unlocking Rule Explanation Box */}
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem 1.2rem",
                borderRadius: "16px",
                background: "rgba(10, 5, 24, 0.75)",
                border: "1px solid rgba(255, 215, 0, 0.3)",
                maxWidth: "340px",
                textAlign: "center",
              }}
            >
              <div
                className="font-orbitron"
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "var(--cyber-gold)",
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                }}
              >
                <Award size={14} /> DÉBLOCAGE DANS VOTRE PROFIL
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.45 }}>
                Les apparences se débloquent automatiquement dans le profil en accumulant des points de victoires (25 Pts Émeraude, 50 Pts Rubis, 100 Pts Cyan, 200 Pts Or Divin) <strong>sans jamais consommer vos jetons !</strong>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tips & Mascot Speech */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >


            <h2
              className="font-orbitron"
              style={{
                fontSize: "clamp(1.7rem, 4.5vw, 3rem)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "1.2rem",
              }}
            >
              L&apos;ESPRIT DE LA <br />
              <span className="text-gradient-cyan-pink">STRATÉGIE PARFAITE</span>
            </h2>

            {/* Mascot Interactive Speech Bubble */}
            <div
              className="cyber-glass-card"
              style={{
                padding: "1.5rem",
                marginBottom: "1.5rem",
                position: "relative",
                borderLeft: `4px solid ${selectedSkin.color}`,
              }}
            >
              <div
                style={{
                  fontSize: "1.05rem",
                  color: "#fff",
                  lineHeight: 1.65,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{mascotTips[activeTip].text}&rdquo;
              </div>

              <div
                style={{
                  marginTop: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: selectedSkin.color,
                  fontWeight: 700,
                  fontSize: "0.82rem",
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
                      padding: "0.9rem",
                      borderRadius: "16px",
                      background: isActive ? "rgba(255, 0, 127, 0.2)" : "rgba(18, 10, 36, 0.5)",
                      border: isActive ? "1px solid var(--neon-pink)" : "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Icon size={18} color={isActive ? "var(--neon-pink)" : "var(--neon-cyan)"} />
                    <div
                      className="font-orbitron"
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        marginTop: "0.4rem",
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
