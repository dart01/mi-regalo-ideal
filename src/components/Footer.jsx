export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #f0e4d4", padding: "2rem 6vw",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: "1rem", background: "#fef8f2",
    }}>
      <span style={{ fontFamily: "'Playfair Display',serif", color: "#c47a3a", fontSize: "1.15rem", fontWeight: 700 }}>Manu&Co 🎁</span>
      <span style={{ color: "#d0b898", fontSize: "0.75rem" }}>© 2025 · Colombia · Regalos con alma 🌸</span>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {["Instagram", "WhatsApp", "TikTok"].map(s => (
          <a key={s} href="#" style={{ color: "#d0b898", fontSize: "0.78rem", fontWeight: 500, transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#c47a3a"}
            onMouseLeave={e => e.target.style.color = "#d0b898"}
          >{s}</a>
        ))}
      </div>
    </footer>
  );
}