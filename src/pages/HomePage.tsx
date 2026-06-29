import { useEffect } from "react";
import "../styles.css";

const heroImage = "/ENERGETICS%20AND%20PROPULSION%20LABORATORY.png";
const profImage = "/team-rId4.jpeg";

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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function HomePage() {
  useReveal();

  return (
    <main id="main">
      {/* Hero — full-width banner image */}
      <section className="hero" id="home" aria-label="Energetics and Propulsion Laboratory">
        <img className="hero-image" src={heroImage} alt="Energetics and Propulsion Laboratory banner" />
      </section>

      {/* About Us */}
      <section className="section" id="about" aria-labelledby="about-heading">
        <div className="container">
          <div className="section-heading" data-reveal>
            <h2 id="about-heading">About Us</h2>
          </div>
          <div className="about-copy" data-reveal>
            <p>
              The Energetics and Propulsion Laboratory (EPL) is dedicated to advancing rocket
              propulsion and energetic materials through innovative research and engineering.
            </p>
            <p>
              Our work combines experimental studies, computational analysis, and system design
              to address real-world aerospace challenges.
            </p>
            <p>
              Our research spans key areas including rocket propulsion, metal fuel combustion,
              and energetic propellants, along with emerging technologies such as electric
              propulsion, digital imaging and holography for diagnostics, and the development
              of green fuels for sustainable aerospace applications.
            </p>
            <p>
              At EPL, we aim to drive technological innovation while training the next
              generation of aerospace engineers and researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Head of Laboratory */}
      <section className="section muted" id="head-of-lab" aria-labelledby="hol-heading">
        <div className="container">
          <div className="section-heading" data-reveal>
            <h2 id="hol-heading">Head of Laboratory</h2>
          </div>
          <div className="about-grid" data-reveal>
            <div className="image-panel prof-image-panel">
              <img src={profImage} alt="Dr. Gnanaprakash Kanagaraj" />
            </div>
            <div className="about-copy">
              <h3 className="prof-name">Dr. Gnanaprakash Kanagaraj</h3>
              <p className="prof-title">Assistant Professor</p>
              <dl className="prof-details">
                <div>
                  <dt>Office</dt>
                  <dd>502, C-Block</dd>
                </div>
                <div>
                  <dt>Department</dt>
                  <dd>Mechanical and Aerospace Engineering, Indian Institute of Technology Hyderabad</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd><a href="mailto:gnan@mae.iith.ac.in">gnan@mae.iith.ac.in</a></dd>
                </div>
              </dl>
              <h4 className="research-heading">Current areas of research:</h4>
              <ul className="research-list">
                <li>Combustion and hydrolysis of metal fuel particles for clean recyclable energy</li>
                <li>Solid rocket propellants and their performance</li>
                <li>Development of pyroelectric solid propellants (PSPs)</li>
                <li>Characterization of pyrotechnic igniters and delay materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
