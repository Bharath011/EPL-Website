import { useEffect } from "react";
import "../styles.css";

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function JoinUsPage() {
  useReveal();

  return (
    <main id="main">
      <section className="section about" id="join" aria-labelledby="join-title">
        <div className="container about-grid">
          <div className="about-copy" data-reveal>
            <p className="eyebrow">Join us</p>
            <h2 id="join-title">Become part of EPL</h2>
            <p>The Energetics and Propulsion Laboratory welcomes motivated PhD scholars, M.Tech scholars, project staff, and collaborators.</p>
            <p>Researchers at EPL work on rocket propulsion, energetic materials, combustion diagnostics, electric propulsion, and sustainable aerospace fuels.</p>
            <p>To inquire about opportunities, contact our lab directly and share your research interests, academic background, and relevant experience.</p>
            <div className="contact-details">
              <p><strong>Email</strong><span><a  href="https://mail.google.com/mail/?view=cm&fs=1&to=gnan@mae.iith.ac.in" target="_blank" rel="noopener noreferrer" style={{ color: "blue", fontWeight: "bold" }}>gnan@mae.iith.ac.in</a></span></p>
              <p><strong>Phone</strong><span>040 2301 6684</span></p>
              <p><strong>Location</strong><span>502, C-Block, Department of Mechanical and Aerospace Engineering; PG Shed Labs 35, 39, 52B</span></p>
            </div>
          </div>
          <div className="image-panel" data-reveal>
             <img src="/EPL-LogoNew.png" className="brand-logo" alt="EPL lab logo" />
          </div>
        </div>
      </section>
    </main>
  );
}
