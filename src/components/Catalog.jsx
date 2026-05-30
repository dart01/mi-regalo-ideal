import ProductCard from "./ProductCard";
import { products } from "../data/constants";

export default function Catalog() {
  return (
    <section id="catalogo" className="catalogo-section">
      <div className="section-header">
        <div className="badge">🎁 CATÁLOGO</div>
        <h2 className="section-title">
          Hecho con cariño,<br /><em>entregado con amor</em>
        </h2>
      </div>
      <div className="products-grid">
        {products.map((p, i) => (
          <ProductCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}