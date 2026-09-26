import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navItems, researchAreas } from "../data/content";
import "../styles.css";

function useScrollState() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const scrolled = useScrollState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  const navLinks: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "Research Areas", href: "/research" },
    { label: "Team", href: "/team" },
    { label: "Publications", href: "/publications" },
    { label: "Courses", href: "/courses" },
    { label: "Gallery", href: "/gallery" },
    { label: "Join us", href: "/join" },
  ];

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="nav-shell" aria-label="Primary navigation">
          <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="EPL home">
            <img src="/EPL-LogoNew.png" className="brand-logo" alt="EPL lab logo" />
              <span className="brand-text">Energetics and Propulsion Laboratory</span>
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation menu"
            aria-controls="primary-navigation"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul id="primary-navigation" className={`nav-links ${open ? "is-open" : ""}`}>
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link to={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <span className="brand-mark">EPL</span>
            <p>Energetics and Propulsion Laboratory, IIT Hyderabad.</p>
          </div>
          <div>
            <h2>Contact</h2>
            <ul className="footer-contact-list">
              <li>
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>502, C-Block, Dept. of Mechanical and Aerospace Engineering &amp; PG Shed Labs 35, 39, 52B — IIT Hyderabad</span>
              </li>
              <li>
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:gnan@mae.iith.ac.in">gnan@mae.iith.ac.in</a>
              </li>
              <li>
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.67 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.54 2.81.67a2 2 0 0 1 1.72 2.03z"/>
                </svg>
                <span>040 2301 6684</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom container">
          <p>© 2026 Energetics and Propulsion Laboratory, IIT Hyderabad. All rights reserved.</p>
          <a className="back-top" href="#main" aria-label="Back to top">Top</a>
        </div>
      </footer>
    </>
  );
}
