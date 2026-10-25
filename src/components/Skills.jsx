import { portfolio } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

const groups = [
  { title: "Tech Stack", items: portfolio.skills.techStack },
  { title: "Tools", items: portfolio.skills.tools },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading label="what i use" title="Skills" script="toolkit" />

        {groups.map((group, index) => (
          <div key={group.title} className="row reveal">
            <div className="row__head">
              <span className="row__index">0{index + 1}</span>
              <h3 className="row__title">{group.title}</h3>
            </div>

            <ul className="skills__grid">
              {group.items.map((skill) => (
                <li key={skill.name} className="skills__item">
                  <img
                    src={ICON_BASE + skill.icon}
                    alt=""
                    width="22"
                    height="22"
                    loading="lazy"
                    className={`skills__icon ${skill.monochrome ? "skills__icon--mono" : ""}`}
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
