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
            <img src="/epl-logo.svg" className="brand-logo" alt="EPL lab logo" />
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
            <p>Placeholder footer description for Energy and Propulsion Lab.</p>
          </div>
          <div><h2>Quick Links</h2>{navLinks.slice(0, 5).map((item) => <Link key={item.href} to={item.href}>{item.label}</Link>)}</div>
          <div><h2>Research Links</h2>{researchAreas.slice(0, 4).map((area) => <Link key={area.title} to="/research">{area.title}</Link>)}</div>
          <div>
            <h2>Contact</h2>
            <p>502, C-Block, Department of Mechanical and Aerospace Engineering</p>
            <p>PG Shed Labs 35, 39, 52B</p>
            <p><a href="mailto:gnan@mae.iith.ac.in">gnan@mae.iith.ac.in</a></p>
            <p>Phone: 040 2301 6684</p>
            <p><a href="/join">Join us</a></p>
          </div>
        </div>
        <div className="footer-bottom container">
          <p>Copyright 2026 Energetics and Propulsion Laboratory. All rights reserved.</p>
          <Link className="back-top" to="/" aria-label="Back to top">Top</Link>
        </div>
      </footer>
    </>
  );
}
