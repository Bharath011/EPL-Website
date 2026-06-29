import { useEffect } from "react";
import { publications } from "../data/content";
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

export default function PublicationsPage() {
  useReveal();

  return (
    <main id="main">
      <section className="section" id="publications" aria-labelledby="publications-title">
        <div className="container">
          <SectionHeading eyebrow="Publications" title="Placeholder Publications" text="Placeholder publication records prepared for future real laboratory outputs." />
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication-card" key={publication.doi} data-reveal>
                <div>
                  <h3>{publication.title}</h3>
                  <p>{publication.authors}</p>
                  <span>{publication.outlet}{publication.year ? ` | ${publication.year}` : ""}{publication.doi ? ` | DOI: ${publication.doi}` : ""}</span>
                </div>
                <a className="button button-ghost" href="/contact" aria-label={`Download ${publication.title}`}>Download</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
