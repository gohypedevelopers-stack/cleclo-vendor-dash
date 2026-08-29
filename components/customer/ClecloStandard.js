import { kpiCards } from "@/lib/content";

export default function ClecloStandard() {
  return (
    <section className="section wrap" id="standard-kpi">
      <div className="section-head" data-reveal>
        <div className="eyebrow">The Cleclo standard, in numbers</div>
        <h2>What &ldquo;standardised&rdquo; actually means for you</h2>
      </div>
      <div className="kpi-grid">
        {kpiCards.map((card) => (
          <div className="kpi-card" data-reveal key={card.title}>
            <span className="hole"></span>
            <div className="num">{card.num}</div>
            <div className="title">{card.title}</div>
            <div className="desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
