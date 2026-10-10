import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";
import { siteConfig } from "../config/site";

export function CurrentlyBuildingSection() {
  return (
    <section className="current-building" id="currently-building" aria-labelledby="current-building-title">
      <header className="current-building__header">
        <div>
          <p className="type-small-label">In progress / 03</p>
          <h2 className="current-building__title type-h1" id="current-building-title">
            Currently <span className="type-italic">building</span>
          </h2>
        </div>
        <p className="current-building__aside type-metadata">A live notebook of work in motion</p>
      </header>

      <motion.div
        className="current-building__feature"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <img
          className="current-building__portrait"
          src="/anshul-portrait.png"
          alt="Anshul seated in a chair, reading a book"
          loading="lazy"
        />
        <div className="current-building__feature-copy">
          <h3 className="current-building__feature-title">{siteConfig.currentFocus.title}</h3>
          <p className="current-building__feature-description type-body">{siteConfig.currentFocus.description}</p>
          <a className="current-building__feature-link nav-link" href="#work">
            Follow the work
          </a>
        </div>
        <span className="current-building__feature-mark" aria-hidden="true">A</span>
      </motion.div>
    </section>
  );
}
