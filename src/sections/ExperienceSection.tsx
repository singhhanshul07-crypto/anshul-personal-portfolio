import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "../animations/variants";
import { experience } from "../data/experience";

export function ExperienceSection() {
  return (
    <section className="experience-ledger" id="experience" aria-labelledby="experience-title">
      <header className="experience-ledger__header">
        <div>
          <p className="type-small-label">Work in motion / 05</p>
          <h2 className="experience-ledger__title type-h1" id="experience-title">
            Experience <span className="type-italic">so far</span>
          </h2>
        </div>
        <p className="experience-ledger__aside type-metadata">Formal, personal, collaborative</p>
      </header>

      {experience.length > 0 ? <motion.ol
        className="experience-timeline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={staggerChildren}
      >
        {experience.map((entry, index) => (
          <motion.li className="experience-entry" key={entry.id} variants={fadeUp}>
            <div className="experience-entry__axis" aria-hidden="true">
              <span className="experience-entry__dot" />
              {index < experience.length - 1 && <span className="experience-entry__line" />}
            </div>
            <div className="experience-entry__year type-metadata">{entry.year}</div>
            <div className="experience-entry__content">
              <div className="experience-entry__heading">
                <h3 className="experience-entry__role type-h2">{entry.role}</h3>
                <span className="experience-entry__type type-small-label">{entry.type}</span>
              </div>
              <p className="experience-entry__organization type-body">{entry.organization}</p>
              <p className="experience-entry__description type-body">{entry.description}</p>
            </div>
            <span className="experience-entry__number type-metadata" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.li>
        ))}
      </motion.ol> : (
        <div className="experience-ledger__note">
          <span className="type-metadata">An independent practice</span>
          <p className="type-body">
            My experience is taking shape through learning, experimentation, and the ideas I choose to follow. I’ll share the work here as it becomes ready.
          </p>
        </div>
      )}
    </section>
  );
}
