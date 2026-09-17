const icons = [
  "python", "js", "ts", "react", "nextjs", "nodejs", "html", "css",
  "git", "github", "vscode", "docker", "fastapi", "figma", "mongodb", "postgres",
];

export default function TechStack() {
  return (
    <section style={{ margin: "40px 0", textAlign: "center" }}>
      <h2 style={{ fontSize: "1.1rem", color: "var(--text-dim)", marginBottom: 16 }}>
        🛠️ Tech Arsenal
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        {icons.map((icon) => (
          <img
            key={icon}
            src={`https://skillicons.dev/icons?i=${icon}`}
            alt={icon}
            style={{ width: 36, height: 36 }}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
