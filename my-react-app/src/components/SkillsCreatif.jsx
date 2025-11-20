import dataCreatif from "../assets/data/gallery-draw.json";
import {useState} from "react";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function SkillsCreatif({className = ""}) { 
const SkillsManuels = dataCreatif.find((item) => item.type === "SkillsManuels");
  const Skills = dataCreatif.find((item) => item.type === "Skills");
  const [openIndex] = useState(null);
  const [openManuel, setOpenManuel] = useState(null);
  const [openLogiciel, setOpenopenLogiciel] = useState(null);
  
  return (
   <section className="Skills-professionnel">
    <h2 className="big-title-skills">Skills Créatif</h2>
      {SkillsManuels && (
        <div className={`skills-container ${className}`}>
          <h3 className="skills-title">{SkillsManuels.title}</h3>
          <div className="skills-pro">
            {SkillsManuels.tableau.map((skill, index) => (
              <div key={index} className="skill-card">
                <h4 className="skill-name">{skill.name}</h4>
                <img className="logo-img" src={skill.image}></img>
                <button
                  className={`skill-button ${openManuel === index ? "open" : ""}`}
                  onClick={() => setOpenManuel(openManuel === index ? null : index)}
                >
                  <span
                    className={`arrow-style-skill ${
                      openIndex === index ? "open" : ""
                    }`}
                  >
                    <FontAwesomeIcon icon={faAngleUp} className="arrowSkill" />
                  </span>
                  Plus d'infos
                </button>
                 <div className={`collapsContent ${openManuel === index ? "open" : ""}`}>
                <p className="skill-content">{skill.content}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {Skills && (
        <div className={`skills-container ${className}`}>
          <h3 className="skills-title">{Skills.title}</h3>
          <div className="skills-pro">
            {Skills.tableau.map((skill, index) => (
              <div key={index} className="skill-card">
                <h4 className="skill-name">{skill.name}</h4>
                <img className="logo-img" src={skill.image}></img>
                <button
                  className={`skill-button ${openLogiciel === index ? "open" : ""}`}
                  onClick={() => setOpenopenLogiciel(openLogiciel === index ? null : index)}
                >
                  <span
                    className={`arrow-style-skill ${
                      openIndex === index ? "open" : ""
                    }`}
                  >
                    <FontAwesomeIcon icon={faAngleUp} className="arrowSkill" />
                  </span>
                  Plus d'infos
                </button>
                 <div className={`collapsContent ${openLogiciel === index ? "open" : ""}`}>
                <p className="skill-content">{skill.content}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </section>
  );
}