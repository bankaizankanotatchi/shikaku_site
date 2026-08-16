"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import InteractiveGrid from "../components/InteractiveGrid";
import SamsungMockup from "../components/SamsungMockup";
import Link from "next/link";
import { Share2, Video, Heart, MessageCircle, Sparkles, Bell, Shield, BadgeCheck, ChevronRight } from "lucide-react";

export default function SocialPage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", background: "var(--bg-deep)", overflowX: "hidden" }}>
      <div className="bg-orb-cyan" style={{ top: "10%", left: "-10%" }} />
      <div className="bg-orb-pink" style={{ top: "50%", right: "-10%" }} />

      <InteractiveGrid />
      <Navbar />

      <div className="subpage-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Page Title */}
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
            <Share2 size={14} />
            COMMUNAUTÉ & ACTUALITÉS EN DIRECT
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
            FIL SOCIAL & <span className="text-gradient-cyan-pink">ACTUALITÉS SHIKAKU</span>
          </h1>

          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.7 }}>
            Retrouvez toute l&apos;actualité officielle du jeu, les annonces de tournois majeurs et les vidéos
            des meilleurs coups partagés par les joueurs.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "2.5rem",
            marginBottom: "5rem",
          }}
        >
          {/* Card 1: Official App News */}
          <div className="cyber-glass-card" style={{ padding: "2.5rem" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                background: "rgba(0, 240, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--neon-cyan)",
                marginBottom: "1.5rem",
              }}
            >
              <Bell size={26} />
            </div>

            <h2 className="font-orbitron" style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
              1. Actualités Officielle de l&apos;Application
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7 }}>
              Ne manquez aucune annonce ! L&apos;équipe Shikaku publie régulièrement les dates de lancement des grands tournois Or,
              les mises à jour de contenu et les classements de la communauté directement sur le fil social.
            </p>
          </div>

          {/* Card 2: Media & Video Highlights */}
          <div className="cyber-glass-card" style={{ padding: "2.5rem" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                background: "rgba(255, 0, 127, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--neon-pink)",
                marginBottom: "1.5rem",
              }}
            >
              <Video size={26} />
            </div>

            <h2 className="font-orbitron" style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
              2. Publications Médias & Vidéos
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7 }}>
              Publiez vos retournements de situation spectaculaires ! Le lecteur vidéo intégré permet de diffuser vos vidéos de matchs
              et vos captures d&apos;écran en haute qualité auprès de tous les joueurs.
            </p>
          </div>

          {/* Card 3: Social Interactions */}
          <div className="cyber-glass-card" style={{ padding: "2.5rem" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                background: "rgba(255, 215, 0, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--cyber-gold)",
                marginBottom: "1.5rem",
              }}
            >
              <Heart size={26} />
            </div>

            <h2 className="font-orbitron" style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
              3. Likes, Commentaires & Échanges
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7 }}>
              Réagissez aux exploits des champions, laissez un commentaire d&apos;encouragement et échangez avec une communauté
              de passionnés de jeux de stratégie sur grille.
            </p>
          </div>
        </div>

        {/* Screenshot Showcase Section */}
        <div
          className="cyber-glass-card"
          style={{
            padding: "3.5rem 2.5rem",
            marginBottom: "5rem",
            background: "linear-gradient(135deg, rgba(20, 10, 42, 0.95) 0%, rgba(10, 5, 24, 0.98) 100%)",
            border: "1px solid rgba(0, 240, 255, 0.3)",
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
                  background: "rgba(0, 240, 255, 0.15)",
                  color: "var(--neon-cyan)",
                }}
              >
                <Sparkles size={14} />
                INTERFACE DU FIL SOCIAL
              </div>

              <h2 className="font-orbitron" style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", marginBottom: "1.2rem" }}>
                UN ESPACE SOCIAL ÉLÉGANT ET DYNAMIQUE
              </h2>

              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                L&apos;onglet Social de l&apos;application réunit les victoires de tournois célébrées en direct, les vidéos de stratégie
                et les échanges entre joueurs dans un design sombre épuré aux accents néon.
              </p>

              <div
                style={{
                  padding: "1.2rem",
                  borderRadius: "16px",
                  background: "rgba(10, 5, 24, 0.8)",
                  border: "1px solid var(--neon-cyan)",
                  color: "#fff",
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                }}
              >
                <MessageCircle size={22} color="var(--neon-cyan)" />
                <span>Pastille de notification réactive en temps réel dès qu&apos;un nouveau post est publié !</span>
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1.2rem",
                  borderRadius: "16px",
                  background: "rgba(255, 215, 0, 0.08)",
                  border: "1px solid var(--cyber-gold)",
                }}
              >
                <div style={{ color: "var(--cyber-gold)", fontWeight: 800, fontSize: "0.95rem", marginBottom: "0.4rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <BadgeCheck size={18} />
                  PUBLICATION RÉSERVÉE AUX COMPTES CERTIFIÉS & ADMINS
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5, marginBottom: "0.8rem" }}>
                  Les comptes certifiés (badge bleu) bénéficient du privilège de pouvoir créer des publications texte, photo et vidéo publiquement.
                </p>
                <Link
                  href="/certification"
                  className="btn-cyber-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1.2rem",
                    borderRadius: "25px",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                  }}
                >
                  COMMENT ÊTRE CERTIFIÉ ? (GUIDE & TIMELINE)
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <SamsungMockup
                src="/images/screenshots/social.jpeg"
                alt="Fil Social Shikaku"
                width={280}
                height={560}
                glowColor="cyan"
                label="ESPACE COMMUNAUTÉ & FIL SOCIAL"
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
