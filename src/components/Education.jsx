import { portfolio } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading label="where i study" title="Education" script="journey" />

        {portfolio.education.map((item, index) => (
          <article key={item.level} className="row education reveal">
            <div className="row__head">
              <span className="row__index">0{index + 1}</span>
              <p className="row__title">{item.level}</p>
            </div>

            <div>
              <h3 className="education__school">{item.school}</h3>
              {item.detail && <p className="education__degree">{item.detail}</p>}
              <p className="education__period">{item.period}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
