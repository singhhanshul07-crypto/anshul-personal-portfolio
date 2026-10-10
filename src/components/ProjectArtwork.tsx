import type { ProjectImage } from "../data/projects";

interface ProjectArtworkProps {
  image: ProjectImage | null;
  title: string;
  index: number;
  variant?: "blueprint" | "type" | "field";
}

export function ProjectArtwork({
  image,
  title,
  index,
  variant = "blueprint",
}: ProjectArtworkProps) {
  const indexLabel = String(index).padStart(2, "0");

  return (
    <div className={`project-artwork project-artwork--${variant}`}>
      {image ? (
        <img className="project-artwork__image" src={image.src} alt={image.alt} loading="lazy" />
      ) : (
        <div
          className="project-artwork__placeholder"
          role="img"
          aria-label={`Project visual placeholder for ${title}`}
        >
          <span className="project-artwork__index" aria-hidden="true">{indexLabel}</span>
          <span className="project-artwork__title" aria-hidden="true">{title}</span>
          <span className="project-artwork__note type-metadata" aria-hidden="true">
            Project image placeholder
          </span>
        </div>
      )}
      <span className="project-artwork__frame-mark" aria-hidden="true">{indexLabel} / VISUAL</span>
    </div>
  );
}
