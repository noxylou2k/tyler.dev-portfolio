import { navLinks, portfolio } from "../data/portfolio";
import logo from "../assets/portfolio logo.png";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <img src={logo} alt="tyler.dev logo" className="footer__logo" loading="lazy" />

          <nav aria-label="Footer">
            <ul className="footer__nav">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button type="button" onClick={() => scrollTo(link.id)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {year} {portfolio.name}
          </p>

          <ul className="footer__socials">
            {portfolio.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <SocialIcon name={social.label} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
