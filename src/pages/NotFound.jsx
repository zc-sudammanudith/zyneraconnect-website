import { Link } from 'react-router-dom';
import { PageHero, usePageMeta } from '../components/Common.jsx';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <PageHero eyebrow="404" title="This page has moved" accent="or never existed."
      intro="The link may be out of date. Let's get you back on track.">
      <div className="hero-actions">
        <Link to="/" className="btn btn-gold">Back to home</Link>
        <Link to="/contact" className="btn btn-ghost">Contact us</Link>
      </div>
    </PageHero>
  );
}
