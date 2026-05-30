import { useState } from "react";
import { useInView } from "../hooks/useInView";

export default function ProductCard({ p, index }) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s, box-shadow 0.3s, background 0.3s`,
        background: hov ? "#fff" : "#fdf9f5",
        borderRadius: "16px",
        padding: "2rem 1.6rem",
        boxShadow: hov ? "0 12px 40px rgba(180,120,80,0.12)" : "0 2px 12px rgba(180,120,80,0.06)",
        cursor: "pointer",
        border: "1px solid",
        borderColor: hov ? "#e8c9a8" : "#f0e4d4",
      }}
    >
      <div style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>{p.emoji}</div>
      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.15rem", color: "#3d2b1f", marginBottom: "0.4rem", fontWeight: 600 }}>
        {p.name}
      </div>
      <div style={{ color: "#a08060", fontSize: "0.82rem", marginBottom: "1.2rem", lineHeight: 1.6 }}>
        {p.desc}
      </div>
      <div style={{ color: "#c47a3a", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.03em" }}>
        {p.price}
      </div>
    </div>
  );
}