"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import InteractiveGrid from "../components/InteractiveGrid";
import SamsungMockup from "../components/SamsungMockup";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Coins, ShieldCheck, Clock, Wallet, CheckCircle2, UserCheck, Calculator, Award, BadgeCheck, ChevronRight } from "lucide-react";

export default function TournamentsPage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", background: "var(--bg-deep)", overflowX: "hidden" }}>
      <div className="bg-orb-pink" style={{ top: "10%", right: "-10%" }} />
      <div className="bg-orb-cyan" style={{ top: "45%", left: "-10%" }} />

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
              background: "rgba(255, 215, 0, 0.15)",
              border: "1px solid rgba(255, 215, 0, 0.4)",
              color: "var(--cyber-gold)",
              fontSize: "0.8rem",
              fontWeight: 700,
              fontFamily: "var(--font-orbitron)",
              marginBottom: "1rem",
            }}
          >
            <Trophy size={14} />
            COMPÉTITIONS ET GAINS RÉELS
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
            TOURNOIS, COMPTES CERTIFIÉS & <span className="text-gradient-gold">CALCUL DES CAGNOTTES</span>
          </h1>

          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.7 }}>
            Découvrez la structure des éditions Bronze, Argent et Or, les privilèges des comptes certifiés pour la création
            et le mode de calcul exact des cagnottes de victoire.
          </p>
        </div>


        {/* 3 Tournament Tiers Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "2.5rem",
            marginBottom: "5rem",
          }}
        >
          {/* Bronze Tier */}
          <div className="cyber-glass-card" style={{ padding: "2.5rem", borderColor: "rgba(205, 127, 50, 0.3)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ position: "relative", width: "55px", height: "55px" }}>
                <Image
                  src="/images/assets/bronze_trophy_1785240418333.png"
                  alt="Tournoi Bronze"
                  fill
                  sizes="55px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <h2 className="font-orbitron" style={{ fontSize: "1.4rem", fontWeight: 800, color: "#CD7F32" }}>
                  TOURNOI BRONZE
                </h2>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>4 Participants • 2 Jours</div>
              </div>
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Le tremplin idéal pour tester vos tactiques en tournoi officiel avec des matchs programmés à 20h00.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem", color: "#fff" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="#CD7F32" /> Jour 1 : Demi-Finales (20h00 & 20h30)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="#CD7F32" /> Jour 2 : Grande Finale (20h00)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="#CD7F32" /> Lancement Automatique & Rappel 3 min
              </li>
            </ul>
          </div>

          {/* Silver Tier */}
          <div className="cyber-glass-card" style={{ padding: "2.5rem", borderColor: "rgba(192, 192, 192, 0.4)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ position: "relative", width: "55px", height: "55px" }}>
                <Image
                  src="/images/assets/silver_trophy_1785240396735.png"
                  alt="Tournoi Argent"
                  fill
                  sizes="55px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <h2 className="font-orbitron" style={{ fontSize: "1.4rem", fontWeight: 800, color: "#C0C0C0" }}>
                  TOURNOI ARGENT
                </h2>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>8 Participants • 3 Jours</div>
              </div>
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Affrontez 8 champions sur 3 tours à partir de 20h00 pour remporter le titre et la coupe argent.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem", color: "#fff" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="#C0C0C0" /> Jour 1 : Quarts de Finale (20h00 - 21h30)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="#C0C0C0" /> Jour 2 : Demi-Finales
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="#C0C0C0" /> Jour 3 : Finale d&apos;Honneur
              </li>
            </ul>
          </div>

          {/* Gold Tier */}
          <div className="cyber-glass-card" style={{ padding: "2.5rem", borderColor: "rgba(255, 215, 0, 0.5)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ position: "relative", width: "55px", height: "55px" }}>
                <Image
                  src="/images/assets/gold_trophy_1785240350043.png"
                  alt="Tournoi Or"
                  fill
                  sizes="55px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <h2 className="font-orbitron" style={{ fontSize: "1.4rem", fontWeight: 800, color: "#FFD700" }}>
                  TOURNOI OR (GRAND PRIX)
                </h2>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>32 Participants • 5 Jours</div>
              </div>
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Le niveau ultime avec 32 joueurs engagés. Matchs quotidiens à 19h00 et prize pool de jetons éligibles.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem", color: "#fff" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="#FFD700" /> 16èmes à Finale sur 5 Jours (19h00)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="#FFD700" /> Gains en Jetons Éligibles au Cash-out
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={16} color="#FFD700" /> Diffusé en Mode Spectateur Communauté
              </li>
            </ul>
          </div>
        </div>

        {/* Certified Accounts & Tournament Creation Section */}
        <div
          className="cyber-glass-card"
          style={{
            padding: "clamp(1.2rem, 4vw, 3rem)",
            marginBottom: "4rem",
            background: "linear-gradient(135deg, rgba(20, 10, 42, 0.95) 0%, rgba(10, 5, 24, 0.98) 100%)",
            border: "1px solid rgba(0, 240, 255, 0.3)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
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
                <UserCheck size={14} />
                CRÉATION & COMPTES CERTIFIÉS
              </div>

              <h2 className="font-orbitron" style={{ fontSize: "clamp(1.2rem, 4vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: "1.2rem", wordBreak: "break-word" }}>
                SEULS LES COMPTES CERTIFIÉS PEUVENT CRÉER DES TOURNOIS
              </h2>

              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Pour garantir la sécurité et la qualité des compétitions sur Shikaku, <strong>seuls les administrateurs et les utilisateurs disposant d&apos;un Compte Certifié (badge bleu de vérification)</strong> ont l&apos;autorisation exclusive d&apos;organiser de nouvelles éditions de tournois.
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "#fff", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={18} color="var(--neon-cyan)" /> Définition libre du montant de la mise d&apos;entrée (*entry fee*)
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={18} color="var(--neon-cyan)" /> Choix de l&apos;édition (Bronze 4P, Argent 8P, Or 32P)
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={18} color="var(--neon-cyan)" /> Réglage des grilles (15x15 à 30x30) et timers (15s à 30s)
                </li>
              </ul>

              <div style={{ marginTop: "1.8rem" }}>
                <Link
                  href="/certification"
                  className="btn-cyber-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.7rem 1.4rem",
                    borderRadius: "30px",
                    textDecoration: "none",
                    fontWeight: 700,
                    color: "#dfee10ff",
                    fontSize: "0.88rem",
                  }}
                >
                  <BadgeCheck size={18} />
                  GUIDE DE CERTIFICATION (TIMELINE 6 CONDITIONS)
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Prize Pool Formula Box */}
            <div
              style={{
                padding: "clamp(1.2rem, 4vw, 2rem)",
                borderRadius: "20px",
                background: "rgba(10, 5, 24, 0.85)",
                border: "2px solid var(--cyber-gold)",
                boxShadow: "0 0 30px rgba(255, 215, 0, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--cyber-gold)", marginBottom: "1rem" }}>
                <Calculator size={24} />
                <h3 className="font-orbitron" style={{ fontSize: "clamp(0.95rem, 3.5vw, 1.2rem)", fontWeight: 800 }}>
                  CALCUL EXACT DU CAGNOTTE DU VAINQUEUR
                </h3>
              </div>

              <div style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
                Le montant total remporté par le champion est calculé automatiquement dès la création du tournoi selon la règle officielle :
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <div style={{ padding: "0.8rem", borderRadius: "10px", background: "rgba(255, 255, 255, 0.04)" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>1. Total des Mises Collectées</div>
                  <div className="font-orbitron" style={{ color: "#fff", fontWeight: 700 }}>
                    Mise d&apos;entrée × Nombre de participants
                  </div>
                </div>
                <div style={{ padding: "0.8rem", borderRadius: "10px", background: "rgba(255, 255, 255, 0.04)" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>2. Frais de Gestion Plateforme</div>
                  <div className="font-orbitron" style={{ color: "var(--neon-pink)", fontWeight: 700 }}>
                    10% des frais de participation
                  </div>
                </div>
                <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(255, 215, 0, 0.15)", border: "1px solid var(--cyber-gold)" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--cyber-gold)", fontWeight: 800 }}>3. PACTOLE DU GAGNANT (PRIZE POOL)</div>
                  <div className="font-orbitron" style={{ color: "#fff", fontWeight: 900, fontSize: "1.1rem" }}>
                    90% DE LA TOTALITÉ DES MISES !
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Tokens & Cash-Out Mobile Money Ecosystem */}
        <div
          className="cyber-glass-card"
          style={{
            padding: "clamp(1.2rem, 4vw, 3rem)",
            marginBottom: "5rem",
            background: "linear-gradient(135deg, rgba(20, 10, 42, 0.9) 0%, rgba(10, 5, 24, 0.95) 100%)",
            border: "1px solid rgba(255, 215, 0, 0.3)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", width: "100%" }}>
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
                  background: "rgba(255, 215, 0, 0.15)",
                  color: "var(--cyber-gold)",
                }}
              >
                <Coins size={14} />
                ÉCOSYSTÈME DE JETONS ET RETRAIT
              </div>

              <h2 className="font-orbitron" style={{ fontSize: "clamp(1.2rem, 4.5vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: "1.2rem", wordBreak: "break-word" }}>
                JETONS ÉLIGIBLES VS JETONS CLASSIQUES
              </h2>

              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                • <strong>Jetons Classiques</strong> : Récompenses gratuites de connexion quotidienne et parties amicales.<br />
                • <strong>Jetons Éligibles</strong> : Jetons acquis en boutique ou remportés lors des tournois officiels. Seuls ces jetons ouvrent l&apos;accès aux compétitions d&apos;élite et sont <strong>convertibles en espèces réelles (FCFA XAF)</strong>.
              </p>

              <div
                style={{
                  padding: "clamp(0.8rem, 3vw, 1.5rem)",
                  borderRadius: "18px",
                  background: "rgba(10, 5, 24, 0.8)",
                  border: "1px solid var(--neon-cyan)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "#fff", fontWeight: 700, flexWrap: "wrap" }}>
                  <Wallet color="var(--neon-cyan)" size={22} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "clamp(0.85rem, 3.2vw, 1rem)" }}>Taux de Conversion : 1 Jeton = 5 FCFA XAF</span>
                </div>
                <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  • Seuil minimum de retrait : <strong>50 Jetons (250 FCFA)</strong><br />
                  • Transfert instantané et sécurisé vers votre compte <strong>Mobile Money (MTN & Orange Money)</strong>.
                </div>
              </div>
            </div>

            {/* Screenshots Row at bottom on the same line */}
            <div className="screenshots-row" style={{ display: "flex", gap: "2rem", justifyContent: "center", alignItems: "center", flexWrap: "wrap", width: "100%", marginTop: "1rem" }}>
              <SamsungMockup
                src="/images/screenshots/tournoi_1.jpeg"
                alt="Écran des Tournois"
                width={240}
                height={480}
                glowColor="gold"
                label="BUREAU DES TOURNOIS"
              />

              <SamsungMockup
                src="/images/screenshots/portefeuile.jpeg"
                alt="Portefeuille & Retrait Mobile Money"
                width={240}
                height={480}
                glowColor="cyan"
                label="PORTEFEUILLE & RETRAIT"
              />
            </div>
          </div>
        </div>

        {/* Gallery of Tournament Screenshots */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 className="font-orbitron" style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>
            CAPTURES DU CIRCUIT COMPÉTITION
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "2rem", justifyItems: "center" }}>
          <SamsungMockup
            src="/images/screenshots/detail_tournoi_3.jpeg"
            alt="Détail Tournoi Bronze"
            width={230}
            height={460}
            glowColor="gold"
            label="ÉDITION ACTIVE & INSCRIPTIONS"
          />
          <SamsungMockup
            src="/images/screenshots/matchs_tournoi_3.jpeg"
            alt="Arbre du Tournoi"
            width={230}
            height={460}
            glowColor="cyan"
            label="BRACKETS DE COMPÉTITION"
          />
          <SamsungMockup
            src="/images/screenshots/mes_match_tournoi_3.jpeg"
            alt="Mes Matchs de Tournoi"
            width={230}
            height={460}
            glowColor="pink"
            label="SUIVI DES MATCHS"
          />
          <SamsungMockup
            src="/images/screenshots/gagnant_tournoi_3.jpeg"
            alt="Vainqueur du Tournoi"
            width={230}
            height={460}
            glowColor="gold"
            label="RECONNAISSANCE CHAMPION"
          />
        </div>
      </div>

      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
