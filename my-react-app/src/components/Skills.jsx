import "../assets/Skills/Skills.scss";
import dataPro from "../assets/data/GalleryProjet.json";

export default function Skills({ title }) {
  const filteredSkills = dataPro.filter((item) => item.type === "Skills");

  return (
    <div className="skills-container">
      <h2 className="skills-title">{title}</h2>
      <ul className="skills-list">
        {filteredSkills.length > 0 &&
          filteredSkills[0].tableau.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))
        }
      </ul>
    </div>
  );
}