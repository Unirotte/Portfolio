import dataPro from "../assets/data/gallery-projet.json";
import dataDraw from "../assets/data/gallery-draw.json";

export default function Skills({ source, className= "" }) {
  const data = source === "pro" ? dataPro : dataDraw;

  const filteredSkills = data.filter((item) => item.type === "Skills");

  return (
    <div className={`skills-container fade-in ${className || ""}`}>
      {filteredSkills.length > 0 && (
        <>
          <h2 className="skills-title">{filteredSkills[0].title}</h2>
          <ul className="skills-list">
            {filteredSkills[0].tableau.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
