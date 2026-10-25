import { useEffect, useState } from "react";
import logo from "../assets/portfolio logo.png";
import { navLinks } from "../data/portfolio";

function readTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="nav">
        <div className="container nav__inner">
          <button type="button" className="nav__logo" onClick={() => scrollTo("home")}>
            <span className="nav__mark" aria-hidden="true">
              <img src={logo} alt="" />
            </span>
            tyler.dev
          </button>

          <div className="nav__actions">
            <button
              type="button"
              className="icon-btn"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M12 2.5v2.2M12 19.3v2.2M4.8 4.8l1.6 1.6M17.6 17.6l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.8 19.2l1.6-1.6M17.6 6.4l1.6-1.6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>

            <button
              type="button"
              className={`menu-btn ${menuOpen ? "menu-btn--open" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav
          id="site-menu"
          aria-label="Primary"
          className={`menu ${menuOpen ? "menu--open" : ""}`}
        >
          <ul className="container">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <button type="button" onClick={() => scrollTo(link.id)} tabIndex={menuOpen ? 0 : -1}>
                  <span className="menu__index">0{index + 1}</span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <p className="spaced hero__kicker">frontend developer</p>
          <h1 className="hero__title">Tyler</h1>

          <div className="hero__bottom">
            <p className="hero__tagline">
              Designs that inspire.
              <br />
              Ideas that connect.
            </p>

            <div className="hero__meta">
              <p className="hero__status">
                <span className="hero__dot" aria-hidden="true" />
                Available for freelance projects
              </p>
              <button type="button" className="text-link" onClick={() => scrollTo("projects")}>
                View my work <span aria-hidden="true">↓</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
