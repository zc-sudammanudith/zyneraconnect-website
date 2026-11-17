import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { PageHero, SectionHead, IconBadge, CtaBand, usePageMeta } from '../components/Common.jsx';
import { verticals, stack } from '../data/content.js';

function Vertical({ v, index }) {
  const dark = index % 2 === 1;
  return (
    <section id={v.id} className={`section vertical ${dark ? 'dark' : 'light'}`}>
      <div className="container vertical-grid">
        <div className="vertical-intro">
          <span className="big-no">{v.no}</span>
          <h2>{v.title}</h2>
          <p className="serif-lead">{v.lead}</p>
          <p className={dark ? 'muted' : 'body-muted'}>{v.body}</p>
          <Link to={`/contact?service=${encodeURIComponent(v.title)}`} className="btn btn-gold btn-sm">Enquire about this service</Link>
        </div>
        <div className="vertical-body">
          {v.points && (
            <div className={`point-grid ${v.points.length > 4 ? 'three' : ''} ${v.points.length === 3 ? 'three' : ''}`}>
              {v.points.map(([t, d], i) => (
                <div className="point" key={t}>
                  {v.steps ? <span className="step-no small">{i + 1}</span> : <span className="tick"><Icon name="check" size={18} /></span>}
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          )}
          {v.groups && (
            <div className="point-grid three">
              {v.groups.map(([t, items]) => (
                <div className="point" key={t}>
                  <h4 className="gold-head">{t}</h4>
                  <ul className="check-list">{items.map((i) => <li key={i}><Icon name="check" size={16} />{i}</li>)}</ul>
                </div>
              ))}
            </div>
          )}
          {v.tags && (
            <div className="tag-panel">
              <span className="tag-label">{v.tagLabel}</span>
              <div className="tags">{v.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  usePageMeta('Services', 'Seven service verticals from Zynera Connect: staff augmentation, teams on demand, direct placements, development and technical support, capability development, marketing, and admin, engagement and events.');

  return (
    <>
      <PageHero eyebrow="Our services" title="Seven verticals." accent="One accountable partner."
        intro="Pick a single service or combine several. Capability development, marketing, admin and event support can be layered onto any engagement model.">
        <nav className="jump-links" aria-label="Services">
          {verticals.map((v) => <a key={v.id} href={`#${v.id}`}><span>{v.no}</span>{v.title}</a>)}
        </nav>
      </PageHero>

      {verticals.map((v, i) => <Vertical v={v} index={i} key={v.id} />)}

      <section className="section white" id="technology">
        <div className="container">
          <SectionHead eyebrow="Talent & technology coverage" title="A deep bench across the modern stack" />
          <div className="card-grid three">
            {stack.map(([icon, t, d]) => (
              <div className="card" key={t}>
                <div className="card-top"><IconBadge name={icon} tone="teal" /></div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <p className="note">Alongside product management, UI/UX, QA, marketing and operations specialists.</p>
        </div>
      </section>

      <CtaBand title="Not sure where to start?" />
    </>
  );
}

