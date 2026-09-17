import { useEffect, useState } from "react";

const phrases = [
  "Self-Taught Developer",
  "AI Automation & Bots Builder",
  "Building Sahyom AI 🚀",
  "From Bhadohi, UP 🇮🇳",
];

function useTypingCycle(phrases: string[], typeSpeed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let delay = typeSpeed;

    if (deleting) {
      delay = typeSpeed / 2;
      setText(current.substring(0, text.length - 1));
    } else {
      setText(current.substring(0, text.length + 1));
    }

    if (!deleting && text === current) {
      delay = pause;
      setDeleting(true);
    } else if (deleting && text === "") {
      setDeleting(false);
      setPhraseIdx((p) => (p + 1) % phrases.length);
      delay = 300;
    }

    const t = setTimeout(() => {}, delay);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, phraseIdx]);

  return text;
}

export default function Hero() {
  const typed = useTypingCycle(phrases);

  return (
    <header style={{ textAlign: "center", padding: "60px 0 40px" }}>
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 800,
          background: "linear-gradient(135deg, #58a6ff 0%, #3fb950 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: 12,
          letterSpacing: "-1px",
        }}
      >
        Sahil Saroj
      </h1>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(0.9rem, 3vw, 1.2rem)",
          color: "var(--blue)",
          minHeight: "1.5em",
        }}
      >
        {typed}
        <span className="cursor">▎</span>
      </div>
      <style>{`.cursor{animation:blink 0.8s steps(2) infinite}@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 24,
        }}
      >
        {[
          { label: "AI Automation", color: "#1f6feb" },
          { label: "Bhadohi, UP", color: "#238636" },
          { label: "Building Sahyom AI", color: "#f0883e" },
        ].map((b) => (
          <span
            key={b.label}
            style={{
              background: `${b.color}22`,
              border: `1px solid ${b.color}55`,
              color: b.color,
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            {b.label}
          </span>
        ))}
      </div>
    </header>
  );
}
