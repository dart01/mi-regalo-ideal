import { useState, useEffect, useRef } from "react";

const products = [
  { id: 1, emoji: "🕯️", name: "Velas grabadas",    desc: "Con nombre, fecha o frase especial", price: "desde $35.000" },
  { id: 2, emoji: "📸", name: "Marcos de foto",    desc: "Madera grabada con mensaje único",   price: "desde $55.000" },
  { id: 3, emoji: "🧣", name: "Textiles bordados", desc: "Toallas, cojines y más",             price: "desde $45.000" },
  { id: 4, emoji: "🍫", name: "Cajas gourmet",     desc: "Empaque personalizado con tu diseño",price: "desde $70.000" },
  { id: 5, emoji: "💍", name: "Joyería grabada",   desc: "Plata de ley con tu mensaje",        price: "desde $90.000" },
  { id: 6, emoji: "🎨", name: "Cuadros custom",    desc: "Ilustración digital impresa",        price: "desde $80.000" },
];

const occasions = ["Cumpleaños 🎂","Aniversario 💑","Matrimonio 💍","Baby shower 🍼","Graduación 🎓","San Valentín 🌹"];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function ProductCard({ p, index }) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);
  return (
    <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
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
      }}>
      <div style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>{p.emoji}</div>
      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.15rem", color: "#3d2b1f", marginBottom: "0.4rem", fontWeight: 600 }}>{p.name}</div>
      <div style={{ color: "#a08060", fontSize: "0.82rem", marginBottom: "1.2rem", lineHeight: 1.6 }}>{p.desc}</div>
      <div style={{ color: "#c47a3a", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.03em" }}>{p.price}</div>
    </div>
  );
}

export default function App() {
  const [heroRef, heroIn] = useInView(0.05);
  const [statsRef, statsIn] = useInView();
  const [procRef, procIn] = useInView();
  const [ctaRef, ctaIn] = useInView();
  const [formData, setFormData] = useState({ nombre: "", ocasion: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const ready = formData.nombre && formData.ocasion;

  return (
    <div style={{ background: "#fef8f2", color: "#3d2b1f", minHeight: "100vh", fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Nunito:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #fef8f2; }
        ::selection { background: #f5d9b8; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatBlob {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(20px,-15px) scale(1.04); }
          66%      { transform: translate(-15px,10px) scale(0.97); }
        }
        @keyframes bob {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }

        input, textarea, select {
          background: #fff !important;
          border: 1.5px solid #e8d5c0 !important;
          color: #3d2b1f !important;
          padding: 0.8rem 1.1rem !important;
          font-family: 'Nunito', sans-serif !important;
          font-size: 0.92rem !important;
          outline: none !important;
          border-radius: 12px !important;
          width: 100% !important;
          transition: border-color 0.2s, box-shadow 0.2s !important;
        }
        input:focus, textarea:focus, select:focus {
          border-color: #c47a3a !important;
          box-shadow: 0 0 0 3px #f5d9b840 !important;
        }
        select option { background: #fff; }
        a { text-decoration: none; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1rem 5vw",
        background: "rgba(254,248,242,0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid #f0e4d4",
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#c47a3a", fontWeight: 700, letterSpacing: "-0.01em" }}>
          Manu&Co 🎁
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Catálogo","Ocasiones","Proceso","Contacto"].map(l => (
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
          boxShadow: "0 4px 14px rgba(196,122,58,0.3)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 6px 20px rgba(196,122,58,0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 14px rgba(196,122,58,0.3)"; }}
        >Pedir ahora ✨</a>
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "9rem 5vw 5rem", position: "relative", overflow: "hidden",
      }}>
        {/* blobs */}
        {[
          { top:"8%",  left:"-8%", w:420, h:380, c:"#fde8c8", delay:"0s" },
          { top:"55%", right:"-6%",w:320, h:300, c:"#fcd5b0", delay:"3s" },
          { top:"20%", right:"12%",w:200, h:180, c:"#fbeee0", delay:"6s" },
        ].map((b,i)=>(
          <div key={i} style={{
            position:"absolute", borderRadius:"50%",
            width:b.w, height:b.h,
            top:b.top, left:b.left, right:b.right,
            background:b.c, opacity:0.55, filter:"blur(60px)",
            animation:`floatBlob 12s ease-in-out ${b.delay} infinite`,
            pointerEvents:"none",
          }}/>
        ))}

        <div style={{
          position:"relative", zIndex:1,
          opacity: heroIn ? 1 : 0, transform: heroIn ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}>
          <div style={{
            display: "inline-block",
            background: "#fde8c8", color: "#c47a3a",
            padding: "0.4rem 1.2rem", borderRadius: "50px",
            fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em",
            marginBottom: "1.8rem",
          }}>🌸 REGALOS QUE DEJAN HUELLA</div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.8rem, 7.5vw, 6rem)",
            fontWeight: 700, lineHeight: 1.1,
            color: "#3d2b1f", marginBottom: "1.2rem",
          }}>
            El regalo perfecto,<br />
            <em style={{ color:"#c47a3a", fontStyle:"italic" }}>hecho para ti</em>
          </h1>

          <p style={{ color:"#a08060", fontSize:"1.05rem", maxWidth:"500px", margin:"0 auto 2.8rem", lineHeight:1.75, fontWeight:300 }}>
            Creamos regalos personalizados llenos de amor y detalles únicos para cada momento especial.
          </p>

          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
            <a href="#catalogo" style={{
              background:"#c47a3a", color:"#fff", padding:"0.9rem 2.4rem",
              borderRadius:"50px", fontSize:"0.9rem", fontWeight:600,
              boxShadow:"0 6px 20px rgba(196,122,58,0.35)",
              transition:"transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 10px 28px rgba(196,122,58,0.4)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 6px 20px rgba(196,122,58,0.35)"; }}
            >Ver catálogo →</a>
            <a href="#proceso" style={{
              background:"#fff", color:"#a08060", padding:"0.9rem 2.4rem",
              borderRadius:"50px", fontSize:"0.9rem", fontWeight:500,
              border:"1.5px solid #e8d5c0",
              transition:"border-color 0.2s, color 0.2s",
            }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="#c47a3a"; e.currentTarget.style.color="#c47a3a"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="#e8d5c0"; e.currentTarget.style.color="#a08060"; }}
            >¿Cómo funciona?</a>
          </div>
        </div>

        <div style={{ position:"absolute", bottom:"2.5rem", left:"50%", transform:"translateX(-50%)", animation:"bob 2s ease-in-out infinite", opacity:0.4 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c47a3a" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} style={{
        background:"#fff8f0", borderTop:"1px solid #f0e4d4", borderBottom:"1px solid #f0e4d4",
        display:"grid", gridTemplateColumns:"repeat(3,1fr)", padding:"2.5rem 8vw",
      }}>
        {[["+2.000","regalos entregados"],["98%","clientes felices"],["72h","entrega promedio"]].map(([n,l],i)=>(
          <div key={i} style={{
            textAlign:"center", borderRight: i<2 ? "1px solid #f0e4d4" : "none",
            opacity: statsIn ? 1 : 0, transform: statsIn ? "translateY(0)" : "translateY(16px)",
            transition: `opacity 0.5s ease ${i*0.14}s, transform 0.5s ease ${i*0.14}s`,
          }}>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"2.4rem", color:"#c47a3a", fontWeight:700 }}>{n}</div>
            <div style={{ color:"#c0a080", fontSize:"0.78rem", fontWeight:500, marginTop:"4px", letterSpacing:"0.06em" }}>{l.toUpperCase()}</div>
          </div>
        ))}
      </section>

      {/* ── CATÁLOGO ── */}
      <section id="catalogo" style={{ padding:"7rem 6vw" }}>
        <div style={{ marginBottom:"3rem" }}>
          <div style={{ display:"inline-block", background:"#fde8c8", color:"#c47a3a", padding:"0.3rem 1rem", borderRadius:"50px", fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.1em", marginBottom:"1rem" }}>🎁 CATÁLOGO</div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:700, color:"#3d2b1f", lineHeight:1.2 }}>
            Hecho con cariño,<br /><em style={{ color:"#c47a3a" }}>entregado con amor</em>
          </h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"1.25rem" }}>
          {products.map((p,i)=><ProductCard key={p.id} p={p} index={i}/>)}
        </div>
      </section>

      {/* ── OCASIONES ── */}
      <section id="ocasiones" style={{ padding:"4rem 6vw 5rem", background:"#fff8f0", borderTop:"1px solid #f0e4d4" }}>
        <div style={{ display:"inline-block", background:"#fde8c8", color:"#c47a3a", padding:"0.3rem 1rem", borderRadius:"50px", fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.1em", marginBottom:"2rem" }}>💝 PERFECTOS PARA</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"0.7rem" }}>
          {occasions.map(o=>(
            <span key={o} style={{
              background:"#fff", border:"1.5px solid #f0e4d4", color:"#a08060",
              padding:"0.55rem 1.3rem", borderRadius:"50px", fontSize:"0.85rem", fontWeight:500,
              cursor:"default", transition:"all 0.2s",
            }}
              onMouseEnter={e=>{ e.currentTarget.style.background="#fde8c8"; e.currentTarget.style.borderColor="#e8c9a8"; e.currentTarget.style.color="#c47a3a"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="#fff"; e.currentTarget.style.borderColor="#f0e4d4"; e.currentTarget.style.color="#a08060"; }}
            >{o}</span>
          ))}
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section id="proceso" ref={procRef} style={{ padding:"7rem 6vw" }}>
        <div style={{ marginBottom:"3.5rem" }}>
          <div style={{ display:"inline-block", background:"#fde8c8", color:"#c47a3a", padding:"0.3rem 1rem", borderRadius:"50px", fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.1em", marginBottom:"1rem" }}>✨ PROCESO</div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:700, color:"#3d2b1f" }}>
            Simple como debe ser
          </h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))", gap:"2.5rem" }}>
          {[
            ["🛍️","Elige el producto","Navega el catálogo y encuentra lo ideal para esa persona especial."],
            ["✏️","Personalízalo","Agrega nombre, fecha, frase o foto. Lo hacemos solo tuyo."],
            ["🎨","Lo creamos","Con amor y cuidado en cada detalle. Listo en 48–72 horas."],
            ["📦","Lo enviamos","Empaque especial incluido. Llegamos a toda Colombia."],
          ].map(([ic,t,d],i)=>(
            <div key={t} style={{
              opacity: procIn ? 1 : 0, transform: procIn ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.55s ease ${i*0.12}s, transform 0.55s ease ${i*0.12}s`,
            }}>
              <div style={{
                width:54, height:54, borderRadius:"16px",
                background:"#fde8c8", display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:"1.6rem", marginBottom:"1.1rem",
              }}>{ic}</div>
              <div style={{ color:"#3d2b1f", fontSize:"1.02rem", fontWeight:600, marginBottom:"0.45rem" }}>{t}</div>
              <div style={{ color:"#a08060", fontSize:"0.85rem", lineHeight:1.65 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" ref={ctaRef} style={{
        padding:"7rem 6vw",
        background:"linear-gradient(135deg,#fef3e8 0%,#fde8d0 50%,#fdd8b8 100%)",
        borderTop:"1px solid #f0e4d4",
      }}>
        <div style={{ maxWidth:"520px", margin:"0 auto" }}>
          <div style={{ display:"inline-block", background:"rgba(196,122,58,0.15)", color:"#c47a3a", padding:"0.3rem 1rem", borderRadius:"50px", fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.1em", marginBottom:"1rem" }}>💌 EMPECEMOS</div>
          <h2 style={{
            fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)",
            fontWeight:700, marginBottom:"0.6rem", color:"#3d2b1f", lineHeight:1.2,
            opacity: ctaIn ? 1 : 0, transform: ctaIn ? "translateY(0)" : "translateY(16px)",
            transition:"opacity 0.7s ease, transform 0.7s ease",
          }}>
            Cuéntanos tu <em style={{ color:"#c47a3a" }}>idea</em>
          </h2>
          <p style={{ color:"#a08060", marginBottom:"2.2rem", fontSize:"0.92rem", lineHeight:1.65,
            opacity: ctaIn ? 1 : 0, transition:"opacity 0.7s ease 0.1s",
          }}>Te respondemos en menos de 24 horas con opciones y presupuesto. 🌸</p>

          {sent ? (
            <div style={{ background:"#fff", borderRadius:"20px", padding:"3rem", textAlign:"center", boxShadow:"0 8px 32px rgba(196,122,58,0.12)" }}>
              <div style={{ fontSize:"3rem", marginBottom:"0.8rem" }}>🎉</div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.5rem", color:"#c47a3a", marginBottom:"0.5rem" }}>¡Recibido!</div>
              <div style={{ color:"#a08060", fontSize:"0.88rem" }}>Nos contactamos muy pronto con tu regalo personalizado.</div>
            </div>
          ) : (
            <div style={{
              display:"flex", flexDirection:"column", gap:"1rem",
              opacity: ctaIn ? 1 : 0, transform: ctaIn ? "translateY(0)" : "translateY(20px)",
              transition:"opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}>
              <input placeholder="Tu nombre 😊" value={formData.nombre} onChange={e=>setFormData({...formData,nombre:e.target.value})}/>
              <select value={formData.ocasion} onChange={e=>setFormData({...formData,ocasion:e.target.value})}>
                <option value="">¿Para qué ocasión? 🎉</option>
                {occasions.map(o=><option key={o} value={o}>{o}</option>)}
              </select>
              <textarea placeholder="Cuéntanos tu idea o el mensaje especial... ✨" rows={4} value={formData.mensaje} onChange={e=>setFormData({...formData,mensaje:e.target.value})}/>
              <button onClick={()=>{ if(ready) setSent(true); }} style={{
                background: ready ? "#c47a3a" : "#e8d5c0",
                color: ready ? "#fff" : "#c0a080",
                border:"none", padding:"1rem 2rem", fontSize:"0.92rem",
                fontFamily:"'Nunito',sans-serif", fontWeight:600,
                borderRadius:"50px", cursor: ready ? "pointer" : "default",
                boxShadow: ready ? "0 6px 20px rgba(196,122,58,0.35)" : "none",
                transition:"all 0.3s",
              }}
                onMouseEnter={e=>{ if(ready){ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 10px 28px rgba(196,122,58,0.4)"; }}}
                onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow= ready ? "0 6px 20px rgba(196,122,58,0.35)" : "none"; }}
              >Enviar solicitud 🎁</button>
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop:"1px solid #f0e4d4", padding:"2rem 6vw",
        display:"flex", justifyContent:"space-between", alignItems:"center",
        flexWrap:"wrap", gap:"1rem", background:"#fef8f2",
      }}>
        <span style={{ fontFamily:"'Playfair Display',serif", color:"#c47a3a", fontSize:"1.15rem", fontWeight:700 }}>Manu&Co 🎁</span>
        <span style={{ color:"#d0b898", fontSize:"0.75rem" }}>© 2025 · Colombia · Regalos con alma 🌸</span>
        <div style={{ display:"flex", gap:"1.5rem" }}>
          {["Instagram","WhatsApp","TikTok"].map(s=>(
            <a key={s} href="#" style={{ color:"#d0b898", fontSize:"0.78rem", fontWeight:500, transition:"color 0.2s" }}
              onMouseEnter={e=>e.target.style.color="#c47a3a"}
              onMouseLeave={e=>e.target.style.color="#d0b898"}
            >{s}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
