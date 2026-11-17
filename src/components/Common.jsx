import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Zynera Connect` : 'Zynera Connect | Talent, teams and delivery. On demand.';
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHead({ eyebrow, title, intro, center }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, accent, intro, children }) {
  return (
    <section className="page-hero dark">
      <div className="rings" aria-hidden="true"><span /><span /><span /></div>
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title} {accent && <span className="accent">{accent}</span>}</h1>
        {intro && <p className="hero-intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function IconBadge({ name, tone = 'dark' }) {
  return <span className={`icon-badge ${tone}`}><Icon name={name} /></span>;
}

export function CtaBand({ title = "Let's build your next stage of growth.", text = 'Tell us the outcome you need. We will shape the right mix of people and delivery.' }) {
  return (
    <section className="cta-band dark">
      <div className="rings" aria-hidden="true"><span /><span /></div>
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-gold">Start a conversation <Icon name="arrow" size={18} /></Link>
          <Link to="/services" className="btn btn-ghost">Explore services</Link>
        </div>
      </div>
    </section>
  );
}
