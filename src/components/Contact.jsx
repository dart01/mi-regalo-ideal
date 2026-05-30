import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { occasions } from "../data/constants";

export default function Contact() {
  const [ctaRef, ctaIn] = useInView();
  const [formData, setFormData] = useState({ nombre: "", ocasion: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const ready = formData.nombre && formData.ocasion;

  return (
    <section id="contacto" ref={ctaRef} className="contacto-section">
      <div className="contacto-wrapper">
        <div className="badge-contacto">💌 EMPECEMOS</div>
        <h2 
          className="contacto-title"
          style={{ 
            opacity: ctaIn ? 1 : 0, 
            transform: ctaIn ? "translateY(0)" : "translateY(16px)" 
          }}
        >
          Cuéntanos tu <em>idea</em>
        </h2>
        <p className="contacto-desc" style={{ opacity: ctaIn ? 1 : 0 }}>
          Te respondemos en menos de 24 horas con opciones y presupuesto. 🌸
        </p>

        {sent ? (
          <div className="success-card">
            <div className="success-icon">🎉</div>
            <div className="success-title">¡Recibido!</div>
            <div className="success-desc">Nos contactamos muy pronto con tu regalo personalizado.</div>
          </div>
        ) : (
          <div 
            className="form-container"
            style={{ 
              opacity: ctaIn ? 1 : 0, 
              transform: ctaIn ? "translateY(0)" : "translateY(20px)" 
            }}
          >
            <input placeholder="Tu nombre 😊" value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })} />
            <select value={formData.ocasion} onChange={e => setFormData({ ...formData, ocasion: e.target.value })}>
              <option value="">¿Para qué ocasión? 🎉</option>
              {occasions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <textarea placeholder="Cuéntanos tu idea o el mensaje especial... ✨" rows={4} value={formData.mensaje} onChange={e => setFormData({ ...formData, mensaje: e.target.value })} />
            
            <button 
              onClick={() => { if (ready) setSent(true); }} 
              className="btn-submit"
              style={{
                background: ready ? "#c47a3a" : "#e8d5c0", 
                color: ready ? "#fff" : "#c0a080", 
                cursor: ready ? "pointer" : "default",
                boxShadow: ready ? "0 6px 20px rgba(196,122,58,0.35)" : "none",
              }}
              onMouseEnter={e => { if (ready) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(196,122,58,0.4)"; } }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = ready ? "0 6px 20px rgba(196,122,58,0.35)" : "none"; }}
            >
              Enviar solicitud 🎁
            </button>
          </div>
        )}
      </div>
    </section>
  );
}