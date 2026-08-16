"use client";
import React, { useEffect } from "react";
import InteractiveGrid from "../components/InteractiveGrid";
import Image from "next/image";
import { CheckCircle2, Sparkles, Smartphone, ArrowRight } from "lucide-react";

export default function PaymentSuccessPage() {
  useEffect(() => {
    // Tenter de fermer la WebView in-app ou de rouvrir l'app après 6 secondes
    const timer = setTimeout(() => {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = "shikaku://payment-success";
      } else {
        try {
          window.close();
        } catch (_) {}
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleReturnToGame = (e) => {
    e.preventDefault();
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "shikaku://payment-success";
      setTimeout(() => {
        try {
          window.close();
        } catch (_) {}
      }, 1500);
    } else {
      try {
        window.close();
      } catch (_) {}
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        background: "var(--bg-deep)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem 0.8rem",
        overflowX: "hidden",
      }}
    >
      {/* Background Ambient Orbs */}
      <div className="bg-orb-cyan" style={{ top: "20%", left: "50%", transform: "translateX(-50%)" }} />
      <div className="bg-orb-pink" style={{ bottom: "10%", right: "-10%" }} />

      <InteractiveGrid />

      <div
        style={{
          maxWidth: "580px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        {/* Main Card */}
        <div
          className="cyber-glass-card"
          style={{
            padding: "clamp(1.2rem, 3.5vw, 2.2rem)",
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(20, 10, 45, 0.95) 0%, rgba(8, 2, 20, 0.98) 100%)",
            border: "2px solid rgba(0, 255, 136, 0.5)",
            boxShadow: "0 0 35px rgba(0, 255, 136, 0.2), inset 0 0 15px rgba(0, 255, 136, 0.1)",
          }}
        >
          {/* App Icon + Success Badge Overlay */}
          <div style={{ position: "relative", width: "75px", height: "75px", margin: "0 auto 1.2rem auto" }}>
            <div
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #00FF88 0%, #00d4ff 100%)",
                filter: "blur(10px)",
                opacity: 0.85,
              }}
            />
            <div
              style={{
                position: "relative",
                width: "75px",
                height: "75px",
                borderRadius: "20px",
                overflow: "hidden",
                border: "2px solid #00FF88",
                boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)",
                background: "#000",
              }}
            >
              <Image
                src="/images/icon/app_icon.png"
                alt="Shikaku App Icon"
                fill
                sizes="75px"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Checkmark Circle Badge */}
            <div
              style={{
                position: "absolute",
                bottom: -6,
                right: -6,
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "#00FF88",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 12px rgba(0, 255, 136, 0.8)",
                border: "2px solid #000",
              }}
            >
              <CheckCircle2 size={18} strokeWidth={3} />
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.3rem 1rem",
              borderRadius: "25px",
              background: "rgba(0, 255, 136, 0.12)",
              border: "1px solid rgba(0, 255, 136, 0.4)",
              color: "#00FF88",
              fontSize: "0.78rem",
              fontWeight: 800,
              fontFamily: "var(--font-orbitron)",
              marginBottom: "0.8rem",
            }}
          >
            <Sparkles size={14} />
            TRANSACTION CONFIRMÉE PAR LE RÉSEAU
          </div>

          <h1
            className="font-orbitron"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "0.6rem",
            }}
          >
            PAIEMENT RÉUSSI ! 🎉
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              maxWidth: "480px",
              margin: "0 auto 1.5rem auto",
              lineHeight: 1.5,
            }}
          >
            Votre paiement Mobile Money a été traité et validé avec succès. Votre compte <strong style={{ color: "#fff" }}>Shikaku Mobile</strong> a été mis à jour instantanément !
          </p>

          {/* Action Button */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", alignItems: "center" }}>
            <button
              onClick={handleReturnToGame}
              className="btn-cyber-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.85rem 1.8rem",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                fontWeight: 800,
                fontSize: "0.95rem",
                color: "#04020a",
                background: "linear-gradient(135deg, #00FF88 0%, #00d4ff 100%)",
                boxShadow: "0 0 25px rgba(0, 255, 136, 0.5)",
              }}
            >
              <Smartphone size={18} />
              Retour à Shikaku
              <ArrowRight size={18} />
            </button>

            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>
              En cliquant, l&apos;application mobile Shikaku s&apos;ouvrira automatiquement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
