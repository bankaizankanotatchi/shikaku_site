"use client";
import React, { useState, useEffect } from "react";

// Tactical moves sequence:
// 1. Blue tries to build top-left square (0,0), (0,1), (1,0)
// 2. Red BLOCKS Blue at (1,1)!
// 3. Blue pivots to form 2 squares elsewhere: (2,2) and (0,3)
// 4. Red forms 1 square at (3,0)
// Every coordinate (r, c) is 100% UNIQUE (no overlapping points).
const MOVES_SEQUENCE = [
  { r: 0, c: 0, player: "blue" },
  { r: 4, c: 0, player: "red" },
  { r: 0, c: 1, player: "blue" },
  { r: 4, c: 1, player: "red" },
  { r: 1, c: 0, player: "blue" }, // Blue threatens to close top-left cell!

  // RED BLOCKS BLUE AT (1,1)!
  { r: 1, c: 1, player: "red", isBlock: true },

  // BLUE PIVOTS TO MIDDLE GRID
  { r: 2, c: 2, player: "blue" },
  { r: 3, c: 0, player: "red" },
  { r: 2, c: 3, player: "blue" },
  // RED FORMS RED SQUARE 1 at (3,0)
  { r: 3, c: 1, player: "red", formsSquare: { r: 3, c: 0, color: "red" } },

  { r: 3, c: 2, player: "blue" },
  { r: 4, c: 3, player: "red" },
  // BLUE FORMS BLUE SQUARE 1 at (2,2)
  { r: 3, c: 3, player: "blue", formsSquare: { r: 2, c: 2, color: "blue" } },

  { r: 4, c: 4, player: "red" },
  // BLUE PIVOTS TO TOP-RIGHT
  { r: 0, c: 3, player: "blue" },
  { r: 2, c: 4, player: "red" },
  { r: 0, c: 4, player: "blue" },
  { r: 1, c: 2, player: "red" },
  { r: 1, c: 3, player: "blue" },
  { r: 2, c: 0, player: "red" },
  // BLUE FORMS BLUE SQUARE 2 at (0,3)
  { r: 1, c: 4, player: "blue", formsSquare: { r: 0, c: 3, color: "blue" } },
];

export default function AnimatedGameSimulation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [dots, setDots] = useState({}); // { "r_c": "blue" | "red" }
  const [squares, setSquares] = useState([]); // [ { r, c, color } ]
  const [blueScore, setBlueScore] = useState(0);
  const [redScore, setRedScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState("blue");
  const [statusMessage, setStatusMessage] = useState("DÉBUT DU MATCH");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentStep < MOVES_SEQUENCE.length) {
      const timer = setTimeout(() => {
        const move = MOVES_SEQUENCE[currentStep];

        // 1. Update placed dots
        setDots((prev) => ({
          ...prev,
          [`${move.r}_${move.c}`]: move.player,
        }));

        // 2. Status message updates
        if (move.isBlock) {
          setStatusMessage("🛡️ ROUGE BLOQUE BLEU !");
        } else if (move.formsSquare) {
          setSquares((prev) => [...prev, move.formsSquare]);
          if (move.formsSquare.color === "blue") {
            setBlueScore((prev) => prev + 1);
            setStatusMessage("⚡ CARRÉ BLEU FORME !");
          } else {
            setRedScore((prev) => prev + 1);
            setStatusMessage("🔴 CARRÉ ROUGE FORME !");
          }
        } else {
          setStatusMessage(`TOUR DE ${move.player === "blue" ? "BLEU" : "ROUGE"}`);
        }

        // 3. Switch turn
        const nextPlayer = move.player === "blue" ? "red" : "blue";
        setActivePlayer(nextPlayer);

        setCurrentStep((prev) => prev + 1);
      }, 650);

      return () => clearTimeout(timer);
    } else {
      // Finished all moves: hold for 3.5s then restart loop
      setIsFinished(true);
      setStatusMessage("VICTOIRE BLEU");
      const resetTimer = setTimeout(() => {
        setDots({});
        setSquares([]);
        setBlueScore(0);
        setRedScore(0);
        setCurrentStep(0);
        setActivePlayer("blue");
        setStatusMessage("DÉBUT");
        setIsFinished(false);
      }, 3500);

      return () => clearTimeout(resetTimer);
    }
  }, [currentStep]);

  return (
    <div
      className="cyber-glass-card game-sim-container"
      style={{
        width: "100%",
        maxWidth: "360px",
        padding: "1.2rem 1rem",
        background: "linear-gradient(135deg, rgba(18, 10, 36, 0.92) 0%, rgba(8, 4, 20, 0.96) 100%)",
        border: "1px solid rgba(0, 240, 255, 0.3)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Live Score Header */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.8rem 1.2rem",
          borderRadius: "16px",
          background: "rgba(10, 5, 24, 0.95)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          marginBottom: "1.5rem",
        }}
      >
        {/* Blue Player */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: "#00D4FF",
              boxShadow: "0 0 12px #00D4FF",
            }}
          />
          <div>
            <div className="font-orbitron" style={{ fontSize: "0.75rem", color: "#00D4FF", fontWeight: 800 }}>
              BLEU
            </div>
            <div className="font-orbitron" style={{ fontSize: "1.2rem", fontWeight: 900, color: "#fff" }}>
              {blueScore}
            </div>
          </div>
        </div>

        {/* Tactical Status Badge */}
        <div
          className="font-orbitron text-center"
          style={{
            fontSize: "0.72rem",
            fontWeight: 800,
            padding: "0.3rem 0.8rem",
            borderRadius: "20px",
            background: isFinished
              ? "rgba(255, 215, 0, 0.2)"
              : statusMessage.includes("BLOQUE")
                ? "rgba(255, 0, 127, 0.25)"
                : activePlayer === "blue"
                  ? "rgba(0, 240, 255, 0.2)"
                  : "rgba(255, 0, 127, 0.2)",
            color: isFinished
              ? "#FFD700"
              : statusMessage.includes("BLOQUE")
                ? "#FF007F"
                : activePlayer === "blue"
                  ? "#00D4FF"
                  : "#FF007F",
            border: isFinished
              ? "1px solid #FFD700"
              : statusMessage.includes("BLOQUE")
                ? "1px solid #FF007F"
                : activePlayer === "blue"
                  ? "1px solid #00D4FF"
                  : "1px solid #FF007F",
            transition: "all 0.3s ease",
          }}
        >
          {statusMessage}
        </div>

        {/* Red Player */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", textAlign: "right" }}>
          <div>
            <div className="font-orbitron" style={{ fontSize: "0.75rem", color: "#FF007F", fontWeight: 800 }}>
              ROUGE
            </div>
            <div className="font-orbitron" style={{ fontSize: "1.2rem", fontWeight: 900, color: "#fff" }}>
              {redScore}
            </div>
          </div>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: "#FF007F",
              boxShadow: "0 0 12px #FF007F",
            }}
          />
        </div>
      </div>

      {/* Grid Canvas Arena (5x5 dots, 50px spacing) */}
      <div
        style={{
          position: "relative",
          width: "250px",
          height: "250px",
          background: "rgba(10, 5, 24, 0.9)",
          border: "1px solid rgba(0, 240, 255, 0.2)",
          borderRadius: "20px",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Render Formed 1x1 Squares */}
        {squares.map((sq, idx) => {
          const left = sq.c * 50 + 25;
          const top = sq.r * 50 + 25;
          const isBlue = sq.color === "blue";

          return (
            <div
              key={`sq_${sq.r}_${sq.c}_${idx}`}
              style={{
                position: "absolute",
                left: `${left}px`,
                top: `${top}px`,
                width: "50px",
                height: "50px",
                background: isBlue
                  ? "radial-gradient(circle, rgba(0, 212, 255, 0.5) 0%, rgba(0, 212, 255, 0.15) 100%)"
                  : "radial-gradient(circle, rgba(255, 0, 127, 0.5) 0%, rgba(255, 0, 127, 0.15) 100%)",
                border: isBlue ? "2px solid #00D4FF" : "2px solid #FF007F",
                boxShadow: isBlue ? "0 0 18px rgba(0, 212, 255, 0.7)" : "0 0 18px rgba(255, 0, 127, 0.7)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "popSquare 0.4s ease-out",
                zIndex: 2,
              }}
            >
              <span
                className="font-orbitron"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 900,
                  color: isBlue ? "#00D4FF" : "#FF007F",
                  textShadow: "0 0 8px rgba(0,0,0,0.9)",
                }}
              >
                +1
              </span>
            </div>
          );
        })}

        {/* Grid Background Lines */}
        <svg
          viewBox="0 0 250 250"
          width="250"
          height="250"
          style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: 1 }}
        >
          {[0, 1, 2, 3, 4].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <React.Fragment key={`line_${r}_${c}`}>
                {c < 4 && (
                  <line
                    x1={c * 50 + 25}
                    y1={r * 50 + 25}
                    x2={(c + 1) * 50 + 25}
                    y2={r * 50 + 25}
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1.5"
                  />
                )}
                {r < 4 && (
                  <line
                    x1={c * 50 + 25}
                    y1={r * 50 + 25}
                    x2={c * 50 + 25}
                    y2={(r + 1) * 50 + 25}
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1.5"
                  />
                )}
              </React.Fragment>
            ))
          )}
        </svg>

        {/* Render Placed Dots (100% Unique Coordinates) */}
        {[0, 1, 2, 3, 4].map((r) =>
          [0, 1, 2, 3, 4].map((c) => {
            const dotOwner = dots[`${r}_${c}`];
            const left = c * 50 + 25;
            const top = r * 50 + 25;

            return (
              <div
                key={`dot_${r}_${c}`}
                style={{
                  position: "absolute",
                  left: `${left - 7}px`,
                  top: `${top - 7}px`,
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: dotOwner === "blue" ? "#00D4FF" : dotOwner === "red" ? "#FF007F" : "rgba(255,255,255,0.2)",
                  border: dotOwner ? "2px solid #fff" : "1px solid rgba(255,255,255,0.3)",
                  boxShadow: dotOwner === "blue" ? "0 0 14px #00D4FF" : dotOwner === "red" ? "0 0 14px #FF007F" : "none",
                  transform: dotOwner ? "scale(1.25)" : "scale(1)",
                  transition: "all 0.3s ease",
                  zIndex: 5,
                }}
              />
            );
          })
        )}
      </div>

      <style jsx>{`
        @keyframes popSquare {
          0% { transform: scale(0.3); opacity: 0; }
          70% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
