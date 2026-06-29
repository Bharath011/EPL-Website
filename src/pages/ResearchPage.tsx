import { useEffect } from "react";
import { researchAreas } from "../data/content";
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

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default function ResearchPage() {
  useReveal();

  return (
    <main id="main">
      <section className="section muted" id="research" aria-labelledby="research-title">
        <div className="container">
          <SectionHeading eyebrow="Research" title="Current Research Focus Areas" text="Current research focuses on combustion and hydrolysis of metal fuel particles, solid rocket propellant performance, pyroelectric solid propellants, and pyrotechnic igniters and delay materials." />
          <div className="card-grid three">
            {researchAreas.map((area) => (
              <article className="feature-card" key={area.title} data-reveal>
                <img src={area.image} alt={`${area.title} placeholder`} loading="lazy" />
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <a className="text-link" href="/join">Read More</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
