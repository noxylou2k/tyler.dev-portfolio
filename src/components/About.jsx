import { portfolio } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading label="who i am" title="About" script="me" />

        <div className="about">
          <div className="about__copy reveal">
            <p className="about__statement">{portfolio.about}</p>

            <dl className="about__details">
              <div>
                <dt className="spaced">role</dt>
                <dd>{portfolio.role}</dd>
              </div>
              <div>
                <dt className="spaced">email</dt>
                <dd>
                  <a href={`mailto:${portfolio.email}`}>
                    {portfolio.email.split("@")[0]}@
                    <br />
                    {portfolio.email.split("@")[1]}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="spaced">based in</dt>
                <dd>{portfolio.location}</dd>
              </div>
            </dl>
          </div>

          <figure className="about__photo reveal">
            {portfolio.photo ? (
              <img src={portfolio.photo} alt={portfolio.name} loading="lazy" />
            ) : (
              <span className="about__photo-empty" aria-hidden="true">
                Photo
              </span>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
}
