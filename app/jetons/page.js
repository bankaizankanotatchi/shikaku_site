"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InteractiveGrid from "../components/InteractiveGrid";
import SamsungMockup from "../components/SamsungMockup";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Coins, CheckCircle2, ShieldCheck, Zap, Bot, Globe, ArrowRight, CreditCard, Sparkles, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function JetonsPage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", background: "var(--bg-deep)", overflowX: "hidden" }}>
      {/* Background Ambient Orbs */}
      <div className="bg-orb-cyan" style={{ top: "10%", right: "-5%" }} />
      <div className="bg-orb-pink" style={{ top: "45%", left: "-10%" }} />
      <div className="bg-orb-purple" style={{ bottom: "10%", right: "15%" }} />

      <InteractiveGrid />
      <Navbar />

      <div className="section-container" style={{ paddingTop: "8rem", paddingBottom: "5rem", position: "relative", zIndex: 10 }}>
        {/* Header Section */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1.2rem",
              borderRadius: "30px",
              background: "rgba(255, 215, 0, 0.1)",
              border: "1px solid rgba(255, 215, 0, 0.3)",
              color: "var(--cyber-gold)",
              fontSize: "0.85rem",
              fontWeight: 800,
              fontFamily: "var(--font-orbitron)",
              marginBottom: "1.2rem",
            }}
          >
            <Coins size={16} />
            SYSTÈME ÉCONOMIQUE & JETONS SHIKAKU
          </div>

          <h1
            className="font-orbitron"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            COMMENT OBTENIR ET UTILISER LES <span style={{ color: "var(--cyber-gold)" }}>JETONS</span> ?
          </h1>

          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
            Découvrez comment accumuler des jetons gratuitement en jouant contre nos IA ou participez aux tournois majeurs avec des jetons éligibles convertibles en cash réel FCFA.
          </p>
        </div>

        {/* 2 Types of Tokens Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", marginBottom: "4.5rem" }}>
          {/* Classique Tokens Card */}
          <div
            className="cyber-glass-card"
            style={{
              padding: "2.5rem 2rem",
              borderRadius: "24px",
              border: "1px solid rgba(0, 240, 255, 0.3)",
              background: "linear-gradient(135deg, rgba(20, 10, 45, 0.8) 0%, rgba(8, 2, 20, 0.9) 100%)",
            }}
          >
            <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "rgba(0, 240, 255, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
              <Coins size={32} color="var(--neon-cyan)" />
            </div>

            <span className="font-orbitron" style={{ color: "var(--neon-cyan)", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "1px" }}>
              TYPE 1 : RECOMPENSE DE JEU
            </span>

            <h2 className="font-orbitron" style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 800, margin: "0.5rem 0 1rem 0" }}>
              JETONS CLASSIQUES (GRATUITS)
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Gagnés gratuitement en affrontant les IA du jeu ou en participant aux défis quotidiens. Ils permettent de s&apos;entraîner et de débloquer du contenu cosmétique.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", fontSize: "0.9rem", color: "var(--text-main)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="var(--neon-cyan)" /> Victoires contre l&apos;IA (Apprenti, Tactique, Expert)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="var(--neon-cyan)" /> Victoires en matchs amicaux 1v1
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="var(--neon-cyan)" /> Récompenses des défis quotidiens
              </li>
            </ul>
          </div>

          {/* Eligible Tokens Card */}
          <div
            className="cyber-glass-card"
            style={{
              padding: "2.5rem 2rem",
              borderRadius: "24px",
              border: "2px solid var(--cyber-gold)",
              background: "linear-gradient(135deg, rgba(35, 20, 10, 0.85) 0%, rgba(15, 8, 3, 0.95) 100%)",
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.15)",
            }}
          >
            <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "rgba(255, 215, 0, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
              <Zap size={32} color="var(--cyber-gold)" />
            </div>

            <span className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "1px" }}>
              TYPE 2 : RETIRABLES EN CASH FCFA
            </span>

            <h2 className="font-orbitron" style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 800, margin: "0.5rem 0 1rem 0" }}>
              JETONS ÉLIGIBLES (VALEUR RÉELLE)
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Issus de vos achats directs en boutique ou de vos victoires en tournois officiels. Ils possèdent une valeur monétaire réelle et sont <strong>retirables directement vers Mobile Money, Carte Visa ou Banque</strong>.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", fontSize: "0.9rem", color: "#fff" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="var(--cyber-gold)" /> Achats de packs en boutique (Mobile Money / Carte)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="var(--cyber-gold)" /> <strong>CONVERTIBLES : 1 JETON ÉLIGIBLE = 5 FCFA XAF</strong>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="var(--cyber-gold)" /> Retraits instantanés dès 50 Jetons (250 FCFA)
              </li>
            </ul>
          </div>
        </div>

        {/* How to Earn Free Tokens */}
        <div style={{ marginBottom: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 className="font-orbitron" style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>
              TABLEAU DES RÉCOMPENSES GRATUITES
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "0.5rem" }}>
              Accumulez des jetons gratuits à chaque victoire dans les différents modes de jeu
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {/* AI Beginner */}
            <div className="cyber-glass-card" style={{ padding: "1.8rem", borderLeft: "4px solid var(--neon-cyan)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <Bot color="var(--neon-cyan)" size={24} />
                <span className="font-orbitron" style={{ color: "var(--neon-cyan)", fontWeight: 800, fontSize: "1.2rem", marginLeft: "auto" }}>
                  +1 JETON
                </span>
              </div>
              <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                CYBER APPRENTI (IA Débutant)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                Remportez un match contre l&apos;IA Cyber Apprenti pour créditer +1 Jeton classique à votre solde.
              </p>
            </div>

            {/* AI Intermediate */}
            <div className="cyber-glass-card" style={{ padding: "1.8rem", borderLeft: "4px solid var(--neon-purple)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <Bot color="var(--neon-purple)" size={24} />
                <span className="font-orbitron" style={{ color: "var(--neon-purple)", fontWeight: 800, fontSize: "1.2rem", marginLeft: "auto" }}>
                  +2 JETONS
                </span>
              </div>
              <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                NEXUS-9 TACTIQUE (IA Intermédiaire)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                Déjuez la défense de NEXUS-9 Tactique pour empocher +2 Jetons à chaque victoire.
              </p>
            </div>

            {/* AI Expert */}
            <div className="cyber-glass-card" style={{ padding: "1.8rem", borderLeft: "4px solid var(--neon-pink)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <Bot color="var(--neon-pink)" size={24} />
                <span className="font-orbitron" style={{ color: "var(--neon-pink)", fontWeight: 800, fontSize: "1.2rem", marginLeft: "auto" }}>
                  +3 JETONS
                </span>
              </div>
              <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                OMEGA PRIME (IA Expert)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                Battez le calculateur suprême Omega Prime pour remporter +3 Jetons bonus.
              </p>
            </div>

            {/* Online Match Win */}
            <div className="cyber-glass-card" style={{ padding: "1.8rem", borderLeft: "4px solid var(--cyber-gold)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <Globe color="var(--cyber-gold)" size={24} />
                <span className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800, fontSize: "1.2rem", marginLeft: "auto" }}>
                  +4 JETONS
                </span>
              </div>
              <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                MATCH EN LIGNE 1v1
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                Chaque victoire en duel multijoueur 1v1 en ligne vous octroie +4 Jetons immédiats.
              </p>
            </div>

            {/* Daily Challenge Win */}
            <div className="cyber-glass-card" style={{ padding: "1.8rem", borderLeft: "4px solid #00E676" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <Zap color="#00E676" size={24} />
                <span className="font-orbitron" style={{ color: "#00E676", fontWeight: 800, fontSize: "1.2rem", marginLeft: "auto" }}>
                  +5 JETONS
                </span>
              </div>
              <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                DÉFI QUOTIDIEN GAGNÉ
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                Remportez le Défi Quotidien du jour pour créditer +5 Jetons Classiques à votre solde.
              </p>
            </div>
          </div>
        </div>

        {/* Shop Packs Section */}
        <div style={{ marginBottom: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2 className="font-orbitron" style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>
              PACKS DE JETONS DISPONIBLES EN BOUTIQUE (SHOP PACKS)
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "0.5rem" }}>
              Rechargez votre solde de jetons éligibles directement depuis l&apos;application mobile
            </p>
          </div>

          <div className="shop-packs-container" style={{ marginBottom: "2.5rem" }}>
            <div style={{ padding: "1.2rem", borderRadius: "14px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
              <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800 }}>PACK STARTER</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>100 Jetons</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>500 FCFA</div>
            </div>
            <div style={{ padding: "1.2rem", borderRadius: "14px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
              <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800 }}>PACK JOUEUR</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>200 Jetons</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>1 000 FCFA</div>
            </div>
            <div style={{ padding: "1.2rem", borderRadius: "14px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
              <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800 }}>PACK PRO</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>300 Jetons</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>1 500 FCFA</div>
            </div>
            <div style={{ padding: "1.2rem", borderRadius: "14px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
              <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800 }}>PACK EXPERT</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>400 Jetons</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>2 000 FCFA</div>
            </div>
            <div style={{ padding: "1.2rem", borderRadius: "14px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
              <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800 }}>PACK CHAMPION</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>500 Jetons</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>2 500 FCFA</div>
            </div>
            <div style={{ padding: "1.2rem", borderRadius: "14px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid var(--cyber-gold)", boxShadow: "0 0 15px rgba(255,215,0,0.2)" }}>
              <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 900 }}>PACK ÉLITE</div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem" }}>1 000 Jetons</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>5 000 FCFA</div>
            </div>
          </div>

          {/* Fee Structure Transparency Breakdown Card */}
          <div
            className="cyber-glass-card"
            style={{
              padding: "2rem",
              borderRadius: "20px",
              border: "1px solid rgba(0, 240, 255, 0.4)",
              background: "linear-gradient(135deg, rgba(10, 20, 45, 0.9) 0%, rgba(5, 10, 25, 0.95) 100%)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
              <CreditCard color="var(--neon-cyan)" size={24} />
              <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 800 }}>
                TRANSPARENCE DES FRAIS DE PAIEMENT (FEE STRUCTURE)
              </h3>
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Les prix affichés dans la boutique ci-dessus représentent le <strong>prix de base net des jetons</strong>. Lors du passage en caisse (Checkout Tara Money), des frais d&apos;opérateur sont calculés en toute transparence selon le mode de paiement choisi :
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(0, 255, 136, 0.08)", border: "1px solid rgba(0, 255, 136, 0.3)" }}>
                <div style={{ color: "#00FF88", fontWeight: 800, fontSize: "0.85rem" }}>🇨🇲 MOBILE MONEY CAMEROUN</div>
                <div style={{ color: "#fff", fontWeight: 900, fontSize: "1.3rem", marginTop: "0.2rem" }}>+ 3 %</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.2rem" }}>MTN & Orange Money Cameroun</div>
              </div>

              <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(0, 212, 255, 0.08)", border: "1px solid rgba(0, 212, 255, 0.3)" }}>
                <div style={{ color: "#00d4ff", fontWeight: 800, fontSize: "0.85rem" }}>🌍 MOBILE MONEY AFRIQUE</div>
                <div style={{ color: "#fff", fontWeight: 900, fontSize: "1.3rem", marginTop: "0.2rem" }}>+ 7 %</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.2rem" }}>Moov, Wave, Airtel, Moov CI, etc.</div>
              </div>

              <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(255, 0, 128, 0.08)", border: "1px solid rgba(255, 0, 128, 0.3)" }}>
                <div style={{ color: "#ff0080", fontWeight: 800, fontSize: "0.85rem" }}>💳 CARTES BANCAIRES</div>
                <div style={{ color: "#fff", fontWeight: 900, fontSize: "1.3rem", marginTop: "0.2rem" }}>+ 11 %</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.2rem" }}>Visa & Mastercard International</div>
              </div>

              <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(255, 215, 0, 0.08)", border: "1px solid rgba(255, 215, 0, 0.4)" }}>
                <div style={{ color: "var(--cyber-gold)", fontWeight: 800, fontSize: "0.85rem" }}>👑 COMPTE CERTIFIÉ</div>
                <div style={{ color: "#fff", fontWeight: 900, fontSize: "1.3rem", marginTop: "0.2rem" }}>0 % (EXONÉRÉ)</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.2rem" }}>Tarif fixe net de 19 999 FCFA</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
              <AlertCircle size={16} color="var(--neon-cyan)" />
              <em>Exemple : Pour un pack à 1 000 FCFA par Mobile Money Cameroun (+3%), le montant final facturé sur Tara Money est de 1 030 FCFA.</em>
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
