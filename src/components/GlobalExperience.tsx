import type { ReactNode } from "react";
import { CustomCursor } from "./CustomCursor";
import { FloatingNavigation } from "./FloatingNavigation";
import { ScrollProgress } from "./ScrollProgress";

interface GlobalExperienceProps {
  children: ReactNode;
}

export function GlobalExperience({ children }: GlobalExperienceProps) {
  return (
    <div className="global-interface">
      <ScrollProgress />
      <FloatingNavigation />
      <CustomCursor />
      {children}
    </div>
  );
}
