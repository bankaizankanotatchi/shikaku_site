"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import InteractiveGrid from "../components/InteractiveGrid";
import Link from "next/link";
import {
  BadgeCheck,
  Trophy,
  Share2,
  CheckCircle2,
  Clock,
  Target,
  Swords,
  ShoppingBag,
  Zap,
  Send,
  Sparkles,
  ShieldCheck,
  Award,
  ChevronRight
} from "lucide-react";

export default function CertificationPage() {
  const conditions = [
    {
      id: 1,
      title: "Compte âgé d'au moins 3 mois",
      detail: "Ancienneté requise de 90 jours à compter de la création du compte.",
      metric: "90 jours d'ancienneté",
      icon: Clock,
      color: "var(--neon-cyan)",
    },
    {
      id: 2,
      title: "Au moins 50 points au classement",
      detail: "Accumuler un score total d'au moins 50 points dans les matchs classés.",
      metric: "50 points minimum",
      icon: Target,
      color: "var(--cyber-gold)",
    },
    {
      id: 3,
      title: "Au moins 20 victoires en ligne",
      detail: "Remporter au moins 20 matchs contre d'autres joueurs en mode duel en ligne.",
      metric: "20 victoires 1v1",
      icon: Swords,
      color: "var(--neon-pink)",
    },
    {
      id: 4,
      title: "Au moins 20 achats dans la boutique Shikaku",
      detail: "Effectuer au moins 20 achats de packs de jetons dans la boutique officielle.",
      metric: "20 transactions boutique",
      icon: ShoppingBag,
      color: "var(--neon-cyan)",
    },
    {
      id: 5,
      title: "Participer à au moins 3 tournois",
      detail: "S'inscrire et disputer au moins 3 éditions de tournois (Bronze, Argent ou Or).",
      metric: "3 tournois disputés",
      icon: Trophy,
      color: "var(--cyber-gold)",
    },
    {
      id: 6,
      title: "Gagner au moins 1 tournoi",
      detail: "Décrocher le titre de champion sur au moins 1 tournoi officiel.",
      metric: "1 tournoi remporté",
      icon: Award,
      color: "var(--neon-pink)",
    },
  ];

  return (
    <main style={{ minHeight: "100vh", position: "relative", background: "var(--bg-deep)", overflowX: "hidden" }}>
      {/* Background Glowing Orbs */}
      <div className="bg-orb-cyan" style={{ top: "10%", left: "-10%" }} />
      <div className="bg-orb-pink" style={{ top: "50%", right: "-10%" }} />

      <InteractiveGrid />
      <Navbar />

      <div className="subpage-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Page Title & Header */}
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
            <BadgeCheck size={16} />
            STATUT COMPTE CERTIFIÉ & BADGE BLEU
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
            DEVENIR JOUEUR <span className="text-gradient-cyan-pink">CERTIFIÉ SHIKAKU</span>
          </h1>

          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "750px", margin: "0 auto", lineHeight: 1.7 }}>
            Le badge officiel certifié attribue des privilèges exclusifs aux joueurs les plus engagés et aux organisateurs de compétitions. Découvrez les 3 privilèges et la timeline des 6 conditions de validation.
          </p>
        </div>

        {/* Section 1: Les Avantages d'un Compte Certifié */}
        <h2 className="font-orbitron" style={{ fontSize: "1.6rem", color: "#fff", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Sparkles size={24} style={{ color: "var(--cyber-gold)" }} />
          Les 3 Avantages Exclusifs du Badge Certifié
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "5rem",
          }}
        >
          {/* Privilege 1 */}
          <div className="cyber-glass-card" style={{ padding: "2.5rem", borderTop: "4px solid var(--neon-cyan)" }}>
            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "14px",
                background: "rgba(0, 240, 255, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--neon-cyan)",
                marginBottom: "1.5rem",
              }}
            >
              <BadgeCheck size={32} />
            </div>
            <h3 className="font-orbitron" style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "0.8rem", fontWeight: 800 }}>
              1. Badge Officiel Certifié
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.98rem", lineHeight: 1.6 }}>
              Un badge bleu distinctif s&apos;affiche à côté de votre nom sur votre profil, dans les classements mondiaux, les salons de chat et la liste des joueurs en ligne.
            </p>
          </div>

          {/* Privilege 2 */}
          <div className="cyber-glass-card" style={{ padding: "2.5rem", borderTop: "4px solid var(--cyber-gold)" }}>
            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "14px",
                background: "rgba(255, 215, 0, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--cyber-gold)",
                marginBottom: "1.5rem",
              }}
            >
              <Trophy size={32} />
            </div>
            <h3 className="font-orbitron" style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "0.8rem", fontWeight: 800 }}>
              2. Créer des Compétitions & Tournois
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.98rem", lineHeight: 1.6 }}>
              Créez et configurez vos propres éditions de tournois personnalisés pour la communauté. Attribuez les jetons, définissez les grilles et devenez un organisateur officiel.
            </p>
          </div>

          {/* Privilege 3 */}
          <div className="cyber-glass-card" style={{ padding: "2.5rem", borderTop: "4px solid var(--neon-pink)" }}>
            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "14px",
                background: "rgba(255, 0, 110, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--neon-pink)",
                marginBottom: "1.5rem",
              }}
            >
              <Share2 size={32} />
            </div>
            <h3 className="font-orbitron" style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "0.8rem", fontWeight: 800 }}>
              3. Publications sur l&apos;Espace Social
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.98rem", lineHeight: 1.6 }}>
              Publiez des messages, des replays de matchs, des images et des séquences vidéo directement sur le Fil Social officiel de l&apos;application auprès de tous les joueurs.
            </p>
          </div>
        </div>

        {/* Section 2: Timeline des 6 conditions pour la certification gratuite */}
        <div style={{ marginBottom: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="font-orbitron" style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "0.8rem" }}>
              Timeline des <span className="text-gradient-cyan-pink">6 Conditions à Remplir</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: "650px", margin: "0 auto" }}>
              Les 6 conditions s&apos;évaluent automatiquement dans votre application. Elles peuvent être validées dans n&apos;importe quel ordre. Dès que les 6 nœuds deviennent verts, votre demande est prête !
            </p>
          </div>

          {/* Timeline Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.8rem" }}>
            {conditions.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="cyber-glass-card"
                  style={{
                    padding: "1.8rem",
                    display: "flex",
                    gap: "1.2rem",
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(0, 240, 255, 0.08)",
                      border: `2px solid ${item.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={22} />
                  </div>

                  <div>
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        color: item.color,
                        fontFamily: "var(--font-orbitron)",
                        marginBottom: "0.4rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      CONDITION #{item.id} • {item.metric}
                    </div>

                    <h3 className="font-orbitron" style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 700, marginBottom: "0.4rem" }}>
                      {item.title}
                    </h3>

                    <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.5 }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Gratuit vs Option Express 19 999 FCFA */}
        <div
          className="cyber-glass-card"
          style={{
            padding: "3rem 2rem",
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(28, 0, 51, 0.9) 0%, rgba(10, 0, 21, 0.95) 100%)",
            border: "1px solid rgba(255, 215, 0, 0.4)",
            marginBottom: "5rem",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
            {/* Voie 1 : Gratuite */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--neon-cyan)", fontWeight: 700, fontSize: "0.85rem", fontFamily: "var(--font-orbitron)", marginBottom: "0.6rem" }}>
                <Send size={16} />
                VOIE 1 : DEMANDE EN LIGNE GRATUITE
              </div>
              <h3 className="font-orbitron" style={{ fontSize: "1.4rem", color: "#fff", fontWeight: 800, marginBottom: "0.8rem" }}>
                Validez les 6 Conditions Timeline
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                Dès que vos 6 conditions passent au vert dans vos **Paramètres App**, cliquez sur le bouton pré-rempli pour transmettre votre dossier d&apos;attribution à l&apos;équipe officielle.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--neon-cyan)", fontSize: "0.9rem", fontWeight: 600 }}>
                <CheckCircle2 size={18} />
                Gratuit à 100% sur mérite de jeu
              </div>
            </div>

            {/* Divider */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  background: "rgba(255, 215, 0, 0.15)",
                  border: "1px solid rgba(255, 215, 0, 0.4)",
                  color: "var(--cyber-gold)",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-orbitron)",
                }}
              >
                OU OPTION EXPRESS
              </div>
            </div>

            {/* Voie 2 : Payante Express */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--cyber-gold)", fontWeight: 700, fontSize: "0.85rem", fontFamily: "var(--font-orbitron)", marginBottom: "0.6rem" }}>
                <Zap size={16} />
                VOIE 2 : CERTIFICATION EXPRESS (19 999 FCFA)
              </div>
              <h3 className="font-orbitron" style={{ fontSize: "1.4rem", color: "#fff", fontWeight: 800, marginBottom: "0.8rem" }}>
                Attribution Immédiate Sans Attendre
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                Réglez directement via Mobile Money (Orange Money / MTN Mobile Money). Votre compte reçoit son badge bleu et tous ses accès administrateur instantanément dès validation.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--cyber-gold)", fontSize: "0.9rem", fontWeight: 600 }}>
                <Zap size={18} />
                Paiement Mobile Money sécurisé
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Navigation */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="/tournois"
            className="btn-cyber-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.8rem",
              padding: "1rem 2.2rem",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: 800,
              color: "#dfee10ff",
              fontSize: "1.05rem",
            }}
          >
            VOIR LES TOURNOIS DISPONIBLES
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
