import { Link, useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { PageHero, IconBadge, usePageMeta } from '../components/Common.jsx';
import useFormSubmit, { formToObject } from '../components/useFormSubmit.js';
import { site } from '../config.js';
import { verticals } from '../data/content.js';

export default function Contact() {
  usePageMeta('Contact us', 'Contact Zynera Connect in Singapore and Sri Lanka. Tell us the outcome you need and we will shape the right mix of people and delivery.');
  const [params] = useSearchParams();
  const preset = params.get('service') || '';
  const { status, error, submit, reset } = useFormSubmit({
    subject: (d) => `Website enquiry: ${d.service || 'General'} from ${d.name}`,
  });

  function onSubmit(e) {
    e.preventDefault();
    submit(formToObject(e.currentTarget));
  }

  return (
    <>
      <PageHero eyebrow="Get in touch" title="Let's build your next stage of" accent="growth."
        intro="Tell us the outcome you need. We'll come back within one business day with the right mix of people and delivery." />

      <section className="section light">
        <div className="container contact-grid">
          <aside className="contact-info">
            <h2>Talk to our team</h2>
            <p className="body-muted">Whether you need one specialist or a full squad, a single point of contact will guide you from first call to delivery.</p>
            <ul className="info-list">
              {site.phones.map((p) => (
                <li key={p.href}><IconBadge name="phone" /><div><span className="info-label">{p.label}</span><a href={p.href}>{p.display}</a></div></li>
              ))}
              <li><IconBadge name="mail" /><div><span className="info-label">Email</span><a href={`mailto:${site.email}`}>{site.email}</a></div></li>
              <li><IconBadge name="pin" /><div><span className="info-label">Headquarters</span><span>{site.location}</span></div></li>
            </ul>
            <div className="card card-dark small-card">
              <h3 className="gold">Looking for a role?</h3>
              <p>Visit our careers page to see open positions and join our talent network.</p>
              <Link to="/careers" className="btn btn-gold btn-sm">View careers</Link>
            </div>
          </aside>

          <div className="form-card">
            {status === 'sent' ? (
              <div className="form-success" role="status">
                <span className="icon-badge teal big"><Icon name="check" size={30} /></span>
                <h3>Thank you. Your message is on its way.</h3>
                <p>We'll be in touch shortly. For anything urgent, call us on {site.phones[0].display}.</p>
                <button className="btn btn-outline btn-sm" onClick={reset}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate={false}>
                <h3>Send us a message</h3>
                <div className="form-row">
                  <label>Full name *<input name="name" required autoComplete="name" /></label>
                  <label>Work email *<input name="email" type="email" required autoComplete="email" /></label>
                </div>
                <div className="form-row">
                  <label>Company<input name="company" autoComplete="organization" /></label>
                  <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
                </div>
                <div className="form-row">
                  <label>Service of interest
                    <select name="service" defaultValue={preset}>
                      <option value="">Not sure yet</option>
                      {verticals.map((v) => <option key={v.id} value={v.title}>{v.title}</option>)}
                    </select>
                  </label>
                  <label>Country
                    <select name="country" defaultValue="">
                      <option value="">Select</option>
                      {['Singapore', 'Australia', 'Sri Lanka', 'Other APAC', 'Europe', 'Middle East', 'North America', 'Other'].map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </label>
                </div>
                <label>How can we help? *<textarea name="message" rows="5" required /></label>
                <input type="checkbox" name="botcheck" className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                {status === 'error' && <p className="form-error" role="alert">{error} Please email us at {site.email}.</p>}
                <button className="btn btn-gold" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : <>Send message <Icon name="arrow" size={18} /></>}
                </button>
                <p className="small muted-dark">We only use your details to respond to your enquiry.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
