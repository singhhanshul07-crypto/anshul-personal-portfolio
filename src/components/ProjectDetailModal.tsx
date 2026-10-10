import { motion } from "framer-motion";
import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ProjectArtwork } from "./ProjectArtwork";
import type { ProjectRecord } from "../data/projects";

interface ProjectDetailModalProps {
  project: ProjectRecord;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose]);

  function trapTabFocus(event: ReactKeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = event.currentTarget.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
    );
    const first = focusableElements.item(0);
    const last = focusableElements.item(focusableElements.length - 1);

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
      <motion.div
        className="project-detail-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
      }}
    >
      <motion.article
        className="project-detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
        tabIndex={-1}
        initial={{ opacity: 0, y: 24, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onKeyDown={trapTabFocus}
      >
        <header className="project-detail__header">
          <div>
            <p className="type-small-label">Project detail / {project.status}</p>
          </div>
          <button
            className="project-detail__close type-button"
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
          >
            Close
          </button>
        </header>

        <div className="project-detail__body">
          <div className="project-detail__visual">
            <ProjectArtwork image={project.image} title={project.title} index={1} variant="blueprint" />
          </div>

          <div className="project-detail__intro">
            <div className="project-detail__metadata type-metadata">
              <span>{project.category}</span>
              <span>{project.date}</span>
              <span>{project.status}</span>
            </div>
            <h2 className="project-detail__title type-h1" id="project-detail-title">
              {project.title}
            </h2>
            <p className="project-detail__description type-body">{project.description}</p>
          </div>

          <div className="project-detail__sections">
            {project.problem && (
              <section className="project-detail__section">
                <h3 className="type-small-label">The question</h3>
                <p className="type-body">{project.problem}</p>
              </section>
            )}
            {project.solution && (
              <section className="project-detail__section">
                <h3 className="type-small-label">The approach</h3>
                <p className="type-body">{project.solution}</p>
              </section>
            )}
          </div>

          <div className="project-detail__footer">
            <div>
              {project.technologies.length > 0 && (
                <>
                  <p className="type-small-label">Made with</p>
                  <ul className="project-detail__technologies type-metadata">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="project-detail__links">
              {project.liveUrl && (
                <a className="nav-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live project</a>
              )}
              {project.githubUrl && (
                <a className="nav-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
            </div>
          </div>

          {project.gallery.length > 0 && (
            <div className="project-detail__gallery" aria-label="Project gallery">
              {project.gallery.map((image, index) => (
                <ProjectArtwork
                  key={image.src}
                  image={image}
                  title={project.title}
                  index={index + 1}
                  variant="field"
                />
              ))}
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
}
