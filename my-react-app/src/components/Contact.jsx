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
    action="https://api.web3forms.com/submit"
    method="POST"
    id="form"
  >
    {/* --- CHAMPS CACHÉS WEB3FORMS --- */}
    <input type="hidden" name="access_key" value="aba7f502-8930-4b47-8f86-dbfbc2c2c6bd" />
    <input
      type="hidden"
      name="subject"
      value="Nouveau message depuis le portfolio de Judith"
    />
    <input type="hidden" name="from_name" value="Portfolio Judith Pichenot" />

    {/* Redirection facultative après envoi */}
    <input
      type="hidden"
      name="redirect"
      value="https://portfoliojudithp.vercel.app/#contact"
    />

    {/* Protection anti-bot simple */}
    <input type="checkbox" name="botcheck" style={{ display: "none" }} />

    <div className="form-style">
      <h3 className="Contact-subtitle">
        Une question ? Un renseignement ? N'hésitez pas à me contacter.
      </h3>

      <div className="form-item">
        <input
          placeholder="Nom"
          type="text"
          id="name"
          name="name"
          className="form-control"
          required
        />
      </div>
      <div className="form-item">
        <input
          placeholder="Email"
          type="email"
          id="mail"
          name="email"
          className="form-control"
          required
        />
      </div>
      <div className="form-item">
        <textarea
          placeholder="Message"
          id="msg"
          name="message"
          className="form-control"
          required
        ></textarea>
      </div>

      <button className="btn-send" id="submit" type="submit">
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
