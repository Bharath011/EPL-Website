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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function ResearchPage() {
  useReveal();

  return (
    <main id="main">
      <section className="section muted" id="research" aria-labelledby="research-title">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Research</p>
            <h2 id="research-title">Research Focus Areas</h2>
            <p>EPL research covers metal fuel combustion, advanced propellants, electrically controlled solid propellants, diagnostics, and air-breathing propulsion systems.</p>
          </div>

          {researchAreas.map((area, index) => (
            <article
              className={`research-block ${index % 2 === 1 ? "research-block--reverse" : ""}`}
              key={area.title}
              data-reveal
            >
              <div className="research-block__media">
                <div className="research-block__primary-image">
                  <img src={area.image} alt={area.title} loading="lazy" />
                </div>
                {(area.images && area.images.length > 0) || area.video ? (
                  <div className="research-block__gallery">
                    {area.video && (
                      <video
                        src={area.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-label={`${area.title} video`}
                      />
                    )}
                    {area.images?.map((img) => (
                      <img key={img} src={img} alt="" loading="lazy" />
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="research-block__content">
                <span className="research-block__number">0{index + 1}</span>
                <h3 className="research-block__title">{area.title}</h3>
                {area.bullets && area.bullets.length > 0 ? (
                  <ul className="research-block__bullets">
                    {area.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="research-block__desc">{area.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
