import { useEffect, useState } from "react";
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

  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggleProject = (index: number) => {
    setOpenIndexes((current) => {
      const next = new Set(current);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  };

  return (
    <main id="main">
      <section className="section muted" id="research" aria-labelledby="research-title">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p
              className="eyebrow"
              style={{ visibility: "hidden", height: 0, margin: 0 }}
            >
              Research
            </p>

            <h2 id="research-title">Research Focus Areas</h2>

            <p>
              EPL research covers metal fuel combustion, advanced propellants,
              electrically controlled solid propellants, diagnostics, and
              air-breathing propulsion systems.
            </p>
          </div>

          {researchAreas.map((area, index) => (
            <div key={area.title} data-reveal>

              {/* Clickable research title */}
              <div className="research-project-trigger">
                <span className="research-block__number">
                  0{index + 1}
                </span>

                <button
                    className="research-block__title"
                    onClick={() => toggleProject(index)}
                  >
                    {area.title}
                    <span className={`project-status ${area.status.toLowerCase()}`}>
                      {area.status}
                    </span>
              </button>
              </div>

              {/* Existing research block opens below its title */}
              {openIndexes.has(index) && (
                <article
                  className={
                    index === 0
                    ? "research-block research-block--first"
                    : index % 2 === 1
                      ? "research-block research-block--reverse"
                      : "research-block"
                  }
                >
                  <div className="research-block__media">
                    <div className="research-block__primary-image">
                      {area.primaryVideo ? (
                        <video
                          src={area.primaryVideo}
                          autoPlay
                          loop
                          muted
                          playsInline
                          aria-label={`${area.title} primary video`}
                        />
                      ) : (
                        <img
                          src={area.image}
                          alt={area.title}
                          loading="lazy"
                        />
                      )}
                    </div>

                    {((area.images && area.images.length > 0) || area.video) ? (
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
                          <img
                            key={img}
                            src={img}
                            alt=""
                            loading="lazy"
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="research-block__content">
                    {area.bullets && area.bullets.length > 0 ? (
                      <ul className="research-block__bullets">
                        {area.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="research-block__desc">
                        {area.description}
                      </p>
                    )}
                  </div>
                </article>
              )}

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}