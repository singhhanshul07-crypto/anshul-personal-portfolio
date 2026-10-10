import { MotionConfig } from "framer-motion";
import { GlobalExperience } from "./components/GlobalExperience";
import { FinalFooter } from "./components/FinalFooter";
import { SiteFrame } from "./components/SiteFrame";
import { AboutSection } from "./sections/AboutSection";
import { AchievementsSection } from "./sections/AchievementsSection";
import { CurrentlyBuildingSection } from "./sections/CurrentlyBuildingSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { IdentityFoundation } from "./sections/IdentityFoundation";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <GlobalExperience>
        <SiteFrame>
          <main className="site-main" id="main-content" tabIndex={-1}>
            <IdentityFoundation />
            <AboutSection />
            <CurrentlyBuildingSection />
            <ProjectsSection />
            <ExperienceSection />
            <AchievementsSection />
            <ServicesSection />
            <ContactSection />
          </main>
          <FinalFooter />
        </SiteFrame>
      </GlobalExperience>
    </MotionConfig>
  );
}
