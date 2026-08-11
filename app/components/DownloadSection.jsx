"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Sparkles, Trophy, Smartphone } from "lucide-react";

export default function DownloadSection() {
  return (
    <section
      id="download"
      style={{
        position: "relative",
        padding: "6rem 1.5rem",
        background: "linear-gradient(180deg, var(--bg-deep) 0%, rgba(12, 6, 26, 1) 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Orbs */}
      <div className="bg-orb-cyan" style={{ top: "10%", left: "30%" }} />
      <div className="bg-orb-pink" style={{ bottom: "10%", right: "20%" }} />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            padding: "4rem 2rem",
            borderRadius: "36px",
            background: "linear-gradient(135deg, rgba(20, 10, 42, 0.9) 0%, rgba(10, 5, 24, 0.95) 100%)",
            border: "1px solid var(--neon-cyan-glow)",
            boxShadow: "0 25px 60px rgba(0, 240, 255, 0.15)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Floating Small Mascot Icon */}
          <div
            className="mascot-float"
            style={{
              position: "relative",
              width: "90px",
              height: "90px",
              margin: "0 auto 1.5rem auto",
              borderRadius: "50%",
              border: "3px solid var(--neon-cyan)",
              boxShadow: "0 0 30px var(--neon-cyan-glow)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/mascot/mascot.png"
              alt="Mascot Avatar"
              fill
              sizes="90px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <h2
            className="font-orbitron"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "1.2rem",
            }}
          >
            PRÊT À DEVENIR LE MAÎTRE DU <br />
            <span className="text-gradient-cyan-pink">CARRÉ SHIKAKU ?</span>
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-muted)",
              maxWidth: "580px",
              margin: "0 auto 2.5rem auto",
              lineHeight: 1.6,
            }}
          >
            Téléchargez dès aujourd&apos;hui l&apos;application sur Android et préparez-vous pour l&apos;arrivée imminente sur iOS !
          </p>

          {/* Download Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.shikaku.jeu_carre"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-cyan"
              style={{ padding: "1.1rem 2.5rem", fontSize: "1rem" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L15.42 12.016 3.61 22.186c-.365-.302-.61-.75-.61-1.282V3.096c0-.533.245-.98.61-1.282zM16.834 13.238l2.616-2.259c.677-.585.677-1.536 0-2.121l-2.616-2.259-2.828 2.443 2.828 2.2zM4.71 1.096l10.71 9.255-2.203 1.903L2.61 2.378c.453-.873 1.258-1.282 2.1-1.282zM4.71 22.904c-.842 0-1.647-.409-2.1-1.282l10.607-9.877 2.203 1.903L4.71 22.904z" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <span style={{ fontSize: "0.7rem", display: "block", opacity: 0.8, textTransform: "uppercase" }}>
                  Télécharger sur
                </span>
                <span style={{ fontSize: "1.1rem", fontWeight: 800 }}>GOOGLE PLAY</span>
              </div>
            </a>

            {/* Apple App Store (Coming Soon) */}
            <div
              className="btn-cyber-outline"
              style={{
                padding: "1.1rem 2.5rem",
                fontSize: "1rem",
                opacity: 0.85,
                borderColor: "rgba(255, 0, 127, 0.4)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.82c.62-.76 1.04-1.81.93-2.86-.9.04-1.99.6-2.63 1.35-.58.67-.99 1.74-.85 2.77 1.01.08 2.03-.5 2.55-1.26z" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <span style={{ fontSize: "0.7rem", display: "block", color: "var(--neon-pink)", fontWeight: 700 }}>
                  Bientôt disponible sur
                </span>
                <span style={{ fontSize: "1.05rem", fontWeight: 800 }}>APP STORE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
