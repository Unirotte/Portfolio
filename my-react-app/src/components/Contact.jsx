import "../assets/Contact/Contact.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faEarthEurope} from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  return (
    <>
      <div className="section-contact fade-in" id="contact">
        <h2 className="Contact-title">Contact</h2>
       
        <section className="form-section">
          <form action="/ma-page-de-traitement" method="post">
            <ul className="form-style"> <h3 className="Contact-subtitle">
          Une question ? Un renseignement ? N'hésitez pas à me contacter.
        </h3>

              <li className="form-item">
                <input
                  placeholder="Nom"
                  type="text"
                  id="name"
                  name="user_name"
                  className="form-control"
                />
              </li>
              <li className="form-item">
                <input
                  placeholder="Email"
                  type="email"
                  id="mail"
                  name="user_mail"
                  className="form-control"
                />
              </li>
              <li className="form-item">
                <textarea
                  placeholder="Message"
                  id="msg"
                  name="user_message"
                  className="form-control"
                ></textarea>
              </li>
              <button
                className="btn-send"
                id="submit"
                type="submit"
                value="send"
              > <div className="all-btn">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="PaperPlane"
                />
                <span className="send">SEND</span></div>
              </button>
            </ul>
          </form>
          <div className="Icones">
            <a
              href="https://www.linkedin.com/in/judith-pichenot-7b1108167/"
              className="LinkedinButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="LinkedinLogo"
                src="/img/Linkedin.webp"
                alt="LinkedIn Logo"
              /> En savoir plus sur mes experiences professionnelles
            </a>
            <a
              className="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="EmailButton" src="/img/Email.png" alt="Email" />
              PichenotJudith@live.fr
            </a>
            <a className="EarthLogo">
              <FontAwesomeIcon icon={faEarthEurope} className="Earth" /> France, côte d'or
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
