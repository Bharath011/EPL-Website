import { useEffect } from "react";
import { newsItems } from "../data/content";
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

export default function NewsPage() {
  useReveal();

  return (
    <main id="main">
      <section className="section muted" id="news" aria-labelledby="news-title">
        <div className="container">
          <SectionHeading eyebrow="News" title="Placeholder News" text="Placeholder updates for seminars, awards, project milestones, and laboratory announcements." />
          <div className="news-list">
            {newsItems.map((item) => (
              <article className="news-card" key={`${item.date}-${item.title}`} data-reveal>
                <div className="news-meta"><span>{item.date}</span><span>{item.category}</span></div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a className="text-link" href="/contact">Read More</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
