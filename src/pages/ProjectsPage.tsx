import { useEffect } from "react";
import { projects } from "../data/content";
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

export default function ProjectsPage() {
  useReveal();

  return (
    <main id="main">
      <section className="section" id="projects" aria-labelledby="projects-title">
        <div className="container">
          <SectionHeading eyebrow="Projects" title="Placeholder Funded Projects" text="Placeholder project cards for future research grants, collaborations, and initiatives." />
          <div className="card-grid three">
            {projects.map((project) => (
              <article className="project-card" key={project.title} data-reveal>
                <img src={project.image} alt={`${project.title} placeholder`} loading="lazy" />
                <div>
                  <h3>{project.title}</h3>
                  <dl>
                    <div><dt>Funding</dt><dd>{project.funding}</dd></div>
                    <div><dt>Duration</dt><dd>{project.duration}</dd></div>
                  </dl>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
