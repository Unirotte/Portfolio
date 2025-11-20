import dataPro from "../assets/data/gallery-projet.json";
import {useState} from "react";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function SkillsWeb({className = ""}) {
  const outilsSkills = dataPro.find((item) => item.type === "Skills-Outil");
  const frontSkills = dataPro.find((item) => item.type === "Skills-Front");
  const backSkills = dataPro.find((item) => item.type === "Skills-Back");
  const [openIndex] = useState(null);
  const [openFront, setOpenFront] = useState(null);
  const [openOutils, setOpenOutils] = useState(null);
  const [openBack, setOpenBack] = useState(null);

  return (
    <section className="Skills-professionnel">
      <h2 className="big-title-skills">Skills integrateur web</h2>
      {frontSkills && (
        <div className={`skills-container ${className}`}>
          <h3 className="skills-title">{frontSkills.title}</h3>
          <div className="skills-pro">
            {frontSkills.tableau.map((skill, index) => (
              <div key={index} className="skill-card">
                <h4 className="skill-name">{skill.name}</h4>
                <img className="logo-img" src={skill.image}></img>
                <button
                  className={`skill-button ${openFront === index ? "open" : ""}`}
                  onClick={() => setOpenFront(openFront === index ? null : index)}
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
                 <div className={`collapsContent ${openFront === index ? "open" : ""}`}>
                  <p className="collapsText">{skill.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {outilsSkills && (
        <div className={`skills-container ${className}`}>
          <h3 className="skills-title">{outilsSkills.title}</h3>
          <div className="skills-pro">
            {outilsSkills.tableau.map((skill, index) => (
              <div key={index} className="skill-card">
                <h4 className="skill-name">{skill.name}</h4>
                <img className="logo-img" src={skill.image}></img>
                <button
                  className={`skill-button ${openOutils === index ? "open" : ""}`}
                  onClick={() => setOpenOutils(openOutils === index ? null : index)}
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
                  <div className={`collapsContent ${openOutils === index ? "open" : ""}`}>
                  <p className="skill-content">{skill.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {backSkills && (
        <div className={`skills-container ${className}`}>
          <h3 className="skills-title">{backSkills.title}</h3>
          <div className="skills-pro">
            {backSkills.tableau.map((skill, index) => (
              <div key={index} className="skill-card">
                <h4 className="skill-name">{skill.name}</h4>
                <img className="logo-img" src={skill.image}></img>
                <button
                  className={`skill-button ${
                    openBack === index ? "open" : ""
                  }`}
                  onClick={() => setOpenBack(openBack === index ? null : index)}
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
                <div className={`collapsContent ${openBack === index ? "open" : ""}`}>
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
