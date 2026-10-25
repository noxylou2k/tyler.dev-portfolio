import { portfolio } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import SocialIcon from "./SocialIcon";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const details = form.get("details");

    const subject = `Project inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nProject details:\n${details}`;
    window.location.href = `mailto:${portfolio.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading label="get in touch" title="Contact" script="let's talk" />

        <div className="contact reveal">
          <div className="contact__info">
            <p className="contact__text">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <a href={`mailto:${portfolio.email}`} className="contact__email">
              {portfolio.email}
              <span aria-hidden="true">↗</span>
            </a>

            <ul className="contact__socials">
              {portfolio.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <SocialIcon name={social.label} />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="field">
              <span className="spaced">name</span>
              <input type="text" name="name" required autoComplete="name" />
            </label>

            <label className="field">
              <span className="spaced">email</span>
              <input type="email" name="email" required autoComplete="email" />
            </label>

            <label className="field">
              <span className="spaced">project details</span>
              <textarea name="details" rows="5" required />
            </label>

            <button type="submit" className="contact__submit">
              Send message <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
