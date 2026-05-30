import { useInView } from "../hooks/useInView";

export default function Hero() {
  const [heroRef, heroIn] = useInView(0.05);

  return (
    <section ref={heroRef} style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      padding: "9rem 5vw 5rem", position: "relative", overflow: "hidden",
    }}>
      {[
        { top: "8%", left: "-8%", w: 420, h: 380, c: "#fde8c8", delay: "0s" },
        { top: "55%", right: "-6%", w: 320, h: 300, c: "#fcd5b0", delay: "3s" },
        { top: "20%", right: "12%", w: 200, h: 180, c: "#fbeee0", delay: "6s" },
      ].map((b, i) => (
        <div key={i} style={{
          position: "absolute", borderRadius: "50%", width: b.w, height: b.h,
          top: b.top, left: b.left, right: b.right, background: b.c, opacity: 0.55,
          filter: "blur(60px)", animation: `floatBlob 12s ease-in-out ${b.delay} infinite`, pointerEvents: "none",
        }} />
      ))}

      <div style={{
        position: "relative", zIndex: 1, opacity: heroIn ? 1 : 0,
        transform: heroIn ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.9s ease, transform 0.9s ease",
      }}>
        <div style={{
          display: "inline-block", background: "#fde8c8", color: "#c47a3a",
          padding: "0.4rem 1.2rem", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.8rem",
        }}>🌸 REGALOS QUE DEJAN HUELLA</div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 7.5vw, 6rem)", fontWeight: 700, lineHeight: 1.1, color: "#3d2b1f", marginBottom: "1.2rem" }}>
          El regalo perfecto,<br /><em style={{ color: "#c47a3a", fontStyle: "italic" }}>hecho para ti</em>
        </h1>

        <p style={{ color: "#a08060", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto 2.8rem", lineHeight: 1.75, fontWeight: 300 }}>
          Creamos regalos personalizados llenos de amor y detalles únicos para cada momento especial.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#catalogo" style={{
            background: "#c47a3a", color: "#fff", padding: "0.9rem 2.4rem", borderRadius: "50px", fontSize: "0.9rem", fontWeight: 600,
            boxShadow: "0 6px 20px rgba(196,122,58,0.35)", transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(196,122,58,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(196,122,58,0.35)"; }}
          >Ver catálogo →</a>
          <a href="#proceso" style={{
            background: "#fff", color: "#a08060", padding: "0.9rem 2.4rem", borderRadius: "50px", fontSize: "0.9rem", fontWeight: 500,
            border: "1.5px solid #e8d5c0", transition: "border-color 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#c47a3a"; e.currentTarget.style.color = "#c47a3a"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8d5c0"; e.currentTarget.style.color = "#a08060"; }}
          >¿Cómo funciona?</a>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", animation: "bob 2s ease-in-out infinite", opacity: 0.4 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c47a3a" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
      </div>
    </section>
  );
}