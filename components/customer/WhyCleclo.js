import { comparison } from "@/lib/content";

export default function WhyCleclo() {
  return (
    <section className="section wrap" id="why">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Why Cleclo</div>
        <h2>Every dry cleaner runs on its own rules. We replaced them with a standard.</h2>
        <p className="lede">
          From pricing and garment handling to quality checks and delivery, the dry-cleaning
          experience often depends on who you choose. Cleclo brings every step under one
          standardised system — so you know what to expect, every single time.
        </p>
        <p className="tagline">Standardised Process · Consistent Quality · Reliable Service.</p>
      </div>

      <div className="compare">
        <div className="ticket no" data-reveal>
          <span className="ticket-tag">{comparison.without.tag}</span>
          <h3>{comparison.without.title}</h3>
          <ul>
            {comparison.without.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="ticket yes" data-reveal>
          <span className="ticket-tag">{comparison.with.tag}</span>
          <h3>{comparison.with.title}</h3>
          <ul>
            {comparison.with.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
