import { useEffect, useMemo, useState } from "react";
import { galleryItems } from "../data/content";
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
      <p className="eyebrow"  style={{ visibility: eyebrow === "Gallery" || eyebrow === "" ? "hidden" : "visible",
    height: eyebrow === "Gallery" || eyebrow === "" ? 0 : undefined, margin: eyebrow === "Gallery" || eyebrow === "" ? 0 : undefined, }}>{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default function GalleryPage() {
  useReveal();
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const activeGalleryItem = useMemo(
    () => (activeImage === null ? null : galleryItems[activeImage]),
    [activeImage]
  );

  return (
    <main id="main">
      <section className="section" id="gallery" aria-labelledby="gallery-title">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Gallery" text="Experiments, Events & Achievements." />
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <button className="gallery-item" type="button" key={item.caption} onClick={() => setActiveImage(index)} data-reveal>
                <img src={item.image} alt={item.caption} loading="lazy" />
                <span>{item.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeGalleryItem && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image preview" onClick={() => setActiveImage(null)}>
          <button type="button" aria-label="Close gallery preview" onClick={() => setActiveImage(null)}>Close</button>
          <img src={activeGalleryItem.image} alt={activeGalleryItem.caption} />
          <p>{activeGalleryItem.caption}</p>
        </div>
      )}
    </main>
  );
}
