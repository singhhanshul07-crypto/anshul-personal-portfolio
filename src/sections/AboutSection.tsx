import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "../animations/variants";
import { siteConfig } from "../config/site";
import { PortraitFigure } from "../components/PortraitFigure";

export function AboutSection() {
  return (
    <section className="about-spread" id="about" aria-labelledby="about-name">
      <header className="about-spread__header">
        <p className="type-small-label">About / 02</p>
        <p className="type-metadata">A closer look</p>
      </header>

      <div className="about-spread__layout">
        <div className="about-spread__identity">
          <motion.h2
            className="about-spread__name"
            id="about-name"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
          >
            {siteConfig.name}
          </motion.h2>

          <motion.ul
            className="about-spread__roles"
            aria-label="Anshul's roles"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={staggerChildren}
          >
            {siteConfig.disciplines.map((discipline) => (
              <motion.li key={discipline} variants={fadeUp}>
                {discipline}.
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <PortraitFigure {...siteConfig.about.portrait} />
          </motion.div>
        </div>

        <div className="about-spread__story">
          <motion.div
            className="about-spread__biography"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
          >
            <p className="about-spread__label type-small-label">The person behind the practice</p>
            <p className="about-spread__bio-copy type-body">{siteConfig.about.biography}</p>
          </motion.div>

          <motion.dl
            className="about-spread__notes"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerChildren}
          >
            {siteConfig.about.fields.map(({ label, value }, index) => (
              <motion.div className="about-note" key={label} variants={fadeUp}>
                <dt className="about-note__term">
                  <span className="about-note__index type-metadata">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="type-small-label">{label}</span>
                </dt>
                <dd className="about-note__description type-body">{value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
