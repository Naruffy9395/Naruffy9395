const links = [
  {
    href: "https://wa.me/919559124698",
    label: "WhatsApp",
    color: "#25D366",
    icon: "💬",
  },
  {
    href: "https://naruffy9395.github.io/Sahil-landing-page-/",
    label: "Portfolio",
    color: "#F2A93C",
    icon: "🌐",
  },
  {
    href: "https://github.com/Naruffy9395",
    label: "GitHub",
    color: "#58a6ff",
    icon: "🐙",
  },
];

export default function Links() {
  return (
    <footer style={{ textAlign: "center", padding: "32px 0" }}>
      <h2 style={{ fontSize: "1.1rem", color: "var(--text-dim)", marginBottom: 16 }}>
        🔗 Let's Connect
      </h2>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: `${l.color}18`,
              border: `1px solid ${l.color}44`,
              color: l.color,
              padding: "10px 20px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 4px 16px ${l.color}33`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span>{l.icon}</span>
            {l.label}
          </a>
        ))}
      </div>
      <p style={{ marginTop: 32, color: "var(--text-dim)", fontSize: "0.8rem" }}>
        Thanks for visiting! ✨
      </p>
    </footer>
  );
}
