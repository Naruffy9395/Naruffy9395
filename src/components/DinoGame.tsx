export default function DinoGame() {
  return (
    <section style={{ margin: "40px 0", textAlign: "center" }}>
      <h2 style={{ fontSize: "1.1rem", color: "var(--text-dim)", marginBottom: 12 }}>
        🦖 Chrome Dino Game (Enhanced)
      </h2>
      <img
        src="/dino.svg"
        alt="Dino Game"
        style={{ width: "100%", maxWidth: 700, borderRadius: 12, border: "1px solid var(--border)" }}
      />
    </section>
  );
}
