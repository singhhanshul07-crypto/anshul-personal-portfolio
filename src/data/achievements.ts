export const achievementCategories = [
  "PROJECTS",
  "SKILLS",
  "CERTIFICATIONS",
  "COMPETITIONS",
  "MILESTONES",
  "BUSINESS EXPERIMENTS",
  "PERSONAL",
] as const;

export type AchievementCategory = (typeof achievementCategories)[number];

export interface AchievementEntry {
  id: string;
  category: AchievementCategory;
  title: string;
  description: string;
  date: string;
}

export const achievements: AchievementEntry[] = [];
