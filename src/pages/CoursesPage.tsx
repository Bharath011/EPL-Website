import { useEffect } from "react";
import { courses } from "../data/content";
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

export default function CoursesPage() {
  useReveal();

  return (
    <main id="main">
      <section className="section" id="courses" aria-labelledby="courses-title">
        <div className="container">
          <SectionHeading
            eyebrow="Courses"
            title="Professor Course Offerings"
            text="Course content is sourced from the professor's official profile and reflects the current aerospace propulsion offering."
          />
          <div className="card-grid three">
            {courses.map((course) => (
              <article className="feature-card" key={course.code} data-reveal>
                <div>
                  <h3>{course.title} ({course.code})</h3>
                  <p>{course.description}</p>
                  <h4>Textbooks / References</h4>
                  <ul>
                    {course.textbooks.map((textbook) => (
                      <li key={textbook}>{textbook}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
