import Link from "next/link";

const suits = ["♠", "♥", "♦", "♣"];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.25rem",
        textAlign: "center",
      }}
    >
      <div
        aria-hidden="true"
        className="font-mono"
        style={{
          display: "flex",
          gap: "0.75rem",
          fontSize: "1.5rem",
          color: "var(--gold)",
          marginBottom: "1.5rem",
          letterSpacing: "0.2em",
        }}
      >
        {suits.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>

      <h1
        className="font-display"
        style={{
          fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
          fontWeight: 600,
          margin: 0,
          color: "var(--felt-deep)",
        }}
      >
        Shikaku
      </h1>

      <p
        style={{
          maxWidth: "38ch",
          color: "var(--muted)",
          marginTop: "0.9rem",
          fontSize: "1.05rem",
        }}
      >
        Site officiel de l&rsquo;application mobile Shikaku.
      </p>

      <Link
        href="/privacy"
        style={{
          marginTop: "2.25rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "var(--felt)",
          color: "var(--paper)",
          padding: "0.85rem 1.6rem",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: "0.95rem",
          boxShadow: "0 8px 20px -8px rgba(31,75,63,0.55)",
        }}
      >
        Règles de confidentialité
        <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
