import {Link} from "react-router-dom";
import "../assets/Projet/Projet.scss";
import "../assets/Skills/Skills.scss";

export default function Gallery({src, title, alt, React, skill, className = ""}) {
  return (
    <>
      <div className="card fade-in">
        <img className="imgCards" src={src} alt={title}></img>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
           <ul className={`skills-list ${className || ""}`}>
          {skill.map((item, index) => (
            <li className={`skill-item ${className || ""}`} key={index}>
              {item}
            </li>
          ))}
        </ul>
          <Link to={React}>
            <img
              className="btn btn-primary"
              src="/img/projet/React.png"
              alt="logo React"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
