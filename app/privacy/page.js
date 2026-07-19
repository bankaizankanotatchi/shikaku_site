import Link from "next/link";

export const metadata = {
  title: "Règles de confidentialité — Shikaku",
  description: "Politique de confidentialité de l'application Shikaku",
};

const sections = [
  {
    suit: "♠",
    title: "Données que nous collectons",
    body: [
      "Shikaku est conçue pour fonctionner avec le moins de données personnelles possible. Selon les fonctionnalités que vous utilisez, l'application peut accéder aux éléments suivants :",
    ],
    list: [
      "Photos ou caméra — uniquement si vous choisissez d'importer ou de prendre une image (par exemple pour un avatar ou un élément de jeu). Aucune photo n'est envoyée à nos serveurs sans votre action explicite.",
      "Informations techniques sur l'appareil — modèle, version du système, identifiants techniques anonymes, utilisés uniquement à des fins de stabilité et de compatibilité.",
    ],
  },
  {
    suit: "♥",
    title: "Comment nous utilisons ces données",
    body: [
      "Les données collectées servent uniquement à faire fonctionner et améliorer l'application : afficher le contenu que vous demandez, lire des sons ou vidéos intégrés au jeu, diagnostiquer les erreurs techniques, et assurer la compatibilité avec votre appareil.",
      "Nous ne vendons ni ne louons vos données personnelles à des tiers.",
    ],
  },
  {
    suit: "♦",
    title: "Services tiers utilisés",
    body: [
      "L'application s'appuie sur des services tiers qui peuvent collecter des données selon leurs propres règles de confidentialité :",
    ],
    list: [
      "Google Play Services — infrastructure de distribution et de sécurité de l'application.",
    ],
    body2: [
      "Nous vous invitons à consulter la politique de confidentialité de Google à l'adresse policies.google.com/privacy pour plus de détails sur le traitement effectué par ces services.",
    ],
  },
  {
    suit: "♣",
    title: "Conservation et sécurité des données",
    body: [
      "Les données techniques et de diagnostic sont conservées uniquement le temps nécessaire à l'amélioration de l'application, puis supprimées ou anonymisées. Nous prenons des mesures raisonnables pour protéger les informations traitées contre l'accès non autorisé.",
    ],
  },
  {
    suit: "♠",
    title: "Confidentialité des enfants",
    body: [
      "Shikaku ne s'adresse pas sciemment à des enfants de moins de 9 ans et ne collecte pas sciemment de données personnelles auprès de ce public. Si vous pensez qu'un enfant nous a fourni des données personnelles, contactez-nous afin que nous puissions les supprimer.",
    ],
  },
  {
    suit: "♥",
    title: "Vos droits",
    body: [
      "Vous pouvers nous contacter à tout moment pour demander l'accès, la correction ou la suppression des données vous concernant que nous pourrions détenir.",
    ],
  },
  {
    suit: "♦",
    title: "Modifications de cette politique",
    body: [
      "Cette politique de confidentialité peut être mise à jour occasionnellement, par exemple lors de l'ajout d'une nouvelle fonctionnalité à l'application. La date de dernière mise à jour est indiquée en bas de cette page.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main
      style={{
        maxWidth: "680px",
        margin: "0 auto",
        padding: "4rem 1.5rem 6rem",
      }}
    >
      <Link
        href="/"
        className="font-mono"
        style={{
          fontSize: "0.85rem",
          color: "var(--muted)",
          textDecoration: "none",
        }}
      >
        ← Shikaku
      </Link>

      <h1
        className="font-display"
        style={{
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: 600,
          color: "var(--felt-deep)",
          marginTop: "1.25rem",
          marginBottom: "0.5rem",
        }}
      >
        Règles de confidentialité
      </h1>

      <p style={{ color: "var(--muted)", marginBottom: "3rem" }}>
        Cette politique explique quelles données l&rsquo;application mobile{" "}
        <strong>Shikaku</strong> peut collecter, pourquoi, et comment elles
        sont protégées.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.75rem",
        }}
      >
        {sections.map((s, i) => (
          <section key={i}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.75rem",
                borderBottom: "1px solid var(--hairline)",
                paddingBottom: "0.6rem",
                marginBottom: "0.9rem",
              }}
            >
              <span
                aria-hidden="true"
                className="font-mono"
                style={{ color: "var(--gold)", fontSize: "1.1rem" }}
              >
                {s.suit}
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  margin: 0,
                  color: "var(--ink)",
                }}
              >
                {s.title}
              </h2>
            </div>

            {s.body.map((p, j) => (
              <p key={j} style={{ margin: "0 0 0.75rem" }}>
                {p}
              </p>
            ))}

            {s.list && (
              <ul style={{ paddingLeft: "1.25rem", margin: "0 0 0.75rem" }}>
                {s.list.map((item, k) => (
                  <li key={k} style={{ marginBottom: "0.4rem" }}>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {s.body2 &&
              s.body2.map((p, j) => (
                <p key={`b2-${j}`} style={{ margin: 0, color: "var(--muted)" }}>
                  {p}
                </p>
              ))}
          </section>
        ))}

        <section>
          <div
            style={{
              borderBottom: "1px solid var(--hairline)",
              paddingBottom: "0.6rem",
              marginBottom: "0.9rem",
              display: "flex",
              alignItems: "baseline",
              gap: "0.75rem",
            }}
          >
            <span
              aria-hidden="true"
              className="font-mono"
              style={{ color: "var(--gold)", fontSize: "1.1rem" }}
            >
              ♣
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                margin: 0,
                color: "var(--ink)",
              }}
            >
              Nous contacter
            </h2>
          </div>
          <p style={{ margin: 0 }}>
            Pour toute question sur cette politique ou vos données, écrivez-nous
            à{" "}
            <a
              href="mailto:naguejustin78@gmail.com"
              style={{ color: "var(--felt)", fontWeight: 500 }}
            >
              naguejustin78@gmail.com
            </a>
            .
          </p>
        </section>
      </div>

      <p
        className="font-mono"
        style={{
          marginTop: "4rem",
          fontSize: "0.8rem",
          color: "var(--muted)",
        }}
      >
        Dernière mise à jour : 19 juillet 2026
      </p>
    </main>
  );
}
