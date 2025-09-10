import {Link} from "react-router-dom";
import ImgLinkedin from "../assets/img/Linkedin.webp";
import "../assets/Contact/Contact.css";

export default function Contact() {
  return (
    <div className="section-contact">
      <h2 className="Contact-title">Contact</h2>
      <h3 className="Contact-subtitle">
        Une question ? Un renseignement ? N'hésitez pas a me contactez.
      </h3>
      <div className="button-section">
        <Link
          to="https://www.linkedin.com/in/judith-pichenot-7b1108167/"
          className="Linkedin button"
        >
          {/* <img
            className="LinkedinLogo"
            src={ImgLinkedin}
            target="_blank"
            alt="LinkedIn Logo"
          /> */}
          Linkedin
        </Link>
        <a className="button email" href="mailto:PichenotJudith@live.fr">
          Email
        </a>
        <a className="button call" href="tel:+33668227772">
          Téléphone
        </a>
        <a className="button cv" href="#" download>
          CV
        </a>
      </div>
    </div>
  );
}
