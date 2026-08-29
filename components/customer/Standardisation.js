import { standardRows } from "@/lib/content";

export default function Standardisation() {
  return (
    <section className="section wrap" id="standard">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Trust &amp; safety</div>
        <h2>Standardisation isn&apos;t a tagline. It&apos;s the process.</h2>
        <p className="lede">
          This is what we mean, in practice, when we say every Cleclo order follows the same
          standard.
        </p>
      </div>

      <div className="std-list">
        {standardRows.map((row) => (
          <div className="std-row" data-reveal key={row.tag}>
            <div className="std-tag">{row.tag}</div>
            <div>
              <h3>{row.title}</h3>
              <p>{row.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="verify-block">
        <div className="verify-head" data-reveal>
          <h3>A 3-step verification system, on every order</h3>
          <p>
            A built-in check at three points in the journey — so there&apos;s always a clear,
            auditable record of your garments, from booking to delivery.
          </p>
        </div>

        <div className="verify-grid" data-reveal>
          <div className="verify-card">
            <span className="vnum">1</span>
            <div className="verify-icon" style={{ background: "var(--pine)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="3.4" stroke="white" strokeWidth="1.7" />
                <path
                  d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5"
                  stroke="white"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
              <span className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
                    stroke="var(--pine)"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="13" r="3" stroke="var(--pine)" strokeWidth="1.8" />
                </svg>
              </span>
            </div>
            <h4>Customer Confirmation</h4>
            <p>
              Your order details and the condition of each item are logged the moment you book —
              a reference point that stays with your order end to end.
            </p>
          </div>

          <div className="verify-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="verify-card">
            <span className="vnum">2</span>
            <div
              className="verify-icon"
              style={{ background: "linear-gradient(135deg,var(--brand-light),var(--brand-dark))" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 7h10v9H3zM13 11h4l3 3v2h-7z" stroke="white" strokeWidth="1.7" strokeLinejoin="round" />
                <circle cx="7.5" cy="18" r="1.6" fill="white" />
                <circle cx="16.5" cy="18" r="1.6" fill="white" />
              </svg>
              <span className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 8l9-5 9 5-9 5-9-5Z"
                    stroke="var(--brand-dark)"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path d="M3 8v8l9 5 9-5V8" stroke="var(--brand-dark)" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <h4>Pickup Verification</h4>
            <p>
              Items are checked against your recorded order at pickup so both you and the rider
              agree on condition before handover.
            </p>
          </div>

          <div className="verify-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="verify-card">
            <span className="vnum">3</span>
            <div className="verify-icon" style={{ background: "var(--brass)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 10l1-5h14l1 5" stroke="var(--pine)" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="M4 10h16v9H4z" stroke="var(--pine)" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="M9 14v5M15 14v5" stroke="var(--pine)" strokeWidth="1.5" />
              </svg>
              <span className="badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12l5 5L20 6"
                    stroke="var(--brand-dark)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <h4>Vendor Intake Verification</h4>
            <p>
              Your garments are checked again at the partner facility — condition, service scope
              and handling requirements confirmed before any work begins.
            </p>
          </div>
        </div>

        <div className="verify-callout" data-reveal>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12l5 5L20 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            Helps reduce order disputes by up to <b>90%</b> through transparent, auditable
            checkpoints.
          </span>
        </div>
      </div>
    </section>
  );
}
