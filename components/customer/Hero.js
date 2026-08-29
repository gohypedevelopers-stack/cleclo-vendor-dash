export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">India&apos;s first standardised dry-cleaning network</div>
          <h1>
            Dry cleaning,
            <br />
            finally <em>organised.</em>
          </h1>
          <p className="sub">
            Cleclo handles your pickup and delivery end-to-end, while a certified local partner
            takes care of your garments — one standard price, one standard process and a 72-hour
            promise, with Express options when you need it sooner.
          </p>

          <div className="hero-ctas">
            <a href="#download" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path d="M11 18h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span className="btn-copy">
                <small>Download on the</small>App Store
              </span>
            </a>
            <a href="#download" className="btn btn-ghost">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path d="M11 18h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span className="btn-copy">
                <small>Get it on</small>Google Play
              </span>
            </a>
          </div>
          <p className="hero-note">Ordering, tracking &amp; payments happen inside the Cleclo app.</p>

          <div className="ticket-strip">
            <span className="hole"></span>
            NEW CLIENTS JOINING EVERY WEEK ACROSS DELHI NCR.
          </div>

          <div className="trust-row">
            <div className="item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12l2 2 4-4M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              Certified Care Partners
            </div>
            <div className="item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Standardised Pricing
            </div>
            <div className="item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              End-to-End Order Tracking
            </div>
            <div className="item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 3L4 14h6l-1 7 9-11h-6l1-7Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              Same-Day to Scheduled Delivery
            </div>
          </div>
        </div>

        <div className="seal-wrap">
          <svg className="seal-spin" viewBox="0 0 320 320">
            <defs>
              <path id="sealCircle" d="M160,160 m-128,0 a128,128 0 1,1 256,0 a128,128 0 1,1 -256,0" />
            </defs>
            <circle cx="160" cy="160" r="150" fill="none" stroke="var(--kraft-line)" strokeWidth="1" />
            <circle cx="160" cy="160" r="128" fill="none" stroke="var(--brass)" strokeWidth="1.4" strokeDasharray="2 6" />
            <text style={{ fontFamily: "var(--font-mono)" }} fontSize="12.5" letterSpacing="3" fill="var(--pine-2)">
              <textPath href="#sealCircle" startOffset="0%">
                CERTIFIED PARTNERS • STANDARDISED CARE • QUALITY CHECKED • ON-TIME DELIVERY •
              </textPath>
            </text>
          </svg>
          <div className="seal-center">
            <div className="num">72</div>
            <div className="lbl">HOUR STANDARD TURNAROUND</div>
            <div className="lbl2">EXPRESS SERVICE AVAILABLE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
