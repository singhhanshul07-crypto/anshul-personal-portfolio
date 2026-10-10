import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";
import { ProjectArtwork } from "./ProjectArtwork";
import type { ProjectRecord } from "../data/projects";

interface ProjectShowcaseProps {
  project: ProjectRecord;
  index: number;
  onOpen: (project: ProjectRecord, trigger: HTMLButtonElement) => void;
}

export function ProjectShowcase({ project, index, onOpen }: ProjectShowcaseProps) {
  const projectNumber = String(index + 1).padStart(2, "0");
  const composition = index % 3 === 1 ? "reverse" : index % 3 === 2 ? "panoramic" : "standard";

  function openDetails(event: React.MouseEvent<HTMLButtonElement>) {
    onOpen(project, event.currentTarget);
  }

  return (
    <motion.article
      className={`project-showcase project-showcase--${composition}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUp}
    >
      <header className="project-showcase__header">
        <span className="project-showcase__number type-small-label">Project {projectNumber}</span>
      </header>

      <div className="project-showcase__layout">
        <div className="project-showcase__media">
          <button
            className="project-showcase__visual-button"
            type="button"
            data-cursor="view"
            aria-label={`View details for ${project.title}`}
            onClick={openDetails}
          >
            <ProjectArtwork
              image={project.image}
              title={project.title}
              index={index + 1}
              variant={index % 3 === 1 ? "type" : index % 3 === 2 ? "field" : "blueprint"}
            />
            <span className="project-showcase__view-indicator type-button" aria-hidden="true">
              View project
            </span>
          </button>
        </div>

        <div className="project-showcase__details">
          <div className="project-showcase__metadata type-metadata">
            <span>{project.category}</span>
            <span>{project.date}</span>
            <span className={`project-status project-status--${project.status.toLowerCase()}`}>
              <span className="project-status__dot" aria-hidden="true" />
              {project.status}
            </span>
          </div>

          <h3 className="project-showcase__name type-h2">{project.title}</h3>
          <p className="project-showcase__description type-body">{project.description}</p>

          <ul className="project-showcase__technologies type-metadata" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          <button className="project-showcase__action button button--quiet type-button" type="button" onClick={openDetails}>
            <span>View project</span>
            <span className="project-showcase__arrow" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
