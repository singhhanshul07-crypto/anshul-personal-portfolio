export const projectStatuses = [
  "BUILDING",
  "EXPERIMENTING",
  "LIVE",
  "PAUSED",
  "ARCHIVED",
] as const;

export type ProjectStatus = (typeof projectStatuses)[number];

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectRecord {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  status: ProjectStatus;
  technologies: string[];
  image: ProjectImage | null;
  gallery: ProjectImage[];
  liveUrl: string;
  githubUrl: string;
  problem: string;
  solution: string;
}

export const projects: ProjectRecord[] = [];
