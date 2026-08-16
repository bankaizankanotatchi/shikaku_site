"use client";
import React from "react";
import Link from "next/link";
import { BadgeCheck, ShieldCheck, ChevronRight, Trophy, Share2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CertificationCTA() {
  return (
    <section
      style={{
        position: "relative",
        padding: "5rem 1.5rem",
        background: "linear-gradient(180deg, rgba(5, 2, 12, 1) 0%, rgba(15, 5, 30, 0.95) 50%, rgba(5, 2, 12, 1) 100%)",
        borderTop: "1px solid rgba(0, 240, 255, 0.15)",
        borderBottom: "1px solid rgba(0, 240, 255, 0.15)",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "300px",
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(255, 0, 110, 0.1) 50%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          className="cyber-glass-card"
          style={{
            padding: "clamp(2rem, 5vw, 4rem)",
            borderRadius: "28px",
            background: "linear-gradient(135deg, rgba(25, 10, 50, 0.9) 0%, rgba(10, 2, 22, 0.95) 100%)",
            border: "1px solid rgba(0, 240, 255, 0.35)",
            boxShadow: "0 0 40px rgba(0, 240, 255, 0.15)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Left Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "30px",
                  background: "rgba(0, 240, 255, 0.12)",
                  border: "1px solid rgba(0, 240, 255, 0.35)",
                  color: "var(--neon-cyan)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-orbitron)",
                  marginBottom: "1.2rem",
                }}
              >
                <BadgeCheck size={16} />
                BADGE BLEU & COMPTES CERTIFIÉS
              </motion.div>

              <h2
                className="font-orbitron"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: "1.2rem",
                }}
              >
                DEVENEZ UN JOUEUR <span className="text-gradient-cyan-pink">CERTIFIÉ SHIKAKU</span>
              </h2>

              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.8rem" }}>
                Débloquez le badge bleu officiel sur votre profil, la possibilité de créer vos propres tournois pour la communauté et le droit d&apos;effectuer des publications sur le Fil Social !
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "#fff", fontSize: "0.95rem" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(0, 240, 255, 0.15)", color: "var(--neon-cyan)", display: "flex", alignItems: "center", justifyContent: "center" }}>✓</div>
                  <strong>Validation Gratuite :</strong> Complétez la timeline des 6 conditions de jeu.
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "#fff", fontSize: "0.95rem" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(255, 215, 0, 0.15)", color: "var(--cyber-gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>⚡</div>
                  <strong>Pass Express (19 999 FCFA) :</strong> Attribution immédiate via Mobile Money.
                </div>
              </div>

              <Link
                href="/certification"
                className="btn-cyber-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  padding: "0.95rem 2rem",
                  borderRadius: "40px",
                  textDecoration: "none",
                  color: "#dfe616ff",
                  fontWeight: 800,
                  fontSize: "1rem",
                }}
              >
                GUIDE DE CERTIFICATION & TIMELINE
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Right Card Feature Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "18px",
                  background: "rgba(10, 3, 24, 0.8)",
                  border: "1px solid rgba(0, 240, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                }}
              >
                <div style={{ padding: "0.8rem", borderRadius: "12px", background: "rgba(0, 240, 255, 0.12)", color: "var(--neon-cyan)" }}>
                  <BadgeCheck size={28} />
                </div>
                <div>
                  <h3 className="font-orbitron" style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 800 }}>
                    Badge Bleu Officiel
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                    Visibilité maximale sur votre profil et les classements.
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "18px",
                  background: "rgba(10, 3, 24, 0.8)",
                  border: "1px solid rgba(255, 215, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                }}
              >
                <div style={{ padding: "0.8rem", borderRadius: "12px", background: "rgba(255, 215, 0, 0.12)", color: "var(--cyber-gold)" }}>
                  <Trophy size={28} />
                </div>
                <div>
                  <h3 className="font-orbitron" style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 800 }}>
                    Création de Tournois
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                    Organisez des compétitions avec cash prizes personnalisés.
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "18px",
                  background: "rgba(10, 3, 24, 0.8)",
                  border: "1px solid rgba(255, 0, 110, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                }}
              >
                <div style={{ padding: "0.8rem", borderRadius: "12px", background: "rgba(255, 0, 110, 0.12)", color: "var(--neon-pink)" }}>
                  <Share2 size={28} />
                </div>
                <div>
                  <h3 className="font-orbitron" style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 800 }}>
                    Publications Sociales
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                    Partagez messages, images et vidéos sur le fil d&apos;actualité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
