import dataPro from "../assets/data/gallery-projet.json";
import dataDraw from "../assets/data/gallery-draw.json";
import {useState} from "react";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Skills({source, className = ""}) {
  const data = source === "pro" ? dataPro : dataDraw;
  const filteredSkills = data.filter((item) => item.type === "Skills");
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`skills-container fade-in ${className}`}>
      {filteredSkills.length > 0 && (
        <>
          <h2 className="skills-title">{filteredSkills[0].title}</h2>
          <ul className="skills-list">
            {filteredSkills[0].tableau.map((skill, index) => (
              <li key={index} className="skill-item">
                <button
                  className="skill-button"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span
                    className={`arrow-style-skill ${
                      openIndex === index ? "open" : ""
                    }`}
                  >
                    <FontAwesomeIcon icon={faAngleUp} className="arrowSkill" />
                  </span>
                  {skill.name}
                </button>
              </li>
            ))}
          </ul>
          {filteredSkills[0].tableau.map((skill, index) => (
            <div
              className={`collapsContent ${openIndex === index ? "open" : ""}`}
            >
              <div className="collapsText">{skill.content}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
