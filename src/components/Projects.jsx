import { portfolio } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading label="selected work" title="Projects" script="works" />

        {portfolio.projects.map((project, index) => (
          <article key={project.title} className="row project reveal">
            <div className="row__head">
              <span className="row__index">0{index + 1}</span>
            </div>

            <div className="project__body">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__desc">{project.description}</p>
              {project.tags.length > 0 && (
                <p className="project__tags">{project.tags.join(" / ")}</p>
              )}
            </div>

            <div className="project__links">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                >
                  Live <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
