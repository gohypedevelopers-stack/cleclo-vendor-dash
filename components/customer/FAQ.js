import { faqs } from "@/lib/content";

export default function FAQ() {
  return (
    <section className="section wrap" id="faq">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Questions</div>
        <h2>Good to know before you book</h2>
      </div>
      <div className="faq-list" data-reveal>
        {faqs.map((item) => (
          <details className="faq-item" open={item.open} key={item.q}>
            <summary>
              {item.q}
              <span className="plus"></span>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
