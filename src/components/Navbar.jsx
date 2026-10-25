import { useState, useEffect } from "react";
import { portfolio } from "../data/portfolio";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <button
          type="button"
          className="navbar__logo"
          onClick={() => scrollTo("home")}
        >
          {portfolio.logo}
          <span className="navbar__logo-dot">.</span>
        </button>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button type="button" onClick={() => scrollTo(link.id)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button type="button" onClick={() => scrollTo(link.id)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
