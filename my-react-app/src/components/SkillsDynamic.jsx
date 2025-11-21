import { useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillsDynamic({ title, data }) {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleOpen = (category, index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <section className="Skills-professionnel">
      <h2 className="title-projet">{title}</h2>

      {data.map((category) => (
        <div key={category.type} className="skills-container">
          <h3 className="skills-title">{category.title}</h3>
          <div className="skills-pro">
            {category.tableau.map((skill, index) => (
              <div key={index} className="skill-card">
                <h4 className="skill-name">{skill.name}</h4>
                <img className="logo-img" src={skill.image} alt={skill.name} />
                <button
                  className={`skill-button ${
                    openIndexes[category.type] === index ? "open" : ""
                  }`}
                  onClick={() => toggleOpen(category.type, index)}
                >
                  <span
                    className={`arrow-style-skill ${
                      openIndexes[category.type] === index ? "open" : ""
                    }`}
                  >
                    <FontAwesomeIcon icon={faAngleUp} className="arrowSkill" />
                  </span>
                  Plus d'infos
                </button>
                <div
                  className={`collapsContent ${
                    openIndexes[category.type] === index ? "open" : ""
                  }`}
                >
                  <p className="skill-content">{skill.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
