import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faEarthEurope,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();
    const newErrors = {};

    if (!name) {
      newErrors.name = "Le nom est obligatoire.";
    }

    if (!email) {
      newErrors.email = "L'email est obligatoire.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Adresse email invalide.";
      }
    }

    if (!message) {
      newErrors.message = "Veuillez écrire un message.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({});

    // envoi à Web3Forms via fetch
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setIsModalOpen(true);
      form.reset();
    } else {
      alert("❌ Une erreur est survenue, veuillez réessayer.");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="section-contact fade-in" id="contact">
        <h2 className="Contact-title">Contact</h2>

        <section className="form-section">
          <form onSubmit={handleSubmit} id="form">
            {/* --- CHAMPS CACHÉS WEB3FORMS --- */}
            <input
              type="hidden"
              name="access_key"
              value="aba7f502-8930-4b47-8f86-dbfbc2c2c6bd"
            />
            <input
              type="hidden"
              name="subject"
              value="Nouveau message depuis le portfolio de Judith"
            />
            <input
              type="hidden"
              name="from_name"
              value="Portfolio Judith Pichenot"
            />

            <div className="form-style">
              <h3 className="Contact-subtitle">
                Une question ? Un renseignement ? N'hésitez pas à me contacter.
              </h3>
              <div className="form-item">
                <input
                  aria-label="Nom"
                  placeholder="Nom"
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${errors.name ? "error-input" : ""}`}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              <div className="form-item">
                <input
                  aria-label="Email"
                  placeholder="Email"
                  type="email"
                  id="mail"
                  name="email"
                  className={`form-control ${
                    errors.email ? "error-input" : ""
                  }`}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <div className="form-item">
                <textarea
                  aria-label="Message"
                  placeholder="Message"
                  id="msg"
                  name="message"
                  className={`form-control ${
                    errors.message ? "error-input" : ""
                  }`}
                ></textarea>
              </div>{" "}
              {errors.message && <p className="error-text">{errors.message}</p>}
              <button className="btn-send" id="submit" type="submit">
                <div className="all-btn">
                  <FontAwesomeIcon icon={faPaperPlane} className="PaperPlane" />
                  <span className="send">
                    {isSubmitting ? "Envoi..." : "SEND"}
                  </span>
                </div>
              </button>
            </div>
          </form>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            className="success-modal"
            overlayClassName="modal-overlay"
          >
            <h2 className="title-envoie">✅ Message envoyé avec succès !</h2>
            <p className="message-envoie">
              Merci pour votre message, je vous répondrai rapidement.
            </p>
            <button
              className="bouton-envoie"
              onClick={() => setIsModalOpen(false)}
            >
              Fermer
            </button>
          </Modal>

          <div className="Icones">
            <a
              href="https://www.linkedin.com/in/judith-pichenot-7b1108167/"
              className="LinkedinButton"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Judith Pichenot"
            >
              <img
                className="icon-img LinkedinImg"
                src="/img/Linkedin.webp"
                alt="LinkedIn Logo"
                loading="lazy"
              />
              En savoir plus sur mes experiences professionnelles
            </a>
            <a
              href="/CV-Judith-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="CVbutton "
            >
              <FontAwesomeIcon icon={faAddressCard} className="icon-svg CvImg" /> Mon
              curriculum vitae
            </a>
            <a
              className="Email"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:PichenotJudith@live.fr"
              aria-label="Envoyer un email à Judith Pichenot"
            >
              <img
                className="icon-img EmailImg"
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
              <FontAwesomeIcon icon={faEarthEurope} className="icon-svg EarthImg" />
              France, côte d'or
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
