import "../assets/Me/me.css";

export default function Me({className = "", src, title, text}) {
  return (
    <div className="tes">
      <div className={`Presentation ${className || ""}`}>
        <div className={`me-container ${className || ""}`}></div>
        <div className="position-img">
          <img className="pictureprofile" src={src} alt="Une photo de Judith" />
        </div>
        <div className="presentation">
          <h2 className="introduction-ombre">{title}</h2>
          <h3 className="introduction">{title}</h3>
        </div>
      </div>
      <div className="Presentation-back">
        <h2 className="Salutation">Bonjour!</h2>
        <h3 className="Name">Je suis Judith,</h3>
        <p className="PresentationText">{text}</p>
      </div>
    </div>
  );
}
