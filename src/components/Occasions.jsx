import { occasions } from "../data/constants";

export default function Occasions() {
  return (
    <section id="ocasiones" className="ocasiones-section">
      <div className="badge">💝 PERFECTOS PARA</div>
      <div className="ocasiones-container">
        {occasions.map(o => (
          <span key={o} className="ocasion-tag">{o}</span>
        ))}
      </div>
    </section>
  );
}