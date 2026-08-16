"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InteractiveGrid from "../components/InteractiveGrid";
import SamsungMockup from "../components/SamsungMockup";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Coins, CheckCircle2, ShieldCheck, Zap, Bot, Globe, ArrowRight, CreditCard, Sparkles, AlertCircle, Smartphone, Crown } from "lucide-react";
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

      <div className="subpage-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header Section */}
        <div className="subpage-header" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem auto" }}>
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
              marginBottom: "1rem",
            }}
          >
            <Coins size={16} />
            SYSTÈME ÉCONOMIQUE & JETONS SHIKAKU
          </div>

          <h1
            className="font-orbitron"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1.2rem",
            }}
          >
            COMMENT OBTENIR ET UTILISER LES <span style={{ color: "var(--cyber-gold)" }}>JETONS</span> ?
          </h1>

          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Découvrez comment accumuler des jetons gratuitement en jouant contre nos IA ou participez aux tournois majeurs avec des jetons éligibles convertibles en cash réel FCFA.
          </p>
        </div>

        {/* 2 Types of Tokens Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {/* Classique Tokens Card */}
          <div
            className="cyber-glass-card"
            style={{
              padding: "2rem 1.5rem",
              borderRadius: "24px",
              border: "1px solid rgba(0, 240, 255, 0.3)",
              background: "linear-gradient(135deg, rgba(20, 10, 45, 0.8) 0%, rgba(8, 2, 20, 0.9) 100%)",
            }}
          >
            <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(0, 240, 255, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.2rem" }}>
              <Coins size={28} color="var(--neon-cyan)" />
            </div>

            <span className="font-orbitron" style={{ color: "var(--neon-cyan)", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "1px" }}>
              TYPE 1 : RECOMPENSE DE JEU
            </span>

            <h2 className="font-orbitron" style={{ color: "#fff", fontSize: "1.45rem", fontWeight: 800, margin: "0.4rem 0 0.8rem 0" }}>
              JETONS CLASSIQUES (GRATUITS)
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.5, marginBottom: "1.2rem" }}>
              Gagnés gratuitement en affrontant les IA du jeu ou en participant aux défis quotidiens. Ils permettent de s&apos;entraîner et de débloquer du contenu cosmétique.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem", fontSize: "0.88rem", color: "var(--text-main)" }}>
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
              padding: "2rem 1.5rem",
              borderRadius: "24px",
              border: "2px solid var(--cyber-gold)",
              background: "linear-gradient(135deg, rgba(35, 20, 10, 0.85) 0%, rgba(15, 8, 3, 0.95) 100%)",
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.15)",
            }}
          >
            <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(255, 215, 0, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.2rem" }}>
              <Zap size={28} color="var(--cyber-gold)" />
            </div>

            <span className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "1px" }}>
              TYPE 2 : RETIRABLES EN CASH FCFA
            </span>

            <h2 className="font-orbitron" style={{ color: "#fff", fontSize: "1.45rem", fontWeight: 800, margin: "0.4rem 0 0.8rem 0" }}>
              JETONS ÉLIGIBLES (VALEUR RÉELLE)
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.5, marginBottom: "1.2rem" }}>
              Issus de vos achats directs en boutique ou de vos victoires en tournois officiels. Ils possèdent une valeur monétaire réelle et sont <strong>retirables directement vers Mobile Money, Carte Visa ou Banque</strong>.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem", fontSize: "0.88rem", color: "#fff" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="var(--cyber-gold)" /> Achats de packs en boutique (Mobile Money / Carte)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="var(--cyber-gold)" /> <strong>CONVERTIBLES : 1 JETON ÉLIGIBLE = 5 FCFA XAF</strong>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="var(--cyber-gold)" /> Retraits instantanés dès 1 000 Jetons (5 000 FCFA)
              </li>
            </ul>
          </div>
        </div>

        {/* How to Earn Free Tokens */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            <h2 className="font-orbitron" style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff" }}>
              TABLEAU DES RÉCOMPENSES GRATUITES
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.4rem" }}>
              Accumulez des jetons gratuits à chaque victoire dans les différents modes de jeu
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.2rem" }}>
            {/* AI Beginner */}
            <div className="cyber-glass-card" style={{ padding: "1.4rem 1.2rem", borderLeft: "4px solid var(--neon-cyan)", marginBottom: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                <Bot color="var(--neon-cyan)" size={22} />
                <span className="font-orbitron" style={{ color: "var(--neon-cyan)", fontWeight: 800, fontSize: "1.1rem", marginLeft: "auto" }}>
                  +1 JETON
                </span>
              </div>
              <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                CYBER APPRENTI (IA Débutant)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Remportez un match contre l&apos;IA Cyber Apprenti pour créditer +1 Jeton classique à votre solde.
              </p>
            </div>

            {/* AI Intermediate */}
            <div className="cyber-glass-card" style={{ padding: "1.4rem 1.2rem", borderLeft: "4px solid var(--neon-purple)", marginBottom: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                <Bot color="var(--neon-purple)" size={22} />
                <span className="font-orbitron" style={{ color: "var(--neon-purple)", fontWeight: 800, fontSize: "1.1rem", marginLeft: "auto" }}>
                  +2 JETONS
                </span>
              </div>
              <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                NEXUS-9 TACTIQUE (IA Intermédiaire)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Déjuez la défense de NEXUS-9 Tactique pour empocher +2 Jetons à chaque victoire.
              </p>
            </div>

            {/* AI Expert */}
            <div className="cyber-glass-card" style={{ padding: "1.4rem 1.2rem", borderLeft: "4px solid var(--neon-pink)", marginBottom: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                <Bot color="var(--neon-pink)" size={22} />
                <span className="font-orbitron" style={{ color: "var(--neon-pink)", fontWeight: 800, fontSize: "1.1rem", marginLeft: "auto" }}>
                  +3 JETONS
                </span>
              </div>
              <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                OMEGA PRIME (IA Expert)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Battez le calculateur suprême Omega Prime pour remporter +3 Jetons bonus.
              </p>
            </div>

            {/* Online Match Win */}
            <div className="cyber-glass-card" style={{ padding: "1.4rem 1.2rem", borderLeft: "4px solid var(--cyber-gold)", marginBottom: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                <Globe color="var(--cyber-gold)" size={22} />
                <span className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800, fontSize: "1.1rem", marginLeft: "auto" }}>
                  +4 JETONS
                </span>
              </div>
              <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                MATCH EN LIGNE 1v1
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Chaque victoire en duel multijoueur 1v1 en ligne vous octroie +4 Jetons immédiats.
              </p>
            </div>

            {/* Daily Challenge Win */}
            <div className="cyber-glass-card" style={{ padding: "1.4rem 1.2rem", borderLeft: "4px solid #00E676", marginBottom: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                <Zap color="#00E676" size={22} />
                <span className="font-orbitron" style={{ color: "#00E676", fontWeight: 800, fontSize: "1.1rem", marginLeft: "auto" }}>
                  +5 JETONS
                </span>
              </div>
              <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                DÉFI QUOTIDIEN GAGNÉ
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Remportez le Défi Quotidien du jour pour créditer +5 Jetons Classiques à votre solde.
              </p>
            </div>
          </div>
        </div>

        {/* Shop Packs Section */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <h2 className="font-orbitron" style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff" }}>
              PACKS DE JETONS DISPONIBLES EN BOUTIQUE (SHOP PACKS)
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.4rem" }}>
              Rechargez votre solde de jetons éligibles directement depuis l&apos;application mobile
            </p>
          </div>

          <div className="shop-packs-container" style={{ marginBottom: "2rem" }}>
            <div style={{ padding: "1rem", borderRadius: "14px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
              <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800, fontSize: "0.85rem" }}>PACK STARTER</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>100 Jetons</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>500 FCFA</div>
            </div>
            <div style={{ padding: "1rem", borderRadius: "14px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
              <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800, fontSize: "0.85rem" }}>PACK JOUEUR</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>200 Jetons</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>1 000 FCFA</div>
            </div>
            <div style={{ padding: "1rem", borderRadius: "14px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
              <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800, fontSize: "0.85rem" }}>PACK PRO</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>300 Jetons</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>1 500 FCFA</div>
            </div>
            <div style={{ padding: "1rem", borderRadius: "14px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
              <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800, fontSize: "0.85rem" }}>PACK EXPERT</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>400 Jetons</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>2 000 FCFA</div>
            </div>
            <div style={{ padding: "1rem", borderRadius: "14px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid rgba(255, 215, 0, 0.2)" }}>
              <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 800, fontSize: "0.85rem" }}>PACK CHAMPION</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>500 Jetons</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>2 500 FCFA</div>
            </div>
            <div style={{ padding: "1rem", borderRadius: "14px", background: "rgba(255,255,255,0.04)", textAlign: "center", border: "1px solid var(--cyber-gold)", boxShadow: "0 0 15px rgba(255,215,0,0.2)" }}>
              <div className="font-orbitron" style={{ color: "var(--cyber-gold)", fontWeight: 900, fontSize: "0.85rem" }}>PACK ÉLITE</div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: "1rem" }}>1 000 Jetons</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>5 000 FCFA</div>
            </div>
          </div>

          {/* Fee Structure Transparency Breakdown Card */}
          <div
            className="cyber-glass-card"
            style={{
              padding: "1.6rem 1.4rem",
              borderRadius: "20px",
              border: "1px solid rgba(0, 240, 255, 0.4)",
              background: "linear-gradient(135deg, rgba(10, 20, 45, 0.9) 0%, rgba(5, 10, 25, 0.95) 100%)",
              marginBottom: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
              <CreditCard color="var(--neon-cyan)" size={22} />
              <h3 className="font-orbitron" style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 800 }}>
                TRANSPARENCE DES FRAIS DE PAIEMENT (FEE STRUCTURE)
              </h3>
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "1.2rem" }}>
              Les prix affichés dans la boutique ci-dessus représentent le <strong>prix de base net des jetons</strong>. Lors du passage en caisse (Checkout Tara Money), des frais d&apos;opérateur sont calculés en toute transparence selon le mode de paiement choisi :
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginBottom: "1.2rem" }}>
              <div style={{ padding: "1rem", borderRadius: "14px", background: "rgba(0, 240, 255, 0.08)", border: "1px solid rgba(0, 240, 255, 0.3)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--neon-cyan)", fontWeight: 800, fontSize: "0.85rem" }}>
                  <Smartphone size={16} />
                  <Globe size={16} />
                  <CreditCard size={16} />
                  <span>TOUS LES MOYENS DE PAIEMENT</span>
                </div>
                <div style={{ color: "#fff", fontWeight: 900, fontSize: "1.3rem", marginTop: "0.3rem" }}>+ 11 % DE FRAIS</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.2rem" }}>Mobile Money (CMR, Afrique), Wave & Cartes Bancaires (Visa/Mastercard)</div>
              </div>

              <div style={{ padding: "1rem", borderRadius: "14px", background: "rgba(255, 215, 0, 0.08)", border: "1px solid rgba(255, 215, 0, 0.4)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--cyber-gold)", fontWeight: 800, fontSize: "0.85rem" }}>
                  <Crown size={16} color="var(--cyber-gold)" />
                  <span>COMPTE CERTIFIÉ</span>
                </div>
                <div style={{ color: "#fff", fontWeight: 900, fontSize: "1.3rem", marginTop: "0.3rem" }}>0 % (EXONÉRÉ)</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.2rem" }}>Tarif fixe net de 19 999 FCFA</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
              <AlertCircle size={15} color="var(--neon-cyan)" />
              <em>Exemple : Pour un pack à 1 000 FCFA, les frais de 11% s&apos;appliquent au checkout Tara Money pour un total net facturé de 1 110 FCFA.</em>
            </div>
          </div>
        </div>

        {/* Mockups Showcase */}
        <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
          <h2 className="font-orbitron" style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff" }}>
            CAPTURES ÉCRAN : BOUTIQUE ET PORTEFEUILLE
          </h2>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "1.75rem", flexWrap: "wrap" }}>
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
