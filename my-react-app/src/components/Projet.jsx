import {Link} from "react-router-dom";

export default function Projet({src, title, Github, skill, alt, className = ""}) {
  return (
    <>
      <div className="card fade-in">
        <img className="imgCards" src={src} alt={alt} loading="lazy"></img>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
           <ul className={`skills-list ${className || ""}`}>
          {skill.map((item, index) => (
            <li className={`skill-item ${className || ""}`} key={index}>
              {item}
            </li>
          ))}
        </ul>
          <Link to={Github} target="_blank" >
            <img
              className="btn btn-primary"
              src="/img/projet/github.webp"
              alt="logo GitHub"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
