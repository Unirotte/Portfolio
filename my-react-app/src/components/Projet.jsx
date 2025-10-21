import {Link} from "react-router-dom";

export default function Gallery({src, title, React, skill, className = ""}) {
  return (
    <>
      <div className="card fade-in">
        <img className="imgCards" src={src} alt={title} loading="lazy"></img>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
           <ul className={`skills-list ${className || ""}`}>
          {skill.map((item, index) => (
            <li className={`skill-item ${className || ""}`} key={index}>
              {item}
            </li>
          ))}
        </ul>
          <Link to={React} target="_blank" >
            <img
              className="btn btn-primary"
              src="/img/projet/React.png"
              alt="logo React"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
