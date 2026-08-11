import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShieldCheck, ArrowLeft, Mail } from "lucide-react";

export const metadata = {
  title: "Règles de confidentialité — Shikaku Mobile",
  description: "Politique de confidentialité officielle de l'application mobile Shikaku",
};

const sections = [
  {
    icon: "01",
    title: "Données que nous collectons",
    body: [
      "Shikaku est conçue pour fonctionner avec le strict minimum de données personnelles. Selon les fonctionnalités utilisées dans le jeu, l'application peut accéder aux éléments suivants :",
    ],
    list: [
      "Photos ou Caméra — uniquement si vous choisissez d'importer une photo de profil personnalisée. Aucune photo n'est transférée sans action explicite de votre part.",
      "Informations techniques de l'appareil — modèle du smartphone, version d'OS et identifiants techniques anonymes pour garantir la stabilité du jeu.",
    ],
  },
  {
    icon: "02",
    title: "Comment nous utilisons ces données",
    body: [
      "Les données collectées servent exclusivement au fonctionnement et à l'amélioration de l'expérience de jeu : afficher votre profil, gérer les matchs multijoueurs, traiter les statistiques et diagnostiquer les erreurs techniques.",
      "Nous ne vendons ni ne louons jamais vos données personnelles à des tiers.",
    ],
  },
  {
    icon: "03",
    title: "Services tiers & Firebase",
    body: [
      "L'application s'appuie sur des services sécurisés qui peuvent traiter certaines données selon leurs règles de confidentialité :",
    ],
    list: [
      "Google Play Services & Firebase — authentification sécurisée, base de données de jeu en direct et infrastructure.",
    ],
    body2: [
      "Vous pouvez consulter la politique de confidentialité de Google sur policies.google.com/privacy.",
    ],
  },
  {
    icon: "04",
    title: "Conservation et sécurité",
    body: [
      "Les données de jeu et de profil sont conservées uniquement le temps d'utilisation de votre compte. Nous appliquons des protocoles de chiffrement pour protéger vos informations contre tout accès non autorisé.",
    ],
  },
  {
    icon: "05",
    title: "Confidentialité des enfants",
    body: [
      "Shikaku ne collecte pas sciemment d'informations personnelles auprès des enfants de moins de 9 ans. Si vous pensez qu'un enfant nous a fourni des informations, contactez-nous immédiatement pour suppression.",
    ],
  },
  {
    icon: "06",
    title: "Vos Droits & Suppression",
    body: [
      "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles à tout moment.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-deep)", color: "var(--text-main)" }}>
      <Navbar />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "8rem 1.5rem 6rem 1.5rem",
        }}
      >
        <Link
          href="/"
          className="btn-cyber-outline"
          style={{
            padding: "0.5rem 1.2rem",
            fontSize: "0.85rem",
            marginBottom: "2rem",
          }}
        >
          <ArrowLeft size={16} />
          Retour à l&apos;accueil
        </Link>

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
          <ShieldCheck size={14} />
          DOCUMENT OFFICIEL
        </div>

        <h1
          className="font-orbitron"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          RÈGLES DE <span className="text-gradient-cyan-pink">CONFIDENTIALITÉ</span>
        </h1>

        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginBottom: "3.5rem", lineHeight: 1.7 }}>
          Cette politique explique en toute transparence la manière dont l&apos;application mobile{" "}
          <strong style={{ color: "#fff" }}>Shikaku</strong> protège et traite vos données personnelles.
        </p>

        {/* Privacy Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {sections.map((s) => (
            <div
              key={s.icon}
              className="cyber-glass-card"
              style={{
                padding: "2rem",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  marginBottom: "1rem",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  paddingBottom: "0.8rem",
                }}
              >
                <span
                  className="font-orbitron"
                  style={{
                    color: "var(--neon-cyan)",
                    fontSize: "0.9rem",
                    fontWeight: 800,
                    padding: "0.2rem 0.6rem",
                    borderRadius: "6px",
                    background: "rgba(0, 240, 255, 0.15)",
                  }}
                >
                  {s.icon}
                </span>
                <h2
                  className="font-orbitron"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {s.title}
                </h2>
              </div>

              {s.body.map((p, j) => (
                <p key={j} style={{ color: "var(--text-muted)", fontSize: "0.98rem", marginBottom: "0.8rem", lineHeight: 1.6 }}>
                  {p}
                </p>
              ))}

              {s.list && (
                <ul style={{ paddingLeft: "1.3rem", color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "0.8rem" }}>
                  {s.list.map((item, k) => (
                    <li key={k} style={{ marginBottom: "0.5rem" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {s.body2 &&
                s.body2.map((p, j) => (
                  <p key={`b2-${j}`} style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontStyle: "italic" }}>
                    {p}
                  </p>
                ))}
            </div>
          ))}

          {/* Contact Section */}
          <div
            className="cyber-glass-card"
            style={{
              padding: "2rem",
              borderRadius: "20px",
              border: "1px solid var(--neon-pink)",
            }}
          >
            <h2
              className="font-orbitron"
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "0.8rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <Mail size={18} color="var(--neon-pink)" />
              Nous contacter
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Pour toute demande concernant la suppression de votre compte ou vos données, contactez notre équipe :{" "}
              <a
                href="mailto:naguejustin78@gmail.com"
                style={{ color: "var(--neon-pink)", fontWeight: 700, textDecoration: "none" }}
              >
                naguejustin78@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div
          className="font-orbitron"
          style={{
            marginTop: "3rem",
            textAlign: "center",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          Dernière mise à jour : 19 juillet 2026
        </div>
      </div>

      <Footer />
    </main>
  );
}
