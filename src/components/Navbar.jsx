export default function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1rem 5vw", background: "rgba(254,248,242,0.88)",
      backdropFilter: "blur(14px)", borderBottom: "1px solid #f0e4d4",
    }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#c47a3a", fontWeight: 700, letterSpacing: "-0.01em" }}>
        Manu&Co 🎁
      </span>
      <div style={{ display: "flex", gap: "2rem" }}>
        {["Catálogo", "Ocasiones", "Proceso", "Contacto"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            style={{ color: "#a08060", fontSize: "0.88rem", fontWeight: 500, transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#c47a3a"}
            onMouseLeave={e => e.target.style.color = "#a08060"}
          >{l}</a>
        ))}
      </div>
      <a href="#contacto" style={{
        background: "#c47a3a", color: "#fff", padding: "0.6rem 1.5rem",
        borderRadius: "50px", fontSize: "0.85rem", fontWeight: 600,
        boxShadow: "0 4px 14px rgba(196,122,58,0.3)", transition: "transform 0.2s, box-shadow 0.2s",
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(196,122,58,0.4)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(196,122,58,0.3)"; }}
      >Pedir ahora ✨</a>
    </nav>
  );
}