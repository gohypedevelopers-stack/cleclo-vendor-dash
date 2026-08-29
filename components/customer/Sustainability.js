export default function Sustainability() {
  return (
    <section className="section wrap" id="sustainability">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Sustainability</div>
        <h2>Better for your clothes. Better for the world.</h2>
        <p className="lede">
          Better garment care should also mean making more responsible choices for the world
          around us. From the way we clean and recover solvents to how we package and deliver,
          Cleclo is building a more thoughtful standard for dry cleaning.
        </p>
      </div>

      <div className="eco-grid">
        <div className="eco-card" data-reveal>
          <div className="eco-icon" style={{ background: "var(--pine)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12a8 8 0 0 1 13.5-5.5M20 12a8 8 0 0 1-13.5 5.5"
                stroke="white"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <path d="M17 4v4h-4M7 20v-4h4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="eco-tag">Responsible Cleaning</span>
          <h3>Hydrocarbon &amp; Wet Cleaning Systems</h3>
          <p>
            Our Hydrocarbon and Wet Cleaning systems are designed for effective,
            fabric-appropriate care. <strong>Solvent recovery and recycling</strong> processes
            help minimise waste and reduce discharge into the environment.
          </p>
        </div>

        <div className="eco-card" data-reveal>
          <div
            className="eco-icon"
            style={{ background: "linear-gradient(135deg,var(--brand-light),var(--brand-dark))" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 20C6 12 12 6 20 4C20 12 14 18 6 20Z"
                stroke="white"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M8 18c3-4 6-7 10-9" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
          <span className="eco-tag">Better Packaging</span>
          <h3>Biodegradable &amp; Compostable</h3>
          <p>
            We use <strong>biodegradable and compostable</strong> packaging alternatives to
            reduce dependence on conventional single-use plastic.
          </p>
        </div>

        <div className="eco-card" data-reveal>
          <div className="eco-icon" style={{ background: "var(--pine-2)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 3L4 14h6l-1 7 9-11h-6l1-7Z"
                stroke="white"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="eco-tag">Cleaner Deliveries</span>
          <h3>Electric Mobility</h3>
          <p><strong>Electric vehicles</strong> for pickup and delivery help reduce emissions across the Cleclo journey.</p>
        </div>
      </div>

      <div className="eco-closing" data-reveal>
        <svg className="eco-closing-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 20C6 12 12 6 20 4C20 12 14 18 6 20Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M8 18c3-4 6-7 10-9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <p>
          A better clean shouldn&rsquo;t come at a <em>greater cost</em> to the world around us.
        </p>
      </div>
    </section>
  );
}
