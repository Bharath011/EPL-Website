import { useEffect } from "react";
import { publications, scholarProfileUrl } from "../data/content";
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

const parseYear = (year: string) => {
  const match = year?.match(/\d{4}/);
  return match ? Number(match[0]) : 0;
};

const isConferencePublication = (outlet: string) => {
  const normalized = outlet.toLowerCase();
  return [
    "conference",
    "symposium",
    "colloquium",
    "conference",
    "proceedings",
    "meeting",
    "workshop",
    "icders",
    "aspacc",
    "isicp",
    "ksp",
    "hecme",
    "kosc",
    "aiaa",
    "ajcpp",
    "sedsec",
  ].some((keyword) => normalized.includes(keyword));
};

export default function PublicationsPage() {
  useReveal();

  const sortedPublications = [...publications].sort((a, b) => parseYear(b.year) - parseYear(a.year));
  const conferencePublications = sortedPublications.filter((publication) => isConferencePublication(publication.outlet));
  const journalPublications = sortedPublications.filter((publication) => !isConferencePublication(publication.outlet));

  const renderPublication = (publication: typeof publications[number], index: number) => (
    <article className="publication-card" key={`${publication.title}-${publication.year}-${index}`} data-reveal>
      <div>
        <h3>{index + 1}. {publication.title}</h3>
        <p>{publication.authors}</p>
        <span>{publication.outlet}{publication.year ? ` | ${publication.year}` : ""}{publication.doi ? ` | DOI: ${publication.doi}` : ""}</span>
      </div>
    </article>
  );

  return (
    <main id="main">
      <section className="section" id="publications" aria-labelledby="publications-title">
        <div className="container">
          <SectionHeading eyebrow="" title="Publications" text="Selected peer-reviewed articles and conference proceedings from EPL researchers." />
          <div className="publication-meta" data-reveal>
            <p>
              View the latest EPL publications on Google Scholar: <a href={scholarProfileUrl} target="_blank" rel="noreferrer">Scholar profile</a>.
            </p>
          </div>

          <div className="publication-section" data-reveal>
            <h3>Journal Publications ({journalPublications.length})</h3>
            <div className="publication-list">
              {journalPublications.map((publication, index) => renderPublication(publication, index))}
            </div>
          </div>

          <div className="publication-section" data-reveal>
            <h3>Conference Publications ({conferencePublications.length})</h3>
            <div className="publication-list">
              {conferencePublications.map((publication, index) => renderPublication(publication, index))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
