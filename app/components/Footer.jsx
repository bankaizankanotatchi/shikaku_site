"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#04010a",
        borderTop: "1px solid rgba(0, 240, 255, 0.15)",
        padding: "4rem 1.5rem 2rem 1.5rem",
        color: "var(--text-muted)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem",
        }}
      >
        {/* Brand info */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid var(--neon-cyan)",
              }}
            >
              <Image
                src="/images/icon/app_icon.png"
                alt="Shikaku Icon"
                fill
                sizes="40px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <span
              className="font-orbitron"
              style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                color: "#fff",
              }}
            >
              SHIKAKU<span style={{ color: "var(--neon-cyan)" }}>.</span>
            </span>
          </div>

          <p style={{ fontSize: "0.9rem", lineHeight: 1.6, maxWidth: "300px" }}>
            Le jeu mobile officiel de réflexion et de stratégie sur grille néon. Affrontez les IA, remportez les tournois et convertissez vos jetons éligibles.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="font-orbitron"
            style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "1rem" }}
          >
            PAGES OFFICIELLES
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem" }}>
            <li>
              <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/regles" style={{ color: "inherit", textDecoration: "none" }}>
                Règles du Jeu
              </Link>
            </li>
            <li>
              <Link href="/tournois" style={{ color: "var(--cyber-gold)", textDecoration: "none", fontWeight: 700 }}>
                Tournois, Comptes Certifiés & Cash
              </Link>
            </li>
            <li>
              <Link href="/certification" style={{ color: "var(--neon-cyan)", textDecoration: "none", fontWeight: 700 }}>
                Compte Certifié & Badge Bleu
              </Link>
            </li>
            <li>
              <Link href="/jetons" style={{ color: "inherit", textDecoration: "none" }}>
                Jetons & Retrait Mobile Money
              </Link>
            </li>
            <li>
              <Link href="/social" style={{ color: "var(--neon-cyan)", textDecoration: "none", fontWeight: 700 }}>
                Fil Social & Actualités App
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Privacy Link */}
        <div>
          <h4
            className="font-orbitron"
            style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "1rem" }}
          >
            LÉGAL & SÉCURITÉ
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem" }}>
            <li>
              <Link
                href="/privacy"
                style={{
                  color: "var(--neon-cyan)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontWeight: 600,
                }}
              >
                <ShieldCheck size={16} />
                Règles de confidentialité
              </Link>
            </li>
            <li>Disponible sur Google Play Store</li>
            <li>Bientôt disponible sur Apple App Store</li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          fontSize: "0.85rem",
        }}
      >
        <div>
          © {new Date().getFullYear()} Shikaku Mobile. Tous droits réservés.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          Fait avec <Heart size={14} color="var(--neon-pink)" fill="var(--neon-pink)" /> pour les passionnés de stratégie.
        </div>
      </div>
    </footer>
  );
}
