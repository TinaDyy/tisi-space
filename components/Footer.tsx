import { Logo } from "@/components/Logo";
import { capabilities, navigation, site, solutions } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            {site.name} connects mission design, space systems, ground operations,
            remote-sensing data, and operational intelligence for organizations
            that need evidence they can act on.
          </p>
        </div>
        <div>
          <h2>Capabilities</h2>
          {capabilities.map((item) => (
            <a key={item.slug} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
        <div>
          <h2>Solutions</h2>
          {solutions.slice(0, 6).map((item) => (
            <a key={item.slug} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
        <div>
          <h2>Company</h2>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          {site.social.linkedin ? (
            <a href={site.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>Starter legal content requires review before launch.</span>
      </div>
    </footer>
  );
}
