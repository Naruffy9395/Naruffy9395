import Hero from "./components/Hero";
import SnakeGame from "./components/SnakeGame";
import TechStack from "./components/TechStack";
import DinoGame from "./components/DinoGame";
import Links from "./components/Links";
import { useEffect, useState } from "react";

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        maxWidth: 860,
        margin: "0 auto",
        padding: "0 16px 48px",
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <Hero />
      <SnakeGame />
      <TechStack />
      <DinoGame />
      <Links />
    </div>
  );
}
