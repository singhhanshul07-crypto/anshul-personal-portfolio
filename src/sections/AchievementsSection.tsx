import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "../animations/variants";
import { achievements } from "../data/achievements";

export function AchievementsSection() {
  return (
    <section className="achievement-register" id="achievements" aria-labelledby="achievements-title">
      <header className="achievement-register__header">
        <div>
          <p className="type-small-label">Notes of progress / 06</p>
          <h2 className="achievement-register__title type-h1" id="achievements-title">
            Small signs <span className="type-italic">of becoming</span>
          </h2>
        </div>
        <p className="achievement-register__aside type-metadata">Milestones, not metrics</p>
      </header>

      {achievements.length > 0 ? <motion.ol
        className="achievement-register__list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={staggerChildren}
      >
        {achievements.map((item, index) => (
          <motion.li className="achievement-entry" key={item.id} variants={fadeUp}>
            <span className="achievement-entry__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="achievement-entry__main">
              <span className="achievement-entry__category type-small-label">{item.category}</span>
              <h3 className="achievement-entry__title type-h2">{item.title}</h3>
              <p className="achievement-entry__description type-body">{item.description}</p>
            </div>
            <span className="achievement-entry__date type-metadata">{item.date}</span>
            <span className="achievement-entry__glyph" aria-hidden="true">↗</span>
          </motion.li>
        ))}
      </motion.ol> : (
        <div className="achievement-register__note">
          <p className="type-body">
            A record, not a scoreboard. I’ll add milestones here when there’s a useful story behind them.
          </p>
        </div>
      )}
    </section>
  );
}
