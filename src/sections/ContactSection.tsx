import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";
import { ContactForm } from "../components/ContactForm";
import { siteConfig } from "../config/site";

function mailto(email: string) {
  const address = email.trim().replace(/^mailto:/i, "");
  return address ? `mailto:${address}` : "";
}

export function ContactSection() {
  const emailHref = mailto(siteConfig.contact.email);
  const profiles = siteConfig.profiles.filter(({ href }) => href.trim());

  return (
    <section className="contact-finale" id="contact" aria-labelledby="contact-title">
        <motion.header
          className="contact-finale__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="type-small-label">Start a conversation / 08</p>
          <h2 className="contact-finale__title type-h1" id="contact-title">
            Let&apos;s make <span className="type-italic">something matter.</span>
          </h2>
          <p className="contact-finale__description type-body">
            Have a question, an idea, or a problem worth exploring? Leave a note and let’s find a first step.
          </p>
        </motion.header>

        <div className="contact-finale__layout">
          <div className="contact-finale__direct">
            <p className="type-small-label">Elsewhere &amp; direct</p>
            <div className="contact-finale__direct-list">
              {emailHref && (
                <a className="contact-finale__direct-link type-body" href={emailHref}>
                  {siteConfig.contact.email.replace(/^mailto:/i, "")}
                </a>
              )}
              {siteConfig.contact.phone && (
                <a className="contact-finale__direct-link type-body" href={`tel:${siteConfig.contact.phone}`}>
                  {siteConfig.contact.phone}
                </a>
              )}
              {siteConfig.contact.cvPath && (
                <a className="contact-finale__direct-link type-body" href={siteConfig.contact.cvPath} download>
                  Download CV
                </a>
              )}
              {profiles.map(({ label, href }) => (
                <a
                  className="contact-finale__direct-link type-body"
                  href={href}
                  key={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {label}
                  {href.startsWith("http") && <span aria-hidden="true"> ↗</span>}
                </a>
              ))}
              {!emailHref && profiles.length === 0 && (
                <p className="contact-finale__direct-note type-body">
                  Direct contact and profile links will appear here as they’re ready to share.
                </p>
              )}
            </div>
          </div>

          <ContactForm email={siteConfig.contact.email} />
        </div>
    </section>
  );
}
