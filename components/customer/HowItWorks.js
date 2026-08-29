import { steps } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section className="section wrap" id="how">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Getting started</div>
        <h2>One standard. Built into every step.</h2>
        <p className="lede">
          Five steps, the same for every order — from the moment you book to the moment it&apos;s
          back in your hands.
        </p>
      </div>
      <div className="line-wrap" data-reveal>
        <div className="line-track">
          {steps.map((step) => (
            <div className="line-step" key={step.stepNo}>
              <div className="pin"></div>
              <div className="peg"></div>
              <div className="line-card">
                <div className="step-no">{step.stepNo}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
