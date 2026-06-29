import { useEffect, useMemo, useState } from "react";
import { galleryItems, members, stats } from "../data/content";
import "../styles.css";

const heroImage = "https://placehold.co/1920x1280/dce9f7/0b5dab?text=Hero+Laboratory+Image+Placeholder";

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

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 72;
    const animate = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [value]);

  return <span>{count}</span>;
}

export default function HomePage() {
  useReveal();
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const activeGalleryItem = useMemo(
    () => (activeImage === null ? null : galleryItems[activeImage]),
    [activeImage]
  );

  const submitContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <img className="hero-image" src={heroImage} alt="Laboratory hero placeholder" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content" data-reveal>
          <p className="eyebrow">Energetics and Propulsion Laboratory</p>
          <h1 id="hero-title">Welcome to EPL</h1>
          <h2>Advancing rocket propulsion, energetic materials, and sustainable aerospace engineering</h2>
          <p>Indian Institute of Technology Hyderabad</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/research">Explore Research</a>
            <a className="button button-secondary" href="/join">Join Us</a>
          </div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span /></a>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="image-panel" data-reveal>
            <img src="/prof-gnanaprakash.jpeg" alt="Dr. Gnanaprakash Kanagaraj profile" loading="lazy" />
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow">About</p>
            <h2 id="about-title">Energetics and Propulsion Laboratory</h2>
            <p>The Energetics and Propulsion Laboratory (EPL) is dedicated to advancing rocket propulsion and energetic materials through innovative research and engineering.</p>
            <p>Our work combines experimental studies, computational analysis, and system design to address real-world aerospace challenges.</p>
            <p>Our research spans key areas including rocket propulsion, metal fuel combustion, and energetic propellants, along with emerging technologies such as electric propulsion, digital imaging and holography for diagnostics, and the development of green fuels for sustainable aerospace applications.</p>
            <p>At EPL, we aim to drive technological innovation while training the next generation of aerospace engineers and researchers.</p>
          </div>
        </div>
        <div className="container stats-grid" aria-label="Laboratory statistics">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label} data-reveal>
              <strong><AnimatedCounter value={stat.value} /></strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact muted" id="contact" aria-labelledby="contact-title">
        <div className="container contact-grid">
          <div data-reveal>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Contact the Energetics and Propulsion Laboratory</h2>
            <img className="contact-image" src="https://placehold.co/980x720/e8edf3/174b7a?text=IIT+Hyderabad+MAE+Building" alt="IIT Hyderabad MAE building placeholder" loading="lazy" />
            <div className="contact-details">
              <p><strong>Location</strong><span>502, C-Block, Department of Mechanical and Aerospace Engineering; PG Shed Labs 35, 39, 52B</span></p>
              <p><strong>Email</strong><span><a href="mailto:gnan@mae.iith.ac.in">gnan@mae.iith.ac.in</a></span></p>
              <p><strong>Phone</strong><span>040 2301 6684</span></p>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitContact} data-reveal>
            <label>Name<input name="name" type="text" placeholder="Placeholder Name" required /></label>
            <label>Email<input name="email" type="email" placeholder="placeholder@example.edu" required /></label>
            <label>Subject<input name="subject" type="text" placeholder="Placeholder Subject" required /></label>
            <label>Message<textarea name="message" rows={6} placeholder="Placeholder Message" required /></label>
            <button className="button button-primary" type="submit">Submit</button>
          </form>
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
