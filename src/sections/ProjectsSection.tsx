import { useRef, useState } from "react";
import { ProjectDetailModal } from "../components/ProjectDetailModal";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { projects } from "../data/projects";
import type { ProjectRecord } from "../data/projects";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<ProjectRecord | null>(null);
  const returnFocusTo = useRef<HTMLElement | null>(null);

  function openProject(project: ProjectRecord, trigger: HTMLButtonElement) {
    returnFocusTo.current = trigger;
    setActiveProject(project);
  }

  function closeProject() {
    setActiveProject(null);
    window.requestAnimationFrame(() => returnFocusTo.current?.focus());
  }

  return (
    <section className="project-archive" id="work" aria-labelledby="projects-title">
      <header className="project-archive__header">
        <div>
          <p className="type-small-label">Selected work / 04</p>
          <h2 className="project-archive__title type-h1" id="projects-title">
            Projects <span className="type-italic">in progress</span>
          </h2>
        </div>
        <p className="project-archive__aside type-metadata">An evolving collection</p>
      </header>

      {projects.length > 0 ? (
        <div className="project-archive__list">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              index={index}
              onOpen={openProject}
            />
          ))}
        </div>
      ) : (
        <div className="project-archive__empty">
          <span className="project-archive__empty-index type-metadata">A / 01</span>
          <div>
            <p className="type-small-label">The first page is this one</p>
            <p className="project-archive__empty-copy type-body">
              Selected projects will appear here when they are ready to tell their story. Until then, this portfolio is the work in progress.
            </p>
            <a className="nav-link" href="#services">Explore what I make</a>
          </div>
        </div>
      )}

      {activeProject && (
        <ProjectDetailModal
          key={activeProject.id}
          project={activeProject}
          onClose={closeProject}
        />
      )}
    </section>
  );
}
