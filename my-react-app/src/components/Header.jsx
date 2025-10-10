import React from "react";
import {Link, useLocation} from "react-router-dom";
import ImgLinkedin from "/public/img/linkedin.webp";

export default function Header() {
  const location = useLocation();
  return (
    <header className="logo-header">
      <section className="navbar">
        <h1>Portefolio</h1>
        <ul>
          <li>
            <Link to="/IceBergPage" className="iceBerg">
              Other face
            </Link>
          </li>
          <li>
            <Link to="/#contact" className="NavContact">
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
