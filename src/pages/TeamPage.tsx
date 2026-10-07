import { useEffect, useMemo } from "react";
import { members } from "../data/content";
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
      <p className="eyebrow" style={{ visibility: eyebrow === "Team" ? "hidden" : "visible",  height: eyebrow === "Team" ? 0 : "auto", margin: eyebrow === "Team" ? 0 : undefined, }}>{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default function TeamPage() {
  useReveal();

  const groupedMembers = useMemo(() => {
    return members.reduce<Record<string, typeof members>>((groups, member) => {
      const group = member.group ?? "Team";
      groups[group] = groups[group] ? [...groups[group], member] : [member];
      return groups;
    }, {});
  }, []);

  return (
    <main id="main">
      <section className="section muted" id="team" aria-labelledby="team-title">
        <div className="container">
          <SectionHeading eyebrow="Team" title="Energetics and Propulsion Laboratory Team" text="Meet the professor, scholars, project staff, and alumni contributing to EPL research and development." />
          {Object.entries(groupedMembers).map(([group, membersInGroup]) => (
            <div key={group} className="team-group" data-reveal>
              <h3>{group}</h3>
              <div className="card-grid four">
                {membersInGroup.map((member) => (
                  <article className="member-card" key={member.name} data-reveal>
                    {group !== "Alumni" && (<img src={member.image} alt={`${member.name} profile photo`}loading="lazy"/>)}
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
