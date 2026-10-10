import { motion } from "framer-motion";
import { heroLetter, heroTitle } from "../animations/variants";
import { siteConfig } from "../config/site";

export function IdentityFoundation() {
  return (
    <section
      className="identity"
      id="home"
      aria-labelledby="identity-title"
    >
      <div className="identity__meta">
        <span className="identity__index">Personal portfolio</span>
        <span className="identity__status">
          <span className="identity__status-mark" aria-hidden="true" />
          {siteConfig.status}
        </span>
      </div>

      <div className="identity__content">
        <div className="hero__eyebrow-row">
          <p className="identity__eyebrow type-small-label">{siteConfig.heroEyebrow}</p>
          <span className="hero__index type-metadata" aria-hidden="true">01 / Independent practice</span>
        </div>

        <div className="hero__title-frame">
          <div className="hero-portal" aria-hidden="true">
            <span className="hero-portal__ring" />
            <span className="hero-portal__core" />
            <div className="hero-scene__cards">
              <span className="hero-scene__card hero-scene__card--one"><b>01</b><i>DESIGN</i></span>
              <span className="hero-scene__card hero-scene__card--two"><b>02</b><i>BUILD</i></span>
              <span className="hero-scene__card hero-scene__card--three"><b>03</b><i>EXPLORE</i></span>
            </div>
            <svg className="hero-portal__figure" viewBox="0 0 180 390" fill="none">
              <ellipse cx="91" cy="45" rx="27" ry="33" fill="#291c0e" stroke="#beb5a9" strokeWidth="3" />
              <path d="M73 37 90 20l19 12-3 22-30 4-8-11 5-10Z" fill="#3d2a20" stroke="#a78d78" strokeWidth="2" />
              <path d="M77 80 105 79l25 23 11 89-19 62-4 106-25 1-8-104-13 103-25-1 3-117-13-61 9-72 31-28Z" fill="#291c0e" stroke="#a78d78" strokeWidth="3" />
              <path d="m78 85 28-5 21 21-9 73-35 15-24-31 5-51 14-22Z" fill="#6e473b" />
              <path d="m57 100-26 56 15 12 31-45m50-22 27 51-13 14-32-39" stroke="#beb5a9" strokeWidth="11" strokeLinecap="round" />
              <path d="m56 360-7 20h34l6-20m20 0 5 20h33l-13-20" fill="#291c0e" stroke="#a78d78" strokeWidth="3" />
            </svg>
          </div>
          <motion.h1
            className="identity__title type-display"
            id="identity-title"
            aria-label={siteConfig.name}
            variants={heroTitle}
            initial="hidden"
            animate="visible"
          >
            {Array.from(siteConfig.name).map((letter, index) => (
              <span className="hero__letter-mask" key={`${letter}-${index}`} aria-hidden="true">
                <motion.span className="hero__letter" variants={heroLetter}>
                  {letter}
                </motion.span>
              </span>
            ))}
          </motion.h1>
          <div className="hero__title-rule" aria-hidden="true" />
        </div>

        <motion.div
          className="hero__details"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__statement">
            <p className="identity__disciplines type-navigation">
              {siteConfig.disciplines.join(" / ")}
            </p>
            <p className="identity__introduction type-body">{siteConfig.introduction}</p>
          </div>

          <div className="hero__actions">
            <a className="button button--primary type-button hero__cta" href="#work">
              <span>View my work</span>
              <span className="hero__button-arrow" aria-hidden="true" />
            </a>
            <a className="button button--quiet type-button hero__cta" href="#contact">
              <span>Contact me</span>
              <span className="hero__button-arrow" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="identity__footer">
        <span>Independent by nature</span>
        <a className="hero__scroll" href="#about" aria-label="Scroll to the About section">
          <span className="hero__scroll-line" aria-hidden="true" />
          <span className="hero__scroll-label type-metadata">Scroll to explore</span>
        </a>
      </div>
    </section>
  );
}
