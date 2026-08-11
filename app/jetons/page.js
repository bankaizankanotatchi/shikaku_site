"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import InteractiveGrid from "../components/InteractiveGrid";
import SamsungMockup from "../components/SamsungMockup";
import { Coins, Wallet, ShoppingBag, Trophy, Zap, ShieldCheck, CheckCircle2, Bot, Globe } from "lucide-react";

export default function JetonsPage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", background: "var(--bg-deep)", overflowX: "hidden" }}>
      <div className="bg-orb-cyan" style={{ top: "10%", left: "-10%" }} />
      <div className="bg-orb-pink" style={{ top: "50%", right: "-10%" }} />

      <InteractiveGrid />
      <Navbar />

      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "8rem 1.5rem 6rem 1.5rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Page Title */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "30px",
              background: "rgba(255, 215, 0, 0.15)",
              border: "1px solid rgba(255, 215, 0, 0.4)",
              color: "var(--cyber-gold)",
              fontSize: "0.8rem",
              fontWeight: 700,
              fontFamily: "var(--font-orbitron)",
              marginBottom: "1rem",
            }}
          >
            <Coins size={14} />
            GUIDE EXACT DE L&apos;ÉCONOMIE SHIKAKU
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
            OBTENTION DES JETONS & <span className="text-gradient-gold">CASH-OUT MOBILE MONEY</span>
          </h1>

          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "720px", margin: "0 auto", lineHeight: 1.7 }}>
            Voici le barème exact d&apos;obtention des jetons dans l&apos;application mobile, la différence stricte entre Jetons Classiques et Jetons Éligibles au Retrait.
          </p>
        </div>

        {/* Exact Gains per Mode (Codebase Copy-Paste) */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 className="font-orbitron" style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>
            BARÈME EXACT DES GAINS DE JETONS DANS LE JEU
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "2rem",
            marginBottom: "5rem",
          }}
        >
          {/* AI Beginner */}
          <div className="cyber-glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--neon-cyan)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyBetween: "space-between", gap: "1rem", marginBottom: "1rem" }}>
              <Bot color="var(--neon-cyan)" size={24} />
              <span className="font-orbitron" style={{ color: "var(--neon-cyan)", fontWeight: 800, fontSize: "1.2rem", marginLeft: "auto" }}>
                +1 JETON
              </span>
            </div>
            <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              CYBER APPRENTI (IA Débutant)
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Remportez un match contre l&apos;IA Cyber Apprenti pour créditer +1 Jeton classique à votre solde.
            </p>
          </div>

          {/* AI Intermediate */}
          <div className="cyber-glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--neon-purple)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Bot color="var(--neon-purple)" size={24} />
              <span className="font-orbitron" style={{ color: "var(--neon-purple)", fontWeight: 800, fontSize: "1.2rem", marginLeft: "auto" }}>
                +2 JETONS
              </span>
            </div>
            <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              NEXUS-9 TACTIQUE (IA Intermédiaire)
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Déjuez la défense de NEXUS-9 Tactique pour empocher +2 Jetons à chaque victoire.
            </p>
          </div>

          {/* AI Expert */}
          <div className="cyber-glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--neon-pink)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Bot color="var(--neon-pink)" size={24} />
              <span className="font-orbitron" style={{ color: "var(--neon-pink)", fontWeight: 800, fontSize: "1.2rem", marginLeft: "auto" }}>
                +3 JETONS
              </span>
            </div>
            <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              OMEGA PRIME (IA Expert)
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Battez le calculateur suprême Omega Prime pour remporter +3 Jetons bonus.
            </p>
          </div>

          {/* Online Match Win */}
          <div className="cyber-glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--cyber-gold)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Globe color="var(--cyber-gold)" size={24} />
              <span className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800, fontSize: "1.2rem", marginLeft: "auto" }}>
                +4 JETONS
              </span>
            </div>
            <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              MATCH EN LIGNE 1v1
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Chaque victoire en duel multijoueur 1v1 en ligne vous octroie +4 Jetons immédiats.
            </p>
          </div>

          {/* Daily Challenge Win */}
          <div className="cyber-glass-card" style={{ padding: "2rem", borderLeft: "4px solid #00E676" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Zap color="#00E676" size={24} />
              <span className="font-orbitron" style={{ color: "#00E676", fontWeight: 800, fontSize: "1.2rem", marginLeft: "auto" }}>
                +5 JETONS
              </span>
            </div>
            <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              DÉFI QUOTIDIEN GAGNÉ
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Remportez le Défi Quotidien du jour pour créditer +5 Jetons Classiques à votre solde.
            </p>
          </div>
        </div>

        {/* Fundamental Distinction: Jetons Classiques vs Éligibles */}
        <div
          className="cyber-glass-card"
          style={{
            padding: "clamp(1.2rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2.5rem)",
            marginBottom: "5rem",
            background: "linear-gradient(135deg, rgba(20, 10, 42, 0.95) 0%, rgba(10, 5, 24, 0.98) 100%)",
            border: "1px solid rgba(255, 215, 0, 0.4)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
                background: "rgba(255, 215, 0, 0.15)",
                color: "var(--cyber-gold)",
              }}
            >
              <ShieldCheck size={14} />
              DISTINCTION LOGIQUE DANS LE CODE DE L&apos;APPLICATION
            </div>

            <h2 className="font-orbitron" style={{ fontSize: "clamp(1.2rem, 4.5vw, 2rem)", fontWeight: 900, color: "#fff", wordBreak: "break-word" }}>
              JETONS CLASSIQUES (EARN) VS JETONS ÉLIGIBLES (PURCHASE / CASH-OUT)
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.5rem" }}>
            {/* Classic Tokens */}
            <div
              style={{
                padding: "2rem",
                borderRadius: "20px",
                background: "rgba(10, 5, 24, 0.8)",
                border: "1px solid rgba(0, 240, 255, 0.2)",
              }}
            >
              <h3 className="font-orbitron" style={{ color: "var(--neon-cyan)", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>
                🎯 JETONS CLASSIQUES (EARN)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                Gagnés en affrontant les IA, lors des défis ou dans les matchs 1v1 standards.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem", fontSize: "0.9rem", color: "#fff" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--neon-cyan)" /> Jetons de pratique et de progression
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--neon-cyan)" /> Accès aux matchs et tournois classiques
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--text-muted)" }}>
                  ❌ NON ÉLIGIBLES AU RETRAIT CASH DIRECT
                </li>
              </ul>
            </div>

            {/* Eligible Tokens */}
            <div
              style={{
                padding: "2rem",
                borderRadius: "20px",
                background: "rgba(20, 10, 42, 0.9)",
                border: "2px solid var(--cyber-gold)",
                boxShadow: "0 0 25px rgba(255, 215, 0, 0.25)",
              }}
            >
              <h3 className="font-orbitron" style={{ color: "var(--cyber-gold)", fontSize: "1.4rem", fontWeight: 900, marginBottom: "1rem" }}>
                ⭐ JETONS ÉLIGIBLES (PURCHASE & CAGNOTTE TOURNOI)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                Achetés en boutique ou remportés lors des victoires de tournois officiels avec cagnottes d&apos;éligibles.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem", fontSize: "0.9rem", color: "#fff" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--cyber-gold)" /> Inscription aux tournois majeurs à grands prix
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--cyber-gold)" /> <strong>CONVERTIBLES EN CASH REEL FCFA (1 Jeton = 5 FCFA)</strong>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--cyber-gold)" /> Retrait direct sur Mobile Money (MTN & Orange)
                </li>
              </ul>
            </div>
          </div>

          {/* Shop Packs Breakdown */}
          <div style={{ marginTop: "3.5rem" }}>
            <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 800, textAlign: "center", marginBottom: "1.5rem" }}>
              PACKS DE JETONS DISPONIBLES EN BOUTIQUE (SHOP PACKS)
            </h3>

            <div className="shop-packs-container">
              <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
                <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800 }}>PACK STARTER</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>100 Jetons</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>500 FCFA</div>
              </div>
              <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
                <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800 }}>PACK JOUEUR</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>200 Jetons</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>1 000 FCFA</div>
              </div>
              <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
                <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800 }}>PACK PRO</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>300 Jetons</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>1 500 FCFA</div>
              </div>
              <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
                <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800 }}>PACK EXPERT</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>400 Jetons</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>2 000 FCFA</div>
              </div>
              <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
                <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800 }}>PACK CHAMPION</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>500 Jetons</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>2 500 FCFA</div>
              </div>
              <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid var(--cyber-gold)" }}>
                <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 900 }}>PACK LEGEND</div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem" }}>1 000 Jetons</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>5 000 FCFA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mockups Showcase */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 className="font-orbitron" style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>
            CAPTURES ÉCRAN : BOUTIQUE ET PORTEFEUILLE
          </h2>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap" }}>
          <SamsungMockup
            src="/images/screenshots/boutique.jpeg"
            alt="Boutique des Jetons Mobile Money"
            width={280}
            height={560}
            glowColor="gold"
            label="BOUTIQUE SHIKAKU (PACKS DE JETONS)"
          />
          <SamsungMockup
            src="/images/screenshots/portefeuile.jpeg"
            alt="Portefeuille & Demande de Retrait"
            width={280}
            height={560}
            glowColor="cyan"
            label="PORTEFEUILLE & SOLDE ÉLIGIBLE"
          />
        </div>
      </div>

      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
