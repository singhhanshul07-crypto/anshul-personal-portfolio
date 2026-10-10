export const experienceTypes = [
  "PERSONAL PROJECT",
  "FREELANCE",
  "EXPERIMENT",
  "COLLABORATION",
  "BUSINESS",
] as const;

export type ExperienceType = (typeof experienceTypes)[number];

export interface ExperienceEntry {
  id: string;
  year: string;
  role: string;
  organization: string;
  type: ExperienceType;
  description: string;
}

export const experience: ExperienceEntry[] = [];
