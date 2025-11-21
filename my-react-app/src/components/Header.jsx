import {Link, useLocation} from "react-router-dom";
import {faAngleUp, faArrowTurnUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState, useEffect, useRef} from "react";

export default function Header() {
  //Location de la page

  const location = useLocation();
  const [openSkillsMenu, setOpenSkillsMenu] = useState(false);

  const isSkillsPage =
    location.pathname === "/skills/web" ||
    location.pathname === "/skills/creatif";

  const menuRef = useRef(null);

  //Fermeture du menu hors champ + changement de la page

  useEffect(() => {
    setOpenSkillsMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenSkillsMenu(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Fermer si clic en dehors
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenSkillsMenu(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="logo-header">
      <section className="navbar">
        <h1>Judith.P</h1>
        <ul>
          <li className="dropdown-container link" ref={menuRef}>
            <button
              className={`dropdown-btn link${openSkillsMenu ? "open" : ""} ${
                isSkillsPage ? "active" : ""
              }`}
              onClick={() => setOpenSkillsMenu((prev) => !prev)}
            >
              Menu
              <FontAwesomeIcon icon={faAngleUp} className="dropdown" />
            </button>

            <ul className={`dropdown-menu ${openSkillsMenu ? "open" : ""}`}>
              <li className="link">
                <Link
                  to="/"
                  className={location.pathname === "/" ? "li active" : "li"}
                  onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                >
                  Accueil
                </Link>
              </li>
              <li className={`Skills ${isSkillsPage ? "active" : ""}`}>
                  <span>Skills</span>
                <ul className="Skills">
                  <li className="link">
                    <Link
                      to="/skills/web"
                      className={`NavIntegrateur ${
                        location.pathname === "/skills/web" ? "li active" : "li"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={faArrowTurnUp}
                        className="arrow-right"
                      />
                      Intégrateur Web
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      to="/skills/creatif"
                      className={`NavCreatif ${
                        location.pathname === "/skills/creatif"
                          ? "li active"
                          : "li"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={faArrowTurnUp}
                        className="arrow-right"
                      />
                      Créatif
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="link">
                <Link
                  to="/#contact"
                  className={`NavContact ${
                    location.hash === "#contact" ? "li active" : "li"
                  }`}
                >
                  Contact
                </Link>
              </li>

              <li className="link">
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
