export default function SnakeGame() {
  return (
    <section style={{ margin: "40px 0", textAlign: "center" }}>
      <h2 style={{ fontSize: "1.1rem", color: "var(--text-dim)", marginBottom: 12 }}>
        🎮 Snake Game Animation
      </h2>
      <img
        src="/snake.svg"
        alt="Snake Game"
        style={{ width: "100%", maxWidth: 700, borderRadius: 12, border: "1px solid var(--border)" }}
      />
    </section>
  );
}
