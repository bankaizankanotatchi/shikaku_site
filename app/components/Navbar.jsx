"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Download, Menu, X, ChevronDown, BookOpen, Trophy, Coins, Bot, Share2, ShieldCheck, Home } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState("guide");
  const pathname = usePathname();

  // Close mobile menu automatically on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle Header Scroll Background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAccordion = (id) => {
    setOpenMobileAccordion((prev) => (prev === id ? null : id));
  };

  const navGroups = [
    {
      id: "guide",
      label: "Guide & Jeu",
      icon: BookOpen,
      items: [
        { href: "/regles", label: "Règles & Grilles", desc: "Formations de carrés 1x1 & timers 15s", icon: BookOpen },
        { href: "/modes-ia", label: "Modes IA & Bots", desc: "Cyber Apprenti, NEXUS-9 & Omega Prime", icon: Bot },
      ],
    },
    {
      id: "economy",
      label: "Tournois & Cash",
      icon: Trophy,
      items: [
        { href: "/tournois", label: "Tournois & Cash-Prizes", desc: "Bronze, Argent, Or & Comptes certifiés", icon: Trophy },
        { href: "/jetons", label: "Jetons & Retrait", desc: "Jetons éligibles vs classiques & FCFA", icon: Coins },
      ],
    },
    {
      id: "community",
      label: "Communauté",
      icon: Share2,
      items: [
        { href: "/social", label: "Fil Social & Actus", desc: "Publications, actus app & temps forts", icon: Share2 },
        { href: "/privacy", label: "Confidentialité", desc: "Charte officielle de sécurité", icon: ShieldCheck },
      ],
    },
  ];

  return (
    <>
      {/* HEADER BAR */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "0.6rem 1.2rem" : "1rem 1.5rem",
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(5, 2, 12, 0.95)" : "rgba(5, 2, 12, 0.75)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(0, 240, 255, 0.25)" : "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--neon-cyan)",
                boxShadow: "0 0 15px rgba(0, 240, 255, 0.4)",
              }}
            >
              <Image
                src="/images/icon/app_icon.png"
                alt="Shikaku App Icon"
                fill
                sizes="40px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <span
              className="font-orbitron"
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              SHIKAKU<span style={{ color: "var(--neon-cyan)" }}>.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "0.8rem",
            }}
            className="desktop-nav"
          >
            <Link
              href="/"
              style={{
                padding: "0.55rem 1rem",
                borderRadius: "20px",
                fontSize: "0.88rem",
                fontWeight: pathname === "/" ? 800 : 600,
                fontFamily: "var(--font-orbitron)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                color: pathname === "/" ? "var(--neon-cyan)" : "var(--text-muted)",
                background: pathname === "/" ? "rgba(0, 240, 255, 0.15)" : "transparent",
                border: pathname === "/" ? "1px solid var(--neon-cyan)" : "1px solid transparent",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <Home size={14} />
              Accueil
            </Link>

            {navGroups.map((group) => {
              const isGroupActive = group.items.some((item) => item.href === pathname);

              return (
                <div
                  key={group.id}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setActiveDropdown(group.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    style={{
                      padding: "0.55rem 1rem",
                      borderRadius: "20px",
                      fontSize: "0.88rem",
                      fontWeight: isGroupActive ? 800 : 600,
                      fontFamily: "var(--font-orbitron)",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      color: isGroupActive ? "var(--neon-cyan)" : "var(--text-muted)",
                      background: isGroupActive ? "rgba(0, 240, 255, 0.15)" : "rgba(255, 255, 255, 0.03)",
                      border: isGroupActive ? "1px solid var(--neon-cyan)" : "1px solid rgba(255, 255, 255, 0.1)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      cursor: "pointer",
                    }}
                  >
                    {group.label}
                    <ChevronDown
                      size={14}
                      style={{
                        transition: "transform 0.3s ease",
                        transform: activeDropdown === group.id ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>

                  {activeDropdown === group.id && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        paddingTop: "0.5rem",
                        width: "280px",
                        zIndex: 110,
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(10, 5, 24, 0.96)",
                          backdropFilter: "blur(25px)",
                          border: "1px solid rgba(0, 240, 255, 0.3)",
                          borderRadius: "16px",
                          padding: "0.8rem",
                          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.7)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.4rem",
                        }}
                      >
                        {group.items.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          const SubIcon = sub.icon;

                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              style={{
                                padding: "0.7rem 0.9rem",
                                borderRadius: "12px",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "0.8rem",
                                background: isSubActive ? "rgba(0, 240, 255, 0.15)" : "transparent",
                                border: isSubActive ? "1px solid var(--neon-cyan)" : "1px solid transparent",
                                transition: "all 0.2s ease",
                              }}
                            >
                              <SubIcon size={18} color={isSubActive ? "var(--neon-cyan)" : "var(--text-muted)"} style={{ marginTop: "2px" }} />
                              <div>
                                <div
                                  className="font-orbitron"
                                  style={{
                                    fontSize: "0.85rem",
                                    fontWeight: 700,
                                    color: isSubActive ? "var(--neon-cyan)" : "#fff",
                                  }}
                                >
                                  {sub.label}
                                </div>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
                                  {sub.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA & Mobile Burger Toggle Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.shikaku.jeu_carre"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-cyan header-download-btn"
              style={{ padding: "0.6rem 1.3rem", fontSize: "0.85rem" }}
              title="Télécharger l'application Shikaku sur Google Play"
            >
              <Download size={16} />
              <span className="btn-text">TÉLÉCHARGER</span>
            </a>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: mobileMenuOpen ? "rgba(255, 0, 127, 0.2)" : "rgba(255, 255, 255, 0.08)",
                border: mobileMenuOpen ? "1px solid var(--neon-pink)" : "1px solid rgba(255, 255, 255, 0.15)",
                color: mobileMenuOpen ? "var(--neon-pink)" : "#fff",
                padding: "0.55rem",
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              className="mobile-toggle"
              aria-label="Ouvrir le menu mobile"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* INDEPENDENT FULLSCREEN MOBILE MENU DRAWER (100dvh) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(5, 2, 14, 0.98)",
            backdropFilter: "blur(30px)",
            display: "flex",
            flexDirection: "column",
            animation: "mobileFadeIn 0.25s ease-out forwards",
          }}
        >
          {/* Mobile Drawer Top Bar */}
          <div
            style={{
              padding: "1rem 1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(0, 240, 255, 0.2)",
              background: "rgba(10, 5, 24, 0.95)",
            }}
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  border: "1px solid var(--neon-cyan)",
                }}
              >
                <Image
                  src="/images/icon/app_icon.png"
                  alt="Shikaku App Icon"
                  fill
                  sizes="36px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span
                className="font-orbitron"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                MENU SHIKAKU
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: "rgba(255, 0, 127, 0.2)",
                border: "1px solid var(--neon-pink)",
                color: "var(--neon-pink)",
                padding: "0.5rem",
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Drawer Scrollable Content */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1.2rem 1.2rem 2.5rem 1.2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Home Direct Link */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: "0.9rem 1.2rem",
                borderRadius: "16px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: pathname === "/"
                  ? "linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(255, 0, 127, 0.15) 100%)"
                  : "rgba(255, 255, 255, 0.04)",
                border: pathname === "/"
                  ? "1px solid var(--neon-cyan)"
                  : "1px solid rgba(255, 255, 255, 0.08)",
                color: pathname === "/" ? "var(--neon-cyan)" : "#fff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <Home size={20} color={pathname === "/" ? "var(--neon-cyan)" : "var(--text-muted)"} />
                <span className="font-orbitron" style={{ fontSize: "0.95rem", fontWeight: 800 }}>
                  Accueil
                </span>
              </div>
            </Link>

            {/* Accordion Groups */}
            {navGroups.map((group) => {
              const isOpen = openMobileAccordion === group.id;
              const GroupIcon = group.icon;
              const hasActiveChild = group.items.some((item) => item.href === pathname);

              return (
                <div
                  key={group.id}
                  style={{
                    borderRadius: "18px",
                    background: "rgba(18, 10, 36, 0.6)",
                    border: hasActiveChild
                      ? "1px solid rgba(0, 240, 255, 0.4)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Accordion Toggle Header */}
                  <button
                    onClick={() => toggleAccordion(group.id)}
                    style={{
                      width: "100%",
                      padding: "1rem 1.2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "transparent",
                      border: "none",
                      color: hasActiveChild ? "var(--neon-cyan)" : "#fff",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                      <GroupIcon size={20} color={hasActiveChild ? "var(--neon-cyan)" : "var(--neon-pink)"} />
                      <span className="font-orbitron" style={{ fontSize: "0.95rem", fontWeight: 800 }}>
                        {group.label}
                      </span>
                    </div>

                    <ChevronDown
                      size={18}
                      style={{
                        transition: "transform 0.3s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        color: "var(--text-muted)",
                      }}
                    />
                  </button>

                  {/* Accordion Expandable Content */}
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 0.8rem 0.8rem 0.8rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      {group.items.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        const SubIcon = sub.icon;

                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                              padding: "0.8rem 1rem",
                              borderRadius: "14px",
                              textDecoration: "none",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              background: isSubActive
                                ? "rgba(0, 240, 255, 0.15)"
                                : "rgba(255, 255, 255, 0.03)",
                              border: isSubActive
                                ? "1px solid var(--neon-cyan)"
                                : "1px solid transparent",
                              color: isSubActive ? "var(--neon-cyan)" : "#fff",
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                              <SubIcon size={18} color={isSubActive ? "var(--neon-cyan)" : "var(--text-muted)"} />
                              <div>
                                <div
                                  className="font-orbitron"
                                  style={{
                                    fontSize: "0.88rem",
                                    fontWeight: isSubActive ? 800 : 700,
                                  }}
                                >
                                  {sub.label}
                                </div>
                                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "2px" }}>
                                  {sub.desc}
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom Download CTA */}
            <div style={{ marginTop: "1rem" }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.shikaku.jeu_carre"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-cyan"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "1rem",
                  borderRadius: "16px",
                  fontSize: "0.95rem",
                }}
              >
                <Download size={18} />
                <span>TÉLÉCHARGER</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes mobileFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
