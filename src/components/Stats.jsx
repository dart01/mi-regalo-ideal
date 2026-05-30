import { useInView } from "../hooks/useInView";

export default function Stats() {
  const [statsRef, statsIn] = useInView();

  return (
    <section ref={statsRef} style={{
      background: "#fff8f0", borderTop: "1px solid #f0e4d4", borderBottom: "1px solid #f0e4d4",
      display: "grid", gridTemplateColumns: "repeat(3,1fr)", padding: "2.5rem 8vw",
    }}>
      {[["+2.000", "regalos entregados"], ["98%", "clientes felices"], ["72h", "entrega promedio"]].map(([n, l], i) => (
        <div key={i} style={{
          textAlign: "center", borderRight: i < 2 ? "1px solid #f0e4d4" : "none",
          opacity: statsIn ? 1 : 0, transform: statsIn ? "translateY(0)" : "translateY(16px)",
          transition: `opacity 0.5s ease ${i * 0.14}s, transform 0.5s ease ${i * 0.14}s`,
        }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.4rem", color: "#c47a3a", fontWeight: 700 }}>{n}</div>
          <div style={{ color: "#c0a080", fontSize: "0.78rem", fontWeight: 500, marginTop: "4px", letterSpacing: "0.06em" }}>{l.toUpperCase()}</div>
        </div>
      ))}
    </section>
  );
}