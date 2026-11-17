import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { site } from '../config.js';
import { verticals } from '../data/content.js';

const nav = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/about', 'About'],
  ['/careers', 'Careers'],
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header-inner">
        <Logo />
        <nav className="main-nav" aria-label="Main">
          {nav.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
          ))}
          <Link to="/contact" className="btn btn-gold btn-sm">Contact us</Link>
        </nav>
        <button className="nav-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-tag">{site.tagline}</p>
          <p className="muted small">Singapore · Australia · Sri Lanka · APAC</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {verticals.map((v) => (
              <li key={v.id}><Link to={`/services#${v.id}`}>{v.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul className="contact-list">
            {site.phones.map((p) => (
              <li key={p.href}><Icon name="phone" size={16} /><a href={p.href}>{p.display}</a></li>
            ))}
            <li><Icon name="mail" size={16} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><Icon name="pin" size={16} /><span>{site.location}</span></li>
            {site.linkedin && <li><Icon name="linkedin" size={16} /><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Zynera Connect. All rights reserved.</span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  );
}
