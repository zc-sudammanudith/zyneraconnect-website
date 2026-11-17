import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import { PageHero, SectionHead, IconBadge, usePageMeta } from '../components/Common.jsx';
import useFormSubmit, { formToObject } from '../components/useFormSubmit.js';
import { site } from '../config.js';
import { jobs, perks } from '../data/content.js';

function JobCard({ job, onApply }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`job ${open ? 'open' : ''}`}>
      <div className="job-head">
        <div>
          <span className="job-team">{job.team}</span>
          <h3>{job.title}</h3>
          <div className="job-meta">
            <span><Icon name="pin" size={16} />{job.location}</span>
            <span><Icon name="clock" size={16} />{job.type}</span>
          </div>
        </div>
        <div className="job-actions">
          <button className="btn btn-outline btn-sm" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? 'Hide details' : 'View details'}</button>
          <button className="btn btn-gold btn-sm" onClick={() => onApply(job.title)}>Apply</button>
        </div>
      </div>
      {open && (
        <div className="job-body">
          <p>{job.summary}</p>
          <h4>What you'll bring</h4>
          <ul className="check-list">{job.requirements.map((r) => <li key={r}><Icon name="check" size={16} />{r}</li>)}</ul>
        </div>
      )}
    </article>
  );
}

export default function Careers() {
  usePageMeta('Careers', 'Join Zynera Connect. Work with enterprise and public sector clients across Singapore, Australia, Sri Lanka and APAC.');
  const [role, setRole] = useState('');
  const { status, error, submit, reset } = useFormSubmit({
    to: site.careersEmail,
    subject: (d) => `Job application: ${d.role || 'Talent network'} from ${d.name}`,
  });

  function apply(title) {
    setRole(title);
    reset();
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  }

  function onSubmit(e) {
    e.preventDefault();
    submit(formToObject(e.currentTarget));
  }

  return (
    <>
      <PageHero eyebrow="Careers" title="Do the best work of your career," accent="across APAC."
        intro="Join a team of 160+ engineers, designers, marketers and operators delivering for enterprise and public sector clients.">
        <div className="hero-actions">
          <a href="#openings" className="btn btn-gold">See open roles <Icon name="arrow" size={18} /></a>
          <a href="#apply" className="btn btn-ghost">Join our talent network</a>
        </div>
      </PageHero>

      <section className="section light">
        <div className="container">
          <SectionHead eyebrow="Why join us" title="Grow with a partner that does the work" />
          <div className="card-grid four">
            {perks.map(([icon, t, d]) => (
              <div className="card" key={t}><div className="card-top"><IconBadge name={icon} /></div><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section white" id="openings">
        <div className="container">
          <SectionHead eyebrow="Open positions" title={jobs.length ? `${jobs.length} open roles` : 'No open roles right now'}
            intro={jobs.length ? 'Don\'t see the right fit? Join our talent network below and we\'ll reach out when a matching role opens.' : 'We are always meeting great people. Join our talent network and we will reach out when a matching role opens.'} />
          <div className="job-list">
            {jobs.map((j) => <JobCard job={j} key={j.id} onApply={apply} />)}
          </div>
        </div>
      </section>

      <section className="section dark" id="apply">
        <div className="container contact-grid">
          <div>
            <SectionHead eyebrow="Apply" title={role ? `Apply for ${role}` : 'Join our talent network'}
              intro="Share a few details and a link to your CV or LinkedIn profile. Our people team reviews every application." />
            <ul className="steps-mini">
              <li><span className="step-no small">1</span>We review your profile</li>
              <li><span className="step-no small">2</span>Intro call with our people team</li>
              <li><span className="step-no small">3</span>Technical or skills conversation</li>
              <li><span className="step-no small">4</span>Offer and onboarding</li>
            </ul>
            <p className="muted small">Prefer email? Send your CV to <a className="gold-text" href={`mailto:${site.careersEmail}`}>{site.careersEmail}</a></p>
          </div>
          <div className="form-card">
            {status === 'sent' ? (
              <div className="form-success" role="status">
                <span className="icon-badge teal big"><Icon name="check" size={30} /></span>
                <h3>Thanks for applying.</h3>
                <p>Our people team will review your profile and get back to you.</p>
                <button className="btn btn-outline btn-sm" onClick={reset}>Submit another application</button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <label>Full name *<input name="name" required autoComplete="name" /></label>
                  <label>Email *<input name="email" type="email" required autoComplete="email" /></label>
                </div>
                <div className="form-row">
                  <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
                  <label>Current location<input name="location" /></label>
                </div>
                <label>Role
                  <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="">General application / talent network</option>
                    {jobs.map((j) => <option key={j.id} value={j.title}>{j.title}</option>)}
                  </select>
                </label>
                <label>Link to CV or LinkedIn *<input name="cv_link" type="url" required placeholder="https://" /></label>
                <label>Tell us about yourself<textarea name="message" rows="4" /></label>
                <input type="checkbox" name="botcheck" className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                {status === 'error' && <p className="form-error" role="alert">{error} Please email us at {site.careersEmail}.</p>}
                <button className="btn btn-gold" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : <>Submit application <Icon name="arrow" size={18} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
