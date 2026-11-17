import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { SectionHead, IconBadge, CtaBand, usePageMeta, Eyebrow } from '../components/Common.jsx';
import { verticals, stats, models, approach, principles, industries, regions, whyUs } from '../data/content.js';

export default function Home() {
  usePageMeta('', 'Zynera Connect: staff augmentation, teams on demand, direct placements, software development, capability development, marketing and events across Singapore, Australia, Sri Lanka and APAC.');

  return (
    <>
      {/* HERO */}
      <section className="hero dark">
        <div className="rings" aria-hidden="true"><span /><span /><span /></div>
        <div className="container hero-inner">
          <span className="pill">Technology consulting · Singapore</span>
          <h1>Talent, teams and delivery.<br /><span className="accent">On demand.</span></h1>
          <p className="hero-intro">
            We help organisations enter markets, build digital capability and run operations across
            Singapore, Australia, Sri Lanka and the wider APAC region.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-gold">Talk to us <Icon name="arrow" size={18} /></Link>
            <Link to="/services" className="btn btn-ghost">Explore our services</Link>
          </div>
          <p className="hero-regions">Singapore · Australia · Sri Lanka · APAC</p>
        </div>
        <div className="container">
          <div className="stat-row">
            {stats.map((s) => (
              <div className="stat" key={s.value}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="section light">
        <div className="container">
          <SectionHead eyebrow="What we do" title="Seven verticals. One accountable partner." />
          <div className="card-grid four">
            {verticals.map((v) => (
              <Link to={`/services#${v.id}`} className="card card-link" key={v.id}>
                <div className="card-top"><IconBadge name={v.icon} /><span className="card-no">{v.no}</span></div>
                <h3>{v.title}</h3>
                <p>{v.short}</p>
                <span className="card-more">Learn more <Icon name="arrow" size={16} /></span>
              </Link>
            ))}
            <div className="card card-dark">
              <h3 className="gold">Not sure where to start?</h3>
              <p>Tell us the outcome you need. We'll shape the right mix of people and delivery.</p>
              <Link to="/contact" className="btn btn-gold btn-sm">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="section white">
        <div className="container">
          <SectionHead eyebrow="How you can engage" title="Four ways to work with us" />
          <div className="table-wrap">
            <table className="models">
              <thead>
                <tr><th scope="col"><span className="sr-only">Attribute</span></th>{models.columns.map((c) => <th scope="col" key={c}>{c}</th>)}</tr>
              </thead>
              <tbody>
                {models.rows.map(([label, cells]) => (
                  <tr key={label}><th scope="row">{label}</th>{cells.map((c, i) => <td key={i} data-label={models.columns[i]}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">Capability development, marketing, admin and event support can be layered onto any model.</p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section light">
        <div className="container">
          <SectionHead eyebrow="Our approach" title="A simple, transparent way of working" />
          <ol className="timeline">
            {approach.map(([t, d], i) => (
              <li key={t}><span className="step-no">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
          <div className="principles">
            {principles.map(([icon, t, d]) => (
              <div className="principle" key={t}><IconBadge name={icon} /><div><h4>{t}</h4><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section dark">
        <div className="container split">
          <div>
            <Eyebrow>Why us</Eyebrow>
            <h2>Why Zynera Connect</h2>
            <p className="serif-lead">One partner. Every stage of growth.</p>
            <p className="muted">People, delivery and marketing support from a single team that is accountable for your outcome.</p>
          </div>
          <div className="why-list">
            {whyUs.map(([icon, t, d]) => (
              <div className="why-item" key={t}><IconBadge name={icon} tone="teal" /><div><h4>{t}</h4><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section white">
        <div className="container">
          <SectionHead eyebrow="Industries & reach" title="Built for enterprise across industries" />
          <div className="chip-grid">
            {industries.map((i) => <span className="chip" key={i}>{i}</span>)}
          </div>
          <h3 className="sub-eyebrow">Where we deliver</h3>
          <div className="card-grid four">
            {regions.map(([r, d]) => (
              <div className="region" key={r}><IconBadge name="pin" tone="teal" /><div><h4>{r}</h4><p className="gold-text">{d}</p></div></div>
            ))}
          </div>
          <p className="note">Extended reach across Europe, the Middle East and North America through client offices and strategic partners, backed by AWS Partner status, blockchain expertise and 24×7 TechOps.</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
