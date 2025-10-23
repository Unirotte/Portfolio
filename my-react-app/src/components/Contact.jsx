import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faEarthEurope} from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  return (
    <>
      <div className="section-contact fade-in" id="contact">
        <h2 className="Contact-title">Contact</h2>

        <section className="form-section">
          <form
            action="/ma-page-de-traitement"
            name="contact"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact"/>
            
            <div className="form-style">
              <h3 className="Contact-subtitle">
                Une question ? Un renseignement ? N'hésitez pas à me contacter.
              </h3>
              
              <div className="form-item">
                <input
                  placeholder="name"
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-item">
                <input
                  placeholder="email"
                  type="email"
                  id="mail"
                  name="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-item">
                <textarea
                  placeholder="message"
                  id="msg"
                  name="message"
                  className="form-control"
                  required
                ></textarea>
              </div>
              <button
                className="btn-send"
                id="submit"
                type="submit"
                value="send"
              >
                <div className="all-btn">
                  <FontAwesomeIcon icon={faPaperPlane} className="PaperPlane" />
                  <span className="send">SEND</span>
                </div>
              </button>
            </div>
          </form>
          <div className="Icones">
            <a
              href="https://www.linkedin.com/in/judith-pichenot-7b1108167/"
              className="LinkedinButton"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Judith Pichenot"
            >
              <img
                className="LinkedinLogo"
                src="/img/Linkedin.webp"
                alt="LinkedIn Logo"
                loading="lazy"
              />{" "}
              En savoir plus sur mes experiences professionnelles
            </a>
            <a
              className="Email"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:PichenotJudith@live.fr"
              aria-label="Envoyer un email à Judith Pichenot"
            >
              <img
                className="EmailButton"
                src="/img/Email.png"
                alt="Email"
                loading="lazy"
              />
              PichenotJudith@live.fr
            </a>
            <a
              className="EarthLogo"
              href="https://www.google.com/maps/place/France,+C%C3%B4te+d'Or"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEarthEurope} className="Earth" /> France,
              côte d'or
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
