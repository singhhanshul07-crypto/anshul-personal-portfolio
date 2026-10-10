import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { navigationItems } from "../data/navigation";

const menuVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FloatingNavigation() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 961px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  useEffect(() => {
    const targets = navigationItems
      .map(({ target }) => document.getElementById(target))
      .filter((target): target is HTMLElement => target !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleTarget = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleTarget) {
          setActiveSection(visibleTarget.target.id);
        }
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.1, 0.35, 0.7] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  function renderLink({ label, target }: (typeof navigationItems)[number]) {
    const isActive = activeSection === target;

    return (
      <motion.a
        className="floating-nav__link type-navigation"
        href={`#${target}`}
        key={target}
        aria-current={isActive ? "location" : undefined}
        onClick={() => {
          setActiveSection(target);
          setIsOpen(false);
        }}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {isActive && <motion.span className="floating-nav__active-mark" layoutId="active-navigation-mark" />}
        <span>{label}</span>
      </motion.a>
    );
  }

  return (
    <motion.nav
      className={`floating-nav${isOpen ? " floating-nav--expanded" : ""}`}
      aria-label="Primary navigation"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="floating-nav__bar">
        <a className="floating-nav__brand" href="#home" onClick={() => setIsOpen(false)}>
          <img className="floating-nav__logo" src="/brand-logo.png?v=3" alt="Anshul portfolio home" />
        </a>

        <div className="floating-nav__links">{navigationItems.map(renderLink)}</div>

        <button
          className="floating-nav__toggle type-button"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="floating-nav-panel"
          ref={toggleRef}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>{isOpen ? "CLOSE" : "MENU"}</span>
          <span className={`floating-nav__toggle-icon${isOpen ? " is-open" : ""}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="floating-nav__mobile-panel"
            id="floating-nav-panel"
            role="group"
            aria-label="Page sections"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navigationItems.map(renderLink)}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
