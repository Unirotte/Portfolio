import {Link, useLocation} from "react-router-dom";
import {faAngleUp, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

export default function Header() {
  const location = useLocation();
  const [openSkillsMenu, setOpenSkillsMenu] = useState(false);
  const isSkillsPage =
    location.pathname === "/PageSkillsIntegrateur" ||
    location.pathname === "/PageSkillsCreatif";

  return (
    <header className="logo-header">
      <section className="navbar">
        <h1>Judith.P</h1>
        <ul>
          <li className="dropdown-container">
            <button
              className={`dropdown-btn ${openSkillsMenu ? "open" : ""} ${
                isSkillsPage ? "active" : ""
              }`}
              onClick={() => setOpenSkillsMenu((prev) => !prev)}
            >
              Menu
              <FontAwesomeIcon icon={faAngleUp} className="dropdown" />
            </button>

            <ul className={`dropdown-menu ${openSkillsMenu ? "open" : ""}`}>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "li active" : "li"}
                  onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                >
                  Accueil
                </Link>
              </li>
<ul className="Skills">Skills
              <li>
                <Link to="/PageSkillsIntegrateur"><FontAwesomeIcon icon={faArrowRight} className="arrow-right" />Intégrateur Web</Link>
              </li>
              <li>
                <Link to="/PageSkillsCreatif"><FontAwesomeIcon icon={faArrowRight} className="arrow-right" />Créatif</Link>
              </li>
</ul>
              <li>
                <Link
                  to="/#contact"
                  lassName={`NavContact ${
                    location.hash === "#contact" ? "li active" : "li"
                  }`}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/IceBergPage"
                  className={`iceBerg ${
                    location.pathname === "/IceBergPage" ? "li active" : "li"
                  }`}
                >
                  Underneath
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </header>
  );
}
