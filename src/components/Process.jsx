import { useInView } from "../hooks/useInView";

const processSteps = [
  ["🛍️", "Elige el producto", "Navega el catálogo y encuentra lo ideal para esa persona especial."],
  ["✏️", "Personalízalo", "Agrega nombre, fecha, frase o foto. Lo hacemos solo tuyo."],
  ["🎨", "Lo creamos", "Con amor y cuidado en cada detalle. Listo en 48–72 horas."],
  ["📦", "Lo enviamos", "Empaque especial incluido. Llegamos a toda Colombia."],
];

export default function Process() {
  const [procRef, procIn] = useInView();

  return (
    <section id="proceso" ref={procRef} className="proceso-section">
      <div className="section-header">
        <div className="badge">✨ PROCESO</div>
        <h2 className="section-title">Simple como debe ser</h2>
      </div>
      <div className="proceso-grid">
        {processSteps.map(([ic, t, d], i) => (
          <div 
            key={t} 
            style={{
              opacity: procIn ? 1 : 0, 
              transform: procIn ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.55s ease ${i * 0.12}s, transform 0.55s ease ${i * 0.12}s`,
            }}
          >
            <div className="proceso-step-icon">{ic}</div>
            <div className="proceso-step-title">{t}</div>
            <div className="proceso-step-desc">{d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}