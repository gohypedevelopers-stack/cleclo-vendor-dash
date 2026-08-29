import { coverageTiers } from "@/lib/content";

export default function Coverage() {
  return (
    <section className="section wrap" id="coverage">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Where we operate</div>
        <h2>Built for every kind of Indian city</h2>
        <p className="lede">
          Cleclo is currently live in Delhi NCR and expanding city by city — onboarding verified
          partners before we switch a pincode on.
        </p>
      </div>
      <div className="cov-grid">
        {coverageTiers.map((tier) => (
          <div className={`cov-card${tier.live ? " live" : ""}`} data-reveal key={tier.tier}>
            <div className="tier-lbl">{tier.tier}</div>
            <h3>{tier.title}</h3>
            <p>{tier.desc}</p>
            <span className="cov-badge">{tier.badge}</span>
          </div>
        ))}
      </div>
      <p className="cov-note">Check pincode-level availability inside the Cleclo app before you book.</p>
    </section>
  );
}
