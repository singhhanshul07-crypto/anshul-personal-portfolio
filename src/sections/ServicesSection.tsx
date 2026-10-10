import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "../animations/variants";
import { services } from "../data/services";

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section className="capabilities" id="services" aria-labelledby="services-title">
      <header className="capabilities__header">
        <div>
          <p className="type-small-label">Ways to make / 07</p>
          <h2 className="capabilities__title type-h1" id="services-title">
            Creative <span className="type-italic">capabilities</span>
          </h2>
        </div>
        <p className="capabilities__aside type-metadata">A practice, not a price list</p>
      </header>

      <motion.div
        className="capabilities__list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={staggerChildren}
      >
        {services.map((service) => {
          const isActive = activeService === service.id;

          return (
            <motion.article className={`capability${isActive ? " is-active" : ""}`} key={service.id} variants={fadeUp}>
              <button
                className="capability__trigger"
                id={`capability-trigger-${service.id}`}
                type="button"
                aria-expanded={isActive}
                aria-controls={`capability-${service.id}`}
                onClick={() => setActiveService(isActive ? null : service.id)}
              >
                <span className="capability__index type-metadata">{service.index}</span>
                <h3 className="capability__name type-h2">{service.title}</h3>
                <span className="capability__symbol" aria-hidden="true">
                  <span />
                  <span />
                </span>
              </button>
              <p
                className="capability__description type-body"
                id={`capability-${service.id}`}
                aria-labelledby={`capability-trigger-${service.id}`}
                aria-hidden={!isActive}
              >
                {service.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
