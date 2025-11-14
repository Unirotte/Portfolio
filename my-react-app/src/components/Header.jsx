import {Link, useLocation} from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <header className="logo-header">
      <section className="navbar">
        <h1>Judith.P</h1>
        <ul>
          <li>
            <Link to="/IceBergPage" className={`iceBerg ${location.pathname === "/IceBergPage" ? "li active" : "li"}`}>
              Underneath
            </Link>
          </li>
          <li>
            <Link to="/#contact" className={`NavContact ${location.hash === "#contact" ? "li active" : "li"}`}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "li active" : "li"}
              onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
            >
              Accueil
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
}
