import { PageHero, SectionHead, IconBadge, CtaBand, usePageMeta } from '../components/Common.jsx';
import { stats, serviceLines, approach, principles, whyUs, regions } from '../data/content.js';

export default function About() {
  usePageMeta('About us', 'Zynera Connect is a Singapore based technology consulting company helping organisations enter markets, build digital capability and run operations across APAC.');

  return (
    <>
      <PageHero eyebrow="About Zynera Connect" title="Strategy. Delivery. Growth." accent="End to end."
        intro="Zynera Connect is a Singapore based technology consulting company. We help organisations enter markets, build digital capability and run operations across Singapore, Australia, Sri Lanka and the wider APAC region." />

      <section className="section light">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Our four service lines" title="How we create value" intro="Every engagement draws on one or more of our core service lines, delivered by a single accountable team." />
            <div className="line-grid">
              {serviceLines.map((s) => <span className="line-chip" key={s}>{s}</span>)}
            </div>
          </div>
          <div className="stat-stack">
            {stats.map((s) => (
              <div className="stat-card" key={s.value}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <SectionHead eyebrow="What sets us apart" title="One partner. Every stage of growth." />
          <div className="card-grid three">
            {whyUs.map(([icon, t, d]) => (
              <div className="card" key={t}>
                <div className="card-top"><IconBadge name={icon} /></div>
                <h3>{t}</h3><p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHead eyebrow="Our approach" title="A simple, transparent way of working" />
          <ol className="timeline on-dark">
            {approach.map(([t, d], i) => (
              <li key={t}><span className="step-no">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
          <div className="principles on-dark">
            {principles.map(([icon, t, d]) => (
              <div className="principle" key={t}><IconBadge name={icon} tone="teal" /><div><h4>{t}</h4><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <SectionHead eyebrow="Where we deliver" title="Rooted in Asia, delivering worldwide" />
          <div className="card-grid four">
            {regions.map(([r, d]) => (
              <div className="region light-region" key={r}><IconBadge name="pin" tone="teal" /><div><h4>{r}</h4><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
