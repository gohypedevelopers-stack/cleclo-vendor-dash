export default function Services() {
  return (
    <section className="section wrap" id="services">
      <div className="section-head" data-reveal>
        <div className="eyebrow">What we offer</div>
        <h2>One app, every garment care service</h2>
      </div>
      <div className="svc-grid">
        <div className="svc-card" data-reveal>
          <div className="svc-icon" style={{ background: "var(--pine)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 3l1.5 2h5L16 3M6 7l-3 4v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9l-3-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M9 7v13M15 7v13" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </div>
          <h3>Dry Cleaning</h3>
          <p>Delicate garments, formal wear and specialty fabrics, handled with fabric-specific protocols.</p>
        </div>

        <div className="svc-card" data-reveal>
          <div
            className="svc-icon"
            style={{ background: "linear-gradient(135deg,var(--brand-light),var(--brand-dark))", color: "#fff" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="13" r="7" stroke="currentColor" strokeWidth="1.6" />
              <path d="M9 13a3 3 0 0 0 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M9 4h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Washing</h3>
          <p>Everyday garments, sorted by fabric and colour, with standardised wash cycles and quality checks.</p>
        </div>

        <div className="svc-card" data-reveal>
          <div className="svc-icon" style={{ background: "var(--pine-2)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 16h11l3-3V8a2 2 0 0 0-2-2H8L4 10v6Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M4 20h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Steam Ironing</h3>
          <p>Professional pressing with fabric-safe temperature control and consistent finishing.</p>
        </div>

        <div className="svc-card" data-reveal>
          <div className="svc-icon" style={{ background: "var(--brass)", color: "var(--pine)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>Premium &amp; Leather Care</h3>
          <p>Designer wear, leather and high-value items, with specialised handling and packaging.</p>
        </div>
      </div>
    </section>
  );
}
