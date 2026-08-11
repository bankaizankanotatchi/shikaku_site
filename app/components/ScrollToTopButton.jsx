"use client";
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Green Floating Contact Button (Located directly above Back-To-Top) */}
      <a
        href="https://wa.me/237656876123?text=Bonjour%20Shikaku,%20je%20souhaite%20des%20informations"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp (+237 656876123)"
        title="Contactez-nous sur WhatsApp (656876123)"
        style={{
          position: "fixed",
          bottom: "88px",
          right: "25px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "#25D366",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 25px rgba(37, 211, 102, 0.65)",
          cursor: "pointer",
          zIndex: 999,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.709 1.464h.005c6.554 0 11.889-5.335 11.892-11.892a11.83 11.83 0 00-3.473-8.413" />
        </svg>
      </a>

      {/* Floating Back To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Remonter en haut de la page"
        title="Remonter en haut"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(0, 240, 255, 0.9) 0%, rgba(255, 0, 127, 0.9) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 25px rgba(0, 240, 255, 0.5)",
          cursor: "pointer",
          zIndex: 999,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <ChevronUp size={28} />
      </button>
    </>
  );
}
