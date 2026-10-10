import { siteConfig } from "../config/site";
import { navigationItems } from "../data/navigation";

export function FinalFooter() {
  const profiles = siteConfig.profiles.filter(({ href }) => href.trim());

  return (
    <footer className="site-footer">
      <div className="site-footer__topline">
        <div className="site-footer__identity">
          <p className="type-small-label">A personal practice in making</p>
          <p className="site-footer__note type-body">Made with curiosity, care, and code.</p>
        </div>
        <nav className="site-footer__navigation" aria-label="Footer navigation">
          {navigationItems.map(({ label, target }) => (
            <a className="type-metadata" href={`#${target}`} key={target}>{label}</a>
          ))}
        </nav>
      </div>

      <a className="site-footer__wordmark" href="#home" aria-label="ANSHUL, back to home">ANSHUL</a>

      <div className="site-footer__base">
        <span className="site-footer__copyright type-metadata">&copy; {new Date().getFullYear()} ANSHUL</span>
        {profiles.length > 0 && (
          <nav className="site-footer__profiles" aria-label="Social links">
            {profiles.map(({ label, href }) => (
              <a
                className="type-metadata"
                href={href}
                key={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
        <a className="site-footer__top type-button" href="#home">
          Back to top <span aria-hidden="true">&uarr;</span>
        </a>
      </div>
    </footer>
  );
}
