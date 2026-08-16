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
        padding: "2rem 1.5rem",
        overflowX: "hidden",
      }}
    >
      {/* Background Ambient Orbs */}
      <div className="bg-orb-cyan" style={{ top: "20%", left: "50%", transform: "translateX(-50%)" }} />
      <div className="bg-orb-pink" style={{ bottom: "10%", right: "-10%" }} />

      <InteractiveGrid />

      <div
        style={{
          maxWidth: "750px",
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
            padding: "clamp(2.5rem, 5vw, 4rem)",
            borderRadius: "32px",
            background: "linear-gradient(135deg, rgba(20, 10, 45, 0.95) 0%, rgba(8, 2, 20, 0.98) 100%)",
            border: "2px solid rgba(0, 255, 136, 0.5)",
            boxShadow: "0 0 50px rgba(0, 255, 136, 0.2), inset 0 0 20px rgba(0, 255, 136, 0.1)",
          }}
        >
          {/* App Icon + Success Badge Overlay */}
          <div style={{ position: "relative", width: "95px", height: "95px", margin: "0 auto 1.8rem auto" }}>
            <div
              style={{
                position: "absolute",
                inset: -6,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #00FF88 0%, #00d4ff 100%)",
                filter: "blur(12px)",
                opacity: 0.8,
              }}
            />
            <div
              style={{
                position: "relative",
                width: "95px",
                height: "95px",
                borderRadius: "24px",
                overflow: "hidden",
                border: "2px solid #00FF88",
                boxShadow: "0 0 25px rgba(0, 255, 136, 0.5)",
                background: "#000",
              }}
            >
              <Image
                src="/images/icon/app_icon.png"
                alt="Shikaku App Icon"
                fill
                sizes="95px"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Checkmark Circle Badge */}
            <div
              style={{
                position: "absolute",
                bottom: -8,
                right: -8,
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                background: "#00FF88",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(0, 255, 136, 0.8)",
                border: "2px solid #000",
              }}
            >
              <CheckCircle2 size={22} strokeWidth={3} />
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1.2rem",
              borderRadius: "30px",
              background: "rgba(0, 255, 136, 0.12)",
              border: "1px solid rgba(0, 255, 136, 0.4)",
              color: "#00FF88",
              fontSize: "0.85rem",
              fontWeight: 800,
              fontFamily: "var(--font-orbitron)",
              marginBottom: "1.2rem",
            }}
          >
            <Sparkles size={16} />
            TRANSACTION CONFIRMÉE PAR LE RÉSEAU
          </div>

          <h1
            className="font-orbitron"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            PAIEMENT RÉUSSI ! 🎉
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.1rem",
              maxWidth: "580px",
              margin: "0 auto 2.5rem auto",
              lineHeight: 1.7,
            }}
          >
            Votre paiement Mobile Money a été traité et validé avec succès. Votre compte <strong style={{ color: "#fff" }}>Shikaku Mobile</strong> a été mis à jour instantanément !
          </p>

          {/* Action Button */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <button
              onClick={handleReturnToGame}
              className="btn-cyber-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                padding: "1.1rem 2.5rem",
                borderRadius: "40px",
                border: "none",
                cursor: "pointer",
                fontWeight: 900,
                fontSize: "1.1rem",
                color: "#04020a",
                background: "linear-gradient(135deg, #00FF88 0%, #00d4ff 100%)",
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.5)",
              }}
            >
              <Smartphone size={22} />
              Retour à Shikaku
              <ArrowRight size={20} />
            </button>

            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
              En cliquant, l&apos;application mobile Shikaku s&apos;ouvrira automatiquement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
